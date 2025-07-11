"use client"

import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User } from "lucide-react"
import { useInView } from "react-intersection-observer"

type Post = {
    id: number
    title: string
    excerpt: string
    content: string // Added content property
    author: string
    authorRole: string
    date: string
    readTime: string
    category: string
    image: string
    views: number
    comments: number
    featured: boolean
    tags: string[]
}

interface BlogPostCardProps {
    post: Post
    onClick: (post: Post) => void
}

export default function BlogPostCard({ post, onClick }: BlogPostCardProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <Card
                key={post.id}
                className="overflow-hidden bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full flex flex-col"
                onClick={() => onClick(post)}
            >
                <div className="relative overflow-hidden">
                    <img
                        src={"/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-black/80 text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                            {post.category}
                        </Badge>
                    </div>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                    <div className="space-y-4 flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 pt-4 mt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-auto">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.comments}</span>
                            </div>
                        </div>

                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg font-semibold p-2"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}