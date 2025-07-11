"use client"

import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User, X } from "lucide-react"

type Post = {
    id: number
    title: string
    excerpt: string
    content: string
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

interface ArticleQuickViewProps {
    post: Post
    onClose: () => void
}

export default function ArticleQuickView({ post, onClose }: ArticleQuickViewProps) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl border-0 rounded-2xl overflow-y-auto">
                <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-gray-200 z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-black">{post.title}</h2>
                        <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-10 w-10">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="p-8">
                    <div className="relative overflow-hidden rounded-lg mb-8">
                        <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-black/80 text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                                {post.category}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                        </div>
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-lg text-gray-600 leading-relaxed">{post.content}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-black mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}