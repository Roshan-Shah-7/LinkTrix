"use client";

import * as React from "react";
import Link from "next/link";
import { DIcons } from "dicons";
import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "@/app/components/ui/button";

import { HighlighterItem, HighlightGroup, Particles } from "@/app/components/ui/highlighter";

export function CallToAction() {
    const [scope, animate] = useAnimate();

    React.useEffect(() => {
        animate(
            [
                ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
                ["#javascript", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 50, top: 102 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#react-js", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 224, top: 170 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#typescript", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 88, top: 198 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#next-js", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 200, top: 60 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            },
        );
    }, [animate]);
    return (
        <section className="relative mx-auto mt-6 w-full">
            <HighlightGroup className="group h-full">
                <div
                    className="group/item h-full md:col-span-6 lg:col-span-12"
                    data-aos="fade-down"
                >
                    <HighlighterItem className="rounded-3xl p-6">
                        <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-gray-50">
                            <Particles
                                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                                quantity={200}
                                color={"#555555"}
                                vy={-0.2}
                            />
                            <div className="flex justify-center">
                                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                                    <div
                                        className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                                        ref={scope}
                                    >
                                        <DIcons.Designali className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
                                        <div
                                            id="next-js"
                                            className="absolute bottom-12 left-14 rounded-3xl border border-slate-300 bg-slate-100 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                                        >
                                            UI-UX
                                        </div>
                                        <div
                                            id="react-js"
                                            className="absolute left-2 top-20 rounded-3xl border border-slate-300 bg-slate-100 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                                        >
                                            Graphic Design
                                        </div>
                                        <div
                                            id="typescript"
                                            className="absolute bottom-20 right-1 rounded-3xl border border-slate-300 bg-slate-100 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                                        >
                                            Web Application
                                        </div>
                                        <div
                                            id="javascript"
                                            className="absolute right-12 top-10 rounded-3xl border border-slate-300 bg-slate-100 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                                        >
                                            Branding
                                        </div>

                                        <div id="pointer" className="absolute">
                                            <svg
                                                width="16.8"
                                                height="18.2"
                                                viewBox="0 0 12 13"
                                                className="fill-red-500"
                                                stroke="white"
                                                strokeWidth="1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                                                />
                                            </svg>
                                            <span className="bg-ali relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-black">
                                                You
                                            </span>
                                        </div>
                                    </div>

                                    <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                                        <div className="flex flex-col items-center">
                                            <h3 className="mt-6   pb-1 font-bold">
                                                <span className="text-2xl md:text-4xl">
                                                    Stop just dreaming — start doing.
                                                </span>
                                            </h3>
                                        </div>
                                        <p className="mb-4 text-slate-400">
                                            Turn your vision into reality.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                href={"https://cal.com/aliimam/designali"}
                                                target="_blank"
                                            >
                                                <Button>We&apos;re just a message away.</Button>
                                            </Link>
                                            <Button asChild variant="outline" size="icon">
                                                <Link href="mailto:contact@designali.in" target="_blank">
                                                    <span className="flex items-center gap-1">
                                                        <DIcons.Mail strokeWidth={1} className="h-5 w-5" />
                                                    </span>
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" size="icon">
                                                <Link href="https://wa.me/917678432186" target="_blank">
                                                    <span className="flex items-center gap-1">
                                                        <DIcons.WhatsApp
                                                            strokeWidth={1}
                                                            className="h-4 w-4"
                                                        />
                                                    </span>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HighlighterItem>
                </div>
            </HighlightGroup>
        </section>
    );
};
