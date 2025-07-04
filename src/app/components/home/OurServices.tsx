"use client"

import { DynamicFrameLayout } from "@/app/components/ui/dynamic-frame-layout"

const demoFrames = [
    {
        id: 1,
        video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
        defaultPos: { x: 0, y: 0, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 2,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
        defaultPos: { x: 4, y: 0, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 3,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
        defaultPos: { x: 8, y: 0, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 4,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
        defaultPos: { x: 0, y: 4, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 5,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
        defaultPos: { x: 4, y: 4, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 6,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
        defaultPos: { x: 8, y: 4, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 7,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
        defaultPos: { x: 0, y: 8, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 8,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
        defaultPos: { x: 4, y: 8, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
    {
        id: 9,
        video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
        defaultPos: { x: 8, y: 8, w: 4, h: 4 },
        corner: "/file.svg",
        edgeHorizontal: "/globe.svg",
        edgeVertical: "/java.svg",
        mediaSize: 1,
        borderThickness: 1,
        borderSize: 1,
        isHovered: false,
    },
]

export default function OurServices() {
    return (
        <div className="h-screen w-screen bg-zinc-900">
            <DynamicFrameLayout
                frames={demoFrames}
                className="w-full h-full"
                hoverSize={6}
                gapSize={4}
            />
        </div>
    )
}