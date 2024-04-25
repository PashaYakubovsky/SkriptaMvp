"use client";
import { ISeries } from "@/models/Series";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Text, Button, Card, Page } from "@geist-ui/core";
import { Courier_Prime } from "next/font/google";

const font = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const createNewEpisode = async ({
    history,
    seriesId,
}: {
    history: { role: string; content: string }[];
    seriesId: string;
}) => {
    history.push({ role: "user", content: "Create new episode" });
    const response = await axios.post(`/api/series/${seriesId}`, { history });
    return response.data;
};

export default async function Generate(props: { params: { seriesId: string } }) {
    const router = useRouter();
    const [{ history, loading }, setConfig] = useState({
        history: [] as { role: string; content: string }[],
        loading: false,
    });
    useEffect(() => {
        const init = async () => {
            if (loading) return;

            setConfig(state => {
                return { ...state, loading: true };
            });

            try {
                const response = await axios.get(`/api/series/${props.params.seriesId}`);
                const responseJson = response.data;

                // replace slug in url with new series id
                router.replace(`/response/${responseJson.data.id}`);

                let history = responseJson.data.history as { role: string; content: string }[];
                if (typeof history === "string") {
                    history = JSON.parse(history);
                }

                const h = history.filter(
                    message =>
                        message.role !== "user" &&
                        message.role !== "system" &&
                        message.content !== "You are a film scenario creation AI assistant."
                );
                setConfig({ history: h, loading: false });
            } catch (err) {
                setConfig(state => {
                    return {
                        ...state,
                        loading: false,
                    };
                });
                console.error(err);
            }
        };
        init();
    }, [props.params.seriesId]);

    const handleCreateNewEpisode = async () => {
        setConfig(state => {
            return { ...state, loading: true };
        });
        try {
            const response = (await createNewEpisode({
                history,
                seriesId: props.params.seriesId,
            })) as {
                series: ISeries & { history: { role: string; content: string }[]; id: string };
            };

            const h = response.series.history.filter(
                message =>
                    message.role !== "user" &&
                    message.role !== "system" &&
                    message.content !== "You are a film scenario creation AI assistant."
            );
            setConfig(state => {
                return { ...state, history: h, loading: false };
            });
        } catch (error) {
            console.error(error);
            setConfig(state => {
                return { ...state, loading: false };
            });
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-start flex-start mb-[2rem] gap-5">
            <header
                id="header"
                className="h-[90px] bg-[#000] text-lg pt-[3rem] w-full  text-white relative">
                <Text h2 className="relative z-10 px-4">
                    Here you go...
                </Text>
            </header>

            <div className="flex flex-col gap-5 px-4 xl:max-w-[1200px] m-auto">
                {history.map((item, index) => {
                    return (
                        <Card key={index} className={`p-4 relative z-10 my-2 ${font.className}`}>
                            <h3 className="font-bold">episode {index + 1}</h3>
                            <p className="text-lg">{item.content}</p>
                        </Card>
                    );
                })}

                <Button
                    loading={loading}
                    onPointerEnterCapture={null}
                    type="secondary"
                    onClick={handleCreateNewEpisode}
                    className="rounded-lg p-2 bg-indigo-600 text-zinc-100 active:scale-125 transition-all hover:bg-indigo-800"
                    placeholder={undefined}
                    onPointerLeaveCapture={undefined}>
                    Generate new episode
                </Button>
            </div>
        </main>
    );
}
