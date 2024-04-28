"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@geist-ui/core";
import { useRouter } from "next/navigation";
import Hero from "@/components/threejs/Hero";
import React from "react";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center flex-start bg-black">
            <Hero />

            <div className="flex flex-col items-center justify-center w-full h-screen px-4">
                <Button
                    onClick={() => {
                        router.push("/login");
                    }}
                    scale={1}
                    className="!w-fit !relative !z-10"
                    placeholder={undefined}>
                    Get Started
                    <div className="">
                        <IoIosArrowRoundForward className="w-[2.5rem] h-[2.5rem] text-black" />
                    </div>
                </Button>
            </div>
        </div>
    );
}
