"use client"

import type React from "react"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Search,
    BookOpen,
    TrendingUp,
    Code,
    Smartphone,
    Palette,
    Zap,
    Target,
    Globe,
    Eye,
    MessageCircle,
    ChevronRight,
    CheckCircle,
    X,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"
import BlogPostCard from "@/app/components/blog/BlogPostCard"
import ArticleQuickView from "@/app/components/blog/ArticleQuickView"
import BlogPostSkeleton from "@/app/components/blog/BlogPostSkeleton"

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

export default function BlogPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [displayedPosts, setDisplayedPosts] = useState(6)
    const [newsletterEmail, setNewsletterEmail] = useState("")
    const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [selectedTrendingTopic, setSelectedTrendingTopic] = useState<string | null>(null)
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const categories = [
        { name: "All", icon: <Globe className="h-4 w-4" />, count: 24 },
        { name: "Web Development", icon: <Code className="h-4 w-4" />, count: 8 },
        { name: "Mobile Apps", icon: <Smartphone className="h-4 w-4" />, count: 6 },
        { name: "Design", icon: <Palette className="h-4 w-4" />, count: 5 },
        { name: "Strategy", icon: <Target className="h-4 w-4" />, count: 3 },
        { name: "Innovation", icon: <Zap className="h-4 w-4" />, count: 2 },
    ]

    const featuredPost: Post = {
        id: 1,
        title: "The Future of Web Development: Trends Shaping 2024",
        excerpt:
            "Explore the cutting-edge technologies and methodologies that are revolutionizing how we build digital experiences in 2024 and beyond.",
        content:
            "As we navigate through 2024, the web development landscape continues to evolve at an unprecedented pace. From AI-powered development tools to advanced frameworks, discover what's driving innovation in our industry. This is a placeholder for the full article content.",
        author: "Rajesh Hamal",
        authorRole: "Lead Developer",
        date: "December 15, 2024",
        readTime: "8 min read",
        category: "Web Development",
        image: "/placeholder.svg",
        views: 2847,
        comments: 23,
        featured: true,
        tags: ["React 19 Features", "AI in Web Development"],
    }

    const allBlogPosts: Post[] = [
        {
            id: 2,
            title: "Building Scalable Mobile Apps with React Native",
            excerpt: "Learn the best practices for creating mobile applications that can grow with your business needs.",
            content: "This is the full content for 'Building Scalable Mobile Apps with React Native'.",
            author: "Priya Sharma",
            authorRole: "Mobile Developer",
            date: "December 12, 2024",
            readTime: "6 min read",
            category: "Mobile Apps",
            image: "/placeholder.svg",
            views: 1923,
            comments: 15,
            featured: false,
            tags: ["Mobile-First Design", "Performance Optimization"],
        },
        {
            id: 3,
            title: "Design Systems: Creating Consistency at Scale",
            excerpt: "How to build and maintain design systems that ensure brand consistency across all digital touchpoints.",
            content: "This is the full content for 'Design Systems: Creating Consistency at Scale'.",
            author: "Amit Thapa",
            authorRole: "UI/UX Designer",
            date: "December 10, 2024",
            readTime: "5 min read",
            category: "Design",
            image: "/placeholder.svg",
            views: 1654,
            comments: 12,
            featured: false,
            tags: ["Accessibility Standards", "Mobile-First Design"],
        },
        {
            id: 4,
            title: "Digital Transformation Strategies for Small Businesses",
            excerpt: "Practical approaches to modernizing your business operations without breaking the bank.",
            content: "This is the full content for 'Digital Transformation Strategies for Small Businesses'.",
            author: "Sita Rai",
            authorRole: "Strategy Consultant",
            date: "December 8, 2024",
            readTime: "7 min read",
            category: "Strategy",
            image: "/placeholder.svg",
            views: 2156,
            comments: 18,
            featured: false,
            tags: ["AI in Web Development"],
        },
        {
            id: 5,
            title: "The Art of Minimalist Web Design",
            excerpt: "Why less is more when it comes to creating impactful user experiences.",
            content: "This is the full content for 'The Art of Minimalist Web Design'.",
            author: "Krishna Gurung",
            authorRole: "Creative Director",
            date: "December 5, 2024",
            readTime: "4 min read",
            category: "Design",
            image: "/placeholder.svg",
            views: 1432,
            comments: 9,
            featured: false,
            tags: ["Accessibility Standards"],
        },
        {
            id: 6,
            title: "AI Integration in Modern Web Applications",
            excerpt: "Exploring practical ways to incorporate artificial intelligence into your web projects.",
            content: "This is the full content for 'AI Integration in Modern Web Applications'.",
            author: "Binod Chaudhary",
            authorRole: "Tech Lead",
            date: "December 3, 2024",
            readTime: "9 min read",
            category: "Innovation",
            image: "/placeholder.svg",
            views: 3241,
            comments: 27,
            featured: false,
            tags: ["AI in Web Development", "React 19 Features"],
        },
        {
            id: 7,
            title: "Progressive Web Apps: The Best of Both Worlds",
            excerpt: "How PWAs are bridging the gap between web and mobile applications.",
            content: "This is the full content for 'Progressive Web Apps: The Best of Both Worlds'.",
            author: "Sunita Magar",
            authorRole: "Frontend Developer",
            date: "November 30, 2024",
            readTime: "6 min read",
            category: "Web Development",
            image: "/placeholder.svg",
            views: 1876,
            comments: 14,
            featured: false,
            tags: ["Performance Optimization", "Mobile-First Design"],
        },
        {
            id: 8,
            title: "Advanced CSS Grid Techniques for Modern Layouts",
            excerpt: "Master CSS Grid with advanced techniques for creating complex, responsive layouts.",
            content: "This is the full content for 'Advanced CSS Grid Techniques for Modern Layouts'.",
            author: "Rajesh Hamal",
            authorRole: "Lead Developer",
            date: "November 28, 2024",
            readTime: "7 min read",
            category: "Web Development",
            image: "/placeholder.svg",
            views: 2341,
            comments: 19,
            featured: false,
            tags: ["Performance Optimization"],
        },
        {
            id: 9,
            title: "User Research Methods for Better UX",
            excerpt: "Essential user research techniques to create more user-centered designs.",
            content: "This is the full content for 'User Research Methods for Better UX'.",
            author: "Amit Thapa",
            authorRole: "UI/UX Designer",
            date: "November 25, 2024",
            readTime: "8 min read",
            category: "Design",
            image: "/placeholder.svg",
            views: 1789,
            comments: 16,
            featured: false,
            tags: ["Accessibility Standards"],
        },
        {
            id: 10,
            title: "Building Cross-Platform Apps with Flutter",
            excerpt: "A comprehensive guide to developing mobile apps that work seamlessly across platforms.",
            content: "This is the full content for 'Building Cross-Platform Apps with Flutter'.",
            author: "Priya Sharma",
            authorRole: "Mobile Developer",
            date: "November 22, 2024",
            readTime: "10 min read",
            category: "Mobile Apps",
            image: "/placeholder.svg",
            views: 2567,
            comments: 21,
            featured: false,
            tags: ["Mobile-First Design"],
        },
        {
            id: 11,
            title: "The Psychology of Color in Digital Design",
            excerpt: "Understanding how color choices impact user behavior and brand perception.",
            content: "This is the full content for 'The Psychology of Color in Digital Design'.",
            author: "Krishna Gurung",
            authorRole: "Creative Director",
            date: "November 20, 2024",
            readTime: "5 min read",
            category: "Design",
            image: "/placeholder.svg",
            views: 1456,
            comments: 11,
            featured: false,
            tags: ["Accessibility Standards"],
        },
        {
            id: 12,
            title: "Microservices Architecture: A Practical Guide",
            excerpt: "Learn how to design and implement microservices for scalable applications.",
            content: "This is the full content for 'Microservices Architecture: A Practical Guide'.",
            author: "Binod Chaudhary",
            authorRole: "Tech Lead",
            date: "November 18, 2024",
            readTime: "12 min read",
            category: "Web Development",
            image: "/placeholder.svg",
            views: 3456,
            comments: 28,
            featured: false,
            tags: ["Performance Optimization"],
        },
    ]

    const trendingTopics = [
        "React 19 Features",
        "AI in Web Development",
        "Mobile-First Design",
        "Performance Optimization",
        "Accessibility Standards",
    ]

    // Filter posts based on search term, category, and trending topic
    const filteredPosts = allBlogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

        const matchesTrendingTopic =
            !selectedTrendingTopic || post.tags.some((tag) => tag.toLowerCase().includes(selectedTrendingTopic.toLowerCase()))

        return matchesSearch && matchesCategory && matchesTrendingTopic
    })

    // Handle category selection
    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName)
        setDisplayedPosts(6) // Reset displayed posts when changing category
        setSelectedTrendingTopic(null) // Clear trending topic filter
    }

    // Handle search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        setDisplayedPosts(6) // Reset displayed posts when searching
    }

    // Handle trending topic click
    const handleTrendingTopicClick = (topic: string) => {
        if (selectedTrendingTopic === topic) {
            setSelectedTrendingTopic(null) // Deselect if already selected
        } else {
            setSelectedTrendingTopic(topic)
            setSearchTerm("") // Clear search when selecting trending topic
            setSelectedCategory("All") // Reset category
            setDisplayedPosts(6)
        }
    }

    // Handle load more
    const handleLoadMore = () => {
        setDisplayedPosts((prev) => prev + 6)
    }

    // Handle clear filters
    const handleClearFilters = () => {
        setSearchTerm("")
        setSelectedCategory("All")
        setSelectedTrendingTopic(null)
        setDisplayedPosts(6)
    }

    // Handle newsletter subscription
    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!newsletterEmail || !newsletterEmail.includes("@")) {
            setNewsletterStatus("error")
            return
        }

        setNewsletterStatus("loading")

        // Simulate API call
        setTimeout(() => {
            setNewsletterStatus("success")
            setNewsletterEmail("")

            // Reset status after 3 seconds
            setTimeout(() => {
                setNewsletterStatus("idle")
            }, 3000)
        }, 1000)
    }

    // Handle featured post click
    const handleFeaturedPostClick = () => {
        setSelectedPost(featuredPost)
    }

    // Handle blog post click
    const handleBlogPostClick = (post: Post) => {
        setSelectedPost(post)
    }

    // Handle close quick view
    const handleCloseQuickView = () => {
        setSelectedPost(null)
    }

    const displayedFilteredPosts = filteredPosts.slice(0, displayedPosts)
    const hasMorePosts = displayedPosts < filteredPosts.length

    return (
        <>
            <div className="min-h-screen bg-white">
                {/* Sophisticated Background Pattern */}
                <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
                            backgroundSize: "60px 60px, 40px 40px",
                        }}
                    ></div>
                </div>

                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 overflow-hidden">
                    {/* Geometric Elements */}
                    <div className="absolute top-32 right-16 w-40 h-40 border border-gray-100/60 rotate-45 opacity-40"></div>
                    <div className="absolute bottom-32 left-16 w-28 h-28 border-2 border-gray-200/40 rotate-12 opacity-30"></div>
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-black/10 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gray-400/30 rounded-full"></div>

                    <div className="container mx-auto px-6 md:px-8 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            <div
                                className={`transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                            >
                                <div className="text-center mb-20">
                                    <Badge
                                        variant="outline"
                                        className="mb-8 text-sm font-medium border-gray-300/60 px-6 py-3 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <BookOpen className="w-3 h-3 mr-2 opacity-60" />
                                        Insights, tutorials, and industry perspectives
                                    </Badge>

                                    <div className="space-y-6 mb-12">
                                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black relative leading-tight">
                                            Our{" "}
                                            <span className="relative inline-block">
                                                Blog
                                                <div className="absolute -bottom-4 md:-bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                            </span>
                                        </h1>
                                        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                            Discover the latest trends, insights, and best practices in digital development and design.
                                        </p>
                                    </div>

                                    {/* Search and Filter */}
                                    <div className="max-w-2xl mx-auto mb-16">
                                        <div className="relative">
                                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <Input
                                                type="text"
                                                placeholder="Search articles..."
                                                value={searchTerm}
                                                onChange={handleSearch}
                                                className="h-16 pl-14 pr-6 rounded-2xl border-2 border-gray-200 focus:border-black transition-colors duration-300 text-lg bg-white/90 backdrop-blur-sm"
                                            />
                                            {searchTerm && (
                                                <Button
                                                    onClick={() => setSearchTerm("")}
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-xl hover:bg-gray-100"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Active Filters Display */}
                                    {(searchTerm || selectedCategory !== "All" || selectedTrendingTopic) && (
                                        <div className="max-w-4xl mx-auto mb-8">
                                            <div className="flex flex-wrap items-center gap-3 justify-center">
                                                <span className="text-sm text-gray-600">Active filters:</span>
                                                {searchTerm && (
                                                    <Badge variant="secondary" className="px-3 py-1">
                                                        Search: "{searchTerm}"
                                                        <Button
                                                            onClick={() => setSearchTerm("")}
                                                            variant="ghost"
                                                            size="sm"
                                                            className="ml-2 h-4 w-4 p-0 hover:bg-transparent"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                )}
                                                {selectedCategory !== "All" && (
                                                    <Badge variant="secondary" className="px-3 py-1">
                                                        Category: {selectedCategory}
                                                        <Button
                                                            onClick={() => setSelectedCategory("All")}
                                                            variant="ghost"
                                                            size="sm"
                                                            className="ml-2 h-4 w-4 p-0 hover:bg-transparent"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                )}
                                                {selectedTrendingTopic && (
                                                    <Badge variant="secondary" className="px-3 py-1">
                                                        Topic: {selectedTrendingTopic}
                                                        <Button
                                                            onClick={() => setSelectedTrendingTopic(null)}
                                                            variant="ghost"
                                                            size="sm"
                                                            className="ml-2 h-4 w-4 p-0 hover:bg-transparent"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                )}
                                                <Button
                                                    onClick={handleClearFilters}
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-xs px-3 py-1 border-gray-300 hover:bg-gray-100 bg-transparent"
                                                >
                                                    Clear All
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories and Trending */}
                <section className="py-16 bg-gradient-to-b from-gray-50/80 to-white relative">
                    <div className="container mx-auto px-6 md:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                                {/* Categories */}
                                <div className="lg:col-span-3">
                                    <h2 className="text-2xl font-bold text-black mb-8">Browse by Category</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {categories.map((category) => (
                                            <Button
                                                key={category.name}
                                                variant={selectedCategory === category.name ? "default" : "outline"}
                                                onClick={() => handleCategorySelect(category.name)}
                                                className={`h-auto p-4 flex flex-col items-center justify-center gap-2 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${selectedCategory === category.name
                                                    ? "bg-black text-white shadow-xl"
                                                    : "border-2 border-gray-200 text-black hover:bg-black hover:text-white bg-white"
                                                    }`}
                                            >
                                                {category.icon}
                                                <span className="text-sm font-semibold text-center">{category.name}</span>
                                                <Badge
                                                    variant="secondary"
                                                    className={`text-xs ${selectedCategory === category.name ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                                                        }`}
                                                >
                                                    {category.count}
                                                </Badge>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Trending Topics */}
                                <div>
                                    <h2 className="text-2xl font-bold text-black mb-8">Trending Topics</h2>
                                    <Card className="p-8 bg-white shadow-xl border-0 rounded-2xl">
                                        <div className="flex flex-wrap gap-3">
                                            {trendingTopics.map((topic, index) => (
                                                <Badge
                                                    key={index}
                                                    variant={selectedTrendingTopic === topic ? "default" : "secondary"}
                                                    onClick={() => handleTrendingTopicClick(topic)}
                                                    className={`cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${selectedTrendingTopic === topic ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Post */}
                {!searchTerm && selectedCategory === "All" && !selectedTrendingTopic && (
                    <section className="py-20 relative bg-white">
                        <div className="container mx-auto px-6 md:px-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-black"></div>
                                        <h2 className="text-4xl md:text-5xl font-black text-black">Featured Article</h2>
                                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-black"></div>
                                    </div>
                                </div>

                                <Card
                                    className="overflow-hidden bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-700 group cursor-pointer"
                                    onClick={handleFeaturedPostClick}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={"/placeholder.svg"}
                                                alt={featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold">
                                                    {featuredPost.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                                            <div className="space-y-6">
                                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                                    {featuredPost.title}
                                                </h3>
                                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>

                                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <User className="h-4 w-4" />
                                                        <span>{featuredPost.author}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{featuredPost.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{featuredPost.readTime}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between pt-6">
                                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                                        <div className="flex items-center gap-2">
                                                            <Eye className="h-4 w-4" />
                                                            <span>{featuredPost.views.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MessageCircle className="h-4 w-4" />
                                                            <span>{featuredPost.comments}</span>
                                                        </div>
                                                    </div>

                                                    <Button className="bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 rounded-xl font-semibold">
                                                        Read Article
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* Blog Posts Grid */}
                <section className="py-20 bg-gradient-to-b from-gray-50/80 to-white relative">
                    <div className="container mx-auto px-6 md:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
                                    {searchTerm || selectedCategory !== "All" || selectedTrendingTopic
                                        ? "Search Results"
                                        : "Latest Articles"}
                                </h2>
                                <div className="w-24 h-2 bg-gradient-to-r from-black to-gray-600 rounded-full"></div>
                                {filteredPosts.length > 0 && (
                                    <p className="text-gray-600 mt-4">
                                        Showing {displayedFilteredPosts.length} of {filteredPosts.length} articles
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                                {displayedFilteredPosts.length > 0
                                    ? displayedFilteredPosts.map((post) => (
                                        <BlogPostCard key={post.id} post={post} onClick={handleBlogPostClick} />
                                    ))
                                    : Array.from({ length: 6 }).map((_, index) => <BlogPostSkeleton key={index} />)}
                            </div>

                            {filteredPosts.length === 0 && (
                                <div className="text-center py-20">
                                    <div className="max-w-md mx-auto">
                                        <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold text-black mb-4">No articles found</h3>
                                        <p className="text-gray-600 mb-8">Try adjusting your search terms or browse different categories.</p>
                                        <Button
                                            onClick={handleClearFilters}
                                            className="bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-xl font-semibold"
                                        >
                                            Clear Filters
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Load More */}
                            {hasMorePosts && (
                                <div className="text-center mt-16">
                                    <Button
                                        onClick={handleLoadMore}
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 bg-white rounded-xl font-semibold"
                                    >
                                        Load More Articles ({filteredPosts.length - displayedPosts} remaining)
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA with Particles */}
                <section className="w-full relative bg-black overflow-hidden" style={{ height: "400px" }}>
                    <div className="absolute inset-0">
                        <Particles
                            particleColors={["#ffffff", "#ffffff"]}
                            particleCount={100}
                            particleSpread={10}
                            speed={0.08}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                        />
                    </div>
                    <div className="bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light mb-8">
                            Get the latest insights and tutorials delivered to your inbox.
                        </p>

                        {newsletterStatus === "success" ? (
                            <div className="flex items-center justify-center gap-3 text-green-400 text-lg sm:text-xl">
                                <CheckCircle className="h-6 w-6" />
                                <span>Successfully subscribed! Thank you.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className={`h-12 sm:h-14 flex-1 rounded-xl border-2 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-300 focus:border-white transition-colors duration-300 ${newsletterStatus === "error" ? "border-red-400" : "border-white/20"
                                        }`}
                                    disabled={newsletterStatus === "loading"}
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={newsletterStatus === "loading"}
                                    className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        )}

                        {newsletterStatus === "error" && (
                            <p className="text-red-400 text-sm mt-2">Please enter a valid email address.</p>
                        )}
                    </div>
                </section>
            </div>
            {selectedPost && <ArticleQuickView post={selectedPost} onClose={handleCloseQuickView} />}
        </>
    )
}
