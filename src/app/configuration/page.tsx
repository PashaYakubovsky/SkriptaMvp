"use client";
import { useQuestionary } from "@/store/useQuestionary";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { createFilmScript } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input, Text, Tag, Button, Textarea } from "@geist-ui/core";
import { MainCharactersCreation } from "../../components/common/MainCharactersCreation";

export default function AIConfig() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const config = useQuestionary();
    const {
        setConfig,
        setError,
        episodeLength,
        subGenre,
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
        errors,
    } = config;

    useEffect(() => {
        const init = async () => {
            const userId = localStorage.getItem("userId");
            try {
                const res = await axios.get("/api/filmScript?userId=" + userId);
                const filmScript = res.data.data[0];
                if (filmScript) setConfig(filmScript);
            } catch (err) {
                toast.error((err as Error)?.message);
            }
        };
        init();
    }, []);

    const isValid = () => {
        let valid = true;
        if (!episodes) {
            setError("Episodes is required", "episodes");
            valid = false;
        }
        if (!episodeLength) {
            setError("Episode length is required", "episodesLength");
            valid = false;
        }
        if (!genre) {
            setError("Genre is required", "genre");
            valid = false;
        }
        if (!subGenre) {
            setError("Sub Genre is required", "subGenre");
            valid = false;
        }
        if (!budget) {
            setError("Budget is required", "budget");
            valid = false;
        }
        if (!primaryStoryLocation) {
            setError("Primary story location is required", "primaryStoryLocation");
            valid = false;
        }
        return valid;
    };

    const handleSubmit = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            toast.error("userId not found");
            return;
        }
        const valid = isValid();
        if (!valid) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }
        setLoading(true);
        try {
            await createFilmScript({
                episodeLength,
                episodes,
                genre,
                subGenre,
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
    };

    return (
        <div className="bg-stone-100">
            <Text h2 className="!w-full border-b-2 border-black text-center">
                Vertical Film Script Generator
            </Text>
            <Text className="font-semibold text-sm text-center max-w-[80vw] m-auto">
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
                            type={errors.episodes ? "error" : "secondary"}
                            htmlType="text"
                            className="max-sm:!w-full"
                            placeholder="eg. 100"
                            value={episodes + ""}
                            onChange={e => {
                                const value = +e.target.value;
                                if (value <= 0 || value >= 100) {
                                    setError("Max episodes is 100", "episodes");
                                } else if (errors.episodes) {
                                    setError("", "episodes");
                                }

                                setConfig({ episodes: value });
                            }}
                            crossOrigin={undefined}
                        />
                        {errors.episodes && (
                            <Text className="!m-0" type="error">
                                {errors.episodes}
                            </Text>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="font-semibold">
                            How Long Should Each Episode Be? (in minutes)
                        </Text>
                        <Input
                            className="max-sm:!w-full"
                            clearable
                            type={errors.episodesLength ? "error" : "secondary"}
                            placeholder="eg. 3"
                            value={episodeLength + ""}
                            onChange={e => {
                                const value = +e.target.value;

                                if (value < 1 || value > 5) {
                                    setError("Max length is 5 minutes", "episodesLength");
                                } else if (errors.episodesLength) {
                                    setError("", "episodesLength");
                                }

                                setConfig({ episodeLength: value });
                            }}
                            crossOrigin={undefined}
                        />
                        {errors.episodesLength && (
                            <Text className="!m-0" type="error">
                                {errors.episodesLength}
                            </Text>
                        )}
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
                                "Historical",
                                "Horror",
                                "Noir",
                                "Romance",
                                "Science Fiction",
                                "Thriller",
                                "Western",
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

                        {errors.genre && (
                            <Text className="!m-0" type="error">
                                {errors.genre}
                            </Text>
                        )}
                    </div>

                    <div>
                        <Text h4>Sub Genre</Text>
                        <div className="flex flex-wrap gap-[0.5rem]">
                            {{
                                Action: [
                                    "Disaster",
                                    "Heroic Bloodshed",
                                    "Martial Arts",
                                    "Spy",
                                    "Superhero ",
                                    "War ",
                                ],
                                Adventure: ["Pirate", "Swashbuckler", "Samurai"],
                                Comedy: [
                                    "Action",
                                    "Buddy",
                                    "Dark/Black",
                                    "Mockumentary",
                                    "Parody ",
                                    "Romantic ",
                                    "Screwball ",
                                    "Slapstick ",
                                ],
                                Drama: [
                                    "Docudrama",
                                    "Legal",
                                    "Medical",
                                    "Melodrama",
                                    "Political",
                                    "Psychological",
                                    "Teen",
                                ],
                                Fantasy: ["Contemporary", "Dark", "High/Epic", "Urban"],
                                Historical: [
                                    "Alternate History",
                                    "Biopic",
                                    "Historical Epic",
                                    "Historical Event",
                                    "Historical Fiction",
                                    "Period Piece",
                                ],
                                Horror: [
                                    "Found Footage",
                                    "Ghost",
                                    "Monster",
                                    "Slasher",
                                    "Splatter",
                                    "Zombie",
                                    "Supernatural",
                                ],
                                Noir: ["Neo-noir", "Horror-noir", "Tech-noir"],
                                Romance: [
                                    "Historical",
                                    "Paranormal",
                                    "Comedy",
                                    "Fantasy",
                                    "Thriller",
                                ],
                                "Science Fiction": [
                                    "Dystopian",
                                    "Post-apocalyptic",
                                    "Military",
                                    "Steampunk",
                                    "Tech Noir",
                                    "Utopian",
                                    "Space Opera",
                                ],
                                Thriller: ["Psychological", "Mystery", "Techno", "Political"],
                                Western: ["Epic", "Revisionist", "Spaghetti"],
                            }[genre]?.map(_genre => (
                                <Tag
                                    key={_genre}
                                    className="cursor-pointer"
                                    type={subGenre === _genre ? "success" : "default"}
                                    onClick={() => {
                                        setConfig({ subGenre: _genre });
                                    }}>{`${_genre}`}</Tag>
                            ))}
                        </div>

                        {errors.subGenre && (
                            <Text className="!m-0" type="error">
                                {errors.subGenre}
                            </Text>
                        )}
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
                                    setConfig({ budget: "medium" });
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

                        {errors.budget && (
                            <Text className="!m-0" type="error">
                                {errors.budget}
                            </Text>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            What Is The Primary Story Location?
                        </Text>
                        <Input
                            className="max-sm:!w-full"
                            type={errors.primaryStoryLocation ? "error" : "secondary"}
                            placeholder="eg. New York City"
                            value={primaryStoryLocation}
                            onChange={e => {
                                const value = e.target.value;
                                if (value.length < 4) {
                                    setError("Min length is 3 letter", "primaryStoryLocation");
                                } else if (errors.primaryStoryLocation) {
                                    setError("", "primaryStoryLocation");
                                }
                                setConfig({ primaryStoryLocation: e.target.value });
                            }}
                            crossOrigin={undefined}
                        />
                        {errors.primaryStoryLocation && (
                            <Text className="!m-0" type="error">
                                {errors.primaryStoryLocation}
                            </Text>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Number Of Main Characters (optional)
                        </Text>
                        <Input
                            className="max-sm:!w-full"
                            clearable
                            type="secondary"
                            inputMode="numeric"
                            placeholder="eg. 6"
                            value={mainCharactersLength + ""}
                            onChange={e => {
                                setConfig({ mainCharactersLength: +e.target.value });
                            }}
                            crossOrigin={undefined}
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
                                <div key={index} className="flex items-center w-full">
                                    <Input
                                        className="!w-[20rem] max-sm:!w-[80vw]"
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
                                        crossOrigin={undefined}
                                    />
                                    <AiOutlineDelete
                                        onClick={() => {
                                            const newEmotionalEvents = emotionalEvents.filter(
                                                (v, _index) => _index !== index
                                            );
                                            setConfig({
                                                emotionalEvents: newEmotionalEvents,
                                            });
                                        }}
                                        className="w-[1.5rem] h-[1.5rem] text-red-500 cursor-pointer hover:scale-110 transition-all"
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
                            }}
                            placeholder={undefined}></Button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text h4 className="text-lg font-semibold">
                            Please Choose Some Desired Primary Filming Locations
                        </Text>
                        <span>Separate locations with 'and'</span>
                        <Textarea
                            resize="both"
                            className="!w-[20rem] max-sm:!w-full"
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
                            Add A Story Reference From A Film Or Novel (optional){" "}
                        </Text>
                        <Textarea
                            className="max-sm:!w-full"
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
                            className="max-sm:!w-full"
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
                        className="!w-fit"
                        disabled={loading}
                        type="secondary-light"
                        onClick={handleSubmit}
                        placeholder={undefined}>
                        Generate Script
                    </Button>
                </div>
            </div>
        </div>
    );
}
