"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Page, Text, Input, Button, Link } from "@geist-ui/core";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Hero from "@/components/threejs/Hero";

export default function Login() {
    const router = useRouter();
    const [config, setConfig] = useState({
        showPassword: false,
    });
    return (
        <div className="bg-black !h-screen">
            <Text h1 className="m-auto text-center">
                Skripta...
            </Text>

            <div className="flex flex-col items-center justify-center w-full h-[80vh] max-w-[600px] m-auto">
                <Text h2 className="text-4xl !text-white">
                    Welcome Back
                </Text>
                <Text p className="!mb-4 !mt-0 text-sm !text-white">
                    Let's get started by filling out the form below.
                </Text>

                <Hero />

                <div className="w-full gap-2 mb-2 flex flex-col bg-black relative z-10">
                    <Input
                        ref={node => {
                            if (node) {
                                node.style.color = "#fff";
                            }
                        }}
                        inputMode="email"
                        className="w-full !text-white"
                        width="100%"
                        placeholder="Email"
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                    />
                    <div className="relative w-full">
                        <Input
                            ref={node => {
                                if (node) {
                                    node.style.color = "#fff";
                                }
                            }}
                            htmlType={config.showPassword ? "text" : "password"}
                            className="w-full !text-white"
                            width="100%"
                            placeholder="Password"
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            crossOrigin={undefined}
                        />
                        <button onClick={() => setConfig({ showPassword: !config.showPassword })}>
                            {config.showPassword ? (
                                <IoEyeOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem] text-[#000]" />
                            ) : (
                                <IoEyeOffOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem] text-[#000]" />
                            )}
                        </button>
                    </div>
                    {/* <Input type="password" svg={IoEyeOutline} placeholder="Password" /> */}
                </div>

                {/* CTA */}
                <Button
                    width="100%"
                    onClick={() => {
                        router.push("/new");
                    }}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    Sign In
                </Button>

                {/* Redirect to registration */}
                <div className="mt-[1rem] text-sm text-white">
                    Don't have an account?{" "}
                    <Link
                        className="!text-[#4B39EF]"
                        href="/register"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        Sign Up here
                    </Link>
                </div>
            </div>
        </div>
    );
}
