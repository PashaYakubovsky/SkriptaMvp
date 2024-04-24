"use client";
import Input from "@/components/common/Input";
import { useQuestionary } from "@/store/useQuestionary";
import { MouseEventHandler, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createFilmScript } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

export default function AIConfig() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const config = useQuestionary();
    const {
        setConfig,
        episodeLength,
        episodes,
        genre,
        budget,
        primaryStoryLocation,
        additionalElements,
        desiredPrimaryFilmingLocation,
        desiredPrimaryFilmingLocations,
        emotionalEvents,
        language,
        mainCharacterEthnicity,
        mainCharacters,
        mainCharactersLength,
        storyReference,
    } = config;

    useEffect(() => {
        const init = async () => {
            const res = await axios.get("/api/filmScript");
            const filmScript = res.data.data[0];
            if (filmScript) setConfig(filmScript);
        };
        init();
    }, []);

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
        <main className="flex min-h-screen flex-col items-center justify-between pb-[2rem]">
            <header className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white">
                Vertical Film Script Generator
            </header>
            <div className="px-4 mt-[0.5rem] flex flex-col w-full gap-4">
                <span className="font-semibold text-sm">
                    Please answer the following questions to the best of your ability
                </span>

                <div className="mt-2 flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        How Many Episodes Should There Be?
                    </label>
                    <Input
                        type="text"
                        placeholder="eg. 100"
                        value={episodes}
                        onChange={e => {
                            setConfig({ episodes: +e.target.value });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        How Long Should Each Episode Be? (in minutes)
                    </label>
                    <Input
                        type="text"
                        placeholder="eg. 3"
                        value={episodeLength}
                        onChange={e => {
                            setConfig({ episodeLength: +e.target.value });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold block">Choose A Genre</label>
                    <div className="flex flex-wrap gap-[0.5rem]">
                        {[
                            "Action",
                            "Adventure",
                            "Comedy",
                            "Drama",
                            "Fantasy",
                            "Horror",
                            "Mystery",
                            "Romance",
                            "Sci-Fi",
                            "Thriller",
                        ].map(_genre => (
                            <Badge
                                key={_genre}
                                text={_genre}
                                active={genre === _genre}
                                onClick={() => {
                                    setConfig({ genre: _genre });
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">What is your budget?</label>

                    <div className="flex flex-wrap gap-[0.5rem]">
                        <Badge
                            text="Micro"
                            active={budget === "micro"}
                            onClick={() => {
                                setConfig({ budget: "micro" });
                            }}
                        />
                        <Badge
                            text="Low"
                            active={budget === "low"}
                            onClick={() => {
                                setConfig({ budget: "low" });
                            }}
                        />
                        <Badge
                            text="Medium"
                            active={budget === "medium"}
                            onClick={() => {
                                setConfig({ budget: "nedium" });
                            }}
                        />
                        <Badge
                            text="Hight"
                            active={budget === "hight"}
                            onClick={() => {
                                setConfig({ budget: "hight" });
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        What Is The Primary Story Location?
                    </label>
                    <Input
                        type="text"
                        placeholder="eg. New York City"
                        value={primaryStoryLocation}
                        onChange={e => {
                            setConfig({ primaryStoryLocation: e.target.value });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Number Of Main Characters (optional)
                    </label>
                    <Input
                        type="text"
                        placeholder="eg. 6"
                        value={mainCharactersLength}
                        onChange={e => {
                            setConfig({ mainCharactersLength: +e.target.value });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Do You Have A Preference For The Main Character(s)' Ethnicity?
                    </label>
                    <div className="flex flex-wrap gap-[0.5rem]">
                        <Badge
                            text="White"
                            active={mainCharacterEthnicity === "white"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "white" });
                            }}
                        />
                        <Badge
                            text="Black"
                            active={mainCharacterEthnicity === "black"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "black" });
                            }}
                        />
                        <Badge
                            text="Asian"
                            active={mainCharacterEthnicity === "asian"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "asian" });
                            }}
                        />
                        <Badge
                            text="Hispanic"
                            active={mainCharacterEthnicity === "hispanic"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "hispanic" });
                            }}
                        />
                        <Badge
                            text="Indigenous"
                            active={mainCharacterEthnicity === "indigenous"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "indigenous" });
                            }}
                        />
                        <Badge
                            text="Unimportant"
                            active={mainCharacterEthnicity === "unimportant"}
                            onClick={() => {
                                setConfig({ mainCharacterEthnicity: "unimportant" });
                            }}
                        />
                    </div>
                </div>

                <MainCharactersCreation />

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Emotional Events Or Behavior By Character (optional)
                    </label>

                    {emotionalEvents.map((emEv, index) => {
                        return (
                            <Input
                                type="text"
                                placeholder={
                                    ["eg. Discovery of creature", "eg. Murder of captain"][
                                        index ? index % 2 : Math.floor(Math.random() * 2)
                                    ]
                                }
                                value={emEv}
                                onChange={e => {
                                    const emotionalEvent = e.target.value;
                                    emotionalEvents[index] = emotionalEvent;
                                    setConfig({ emotionalEvents });
                                }}
                            />
                        );
                    })}

                    <button
                        className="rounded-xl bg-slate-400 w-fit"
                        onClick={() => {
                            setConfig({ emotionalEvents: [...emotionalEvents, ""] });
                        }}>
                        <AiOutlinePlus className="text-white w-[1.5rem] h-[1.5rem]" />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Please Choose Some Desired Primary Filming Locations
                    </label>
                    <span>Separate locations with 'and'</span>
                    <Input
                        value={desiredPrimaryFilmingLocations}
                        onChange={e => {
                            setConfig({ desiredPrimaryFilmingLocations: e.target.value });
                        }}
                        type="text"
                        placeholder="eg. coffee shop and hotel and beach and office building"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Emotional Add A Story Reference From A Film Or Novel (optional){" "}
                    </label>
                    <Input
                        value={storyReference}
                        onChange={e => {
                            setConfig({ storyReference: e.target.value });
                        }}
                        type="text"
                        placeholder="eg. Pride and Prejudice, Star Trek TNG, Blazing Saddles"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">Language</label>
                    <div>
                        <Badge
                            text="English"
                            active={language === "english"}
                            onClick={() => {
                                setConfig({ language: "english" });
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">
                        Additional Elements That Should Be Included? (optional)
                    </label>
                    <span>Separate locations with a comma ','</span>
                    <Input
                        value={additionalElements}
                        onChange={e => {
                            setConfig({ additionalElements: e.target.value });
                        }}
                        type="text"
                        placeholder="eg. mental instability, murder, expensive clothes, sparse product placement for 'Dior'"
                    />
                </div>

                <button
                    onClick={async () => {
                        const userId = "xwxoyk";
                        if (!userId) {
                            toast.error("userId not found");
                            return;
                        }
                        setLoading(true);
                        try {
                            await createFilmScript({
                                episodeLength,
                                episodes,
                                genre,
                                budget,
                                primaryStoryLocation,
                                additionalElements,
                                desiredPrimaryFilmingLocation,
                                desiredPrimaryFilmingLocations,
                                emotionalEvents,
                                language,
                                mainCharacterEthnicity,
                                mainCharacters,
                                mainCharactersLength,
                                storyReference,
                                userId,
                            });

                            router.push("/response");
                            setLoading(false);
                        } catch (err) {
                            toast.error((err as Error)?.message);
                            setLoading(false);
                        }
                    }}
                    className="
                    w-fit px-2 bg-[#4B39EF] h-[44px] rounded-lg 
                    text-white flex justify-center items-center 
                    hover:bg-[#4B39EF] hover:scale-105
                    active:scale-95 transition-all duration-300 ease-in-out">
                    Generate Skripta
                </button>
            </div>
        </main>
    );
}

const Badge = ({
    text,
    active,
    onClick,
}: {
    text: string;
    active: boolean;

    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg p-2 ${
                active ? "bg-[#4B39EF] text-white" : "bg-[#f6f6f6] text-black"
            }`}>
            {text}
        </button>
    );
};

const MainCharactersCreation = () => {
    const mainCharacters = useQuestionary(state => state.mainCharacters);
    const setConfig = useQuestionary(state => state.setConfig);

    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">
                Please Add Main Characters By Type And Age (optional)
            </label>
            <span>Separate characters with a comma ',' and add their age after a space</span>

            <div className="flex flex-col gap-[0.25rem]">
                {mainCharacters.map((character, index) => {
                    return (
                        <Input
                            key={index}
                            type="text"
                            placeholder={
                                [
                                    "eg. Scientist, 50",
                                    "eg. Student, 20",
                                    "eg. Police Officer, 35",
                                    "eg. Teacher, 42",
                                    "eg. Creature, unknown age",
                                ][index ? index % 5 : Math.floor(Math.random() * 5)]
                            }
                            value={character}
                            onChange={e => {
                                const newMainCharacters = [...mainCharacters];
                                newMainCharacters[index] = e.target.value;
                                setConfig({ mainCharacters: newMainCharacters });
                            }}
                        />
                    );
                })}

                <button
                    className="rounded-xl bg-slate-400 w-fit"
                    onClick={() => {
                        setConfig({ mainCharacters: [...mainCharacters, ""] });
                    }}>
                    <AiOutlinePlus className="text-white w-[1.5rem] h-[1.5rem]" />
                </button>
            </div>
        </div>
    );
};
