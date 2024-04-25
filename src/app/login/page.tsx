"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Page, Text, Input, Button, Link } from "@geist-ui/core";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [config, setConfig] = useState({
        showPassword: false,
    });
    return (
        <Page>
            <Text h1>Skripta...</Text>

            <div className="flex flex-col items-start justify-start w-full h-[80vh] max-w-[600px]">
                <Text h2 className="text-4xl my-2">
                    Welcome Back
                </Text>
                <Text p className="mb-2 text-sm">
                    Let's get started by filling out the form below.
                </Text>

                <div className="w-full gap-2 mb-2 flex flex-col">
                    <Input
                        inputMode="email"
                        className="w-full"
                        width="100%"
                        type="secondary"
                        placeholder="Email"
                    />
                    <div className="relative w-full">
                        <Input
                            htmlType={config.showPassword ? "text" : "password"}
                            type="password"
                            className="w-full"
                            width="100%"
                            type="secondary"
                            placeholder="Password"
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
                    type="secondary"
                    onClick={() => {
                        router.push("/new");
                    }}
                    className="w-full bg-[#4B39EF] h-[44px] rounded-lg text-white flex justify-center items-center">
                    Sign In
                </Button>

                {/* Redirect to registration */}
                <div className="mt-[1rem] text-sm">
                    Don't have an account?{" "}
                    <Link className="!text-[#4B39EF]" href="/register">
                        Sign Up here
                    </Link>
                </div>
            </div>
        </Page>
    );
}
