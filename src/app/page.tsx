"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Page, Text } from "@geist-ui/core";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center flex-start">
            <Text className="!w-full !h-[90px] text-center shadow-md flex items-center justify-center text-3xl font-bold">
                Skripta...
            </Text>

            <Page className="flex flex-col items-center justify-center w-full h-[80vh]">
                <Button
                    onClick={() => {
                        router.push("/login");
                    }}
                    scale={3}
                    type="secondary-light"
                    className="!w-full"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    Get Started
                    <div className="">
                        <IoIosArrowRoundForward className="w-[2.5rem] h-[2.5rem] text-white" />
                    </div>
                </Button>
            </Page>
        </div>
    );
}
