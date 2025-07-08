"use client"

import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Search, HelpCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import FAQItem from "@/app/components/FAQItem"
import ContactCard from "@/app/components/ContactCard"
import QuickLinkCard from "@/app/components/QuickLinkCard"
import { faqCategories as initialFaqCategories, faqs } from "@/app/data/faqData"
import { contactOptions } from "@/app/data/contactOptions"
import { quickLinks } from "@/app/data/quickLinks"
import { Input } from "@/app/components/ui/input"

export default function FAQPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        setOpenFAQ(null); // Close any open FAQ when search term or category changes
    }, [searchTerm, activeCategory]);

    const getCategoryCount = (categoryId: string) => {
        if (categoryId === "all") {
            return faqs.length;
        }
        return faqs.filter(faq => faq.category === categoryId).length;
    };

    const faqCategories = initialFaqCategories.map(category => ({
        ...category,
        count: getCategoryCount(category.id)
    }));

    const filteredFAQs = faqs.filter((faq) => {
        const matchesCategory = activeCategory === "all" || faq.category === activeCategory
        const matchesSearch =
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        return matchesCategory && matchesSearch
    })

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Background Pattern */}
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
                <div className="absolute top-32 right-16 w-40 h-40 border border-gray-100/60 rotate-45 opacity-40"></div>
                <div className="absolute bottom-32 left-16 w-28 h-28 border-2 border-gray-200/40 rotate-12 opacity-30"></div>

                <div className="container mx-auto px-6 md:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div
                            className={`transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                        >
                            <div className="text-center mb-20">
                                <Badge
                                    variant="outline"
                                    className="mb-8 text-sm font-medium border-gray-300/60 px-6 py-3 bg-white/80 backdrop-blur-sm shadow-sm"
                                >
                                    <HelpCircle className="w-3 h-3 mr-2 opacity-60" />
                                    Frequently Asked Questions
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        FAQ &{" "}
                                        <span className="relative inline-block">
                                            Support
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Find answers to common questions about our services, processes, and how we can help your business
                                        grow
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area: Search, Categories, and FAQ List */}
            <section className="py-16 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Sticky Search and Categories */}
                        <div className="lg:col-span-1 sticky top-24 h-fit">
                            <div className="max-w-md mx-auto lg:mx-0 relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition-all duration-300 shadow-sm"
                                />
                            </div>
                            <div className="flex flex-wrap lg:flex-col justify-center lg:justify-start gap-4">
                                {faqCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                                            ? "bg-black text-white shadow-xl"
                                            : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                                            } ${category.id !== "all" ? "w-full" : ""}`}
                                    >
                                        {category.name}
                                        <span className="ml-2 text-sm opacity-70">({category.count})</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: FAQ List */}
                        <div className="lg:col-span-2">
                            {filteredFAQs.length === 0 ? (
                                <div className="p-12 text-center bg-white shadow-xl border-0 rounded-3xl">
                                    <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold text-black mb-4">No questions found</h3>
                                    <p className="text-gray-600 mb-8">Try adjusting your search terms or browse a different category.</p>
                                    <Button
                                        onClick={() => {
                                            setSearchTerm("")
                                            setActiveCategory("all")
                                        }}
                                        className="bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-xl font-semibold"
                                    >
                                        Show All Questions
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {filteredFAQs.map((faq) => (
                                        <FAQItem
                                            key={faq.id}
                                            id={faq.id}
                                            question={faq.question}
                                            answer={faq.answer}
                                            tags={faq.tags}
                                            isOpen={openFAQ === faq.id}
                                            onToggle={toggleFAQ}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Still Need Help?</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Can't find the answer you're looking for? Our support team is here to help you with any questions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {contactOptions.map((option, index) => (
                                <ContactCard
                                    key={index}
                                    icon={option.icon}
                                    title={option.title}
                                    description={option.description}
                                    action={option.action}
                                    available={option.available}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Quick Links</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {quickLinks.map((link, index) => (
                                <QuickLinkCard
                                    key={index}
                                    title={link.title}
                                    description={link.description}
                                    link={link.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
