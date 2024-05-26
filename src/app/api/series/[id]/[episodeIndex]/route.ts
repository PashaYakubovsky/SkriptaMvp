import { openai } from "@/lib/openai";
import Series, { ISeries } from "@/models/Series";
import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const urlSplitted = req.url.split("/");
        const refreshId = urlSplitted.pop();
        const id = urlSplitted.pop();

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        const series = await Series.findById(id);
        let history = series.history.slice();
        // slice all history from the beginning to the refreshId
        const refreshIndex = history.findIndex(item => item.id === refreshId);
        history = history.slice(0, refreshIndex);

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: history,
        });

        history.push({
            ...response.choices[0].message,
            id: Math.random().toString(),
        });

        series.history = history;
        const updatedSeries = await series.save();

        return NextResponse.json(
            { series: updatedSeries, message: "Your Series updated" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
