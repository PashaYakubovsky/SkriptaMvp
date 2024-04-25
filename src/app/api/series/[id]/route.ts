import { openai } from "@/lib/openai";
import Series, { ISeries } from "@/models/Series";
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
        debugger;

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        const series = await Series.findById(id);
        const history = series.history.slice();
        const isFirstMessage = history.every(message => message.role === "system");

        if (isFirstMessage) {
            history.push({
                role: "user",
                content:
                    "Please write episode 1 while understanding that the series should feature one overarching story will mini-arcs throughout. Each episode should end on a minor or major cliffhanger to keep viewers coming back.",
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: series.history,
        });

        history.push(response.choices[0].message);

        const updatedSeries = await Series.findByIdAndUpdate(
            id,
            {
                ...body,
                history,
            },
            { new: true }
        );

        return NextResponse.json(
            { series: updatedSeries, message: "Your Series updated" },
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
                    role: "system",
                    content: `
                        Output Format:
                        1. Opening Scene (30 seconds)
                        2. Middle Scenes (1 minute 30 seconds)
                        3. Climax (30 seconds)
                        4. Ending (30 seconds)
                    `,
                },
                {
                    role: "system",
                    content: prompt,
                },
            ];

            const newSeries = await Series.create({
                userId: "xwxoyk",
                filmScriptId: filmScript.id,
                history: initialMessages,
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
