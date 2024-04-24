import { openai } from "@/lib/openai";
import Series from "@/models/Series";
import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";
import { parseFilmScript } from "@/utils/parseFilmScript";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { NextRequest, NextResponse } from "next/server";
import FilmScript from "@/models/FilmScript";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();
        const id = req.url.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: body.history,
        });

        const history = body.history.slice();
        history.push(response.choices[0].message);

        const series = await Series.findByIdAndUpdate(
            id,
            {
                ...body,
                history,
            },
            { new: true }
        );

        return NextResponse.json(
            { series, message: "Your Series updated" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectMongo();
        const id = req.url.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        await Series.findByIdAndDelete(id);

        return NextResponse.json({ message: "Your Series deleted" }, { status: HttpStatusCode.Ok });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

const getAiResponse = async (seriesId: string) => {
    let prompt = "";
    let series = null;
    try {
        try {
            series = await Series.findById(seriesId);
        } catch (error) {}

        if (!series) {
            console.error("Series not found", seriesId);
        }

        if (!series || series.length === 0) {
            const filmScript = await FilmScript.findOne({ userId: "xwxoyk" });

            prompt = parseFilmScript({ filmScript });

            if (!filmScript) throw new Error("No film script found.");

            const initialMessages: ChatCompletionMessageParam[] = [
                {
                    role: "system",
                    content: "You are a film scenario creation AI assistant.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ];

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: initialMessages,
            });

            const newSeries = await Series.create({
                userId: "xwxoyk",
                filmScriptId: filmScript.id,
                history: [...initialMessages, response.choices[0].message],
            });

            return {
                success: true,
                data: newSeries,
            };
        } else {
            return {
                success: true,
                data: series,
            };
        }
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "An error occurred while generating the response.",
        };
    }
};

export async function GET(req: NextRequest) {
    const seriesId = req.url.split("/").pop() as string;

    try {
        await connectMongo();
        const aiResponse = await getAiResponse(seriesId);
        const series = aiResponse.data;

        return NextResponse.json({ data: series });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
