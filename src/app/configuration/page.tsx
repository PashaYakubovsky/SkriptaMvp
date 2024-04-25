"use client";
// import Input from "@/components/common/Input";
import { useQuestionary } from "@/store/useQuestionary";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createFilmScript } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import { Input, Text, Page, Tag, Button, Textarea, Loading } from "@geist-ui/core";
import { MainCharactersCreation } from "../../components/common/MainCharactersCreation";

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

    // if (loading)
    //     return (
    //         <div className="flex items-center justify-center h-[100vh] w-full">
    //             <RotatingLines
    //                 visible={true}
    //                 width="196"
    //                 strokeWidth="5"
    //                 animationDuration="0.75"
    //                 ariaLabel="rotating-lines-loading"
    //             />
    //         </div>
    //     );

    return (
        <>
            <Text h2 className="!w-full border-b-2 border-black text-center">
                Vertical Film Script Generator
            </Text>
            <Text className="font-semibold text-sm text-center">
                Please answer the following questions to the best of your ability
            </Text>
            <div className="flex min-h-screen flex-col items-center justify-between pb-[2rem] px-4 w-fit m-auto">
                <div className="px-4 mt-[0.5rem] flex flex-col w-full gap-4">
                    <div className="mt-2 flex flex-col gap-2">
                        <Text h4 className="font-semibold">
                            How Many Episodes Should There Be?
                        </Text>
                        <Input
                            clearable
                            type="secondary"
                            htmlType="text"
                            placeholder="eg. 100"
                            value={episodes + ""}
                            onChange={e => {
                                setConfig({ episodes: +e.target.value });
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="font-semibold">
                            How Long Should Each Episode Be? (in minutes)
                        </Text>
                        <Input
                            clearable
                            type="secondary"
                            placeholder="eg. 3"
                            value={episodeLength + ""}
                            onChange={e => {
                                setConfig({ episodeLength: +e.target.value });
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold block">
                            Choose A Genre
                        </Text>
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
                                <Tag
                                    key={_genre}
                                    className="cursor-pointer"
                                    type={genre === _genre ? "success" : "default"}
                                    onClick={() => {
                                        setConfig({ genre: _genre });
                                    }}>{`${_genre}`}</Tag>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            What is your budget?
                        </Text>

                        <div className="flex flex-wrap gap-[0.5rem]">
                            <Tag
                                className="cursor-pointer"
                                type={budget === "micro" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ budget: "micro" });
                                }}>
                                Micro
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={budget === "low" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ budget: "low" });
                                }}>
                                Low
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={budget === "medium" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ budget: "nedium" });
                                }}>
                                Medium
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={budget === "hight" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ budget: "hight" });
                                }}>
                                Hight
                            </Tag>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            What Is The Primary Story Location?
                        </Text>
                        <Input
                            type="secondary"
                            placeholder="eg. New York City"
                            value={primaryStoryLocation}
                            onChange={e => {
                                setConfig({ primaryStoryLocation: e.target.value });
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Number Of Main Characters (optional)
                        </Text>
                        <Input
                            clearable
                            type="secondary"
                            inputMode="numeric"
                            placeholder="eg. 6"
                            value={mainCharactersLength + ""}
                            onChange={e => {
                                setConfig({ mainCharactersLength: +e.target.value });
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Do You Have A Preference For The Main Character(s)' Ethnicity?
                        </Text>
                        <div className="flex flex-wrap gap-[0.5rem]">
                            <Tag
                                className="cursor-pointer"
                                type={mainCharacterEthnicity === "white" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "white" });
                                }}>
                                White
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={mainCharacterEthnicity === "black" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "black" });
                                }}>
                                Black
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={mainCharacterEthnicity === "asian" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "asian" });
                                }}>
                                Asian
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={mainCharacterEthnicity === "hispanic" ? "success" : "default"}
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "hispanic" });
                                }}>
                                Hispanic
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={
                                    mainCharacterEthnicity === "indigenous" ? "success" : "default"
                                }
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "indigenous" });
                                }}>
                                Indigenous
                            </Tag>
                            <Tag
                                className="cursor-pointer"
                                type={
                                    mainCharacterEthnicity === "unimportant" ? "success" : "default"
                                }
                                onClick={() => {
                                    setConfig({ mainCharacterEthnicity: "unimportant" });
                                }}>
                                Unimportant
                            </Tag>
                        </div>
                    </div>

                    <MainCharactersCreation />

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Emotional Events Or Behavior By Character (optional)
                        </Text>

                        {emotionalEvents.map((emEv, index) => {
                            return (
                                <div key={index} className="flex items-center">
                                    <Input
                                        className="!w-[20rem]"
                                        type="secondary"
                                        placeholder={
                                            ["eg. Discovery of creature", "eg. Murder of captain"][
                                                index ? index % 2 : Math.floor(Math.random() * 2)
                                            ]
                                        }
                                        value={emEv + ""}
                                        onChange={e => {
                                            const emotionalEvent = e.target.value;
                                            emotionalEvents[index] = emotionalEvent;
                                            setConfig({ emotionalEvents });
                                        }}
                                    />
                                    <AiOutlinePlus
                                        onClick={() => {
                                            const newEmotionalEvents = emotionalEvents.filter(
                                                (v, _index) => _index !== index
                                            );
                                            setConfig({
                                                emotionalEvents: newEmotionalEvents,
                                            });
                                        }}
                                        className="text-black w-[1.5rem] h-[1.5rem] rotate-45 cursor-pointer"
                                    />
                                </div>
                            );
                        })}

                        <Button
                            type="secondary-light"
                            icon={<AiOutlinePlus />}
                            className="!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0"
                            onClick={() => {
                                setConfig({ emotionalEvents: [...emotionalEvents, ""] });
                            }}></Button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Please Choose Some Desired Primary Filming Locations
                        </Text>
                        <span>Separate locations with 'and'</span>
                        <Textarea
                            resize="both"
                            className="!w-[20rem]"
                            value={desiredPrimaryFilmingLocations}
                            onChange={e => {
                                setConfig({ desiredPrimaryFilmingLocations: e.target.value });
                            }}
                            type="secondary"
                            placeholder="eg. coffee shop and hotel and beach and office building"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Emotional Add A Story Reference From A Film Or Novel (optional){" "}
                        </Text>
                        <Textarea
                            value={storyReference}
                            onChange={e => {
                                setConfig({ storyReference: e.target.value });
                            }}
                            type="secondary"
                            placeholder="eg. Pride and Prejudice, Star Trek TNG, Blazing Saddles"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Language
                        </Text>
                        <Tag
                            className="!w-fit cursor-pointer"
                            type={language === "english" ? "success" : "default"}
                            onClick={() => {
                                setConfig({ language: "english" });
                            }}>
                            English
                        </Tag>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Additional Elements That Should Be Included? (optional)
                        </Text>
                        <Text h5>Separate locations with a comma ','</Text>
                        <Textarea
                            value={additionalElements}
                            onChange={e => {
                                setConfig({ additionalElements: e.target.value });
                            }}
                            type="secondary"
                            placeholder="eg. mental instability, murder, expensive clothes, sparse product placement for 'Dior'"
                        />
                    </div>

                    <Button
                        loading={loading}
                        disabled={loading}
                        type="secondary-light"
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
                        }}>
                        Generate Script
                    </Button>
                </div>
            </div>
        </>
    );
}
