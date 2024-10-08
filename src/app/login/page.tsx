"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Text, Input, Button, Link } from "@geist-ui/core";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Hero from "@/components/threejs/Hero";
import { useSession, signIn, signOut } from "next-auth/react";

import { FaGithub, FaGoogle } from "react-icons/fa";

const isEmailValid = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export default function Login() {
    const { status } = useSession();

    const [config, setConfig] = useState({
        showPassword: false,
        password: "",
        email: "",
        errorEmail: "",
    });
    const router = useRouter();

    return (
        <div className="bg-black !h-screen">
            <Text h1 className="m-auto text-center">
                Skripta...
            </Text>

            <div className="flex flex-col items-center justify-center w-full h-[80vh] max-w-[600px] m-auto max-md:max-w-[80vw]">
                <Text h2 className="text-4xl !text-white text-center relative z-10">
                    Welcome Back
                </Text>
                <Text p className="!mb-4 !mt-0 text-sm !text-white text-center relative z-10">
                    Let's get started by filling out the form below.
                </Text>

                <Hero />

                <div className="w-full gap-2 mb-4 flex flex-col bg-black relative z-10 ">
                    <Input
                        type={config.errorEmail ? "error" : "default"}
                        value={config.email}
                        onChange={e => {
                            setConfig({
                                ...config,
                                email: e.target.value,
                                errorEmail: isEmailValid(e.target.value) ? "" : "Invalid email",
                            });
                        }}
                        ref={node => {
                            if (node) {
                                node.style.color = "#fff";
                            }
                        }}
                        inputMode="email"
                        className="w-full !text-white"
                        width="100%"
                        placeholder="Email"
                    />
                    {config.errorEmail && (
                        <Text className="!m-0" p type="error">
                            {config.errorEmail}
                        </Text>
                    )}
                    <div className="relative w-full">
                        <Input
                            onChange={e => setConfig({ ...config, password: e.target.value })}
                            value={config.password}
                            ref={node => {
                                if (node) {
                                    node.style.color = "#fff";
                                }
                            }}
                            htmlType={config.showPassword ? "text" : "password"}
                            className="w-full !text-white"
                            width="100%"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={e => {
                                e.stopPropagation();
                                setConfig(state => ({
                                    ...state,
                                    showPassword: !config.showPassword,
                                }));
                            }}
                            className="text-white">
                            {config.showPassword ? (
                                <IoEyeOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]" />
                            ) : (
                                <IoEyeOffOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <Button
                    width="100%"
                    className="!mb-2"
                    onClick={async () => {
                        if (status === "unauthenticated") {
                            try {
                                const res = await signIn("credentials", {
                                    email: config.email,
                                    password: config.password,
                                    redirect: false,
                                });
                                if (res.error) {
                                    return setConfig(state => ({
                                        ...state,
                                        errorEmail: "Invalid credentials",
                                    }));
                                }
                                router.push("/new");
                            } catch (err) {
                                console.error(err);
                            }
                        } else {
                            router.push("/new");
                        }
                    }}>
                    {status === "unauthenticated" ? "Sign In" : "Go to app"}
                </Button>

                {status === "authenticated" && (
                    <Button
                        width="100%"
                        className="!mb-2"
                        onClick={() => {
                            signOut();
                        }}>
                        Sign Out
                    </Button>
                )}

                <div className="flex gap-2 max-sm:w-full max-sm:flex-col">
                    <Button
                        onClick={() => {
                            if (status === "unauthenticated") {
                                signIn("github", {
                                    callbackUrl: "/new",
                                });
                            }
                        }}>
                        <FaGithub className="mr-2" />
                        Sign in with Github
                    </Button>

                    <Button
                        onClick={() => {
                            if (status === "unauthenticated") {
                                signIn("google", {
                                    callbackUrl: "/new",
                                });
                            }
                        }}>
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </Button>
                </div>

                {/* Redirect to registration */}
                <div className="mt-[1rem] text-sm text-white relative z-10">
                    Don't have an account?{" "}
                    <Link className="!text-[#4B39EF]" href="/signup">
                        Sign Up here
                    </Link>
                </div>
            </div>
        </div>
    );
}
