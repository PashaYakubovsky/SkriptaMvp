"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();

    useSession({
        required: true,
        onUnauthenticated() {
            if (pathname !== "/" && pathname !== "/login") {
                router.push("/login");
            }
        },
    });
    return <>{children}</>;
};
