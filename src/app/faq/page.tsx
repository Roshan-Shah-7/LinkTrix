"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ChevronDown, ChevronUp, Search, MessageSquare, Phone, Mail, Clock, HelpCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function FAQPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const faqCategories = [
        { id: "all", name: "All Questions", count: 24 },
        { id: "general", name: "General", count: 6 },
        { id: "services", name: "Services", count: 8 },
        { id: "pricing", name: "Pricing", count: 5 },
        { id: "technical", name: "Technical", count: 5 },
    ]

    const faqs = [
        // General Questions
        {
            id: 1,
            category: "general",
            question: "What services does Link Trix offer?",
            answer:
                "Link Trix offers comprehensive digital solutions including Software Development, Web Development, UI/UX Design, Digital Marketing, Branding, Video/Photography, and Cloud & Hosting services. We're a full-service digital agency that can handle all aspects of your online presence and business growth.",
            tags: ["services", "overview", "digital agency"],
        },
        {
            id: 2,
            category: "general",
            question: "How long has Link Trix been in business?",
            answer:
                "Link Trix has been providing digital solutions for over 8 years, serving clients ranging from startups to enterprise companies. Our experience spans across various industries and technologies, giving us the expertise to handle complex projects.",
            tags: ["experience", "company", "history"],
        },
        {
            id: 3,
            category: "general",
            question: "What industries do you work with?",
            answer:
                "We work with clients across various industries including technology, healthcare, finance, e-commerce, education, real estate, hospitality, and more. Our diverse experience allows us to understand different business needs and provide tailored solutions.",
            tags: ["industries", "clients", "experience"],
        },
        {
            id: 4,
            category: "general",
            question: "Do you work with international clients?",
            answer:
                "Yes, we work with clients globally. Our team is experienced in working across different time zones and we have successfully delivered projects for clients in North America, Europe, Asia, and Australia. We use modern communication tools to ensure seamless collaboration.",
            tags: ["international", "global", "remote"],
        },
        {
            id: 5,
            category: "general",
            question: "What makes Link Trix different from other agencies?",
            answer:
                "Our unique combination of technical expertise, creative design, and strategic thinking sets us apart. We don't just build solutions; we create comprehensive digital experiences that drive business growth. Our team stays current with the latest technologies and trends to deliver cutting-edge solutions.",
            tags: ["differentiation", "unique", "expertise"],
        },
        {
            id: 6,
            category: "general",
            question: "How do I get started with Link Trix?",
            answer:
                "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your project requirements, goals, and timeline. From there, we'll provide a detailed proposal and project plan tailored to your needs.",
            tags: ["getting started", "consultation", "process"],
        },

        // Services Questions
        {
            id: 7,
            category: "services",
            question: "Can you help with both web and mobile app development?",
            answer:
                "We specialize in both web and mobile app development. Our team can create responsive websites, progressive web apps, native iOS and Android applications, and cross-platform solutions using technologies like React Native and Flutter.",
            tags: ["web development", "mobile apps", "cross-platform"],
        },
        {
            id: 8,
            category: "services",
            question: "Do you provide ongoing maintenance and support?",
            answer:
                "Yes, we offer comprehensive maintenance and support packages for all our services. This includes regular updates, security patches, performance optimization, bug fixes, and technical support. We believe in long-term partnerships with our clients.",
            tags: ["maintenance", "support", "ongoing"],
        },
        {
            id: 9,
            category: "services",
            question: "Can you redesign my existing website?",
            answer:
                "Definitely! We specialize in website redesigns and can help modernize your existing site. We'll analyze your current website, understand your goals, and create a new design that improves user experience, performance, and conversion rates while maintaining your brand identity.",
            tags: ["redesign", "website", "modernization"],
        },
        {
            id: 10,
            category: "services",
            question: "Do you offer SEO services?",
            answer:
                "Yes, SEO is a core part of our digital marketing services. We provide comprehensive SEO including keyword research, on-page optimization, technical SEO, content strategy, link building, and performance tracking to improve your search engine rankings and organic traffic.",
            tags: ["SEO", "digital marketing", "search optimization"],
        },
        {
            id: 11,
            category: "services",
            question: "Can you help with e-commerce development?",
            answer:
                "We have extensive experience in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. We can build complete online stores with payment integration, inventory management, and all the features needed for successful online selling.",
            tags: ["e-commerce", "online store", "shopify"],
        },
        {
            id: 12,
            category: "services",
            question: "Do you provide branding services?",
            answer:
                "Yes, we offer complete branding services including logo design, visual identity systems, brand strategy, and brand guidelines. Our branding team works closely with you to create a cohesive brand identity that resonates with your target audience.",
            tags: ["branding", "logo design", "visual identity"],
        },
        {
            id: 13,
            category: "services",
            question: "Can you help migrate my website to a new platform?",
            answer:
                "Yes, we specialize in website migrations and can help you move to a new platform, hosting provider, or technology stack. We ensure minimal downtime, preserve your SEO rankings, and maintain all your existing content and functionality.",
            tags: ["migration", "platform change", "hosting"],
        },
        {
            id: 14,
            category: "services",
            question: "Do you offer video production services?",
            answer:
                "Yes, we provide comprehensive video production services including corporate videos, product demonstrations, promotional content, and social media videos. Our team handles everything from concept development to final editing and delivery.",
            tags: ["video production", "corporate videos", "content creation"],
        },

        // Pricing Questions
        {
            id: 15,
            category: "pricing",
            question: "How do you price your services?",
            answer:
                "Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We provide detailed quotes after understanding your requirements. We offer competitive rates and transparent pricing with no hidden fees.",
            tags: ["pricing", "quotes", "project-based"],
        },
        {
            id: 16,
            category: "pricing",
            question: "Do you offer payment plans?",
            answer:
                "Yes, we offer flexible payment plans for larger projects. Typically, we work with milestone-based payments where you pay as we complete different phases of the project. We can discuss payment terms that work best for your budget and cash flow.",
            tags: ["payment plans", "milestones", "flexible"],
        },
        {
            id: 17,
            category: "pricing",
            question: "Is there a minimum project size?",
            answer:
                "While we work on projects of all sizes, we do have minimum project values for certain services to ensure we can deliver quality results. Small projects start around $2,000, while larger enterprise projects can range from $50,000 to $500,000+.",
            tags: ["minimum project", "project size", "budget"],
        },
        {
            id: 18,
            category: "pricing",
            question: "Do you provide free consultations?",
            answer:
                "Yes, we offer free initial consultations where we discuss your project requirements, goals, and provide preliminary recommendations. This helps us understand your needs and allows you to get to know our team before making any commitments.",
            tags: ["free consultation", "initial meeting", "no commitment"],
        },
        {
            id: 19,
            category: "pricing",
            question: "What's included in your pricing?",
            answer:
                "Our pricing includes all development work, testing, basic training, and initial support. Depending on the project, it may also include design, content creation, and deployment. We provide detailed breakdowns so you know exactly what's included.",
            tags: ["pricing breakdown", "included services", "transparency"],
        },

        // Technical Questions
        {
            id: 20,
            category: "technical",
            question: "What technologies do you use?",
            answer:
                "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Google Cloud, and many others. We choose the best technology stack for each project based on requirements, scalability needs, and long-term maintenance considerations.",
            tags: ["technologies", "tech stack", "modern"],
        },
        {
            id: 21,
            category: "technical",
            question: "Do you follow security best practices?",
            answer:
                "Security is a top priority in all our projects. We implement industry-standard security measures including encryption, secure authentication, regular security audits, and compliance with relevant security standards like OWASP guidelines.",
            tags: ["security", "best practices", "compliance"],
        },
        {
            id: 22,
            category: "technical",
            question: "How do you ensure website performance?",
            answer:
                "We optimize for performance from the ground up using techniques like code splitting, image optimization, caching strategies, CDN implementation, and performance monitoring. We regularly test and optimize to ensure fast loading times and smooth user experiences.",
            tags: ["performance", "optimization", "speed"],
        },
        {
            id: 23,
            category: "technical",
            question: "Do you provide hosting services?",
            answer:
                "Yes, we offer comprehensive hosting and cloud services including setup, management, monitoring, and support. We work with leading providers like AWS, Google Cloud, and Vercel to ensure reliable, scalable hosting solutions.",
            tags: ["hosting", "cloud services", "infrastructure"],
        },
        {
            id: 24,
            category: "technical",
            question: "How do you handle data backup and recovery?",
            answer:
                "We implement robust backup strategies including automated daily backups, version control, and disaster recovery plans. Your data is stored securely with multiple redundancies to ensure it's always protected and recoverable.",
            tags: ["backup", "data recovery", "disaster recovery"],
        },
    ]

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

    const contactOptions = [
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: "Live Chat",
            description: "Chat with our team in real-time",
            action: "Start Chat",
            available: "Available 9 AM - 6 PM EST",
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone Support",
            description: "Speak directly with our experts",
            action: "Call Now",
            available: "+1 (555) 123-4567",
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email Support",
            description: "Send us a detailed message",
            action: "Send Email",
            available: "hello@linktrix.com",
        },
    ]

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

                                {/* Search Bar */}
                                <div className="max-w-2xl mx-auto relative">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search frequently asked questions..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 bg-white/90 backdrop-blur-sm shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {faqCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-black text-white shadow-xl"
                                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                                        }`}
                                >
                                    {category.name}
                                    <span className="ml-2 text-sm opacity-70">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-16 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        {filteredFAQs.length === 0 ? (
                            <Card className="p-12 text-center bg-white shadow-xl border-0 rounded-3xl">
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
                            </Card>
                        ) : (
                            <div className="space-y-6">
                                {filteredFAQs.map((faq) => (
                                    <Card
                                        key={faq.id}
                                        className="bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(faq.id)}
                                            className="w-full p-8 text-left hover:bg-gray-50 transition-colors duration-300"
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl font-bold text-black pr-8">{faq.question}</h3>
                                                <div className="flex-shrink-0">
                                                    {openFAQ === faq.id ? (
                                                        <ChevronUp className="h-6 w-6 text-gray-600" />
                                                    ) : (
                                                        <ChevronDown className="h-6 w-6 text-gray-600" />
                                                    )}
                                                </div>
                                            </div>
                                        </button>

                                        {openFAQ === faq.id && (
                                            <div className="px-8 pb-8">
                                                <div className="border-t border-gray-100 pt-6">
                                                    <p className="text-gray-700 leading-relaxed mb-6">{faq.answer}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {faq.tags.map((tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="secondary"
                                                                className="px-3 py-1 text-xs bg-gray-100 text-gray-600"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        )}
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
                                <Card
                                    key={index}
                                    className="p-10 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 text-center group"
                                >
                                    <div className="p-6 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                                        {option.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-black mb-4">{option.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                                    <div className="mb-6">
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                                            <Clock className="h-4 w-4" />
                                            {option.available}
                                        </div>
                                    </div>
                                    <Button className="w-full bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-xl font-semibold">
                                        {option.action}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Card>
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
                            {[
                                { title: "Our Services", description: "Explore all our digital solutions", link: "/services" },
                                { title: "Portfolio", description: "See our latest work and case studies", link: "/portfolio" },
                                { title: "About Us", description: "Learn more about our team and mission", link: "/about" },
                                { title: "Contact", description: "Get in touch for a free consultation", link: "/contact" },
                            ].map((link, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group cursor-pointer"
                                >
                                    <h3 className="text-xl font-bold text-black mb-4">{link.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{link.description}</p>
                                    <div className="flex items-center justify-center text-black group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="font-semibold">Learn More</span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
