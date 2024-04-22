import { openai } from "@/lib/openai";
import dynamic from "next/dynamic";

const getAiResponse = async () => {
    const prompt = "Generate a film scenario about Caravaggio art in the 21st century.";
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
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
    } catch (error) {
        console.error(error);

        return {
            success: false,
            choices: [
                {
                    message: {
                        content: "An error occurred while generating the response.",
                    },
                },
            ],
        };
    }
};

const CanvasStuff = dynamic(() => import("@/components/common/CanvasStuff"), {
    ssr: false,
});

export default async function Generate() {
    const response = await getAiResponse();

    return (
        <main className="flex min-h-screen flex-col items-center flex-start">
            <header
                id="header"
                className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white relative">
                <span className="relative z-10">Here you go...</span>
                <CanvasStuff />
            </header>

            <div className="p-4 relative z-10">
                <p className="text-lg mix-blend-color-burn">
                    {response.choices[0].message.content}
                </p>
            </div>
        </main>
    );
}
