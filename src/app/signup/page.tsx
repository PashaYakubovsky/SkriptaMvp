"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Text, Input, Button } from "@geist-ui/core";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Hero from "@/components/threejs/Hero";
import { useSession, signIn } from "next-auth/react";
import toast from "react-hot-toast";

const isEmailValid = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export default function Login() {
    const { data: session, status } = useSession();

    const [config, setConfig] = useState({
        showPassword: false,
        password: "",
        repeatPassword: "",
        errorPassword: "",
        email: "",
        errorEmail: "",
    });
    const router = useRouter();

    useEffect(() => {
        // signOut();
        if (status === "authenticated") {
            router.push("/new");
        }
    }, [status]);

    const isValid = () => {
        if (!isEmailValid(config.email)) {
            setConfig(state => ({ ...state, errorEmail: "Invalid email" }));
            return false;
        }

        if (config.password !== config.repeatPassword) {
            setConfig(state => ({ ...state, errorPassword: "Passwords do not match" }));
            return false;
        }

        return true;
    };

    return (
        <div className="bg-black !h-screen">
            <Text h1 className="m-auto text-center">
                Skripta...
            </Text>

            <div className="flex flex-col items-center justify-center w-full h-[80vh] max-w-[600px] m-auto max-md:max-w-[80vw]">
                <Text h2 className="text-4xl !text-white text-center relative z-10">
                    Hello there!
                </Text>
                <Text p className="!mb-4 !mt-0 text-sm !text-white text-center relative z-10">
                    Fill out the form below to get started.
                </Text>

                <Hero />

                <form className="w-full gap-2 mb-4 flex flex-col bg-black relative z-10 ">
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
                            onClick={() =>
                                setConfig(state => ({
                                    ...state,
                                    showPassword: !config.showPassword,
                                }))
                            }
                            className="text-white">
                            {config.showPassword ? (
                                <IoEyeOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]" />
                            ) : (
                                <IoEyeOffOutline className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]" />
                            )}
                        </button>
                    </div>
                    <Input
                        onChange={e =>
                            setConfig({
                                ...config,
                                repeatPassword: e.target.value,
                                errorPassword:
                                    e.target.value !== config.password
                                        ? "Passwords do not match"
                                        : "",
                            })
                        }
                        value={config.repeatPassword}
                        ref={node => {
                            if (node) {
                                node.style.color = "#fff";
                            }
                        }}
                        type={config.errorPassword ? "error" : "default"}
                        htmlType={config.showPassword ? "text" : "password"}
                        className="w-full !text-white"
                        width="100%"
                        placeholder="Repeat Password"
                    />
                </form>

                {/* CTA */}
                <Button
                    width="100%"
                    className="!mb-2"
                    onClick={() => {
                        const valid = isValid();
                        if (valid) {
                            signIn("credentials", {
                                email: config.email,
                                password: config.password,
                                repeatPassword: config.repeatPassword,
                            }).catch(e => {
                                console.error(e);
                                toast.error("Error signing up");
                            });
                        }
                    }}>
                    Sign Up
                </Button>
            </div>
        </div>
    );
}
