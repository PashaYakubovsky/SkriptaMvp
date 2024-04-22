// "use client";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";

// import { useState } from "react";
import { openai } from "@/lib/openai";
import { ChatCompletion } from "openai/resources/index.mjs";

const getAiResponse = async () => {
    const prompt = "Generate a film scenario.";
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

    return response;
};

export default async function Generate() {
    const response = await getAiResponse();
    return (
        <main className="flex min-h-screen flex-col items-center flex-start">
            <header className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white">
                Here you go...
            </header>

            <div>
                <p>{response.choices[0].message.content}</p>
            </div>
        </main>
    );
}
