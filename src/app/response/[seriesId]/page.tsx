"use client";
import { ISeries } from "@/models/Series";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

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
    const [{ history, loading }, setConfig] = useState({
        history: [] as { role: string; content: string }[],
        loading: false,
    });
    useEffect(() => {
        const init = async () => {
            setConfig(state => {
                return { ...state, loading: true };
            });

            try {
                const response = await axios.get(`/api/series/${props.params.seriesId}`);
                const responseJson = await response.data;
                if (!responseJson?.data) {
                    toast.error("No series found. Generating a new series...");
                    return;
                }

                // replace slug in url with new series id
                window.history.replaceState({}, "", `/response/${responseJson.data.id}`);

                let history = responseJson.data.history as { role: string; content: string }[];
                if (typeof history === "string") {
                    history = JSON.parse(history);
                }
                const h = history.filter(
                    message =>
                        message.role !== "user" &&
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

            const h = response.series.history.filter(message => message.role !== "user");
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

    if (loading)
        return (
            <div className="flex items-center justify-center h-[100vh] w-full">
                <RotatingLines
                    visible={true}
                    width="196"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        );

    return (
        <main className="flex min-h-screen flex-col items-center flex-start mb-[2rem] gap-5">
            <header
                id="header"
                className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white relative">
                <span className="relative z-10">Here you go...</span>
            </header>

            {history.map((item, index) => {
                return (
                    <div key={index} className="p-4 relative z-10 my-2">
                        <h3 className="font-bold">episode {index + 1}</h3>
                        <p className="text-lg">{item.content}</p>
                    </div>
                );
            })}

            <button
                onClick={handleCreateNewEpisode}
                className="rounded-lg p-2 bg-indigo-600 text-zinc-100 active:scale-125 transition-all hover:bg-indigo-800">
                Generate new episode
            </button>
        </main>
    );
}
