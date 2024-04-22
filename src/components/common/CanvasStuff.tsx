"use client";
import React, { useEffect } from "react";
import { WaterTexture } from "./WaterTexture";

const CanvasStuff = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const waterTextureRef = React.useRef<WaterTexture | null>(null);
    const elemRef = React.useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const elem = document.querySelector("#header");
        if (!elem) return;
        elemRef.current = elem as HTMLDivElement;
        const waterTexture = new WaterTexture({
            debug: true,
            canvas: canvasRef.current,
            width: elem.clientWidth,
            height: elem.clientHeight,
        });
        waterTextureRef.current = waterTexture;

        let id = 0;
        const update = () => {
            waterTexture.update();
            id = requestAnimationFrame(update);
        };

        update();
        return () => {
            cancelAnimationFrame(id);
        };
    }, []);

    return (
        <canvas
            id="WaterTexture"
            onPointerMove={e => {
                if (!canvasRef.current || !waterTextureRef.current) return;
                const sizes = {
                    width: elemRef.current?.clientWidth || window.innerWidth,
                    height: elemRef.current?.clientHeight || window.innerHeight,
                };
                const point = {
                    x: e.clientX / sizes.width,
                    y: e.clientY / sizes.height,
                };
                waterTextureRef.current.addPoint(point);
            }}
            ref={canvasRef}
            className="absolute left-0 top-0 w-full h-full z-0"></canvas>
    );
};

export default CanvasStuff;
