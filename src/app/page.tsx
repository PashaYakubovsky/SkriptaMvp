"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Page, Text } from "@geist-ui/core";
import { useRouter } from "next/navigation";
import Hero from "@/components/threejs/Hero";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center flex-start bg-black">
            <Text className="!w-full !h-[90px] !m-0 text-center shadow-md flex items-center justify-center text-3xl font-bold !bg-black !text-white !relative !z-10">
                Skripta...
            </Text>

            <div className="flex flex-col items-center justify-center w-full h-[80vh] px-4">
                <Hero />

                <Button
                    onClick={() => {
                        router.push("/login");
                    }}
                    scale={1}
                    className="!w-fit !relative !z-10"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    Get Started
                    <div className="">
                        <IoIosArrowRoundForward className="w-[2.5rem] h-[2.5rem] text-black" />
                    </div>
                </Button>
            </div>
        </div>
    );
}
