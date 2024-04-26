"use client";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Rubik } from "next/font/google";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { gsap } from "gsap";

import { Courier_Prime } from "next/font/google";

const cpFont = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
});

interface PageWrapperProps {
    children: React.ReactNode;
}

const font = Rubik({ subsets: ["latin"] });
const PageWrapper = ({ children }: PageWrapperProps) => {
    useEffect(() => {
        const url = new URL(window.location.href);
        let userId = url.searchParams.get("userId");
        if (!userId) {
            userId = localStorage.getItem("userId");
        }
        if (!userId) {
            userId = Math.random().toString(36).substring(7) + "";
        }

        localStorage.setItem("userId", userId);
        url.searchParams.set("userId", userId);
        const queryParams = url.searchParams.toString();
        window.history.replaceState({}, "", `${url.pathname}?${queryParams}`);
    }, []);

    return (
        <GeistProvider>
            <CssBaseline />
            <div className={font.className}>
                <Preloader />
                {children}
                <Toaster />
            </div>
        </GeistProvider>
    );
};

export default PageWrapper;

const Preloader = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(ref.current, {
                duration: 1.5,
                opacity: 0,
                delay: 1,
                onComplete: () => {
                    ref.current?.remove();
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={ref}
            className={`w-full h-full fixed text-center flex items-center justify-center text-8xl font-bold bg-black text-whit z-20 text-white max-md:text-5xl ${cpFont.className}`}>
            Skripta
        </div>
    );
};
