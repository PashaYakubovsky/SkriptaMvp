import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ItemWrapper = ({
    children,
    loading,
    onDelete,
    ...props
}: {
    children: React.ReactNode;
    loading: boolean;
    onDelete?: () => void;
} & React.HTMLAttributes<HTMLDivElement>) => (
    <div
        {...props}
        className={`
            relative
            group
            bg-gray-200 flex items-center 
            justify-center text-lg h-[10rem] 
            w-[20rem] hover:bg-gradient-to-r hover:from-indigo-100 hover:from-10% hover:via-sky-100 hover:via-30% hover:to-emerald-100 to-90%
            hover:border-black
            transition-all [transition:0.3s_ease-in-out] 
            ${loading ? "animate-pulse" : ""}
        `}>
        <div
            className={`absolute group-hover:opacity-100 opacity-0 top-4 right-4 text-red-500 cursor-pointer`}
            onClick={e => {
                e.stopPropagation();
                onDelete?.();
            }}>
            <AiOutlineDelete className="w-[1.5rem] h-[1.5rem]" />
        </div>
        {children}
    </div>
);

export default ItemWrapper;
