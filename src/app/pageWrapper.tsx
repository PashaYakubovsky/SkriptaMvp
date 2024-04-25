"use client";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Rubik } from "next/font/google";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

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

        window.history.replaceState({}, "", url.toString());
    });

    return (
        <GeistProvider>
            <CssBaseline />
            <div className={font.className}>
                {children}
                <Toaster />
            </div>
        </GeistProvider>
    );
};

export default PageWrapper;
