import React from "react";
import { MacbookScroll } from "@/app/components/ui/macbook-scroll";

export default function ScrollMackContainer() {
    return (
        <div className="overflow-hidden w-full">
            <MacbookScroll
                title={
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                }
                src={`/linear.webp`}
                showGradient={false}
                leftBadge={<TechSticker src="/python.svg" />}
                rightBadge={
                    <div className="flex space-x-2">
                        <TechSticker src="/java.svg" />
                    </div>
                }
            />
        </div>
    );
}

const TechSticker = ({ src }: { src: string }) => (
    <div className="h-10 w-10 transform -rotate-12">
        <img src={src} alt="tech sticker" className="h-full w-full object-contain" />
    </div>
);
