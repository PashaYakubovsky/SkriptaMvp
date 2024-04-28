"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { cpFont } from "./pageWrapper";
import Logo from "../../public/Skripta.svg";

export const Preloader = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const svgRef = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState(true);

    useEffect(() => {
        if (!svgRef.current) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(svgRef.current, {
                duration: 2,
                left: 25,
                top: 25,
                width: 150,
                height: 150,
                ease: "power4.inOut",
            });
            tl.to(ref.current, {
                duration: 1.5,
                opacity: 0,
                onComplete: () => {
                    setShow(false);
                },
            });
        });
        return () => ctx.revert();
    }, [svgRef.current]);

    if (!show) return null;

    return (
        <div
            ref={ref}
            className={`w-screen h-screen left-0 top-0 fixed text-center bg-black flex items-center justify-center text-8xl font-bold text-whit z-[100] text-white max-md:text-5xl ${cpFont.className}`}>
            <div ref={svgRef} className="absolute w-[400px] h-[500px]">
                <Logo />
            </div>
        </div>
    );
};
