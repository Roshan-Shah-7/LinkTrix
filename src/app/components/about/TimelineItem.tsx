"use client"

import { useInView } from "react-intersection-observer"
import { Card } from "@/app/components/ui/card"
import { Quote } from "lucide-react"

interface TimelineItemProps {
  side: "left" | "right"
  title: string
  subtitle: string
  content: string
  number: number
  hasQuote?: boolean
}

export default function TimelineItem({ side, title, subtitle, content, number, hasQuote }: TimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const contentOrder = side === "left" ? "order-last" : ""
  const textAlign = side === "left" ? "text-right" : "text-left"

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center relative transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className={`w-1/2 px-12 ${textAlign} ${contentOrder}`}>
        <p className="text-xl text-gray-600 leading-relaxed mb-2">{subtitle}</p>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>
      <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold absolute z-10">
        {number}
      </div>
      <div className="w-1/2 px-12">
        <Card className="p-8 bg-white shadow-lg border-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          {hasQuote && <Quote className="h-12 w-12 text-gray-200 mb-6" />}
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        </Card>
      </div>
    </div>
  )
}