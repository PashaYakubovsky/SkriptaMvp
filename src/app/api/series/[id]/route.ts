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

        const series = await Series.findById(id);
        const history = series.history.slice() as ChatCompletionMessageParam[];
        const isFirstMessage = history.every(message => message.role === "system");

        if (isFirstMessage) {
            history.push({
                role: "user",
                content:
                    "Please write episode 1 while understanding that the series should feature one overarching story will mini-arcs throughout. Each episode should end on a minor or major cliffhanger to keep viewers coming back.",
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4",
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

export async function PUT(req: NextRequest) {
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

        const series = await Series.findByIdAndUpdate(id, body, { new: true });

        return NextResponse.json(
            { series, message: "Your Series updated" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

const getAiResponse = async (seriesId: string, userId: string) => {
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
            const filmScript = await FilmScript.findOne({ userId });

            prompt = parseFilmScript({ filmScript });

            if (!filmScript) throw new Error("No film script found.");

            const initialMessages: ChatCompletionMessageParam[] = [
                {
                    role: "system",
                    content: "You are a film script creation AI assistant.",
                },
                {
                    role: "system",
                    content: `
                        Output Format:
                        1. Opening Scene (15% of episode time given by user write actual time in minutes)
                        2. Middle Scenes (50% of episode time given by user write actual time in minutes)
                        3. Climax (15% of episode time given by user write actual time in minutes)
                        4. Ending (15% of episode time given by user write actual time in minutes)
                        Always return new episode synopsis on each request without additional questioning the user.
                        Return rich text field type response.
                    `,
                },
                {
                    role: "user",
                    content: prompt,
                },
                {
                    role: "user",
                    content:
                        "Write episode 1 while understanding that the series should feature one overarching story with mini-arcs throughout. Each episode should end on a minor or major cliffhanger to keep viewers coming back.",
                },
            ];

            const newSeries = await Series.create({
                userId,
                filmScriptId: filmScript.id,
                history: initialMessages,
            });

            return {
                success: true,
                new: true,
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
    let seriesId = req.url.split("/").pop() ?? "";
    seriesId = seriesId.split("?")[0];
    const queryParams = new URLSearchParams(req.url.split("?")[1]);
    const userId = queryParams.get("userId");

    if (!userId) return NextResponse.json({ error: "userId is required" });

    try {
        await connectMongo();
        const aiResponse = await getAiResponse(seriesId, userId);
        const series = aiResponse.data;

        return NextResponse.json({ data: series, new: aiResponse.new });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
