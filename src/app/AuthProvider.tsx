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

    return <>{children}</>;
};

export default AuthProvider;
