"use server";
import { openai } from "@/lib/openai";
import { parseFilmScript } from "@/utils/parseFilmScript";

export async function createFilmScript(body: Record<string, any>) {
    const response = await fetch("http://localhost:3000/api/filmScript", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return response.json();
}

export const getAiResponse = async (seriesId: string) => {
    let prompt = "";
    try {
        const sResponse = await fetch(`http://localhost:3000/api/series/${seriesId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const sJson = await sResponse.json();
        const series = sJson.data;
        if (!series || series.length === 0) {
            const fResponse = await fetch("http://localhost:3000/api/filmScript", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await fResponse.json();
            const filmScript = json.data[0];

            prompt = parseFilmScript({ filmScript });

            if (!filmScript) throw new Error("No film script found.");

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a film scenario creation AI assistant.",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });

            const newSeries = await fetch("http://localhost:3000/api/series", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: "xwxoyk",
                    filmScriptId: filmScript.id,
                    history: JSON.stringify([
                        {
                            role: "system",
                            content: "You are a film scenario creation AI assistant.",
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                        {
                            role: "system",
                            content: response.choices[0].message.content,
                        },
                    ]),
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
