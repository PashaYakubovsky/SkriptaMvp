"use client";
import styles from "./page.module.scss";
import { ISeries } from "@/models/Series";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Text, Button, Card } from "@geist-ui/core";
import { Courier_Prime } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createNewEpisode } from "@/lib/api";

const font = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
});

type aiResponse = { role: string; content: string }[];

export default function ResponsePage() {
    const router = useRouter();
    const [{ history, loading, _history }, setConfig] = useState({
        history: [] as aiResponse,
        loading: false,
        _history: [] as aiResponse,
    });
    const params = useSearchParams();

    useEffect(() => {
        const init = async () => {
            if (loading) return;

            setConfig(state => {
                return { ...state, loading: true };
            });

            try {
                const seriesId = params?.get("seriesId");
                const userId = localStorage.getItem("userId");
                const response = await axios.get(`/api/series/${seriesId}?userId=${userId}`);
                const responseJson = response.data;
                let history = responseJson.data.history as { role: string; content: string }[];

                if (responseJson.new) {
                    // replace query param
                    router.replace(`/response?seriesId=${responseJson.data.id}`);
                    const res = await createNewEpisode({
                        history,
                        seriesId: responseJson.data.id,
                        message: {
                            role: "system",
                            content: "Create synopsis for whole series with specific details.",
                        },
                    });

                    history = res.series.history;
                }

                let _history = history;

                const h = history.filter(
                    message =>
                        message.role !== "user" &&
                        message.role !== "system" &&
                        message.content !== "You are a film scenario creation AI assistant."
                );
                setConfig(state => ({ ...state, history: h, _history, loading: false }));
            } catch (err) {
                setConfig(state => {
                    return {
                        ...state,
                        loading: false,
                    };
                });
                console.error(err);
                toast.error("Failed to fetch data");
            }
        };
        init();
    }, []);

    const handleCreateNewEpisode = async () => {
        setConfig(state => {
            return { ...state, loading: true };
        });
        try {
            const seriesId = params?.get("seriesId") ?? "";
            console.log("create new episode", seriesId);
            const response = (await createNewEpisode({
                history: _history,
                seriesId: seriesId,
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
                return { ...state, history: h, _history: response.series.history, loading: false };
            });
            toast.success("New episode created");
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
                className="h-[90px] bg-[#000] text-lg pt-[3rem] w-full text-center text-white relative">
                <Text h2 className="relative z-10 px-4">
                    Here you go...
                </Text>
            </header>

            <div className="flex flex-col gap-5 px-4 xl:max-w-[1200px] m-auto">
                {history.map(async (item, index) => {
                    const doc = await richTextFromMarkdown(item.content);
                    const html = documentToHtmlString(doc);
                    return (
                        <Card key={index} className={`p-4 relative z-10 my-2`}>
                            {index === 0 ? (
                                <h3 className={`font-bold`}>Synopsys</h3>
                            ) : (
                                <h3 className={`font-bold`}>Episode {index}</h3>
                            )}
                            <p
                                className={`text-lg ${font.className} ${styles.episode}`}
                                dangerouslySetInnerHTML={{
                                    __html: html,
                                }}></p>
                        </Card>
                    );
                })}

                <Button
                    loading={loading}
                    type="secondary"
                    onClick={handleCreateNewEpisode}
                    className="rounded-lg p-2 bg-indigo-600 text-zinc-100 active:scale-125 transition-all hover:bg-indigo-800">
                    Generate new episode
                </Button>
            </div>
        </main>
    );
}
