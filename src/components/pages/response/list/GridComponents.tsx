import React, { forwardRef, useEffect, useState } from "react";

const gridComponents = {
    List: forwardRef<
        HTMLDivElement,
        {
            style: React.CSSProperties;
            children: React.ReactNode;
        } & React.HTMLAttributes<HTMLDivElement>
    >(({ style, children, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            style={{
                ...style,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                margin: "1rem auto",
                gap: "1rem",
            }}>
            {children}
        </div>
    )),
    Item: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement>) => (
        <div
            {...props}
            className="bg-gray-200 flex items-center justify-center text-2xl rounded-lg w-fit overflow-hidden border border-gray-300 hover:scale-105 transition-all hover:border-emerald-600">
            {children}
        </div>
    ),
};

export default gridComponents;
