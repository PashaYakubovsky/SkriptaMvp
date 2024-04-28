"use client";
import { useQuestionary } from "@/store/useQuestionary";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { Input, Text, Button } from "@geist-ui/core";

export const MainCharactersCreation = () => {
    const mainCharacters = useQuestionary(state => state.mainCharacters);
    const setConfig = useQuestionary(state => state.setConfig);

    return (
        <div className="flex flex-col gap-2">
            <Text h4 className="text-lg font-semibold">
                Please Add Main Characters By Type And Age (optional)
            </Text>
            <Text h5>Separate characters with a comma ',' and add their age after a space</Text>

            <div className="flex flex-col gap-[0.25rem]">
                {mainCharacters.map((character, index) => {
                    return (
                        <div key={index} className="flex items-center">
                            <Input
                                className="!w-[20rem] max-sm:!w-[80vw]"
                                type="secondary"
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
                                crossOrigin={undefined}
                            />
                            <AiOutlineDelete
                                onClick={() => {
                                    const newMainCharacters = mainCharacters.filter(
                                        (_, i) => i !== index
                                    );
                                    setConfig({ mainCharacters: newMainCharacters });
                                }}
                                className="text-red-500 w-[1.5rem] h-[1.5rem] cursor-pointer hover:scale-110 transition-all"
                            />
                        </div>
                    );
                })}

                <Button
                    type="secondary-light"
                    icon={<AiOutlinePlus />}
                    className="!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0"
                    onClick={() => {
                        setConfig({ mainCharacters: [...mainCharacters, ""] });
                    }}
                    placeholder={undefined}></Button>
            </div>
        </div>
    );
};
