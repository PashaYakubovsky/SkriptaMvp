"use client";
import { MouseEventHandler } from "react";

export const Badge = ({
    text,
    active,
    onClick,
}: {
    text: string;
    active: boolean;

    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg p-2 ${
                active ? "bg-[#4B39EF] text-white" : "bg-[#f6f6f6] text-black"
            }`}>
            {text}
        </button>
    );
};
