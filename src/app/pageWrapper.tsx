"use client";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Rubik } from "next/font/google";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

import { Courier_Prime } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Preloader } from "./Preloader";
import AuthProvider from "./AuthProvider";

export const cpFont = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
});
const font = Rubik({ subsets: ["latin"] });

interface PageWrapperProps {
    children: React.ReactNode;
    session: Session;
}

const PageWrapper = ({ children, session }: PageWrapperProps) => {
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
        <SessionProvider session={session}>
            <AuthProvider>
                <GeistProvider>
                    <CssBaseline />
                    <div className={font.className}>
                        <Preloader />
                        {children}
                        <Toaster />
                    </div>
                </GeistProvider>
            </AuthProvider>
        </SessionProvider>
    );
};

export default PageWrapper;
