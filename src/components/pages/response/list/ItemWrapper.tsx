import React from "react";

const ItemWrapper = ({
    children,
    loading,
    ...props
}: {
    children: React.ReactNode;
    loading: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => (
    <div
        {...props}
        className={`
            bg-gray-200 flex items-center 
            justify-center text-lg h-[10rem] 
            w-[20rem] hover:bg-black 
            transition-all [transition:0.3s_ease-in-out] 
            hover:text-white
            ${loading ? "animate-pulse" : ""}
        `}>
        {children}
    </div>
);

export default ItemWrapper;
