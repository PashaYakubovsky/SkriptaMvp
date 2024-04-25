"use client";
import { RiComputerLine } from "react-icons/ri";
import { Text, Card } from "@geist-ui/core";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-start flex-start px-4">
            <Text
                h2
                className="border-b-2 border-black !w-full !h-[4rem] !flex inter-center
                justify-center 
                align-center
                align-middle
                text-center
            ">
                What Do You Want To Do?
            </Text>
            <div className="flex flex-col items-start justify-start w-full h-[80vh] px-4 pt-[0.5rem] ">
                <Card
                    onClick={() => {
                        router.push("/configuration");
                    }}
                    hoverable
                    className="
                        !w-[14rem] !h-[12rem] shadow-md rounded-md
                        hover:shadow-xl hover:scale-105
                        cursor-pointer active:scale-95 
                        transform transition duration-300 ease-in-out">
                    <div className="h-[70%] bg-[#39D2C0] p-2 flex flex-col justify-between text-white text-sm	">
                        <div className="relative w-fit rounded-md overflow-hidden p-2">
                            <div className="absolute w-full h-full left-0 top-0 bg-white opacity-25"></div>
                            <RiComputerLine className="w-[1.5rem] h-[1.5rem] text-white" />
                        </div>

                        <div className="text-start  drop-shadow-md">
                            <div>Vertical Films</div>
                            <div>Script Generation</div>
                        </div>
                    </div>
                    <Text
                        className="h-[30%] flex 
                    items-center justify-center text-2xl
                    ">
                        Begin
                    </Text>
                </Card>
            </div>
        </main>
    );
}
