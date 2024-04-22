"use client";
import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AIConfig() {
    const [config, setConfig] = useState({
        episodes: 0,
        episodeLength: 0,
        genre: "",
    });
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-[2rem]">
            <header className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white">
                Vertical Film Script Generator
            </header>
            <div className="px-4 mt-[0.5rem]">
                <span className="font-semibold text-sm">
                    Please answer the following questions to the best of your ability
                </span>

                <div className="mt-2">
                    <label className="text-lg font-semibold">
                        How Many Episodes Should There Be?
                    </label>
                    <Input type="text" placeholder="eg. 100" />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        How Long Should Each Episode Be? (in minutes)
                    </label>
                    <Input type="text" placeholder="eg. 3" />
                </div>

                <div>
                    <label className="text-lg font-semibold block">Choose A Genre</label>
                    <div className="flex flex-wrap gap-2">
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
                        ].map(genre => (
                            <Badge key={genre} text={genre} active={config.genre === genre} />
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-lg font-semibold">What is your budget?</label>

                    <div>
                        <Badge text="Micro" active={false} />
                        <Badge text="Low" active={false} />
                        <Badge text="Medium" active={false} />
                        <Badge text="Hight" active={false} />
                    </div>
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        What Is The Primary Story Location?
                    </label>
                    <Input type="text" placeholder="eg. New York" />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Number Of Main Characters (optional)
                    </label>
                    <Input type="text" placeholder="eg. 6" />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Do You Have A Preference For The Main Character(s)' Ethnicity?
                    </label>
                    <div>
                        <Badge text="White" active={false} />
                        <Badge text="Black" active={false} />
                        <Badge text="Asian" active={false} />
                        <Badge text="Hispanic" active={false} />
                        <Badge text="Indigenous" active={false} />
                        <Badge text="Unimportant" active={false} />
                    </div>
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Please Choose Some Desired Primary Filming Locations
                    </label>
                    <span>Separate locations with 'and'</span>
                    <Input
                        type="text"
                        placeholder="eg. coffee shop and hotel and beach and office building"
                    />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        <div>
                            <label className="text-lg font-semibold">
                                PleAdd Main Characters By Type And Age (optional)
                            </label>
                            <Input type="text" placeholder="eg. Scientist, 50" />
                            <Input type="text" placeholder="eg. Student, 20" />
                            <Input type="text" placeholder="eg. Police Officer, 35" />
                            <Input type="text" placeholder="eg. Teacher, 42" />
                            <Input type="text" placeholder="eg. Creature, unknown age" />
                        </div>
                    </label>
                    <span>Separate locations with 'and'</span>
                    <Input
                        type="text"
                        placeholder="eg. coffee shop and hotel and beach and office building"
                    />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Emotional Events Or Behavior By Character (optional)
                    </label>
                    <Input type="text" placeholder="eg. Discovery of creature" />
                    <Input type="text" placeholder="eg. Murder of captain" />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Please Choose Some Desired Primary Filming Locations
                    </label>
                    <span>Separate locations with 'and'</span>
                    <Input
                        type="text"
                        placeholder="eg. coffee shop and hotel and beach and office building"
                    />
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Emotional Add A Story Reference From A Film Or Novel (optional){" "}
                    </label>
                    <Input
                        type="text"
                        placeholder="eg. Pride and Prejudice, Star Trek TNG, Blazing Saddles"
                    />
                </div>

                <div>
                    <label className="text-lg font-semibold">Language</label>
                    <div>
                        <Badge text="English" active />
                    </div>
                </div>

                <div>
                    <label className="text-lg font-semibold">
                        Additional Elements That Should Be Included? (optional)
                    </label>
                    <span>Separate locations with a comma ','</span>
                    <Input
                        type="text"
                        placeholder="eg. mental instability, murder, expensive clothes, sparse product placement for 'Dior'"
                    />
                </div>

                <Link
                    href="/new"
                    className="w-fit px-2 bg-[#4B39EF] h-[44px] rounded-lg text-white flex justify-center items-center">
                    Generate Skripta
                </Link>
            </div>
        </main>
    );
}

const Badge = ({ text, active }: { text: string; active: boolean }) => {
    return (
        <button
            className={`rounded-lg p-2 ${
                active ? "bg-[#4B39EF] text-white" : "bg-[#f6f6f6] text-black"
            }`}>
            {text}
        </button>
    );
};
