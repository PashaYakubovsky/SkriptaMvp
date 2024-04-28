"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();

    useSession({
        required: true,
        onUnauthenticated() {
            if (pathname !== "/" && pathname !== "/login" && pathname !== "/signup") {
                router.push("/login");
            }
        },
    });
    return <>{children}</>;
};

export default AuthProvider;
