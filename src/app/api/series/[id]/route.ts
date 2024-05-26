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

        const history = body.history.slice() as (ChatCompletionMessageParam & { id: string })[];

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: history,
        });

        for (const message of history) {
            // if message don't have id then add id
            if (!message.id) {
                message.id = Math.random().toString();
            }
        }

        history.push({
            ...response.choices[0].message,
            id: Math.random().toString(),
        });

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

        const series = await Series.findByIdAndDelete(id);

        return NextResponse.json(
            { message: "Your Series deleted", series },
            { status: HttpStatusCode.Ok }
        );
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

            const initialMessages: (ChatCompletionMessageParam & { id: string })[] = [
                {
                    role: "system",
                    content: `
                        You are a film script creation AI assistant. 
                        Write episodes while understanding that the series should feature one overarching story will mini-arcs throughout. 
                        Each episode should end on a minor or major cliffhanger to keep viewers coming back.
                        
                        Output Format:
                        1. Opening Scene (15% of episode time given by user write actual time in minutes)
                        2. Middle Scenes (50% of episode time given by user write actual time in minutes)
                        3. Climax (15% of episode time given by user write actual time in minutes)
                        4. Ending (15% of episode time given by user write actual time in minutes)

                        On first request always return synopsis of the series;
                       
                        Always return new episode scenario on each request without additional questioning the user.
                        Return rich text field type response.
                        `,
                    id: Math.random().toString(),
                },
                {
                    role: "user",
                    content: prompt,
                    id: Math.random().toString(),
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
