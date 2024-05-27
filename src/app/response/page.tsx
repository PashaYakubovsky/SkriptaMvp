"use client";
import styles from "./page.module.scss";
import { ISeries } from "@/models/Series";
import axios from "axios";
import { useCallback, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { Text, Button, Card } from "@geist-ui/core";
import { Courier_Prime } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createNewEpisode } from "@/lib/api";
import { HiRefresh } from "react-icons/hi";
import { create } from "zustand";
import dynamic from "next/dynamic";

const ModalRefreshEpisode = dynamic(
    () => import("@/components/pages/response/ModalRefreshEpisode"),
    { ssr: false }
);

const font = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export type aiResponse = { role: string; content: string; id: string; html?: string };

interface ResponsePageConfig {
    history: aiResponse[];
    loading: boolean;
    _history: aiResponse[];
    refreshId: string | null;
    refreshLoading: boolean;
}
const useResponsePage = create<ResponsePageConfig>(() => ({
    history: [],
    loading: false,
    _history: [],
    refreshId: null,
    refreshLoading: false,
}));

const handlePrepareHistory = async (history: aiResponse[]) => {
    const h = history.filter(
        message =>
            message.role !== "user" &&
            message.role !== "system" &&
            message.content !== "You are a film scenario creation AI assistant."
    );

    for (let i = 0; i < h.length; i++) {
        const doc = await richTextFromMarkdown(h[i].content);
        const html = documentToHtmlString(doc);
        h[i].html = html;
    }

    return h;
};

export default function ResponsePage() {
    const router = useRouter();
    const setConfig = useCallback(
        (
            state: Partial<ResponsePageConfig> | ((state: ResponsePageConfig) => ResponsePageConfig)
        ) => {
            if (typeof state === "function") {
                useResponsePage.setState(state);
            } else {
                useResponsePage.setState({
                    ...useResponsePage.getState(),
                    ...state,
                });
            }
        },
        []
    );

    const history = useResponsePage(state => state.history);
    const loading = useResponsePage(state => state.loading);
    const _history = useResponsePage(state => state._history);
    const refreshId = useResponsePage(state => state.refreshId);
    const refreshLoading = useResponsePage(state => state.refreshLoading);

    const params = useSearchParams();
    const seriesId = useMemo(() => params?.get("seriesId") ?? "", [params]);

    useEffect(() => {
        const init = async () => {
            if (loading) return;

            setConfig({ loading: true });

            try {
                const seriesId = params ? params.get("seriesId") ?? "new" : "new";
                const userId = localStorage.getItem("userId");
                const response = await axios.get(`/api/series/${seriesId}?userId=${userId}`);
                const responseJson = response.data;
                let history = responseJson.data.history as aiResponse[];
                if (responseJson.new) {
                    // replace query param
                    router.replace(`/response?seriesId=${responseJson.data.id}`);
                    const res = await createNewEpisode({
                        history,
                        seriesId: responseJson.data.id,
                        message: {
                            role: "system",
                            content: "Create synopsis for whole series with specific details.",
                            id: Math.random().toString(),
                        },
                    });

                    history = res.series.history;
                }

                let _history = history;

                const h = await handlePrepareHistory(history);
                setConfig({ history: h, _history, loading: false });
            } catch (err) {
                setConfig({
                    loading: false,
                });
                console.error(err);
                toast.error("Failed to fetch data");
            }
        };

        init();
    }, []);

    const handleCreateNewEpisode = useCallback(async () => {
        setConfig({
            loading: true,
        });
        try {
            const response = (await createNewEpisode({
                history: _history,
                seriesId: seriesId,
            })) as {
                series: ISeries & { history: aiResponse[]; id: string };
            };

            const h = await handlePrepareHistory(history);
            setConfig({ history: h, _history: response.series.history, loading: false });
            toast.success("New episode created");
        } catch (error) {
            console.error(error);
            setConfig({ loading: false });
        }
    }, [_history, seriesId]);

    const handleAfterRefresh = useCallback(async () => {
        setConfig({
            refreshLoading: false,
        });

        const userId = localStorage.getItem("userId");
        const response = await axios.get(`/api/series/${seriesId}?userId=${userId}`);
        const responseJson = response.data;
        let history = responseJson.data.history as aiResponse[];

        const h = await handlePrepareHistory(history);
        setConfig(state => ({
            ...state,
            history: h,
            _history: history,
            loading: false,
            refreshId: null,
            refreshLoading: false,
        }));
    }, [seriesId]);

    return (
        <div>
            <main className="flex min-h-screen flex-col items-start flex-start mb-[2rem] gap-5">
                <header
                    id="header"
                    className="h-[90px] bg-[#000] text-lg pt-[3rem] w-full text-center text-white relative">
                    <Text h2 className="relative z-10 px-4">
                        Here you go...
                    </Text>
                </header>

                <div className="flex flex-col gap-5 px-4 xl:max-w-[1200px] m-auto h-full">
                    {history.map(async (item, index) => {
                        return (
                            <Card key={item?.id ?? index} className={`p-4 relative z-10 my-2`}>
                                <h3 className="font-bold">
                                    {index === 0 ? "Synopsys" : `Episode ${index}`}
                                </h3>

                                <p
                                    className={`text-lg ${font.className} ${styles.episode}`}
                                    dangerouslySetInnerHTML={{ __html: item?.html ?? "" }}></p>

                                <HiRefresh
                                    className={`w-4 h-4 ${
                                        refreshLoading && refreshId === item?.id
                                            ? "animate-spin"
                                            : ""
                                    } absolute right-4 top-4 cursor-pointer`}
                                    onClick={() => {
                                        setConfig(state => ({
                                            ...state,
                                            refreshId: item?.id,
                                            refreshLoading: true,
                                        }));
                                    }}
                                    title={
                                        index === 0
                                            ? "Refresh synopsys"
                                            : "Refresh episode " + index
                                    }
                                />
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

            <ModalRefreshEpisode
                close={() => setConfig({ refreshId: null })}
                refreshId={refreshId ?? ""}
                open={refreshId !== null}
                scriptId={seriesId}
                onUpdate={handleAfterRefresh}
            />
        </div>
    );
}
