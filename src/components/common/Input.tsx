import React from "react";

interface InputProps {
    type: string;
    svg?: React.JSXElementConstructor<any>;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, svg: Svg, placeholder, value, onChange }: InputProps) => {
    return (
        <div className="relative flex items-center bg-[#f6f6f6] w-full rounded-lg overflow-hidden mb-[0.5rem]">
            <input
                onChange={onChange}
                value={value}
                type={type}
                placeholder={placeholder}
                className="w-full bg-[#f6f6f6] text-sm p-2 rounded-lg"
            />
            {Svg && (
                <button className="absolute right-0 p-2">
                    <Svg className="w-[1.5rem] h-[1.5rem]" />
                </button>
            )}
        </div>
    );
};

export default Input;
