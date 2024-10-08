"use client";
import React from "react";
import { gsap } from "gsap";
import { cpFont } from "./pageWrapper";
import { useGSAP } from "@gsap/react";
import { create } from "zustand";

gsap.registerPlugin(useGSAP);

interface PreloaderConfig {
    show: boolean;
    setShow: (show: boolean) => void;
    lastShowTimestamp: number;
    setLastShowTimestamp: (lastShowTimestamp: number) => void;
}
const usePreloaderStore = create<PreloaderConfig>(set => ({
    show: true,
    setShow: (show: boolean) => set({ show }),
    lastShowTimestamp: Date.now(),
    setLastShowTimestamp: (lastShowTimestamp: number) => set({ lastShowTimestamp }),
}));

export const Preloader = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const svgRef = React.useRef<HTMLDivElement>(null);
    const show = usePreloaderStore(state => state.show);
    const setShow = usePreloaderStore(state => state.setShow);
    const lastShowTimestamp = usePreloaderStore(state => state.lastShowTimestamp);
    const setLastShowTimestamp = usePreloaderStore(state => state.setLastShowTimestamp);

    useGSAP(
        () => {
            const currentTime = Date.now();
            const timeDiff = currentTime - lastShowTimestamp;

            if (timeDiff < 5000) {
                // don't show preloader if it was shown less than 5 seconds ago
                setShow(false);
                return;
            }

            setLastShowTimestamp(currentTime);

            const pencilGroup = svgRef.current?.querySelector("#pencilGroup");
            const skriptaTextGroup = svgRef.current?.querySelector("#skriptaTextGroup");
            const iLetterGroup = svgRef.current?.querySelector("#iLetterGroup");
            const ncLettersGroup = svgRef.current?.querySelector("#ncLettersGroup");
            const aLetterGroup = svgRef.current?.querySelector("#aLetterGroup");

            if (
                !pencilGroup ||
                !skriptaTextGroup ||
                !iLetterGroup ||
                !ncLettersGroup ||
                !aLetterGroup
            )
                return;

            const tl = gsap.timeline();
            tl.from(pencilGroup, {
                duration: 1,
                x: 220,
                rotate: -120,
                opacity: 0,
                ease: "power4.inOut",
            });
            tl.from(skriptaTextGroup, {
                duration: 0.5,
                x: 100,
                opacity: 0,
                ease: "power4.inOut",
            });
            tl.from(ncLettersGroup, {
                duration: 0.5,
                x: 100,
                opacity: 0,
                ease: "power4.inOut",
            });
            tl.from(aLetterGroup, {
                duration: 0.5,
                y: 100,
                opacity: 0,
                ease: "power4.inOut",
            });
            tl.from(iLetterGroup, {
                duration: 0.5,
                y: -100,
                opacity: 0,
                ease: "power4.inOut",
            });

            // fade out
            tl.to(ref.current, {
                duration: 1.5,
                opacity: 0,
                onComplete: () => {
                    setShow(false);
                },
            });
        },
        { scope: svgRef.current! }
    );

    if (!show) return null;

    return (
        <div
            ref={ref}
            className={`w-screen h-screen left-0 top-0 fixed text-center bg-black flex items-center justify-center text-8xl font-bold text-whit z-[100] text-white max-md:text-5xl ${cpFont.className}`}>
            <div ref={svgRef} className="absolute w-[400px] h-[500px] flex">
                <svg viewBox="0 0 773 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1732_3)">
                        <g id="pencilGroup">
                            <path
                                d="M191.4 155.9V165C191.4 165 145 158.4 122 148.5C122 148.5 92.9 174.6 49.8 192.6H99.7L127.8 166.7L142.8 176.8H190.7V192.5H143.8C142 188.7 138.1 186.1 133.6 186.1C127.3 186.1 122.3 191.2 122.3 197.4C122.3 203.6 127.4 208.7 133.6 208.7C137.9 208.7 141.6 206.3 143.6 202.8H190.8V218.3H142.9L129 227.7L99.3 202.1H49.7C49.7 202.1 87.5 217.3 121.7 246.5C121.7 246.5 144.8 236.1 190.6 231V239.4H203V155.8H191.4V155.9Z"
                                fill="#092847"
                            />
                            <path
                                d="M215.4 154.3H348.5L335.8 168.6H262.3V179.7H343L364.1 154.3H386.5V238.7H364.4L342.2 213.3H262.5V224.2H335.3L348.5 238.7H215.4V154.3Z"
                                fill="#062330"
                            />
                            <path
                                d="M244.2 227.9C248.121 227.9 251.3 224.721 251.3 220.8C251.3 216.879 248.121 213.7 244.2 213.7C240.279 213.7 237.1 216.879 237.1 220.8C237.1 224.721 240.279 227.9 244.2 227.9Z"
                                fill="#F8FCFF"
                            />
                            <path
                                d="M399.6 155.4V239.8C399.6 239.8 545.2 241.6 627 233.5C627 233.5 648.8 230.4 649.1 203.9H466.1V190.9H649.1C649.1 190.9 650.1 158.5 609.1 159L399.6 155.4Z"
                                fill="url(#paint0_linear_1732_3)"
                            />

                            <path
                                d="M352.3 168.3L364.1 154.3H386.5V168.3H352.3Z"
                                fill="url(#paint1_linear_1732_3)"
                            />
                            <path
                                d="M215.4 169.8H335.7L348.5 154.3H215.4V169.8Z"
                                fill="url(#paint2_linear_1732_3)"
                            />
                            <path
                                d="M352.3 168.3L343 179.7H262.3V169.6L215.4 169.8V194.9H386.5V168.3H352.3Z"
                                fill="url(#paint3_linear_1732_3)"
                            />
                            <path
                                d="M244.2 181.5C248.121 181.5 251.3 178.321 251.3 174.4C251.3 170.479 248.121 167.3 244.2 167.3C240.279 167.3 237.1 170.479 237.1 174.4C237.1 178.321 240.279 181.5 244.2 181.5Z"
                                fill="#F8FCFF"
                            />
                            <path
                                d="M399.6 170.8V155.3L558.8 157.7C558.8 157.7 607.4 158.4 618.9 159.6C637.9 161.5 645.3 176.4 645.3 176.4L399.6 170.8Z"
                                fill="url(#paint4_linear_1732_3)"
                            />
                            <path
                                d="M399.6 194.9V239.8C399.6 239.8 486.1 243.8 621.3 234.1C621.3 234.1 471.3 218.4 435.1 194.9H399.6Z"
                                fill="url(#paint5_linear_1732_3)"
                            />
                            <path
                                d="M599.402 175H412.598C410.599 175 409 173.545 409 171.727V171.273C409 169.455 410.599 168 412.598 168H599.402C601.401 168 603 169.455 603 171.273V171.727C602.9 173.545 601.301 175 599.402 175Z"
                                fill="#F8FCFF"
                            />
                            <path
                                d="M447.4 206.1C452.094 206.1 455.9 202.294 455.9 197.6C455.9 192.906 452.094 189.1 447.4 189.1C442.706 189.1 438.9 192.906 438.9 197.6C438.9 202.294 442.706 206.1 447.4 206.1Z"
                                fill="#F8FCFF"
                            />
                        </g>

                        <g id="skriptaTextGroup">
                            <path
                                d="M292.2 121.5L271.5 93.3L289.4 68.9H275.4L259.2 90.4V90.5V47.1H245.6V122.3H259.2V97.6L277 121.5H292.2Z"
                                fill="#042536"
                            />
                            <path d="M354.2 68.9H341V122.1H354.2V68.9Z" fill="#042536" />
                            <path
                                d="M347.6 61.5C351.687 61.5 355 58.1869 355 54.1C355 50.0131 351.687 46.7 347.6 46.7C343.513 46.7 340.2 50.0131 340.2 54.1C340.2 58.1869 343.513 61.5 347.6 61.5Z"
                                fill="#042536"
                            />
                            <path
                                d="M299.3 68.9V122.1H312.4V93.4C312.4 93.4 312.3 77.1 330.1 81L332.4 69C332.4 69 316.3 65.7 312.2 77.8V69H299.3V68.9Z"
                                fill="#042536"
                            />
                            <path
                                d="M394.8 68.5C394.8 68.5 386.8 70.1 383.1 76.4V68.9H369.4V142.9H383V115.5C383 115.5 387.9 125 405.9 122.1C405.9 122.1 420.2 116.4 420.2 100.3V87.8C420.2 87.8 418.3 64.9 394.8 68.5ZM407 99.2C407 105.8 401.7 111.1 395.1 111.1C388.5 111.1 383.2 105.8 383.2 99.2V91.3C383.2 84.7 388.5 79.4 395.1 79.4C401.7 79.4 407 84.7 407 91.3V99.2Z"
                                fill="#042536"
                            />
                            <path
                                d="M180.8 109.5C183.7 106.3 186.6 103.2 189.6 100.1C188.8 100.9 195.5 106.4 196.2 106.9C199.1 108.8 202.5 110.1 206 110.4C212.3 111 223.1 107.3 219.6 99C217.8 94.6 212.4 93.5 208.3 92.5C196.5 89.7 181.3 83.5 183.2 68.8C186.1 45.8 216.5 45.4 230.3 58.6C230.5 58.8 230.8 59.1 230.8 59.5C230.8 59.8 230.6 60.1 230.4 60.4C228.5 63 226.7 65.7 224.8 68.2C225.3 67.5 217.2 63.6 216.5 63.3C213.4 62.2 210 61.8 206.7 62.1C203.8 62.3 200.8 63.1 199 65.5C196 69.4 197.5 74.9 201.5 77.4C203.5 78.6 205.8 79.2 208.1 79.6C214.3 80.6 220.3 81.4 225.8 84.7C232.6 88.8 235.3 97 234 104.6C230.9 122.3 210.3 126 195.8 120.9C189.7 118.7 184.3 114.8 180.8 109.5Z"
                                fill="#082434"
                            />
                            <path
                                d="M461.9 109.6C459.6 111 454.8 111.1 454.8 111.1C447.5 111.2 448.4 103.1 448.4 103.1V93.3V79.4H463.6V68.5H448.4V55.6L435.5 58.2V68.5H427.3V79.4H435.5V105.5C435.5 114.7 438.4 119.3 446.7 122.1C455 124.9 465.8 120.2 465.8 120.2L461.9 109.6Z"
                                fill="#042536"
                            />
                        </g>

                        <g id="iLetterGroup">
                            <path d="M499.9 275.1H486.2V327.6H499.9V275.1Z" fill="#F8FCFF" />
                            <path
                                d="M493 268.9C497.308 268.9 500.8 265.408 500.8 261.1C500.8 256.792 497.308 253.3 493 253.3C488.692 253.3 485.2 256.792 485.2 261.1C485.2 265.408 488.692 268.9 493 268.9Z"
                                fill="#F8FCFF"
                            />
                        </g>

                        <g id="aLetterGroup">
                            <path
                                d="M514.2 111C514.2 111 514.2 90.4 514.2 83.2C514.2 81.3 514.1 79.3 513.7 77.4C512.7 72.7 509.1 69.1 504.5 67.8C500 66.6 495.2 66.8 490.7 67.2C486.1 67.6 481.9 69.3 478.1 71.8C477.6 72.1 473.1 75.1 472 76.2C471.8 76.3 471.8 76.6 472 76.7C472.8 77.8 476.6 82.9 477.7 84.5C477.9 84.7 478.2 84.8 478.5 84.6C480 83.3 485.6 78.8 492.9 78.2C501.5 77.5 501.2 84.1 501.2 84.1C501.2 84.1 501.3 89.6 491 90.2C480.7 90.8 479.1 93 475.7 95.4C472.3 97.8 470.2 103 470.8 108.4C471.4 113.8 473.6 122.4 486.2 122.4C498.8 122.4 502.7 114.9 502.7 114.9C506.2 124.9 521.2 122 521.2 122V111H514.2ZM498.3 110.4C496 112.5 492.8 113.6 489.7 113C487.5 112.6 486 111.1 485.2 109.2C484.6 107.8 484.5 106.3 484.8 104.8C485.5 101.5 488.5 99.1 491.8 98.5C501.1 97 501.3 95.3 501.3 95.3C501.3 95.3 503.2 106 498.3 110.4Z"
                                fill="#F3FFFF"
                            />
                        </g>

                        <g id="ncLettersGroup">
                            <path
                                d="M545 274.3C535.2 274.3 530.4 279 528.2 282.4V275.1H514.8V327.6H528.2V293.7C530.1 289.7 534 284.2 540.9 284.2C549 284.2 549.1 292.4 549.1 292.4V327.5H562V285.6C562 285.7 562 274.3 545 274.3Z"
                                fill="#042536"
                            />
                            <path
                                d="M637.9 328.3C642.374 328.3 646 324.674 646 320.2C646 315.727 642.374 312.1 637.9 312.1C633.427 312.1 629.8 315.727 629.8 320.2C629.8 324.674 633.427 328.3 637.9 328.3Z"
                                fill="#042536"
                            />
                            <path
                                d="M612.2 291.7C612.4 292.1 612.9 292.2 613.2 292L621.5 286.4C621.9 286.1 622.2 285.5 622 285C621.4 283.2 619.1 280.7 618.7 280.3C610.6 272.4 596.6 271.7 586.9 277C579 281.4 575.2 289.5 574.8 298.3C574.7 299.7 574.8 301.2 574.8 302.6C575.3 311.6 578.4 321.5 587 325.9C593 329 600.4 330 607 328.4C613.7 326.7 621 321.4 622.3 314.3C622.3 314.2 622.1 314.1 622 314L612.4 308.2C612.3 308.2 612.3 308.2 612.3 308.3C612.2 309.1 610.2 312.4 610 312.6C607.9 315.4 604.5 317.1 601 317.4C596.6 317.8 592.3 315.9 590.2 312C587.4 306.9 587.3 300.2 588.4 294.6C590.9 283.1 607.2 281 612.2 291.7Z"
                                fill="#042536"
                            />
                        </g>
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_1732_3"
                            x1="400"
                            y1="189"
                            x2="649"
                            y2="210"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0B3547" />
                            <stop offset="1" stop-color="#1D4B65" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1732_3"
                            x1="360"
                            y1="161"
                            x2="386"
                            y2="161"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#27546B" />
                            <stop offset="1" stop-color="#386376" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_1732_3"
                            x1="215.4"
                            y1="162.05"
                            x2="348.5"
                            y2="162.05"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#17374A" />
                            <stop offset="1" stop-color="#1B4C5A" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_1732_3"
                            x1="215.4"
                            y1="181.6"
                            x2="386.5"
                            y2="181.6"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#082B3E" />
                            <stop offset="1" stop-color="#0C394E" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_1732_3"
                            x1="399.6"
                            y1="165.85"
                            x2="645.3"
                            y2="165.85"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#215259" />
                            <stop offset="1" stop-color="#5B8F9D" />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_1732_3"
                            x1="399.6"
                            y1="217.759"
                            x2="599.5"
                            y2="241"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#092938" />
                            <stop offset="0.977911" stop-color="#03253D" />
                        </linearGradient>
                        <clipPath id="clip0_1732_3">
                            <rect width="773" height="402.2" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};
