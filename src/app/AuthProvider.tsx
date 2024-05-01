"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Text } from "@geist-ui/core";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();

    const session = useSession({
        required: true,
        onUnauthenticated() {
            if (pathname !== "/" && pathname !== "/login" && pathname !== "/signup") {
                router.push("/login");
            }
        },
    });

    useEffect(() => {
        if (!session.data) return;
        const url = new URL(window.location.href);

        const userId = session?.data?.user?.email ?? "";
        localStorage.setItem("userId", userId);
        url.searchParams.set("userId", userId);
        const queryParams = url.searchParams.toString();
        window.history.replaceState({}, "", `${url.pathname}?${queryParams}`);
    }, [session]);

    if (session.status === "loading") {
        return (
            <div className="w-full bg-black h-full fixed left-0 top-0 z-100 flex place-items-center">
                <Text h1 className="!text-white text-center !w-full">
                    We are checking your authentication status...
                </Text>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthProvider;
