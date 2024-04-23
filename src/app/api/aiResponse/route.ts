import { openai } from "@/lib/openai";
import { parseFilmScript } from "@/utils/parseFilmScript";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const getAiResponse = async (seriesId: string) => {
    let prompt = "";
    try {
        const sResponse = await fetch(`api/series/${seriesId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const sJson = await sResponse.json();
        const series = sJson.data;
        if (!series || series.length === 0) {
            const fResponse = await fetch("api/filmScript", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await fResponse.json();
            const filmScript = json.data[0];

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

            const newSeries = await fetch("api/series", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: "xwxoyk",
                    filmScriptId: filmScript.id,
                    history: JSON.stringify([...initialMessages, response.choices[0].message]),
                }),
            });

            const nJson = await newSeries.json();

            return {
                success: true,
                data: nJson.data,
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
    const userId = "xwxoyk";
    const seriesId = req.url.split("/")[2];

    if (!userId) {
        return NextResponse.json(
            { message: "userId is required" },
            { status: HttpStatusCode.BadRequest }
        );
    }
    try {
        const series = await getAiResponse(seriesId);
        debugger;

        return NextResponse.json({ data: series });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
