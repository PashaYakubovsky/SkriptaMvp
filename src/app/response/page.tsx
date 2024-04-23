"use client";
import { useEffect } from "react";

export default function ResponsePage() {
    useEffect(() => {
        window.location.href = "/response/" + Math.random().toString(36).substring(7);
    }, []);

    return null;
}
