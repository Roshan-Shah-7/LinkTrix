"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Home, Users, Briefcase, BookOpen, Phone, HelpCircle, ExternalLink, ChevronRight } from "lucide-react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"

interface SitemapItem {
    title: string
    href: string
    description?: string
    children?: SitemapItem[]
}

const sitemapData: SitemapItem[] = [
    {
        title: "Home",
        href: "/",
        description: "Welcome to Link Trix - Your digital transformation partner",
    },
    {
        title: "About Us",
        href: "/about",
        description: "Learn about our company, mission, and team",
    },
    {
        title: "Services",
        href: "/services",
        description: "Comprehensive digital solutions for your business",
        children: [
            {
                title: "Software Development",
                href: "/services/software-development",
                description: "Custom software solutions and enterprise applications",
            },
            {
                title: "Web Development",
                href: "/services/web-development",
                description: "Modern, responsive websites and web applications",
            },
            {
                title: "UI/UX Design",
                href: "/services/ui-ux-design",
                description: "User-centered design and interface development",
            },
            {
                title: "Digital Marketing",
                href: "/services/digital-marketing",
                description: "SEO, PPC, and social media marketing services",
            },
            {
                title: "Branding",
                href: "/services/branding",
                description: "Logo design, visual identity, and brand strategy",
            },
            {
                title: "Video & Photography",
                href: "/services/video-photography",
                description: "Professional video production and commercial photography",
            },
            {
                title: "Cloud & Hosting",
                href: "/services/cloud-hosting",
                description: "Cloud deployment, server management, and DevOps",
            },
        ],
    },
    {
        title: "Blog",
        href: "/blog",
        description: "Latest insights, tutorials, and industry news",
    },
    {
        title: "Contact",
        href: "/contact",
        description: "Get in touch with our team",
    },
    {
        title: "FAQ",
        href: "/faq",
        description: "Frequently asked questions and answers",
    },
    {
        title: "Sitemap",
        href: "/sitemap",
        description: "Complete site navigation and page structure",
    },
]

export default function SitemapPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filterItems = (items: SitemapItem[], term: string): SitemapItem[] => {
        return items
            .filter((item) => {
                const matchesSearch =
                    item.title.toLowerCase().includes(term.toLowerCase()) ||
                    item.description?.toLowerCase().includes(term.toLowerCase()) ||
                    item.href.toLowerCase().includes(term.toLowerCase())

                const hasMatchingChildren = item.children?.some(
                    (child) =>
                        child.title.toLowerCase().includes(term.toLowerCase()) ||
                        child.description?.toLowerCase().includes(term.toLowerCase()) ||
                        child.href.toLowerCase().includes(term.toLowerCase()),
                )

                return matchesSearch || hasMatchingChildren
            })
            .map((item) => ({
                ...item,
                children: item.children?.filter(
                    (child) =>
                        child.title.toLowerCase().includes(term.toLowerCase()) ||
                        child.description?.toLowerCase().includes(term.toLowerCase()) ||
                        child.href.toLowerCase().includes(term.toLowerCase()),
                ),
            }))
    }

    const filteredData = searchTerm ? filterItems(sitemapData, searchTerm) : sitemapData
    const totalPages = sitemapData.reduce((count, item) => {
        return count + 1 + (item.children?.length || 0)
    }, 0)

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                            <ExternalLink className="w-8 h-8" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Site<span className="text-gray-300">map</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Navigate through all pages and sections of our website. Find exactly what you're looking for with our
                        comprehensive site structure.
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                        <span className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2" />
                            {totalPages} Total Pages
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />7 Main Sections
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 bg-gray-600 rounded-full mr-2" />
                            Updated Daily
                        </span>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Search pages, sections, or descriptions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors"
                        />
                    </div>
                    {searchTerm && (
                        <p className="mt-4 text-gray-600 text-center">
                            {filteredData.length === 0
                                ? "No pages found matching your search"
                                : `Found ${filteredData.reduce((count, item) => count + 1 + (item.children?.length || 0), 0)} pages matching "${searchTerm}"`}
                        </p>
                    )}
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredData.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all pages below.</p>
                            <Button onClick={() => setSearchTerm("")} className="bg-black text-white hover:bg-gray-800">
                                Clear Search
                            </Button>
                        </div>
                    ) : (
                        <div className="grid gap-8">
                            {filteredData.map((section, index) => (
                                <Card key={section.href} className="border-2 border-gray-100 hover:border-gray-200 transition-colors">
                                    <CardContent className="p-8">
                                        {/* Main Section */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-3">
                                                    <div className="p-2 bg-black rounded-lg mr-4">
                                                        {section.href === "/" && <Home className="w-5 h-5 text-white" />}
                                                        {section.href === "/about" && <Users className="w-5 h-5 text-white" />}
                                                        {section.href === "/services" && <Briefcase className="w-5 h-5 text-white" />}
                                                        {section.href === "/blog" && <BookOpen className="w-5 h-5 text-white" />}
                                                        {section.href === "/contact" && <Phone className="w-5 h-5 text-white" />}
                                                        {section.href === "/faq" && <HelpCircle className="w-5 h-5 text-white" />}
                                                        {section.href === "/sitemap" && <ExternalLink className="w-5 h-5 text-white" />}
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={section.href}
                                                            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors flex items-center group"
                                                        >
                                                            {section.title}
                                                            <ChevronRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </Link>
                                                        <p className="text-gray-600 mt-1">{section.description}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full mr-3">{section.href}</span>
                                                    {section.children && (
                                                        <span className="text-gray-400">{section.children.length} subsections</span>
                                                    )}
                                                </div>
                                            </div>
                                            <Link href={section.href}>
                                                <Button
                                                    variant="outline"
                                                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                                                >
                                                    Visit Page
                                                </Button>
                                            </Link>
                                        </div>

                                        {/* Subsections */}
                                        {section.children && section.children.length > 0 && (
                                            <div className="border-t border-gray-100 pt-6">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Subsections</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {section.children.map((child) => (
                                                        <div key={child.href} className="group">
                                                            <Link
                                                                href={child.href}
                                                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                            >
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <h5 className="font-semibold text-black group-hover:text-gray-600 transition-colors">
                                                                        {child.title}
                                                                    </h5>
                                                                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </div>
                                                                <p className="text-sm text-gray-600 mb-2">{child.description}</p>
                                                                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">{child.href}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 bg-black text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">Quick Access</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services" className="group">
                            <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                <Briefcase className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-2">Our Services</h3>
                                <p className="text-sm text-gray-300">Explore all our digital solutions</p>
                            </div>
                        </Link>
                        <Link href="/contact" className="group">
                            <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                <Phone className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-2">Get In Touch</h3>
                                <p className="text-sm text-gray-300">Start your project with us</p>
                            </div>
                        </Link>
                        <Link href="/blog" className="group">
                            <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                <BookOpen className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-2">Latest Insights</h3>
                                <p className="text-sm text-gray-300">Read our latest articles</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
