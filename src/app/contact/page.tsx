"use client"

import type React from "react"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Calendar,
    Globe,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    ArrowRight,
    CheckCircle,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: "",
    })

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
    }

    const contactMethods = [
        {
            icon: <Phone className="h-8 w-8" />,
            title: "Call Us",
            description: "Speak directly with our team",
            contact: "+977-9863093712",
            action: "Call Now",
            href: "tel:+9779863093712",
        },
        {
            icon: <Mail className="h-8 w-8" />,
            title: "Email Us",
            description: "Get in touch via email",
            contact: "linktrikx@gmail.com",
            action: "Send Email",
            href: "mailto:linktrikx@gmail.com",
        },
        {
            icon: <MessageSquare className="h-8 w-8" />,
            title: "Live Chat",
            description: "Chat with us in real-time",
            contact: "Available 10 AM - 6 PM NPT",
            action: "Start Chat",
            href: "https://wa.me/9779863093712", // WhatsApp link
        },
    ]

    const officeInfo = [
        {
            icon: <MapPin className="h-6 w-6" />,
            label: "Address",
            value: "Chakrapath, Kathmandu, Nepal",
        },
        {
            icon: <Clock className="h-6 w-6" />,
            label: "Business Hours",
            value: "Mon - Fri: 10 AM - 6 PM NPT",
        },
        {
            icon: <Globe className="h-6 w-6" />,
            label: "Time Zone",
            value: "Nepal Standard Time (UTC+5:45)",
        },
    ]

    const projectTypes = [
        "Web Development",
        "Mobile App Development",
        "Custom Software",
        "Brand Identity",
        "Digital Strategy",
        "Technical Consulting",
        "Other",
    ]

    const budgetRanges = [
        "Under $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+",
        "Let's Discuss",
    ]

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer:
                "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation.",
        },
        {
            question: "Do you work with international clients?",
            answer: "We work with clients globally and are experienced in remote collaboration across different time zones.",
        },
        {
            question: "What's your development process?",
            answer:
                "We follow an agile approach with regular check-ins, transparent communication, and iterative development to ensure your vision comes to life.",
        },
    ]

    return (
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
                                    <MessageSquare className="w-3 h-3 mr-2 opacity-60" />
                                    Ready to start your project? Let's talk.
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="md:text-2xl lg:text-6xl font-black tracking-tight text-black relative leading-none">
                                        Get In{" "}
                                        <span className="relative inline-block">
                                            Touch
                                            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Let's discuss your project and explore how we can bring your digital vision to life
                                    </p>
                                </div>
                            </div>

                            {/* Contact Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                                {contactMethods.map((method, index) => (
                                    <Card
                                        key={index}
                                        className="p-10 bg-white shadow-xl border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl group cursor-pointer"
                                    >
                                        <div className="text-center space-y-6">
                                            <div className="p-6 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                                                {method.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-black mb-2">{method.title}</h3>
                                                <p className="text-gray-600 mb-4">{method.description}</p>
                                                <p className="text-lg font-semibold text-black mb-6">{method.contact}</p>
                                                <Button
                                                    variant="outline"
                                                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl font-semibold bg-transparent"
                                                    onClick={() => window.open(method.href, "_blank")}
                                                >
                                                    {method.action}
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            {/* Form */}
                            <div className="lg:sticky top-20">
                                <div className="mb-12">
                                    <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Start Your Project</h2>
                                    <div className="w-24 h-2 bg-gradient-to-r from-black to-gray-600 rounded-full mb-6"></div>
                                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                                        Tell us about your project and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                <Card className="p-12 bg-white shadow-2xl border-0 rounded-3xl">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-black mb-3">
                                                    Full Name *
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="h-14 rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-black mb-3">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="h-14 rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-semibold text-black mb-3">
                                                    Company Name
                                                </label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="h-14 rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="project" className="block text-sm font-semibold text-black mb-3">
                                                    Project Type *
                                                </label>
                                                <select
                                                    id="project"
                                                    name="project"
                                                    required
                                                    value={formData.project}
                                                    onChange={handleInputChange}
                                                    className="h-14 w-full rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300 px-4 bg-white"
                                                >
                                                    <option value="">Select project type</option>
                                                    {projectTypes.map((type) => (
                                                        <option key={type} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-semibold text-black mb-3">
                                                Project Budget
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="h-14 w-full rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300 px-4 bg-white"
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map((range) => (
                                                    <option key={range} value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-black mb-3">
                                                Project Details *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={6}
                                                className="rounded-xl border-2 border-gray-200 focus:border-black transition-colors duration-300 resize-none"
                                                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full text-lg px-8 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                        >
                                            Send Message
                                            <Send className="ml-3 h-5 w-5" />
                                        </Button>
                                    </form>
                                </Card>
                            </div>

                            {/* Office Info & Additional Details */}
                            <div className="space-y-12">
                                <Card className="p-12 bg-white shadow-2xl border-0 rounded-3xl">
                                    <h3 className="text-3xl font-bold text-black mb-8">Our Office</h3>
                                    <div className="space-y-6">
                                        {officeInfo.map((info, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="p-3 bg-gray-100 rounded-xl">{info.icon}</div>
                                                <div>
                                                    <p className="font-semibold text-black">{info.label}</p>
                                                    <p className="text-gray-600">{info.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                <Card className="p-12 bg-black text-white shadow-2xl border-0 rounded-3xl">
                                    <h3 className="text-3xl font-bold mb-8">Why Choose Link Trix?</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold">Expert Team</p>
                                                <p className="text-gray-300">Experienced developers and designers</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold">Transparent Process</p>
                                                <p className="text-gray-300">Clear communication and regular updates</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold">Quality Assurance</p>
                                                <p className="text-gray-300">Rigorous testing and quality control</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold">Ongoing Support</p>
                                                <p className="text-gray-300">Post-launch maintenance and support</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-12 bg-white shadow-2xl border-0 rounded-3xl">
                                    <h3 className="text-3xl font-bold text-black mb-8">Connect With Us</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl bg-transparent"
                                            onClick={() => window.open("https://www.linkedin.com/company/linktrix", "_blank")}
                                        >
                                            <Linkedin className="h-5 w-5 mr-2" />
                                            LinkedIn
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl bg-transparent"
                                            onClick={() => window.open("https://twitter.com/linktrix", "_blank")}
                                        >
                                            <Twitter className="h-5 w-5 mr-2" />
                                            Twitter
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl bg-transparent"
                                            onClick={() => window.open("https://www.instagram.com/linktrix", "_blank")}
                                        >
                                            <Instagram className="h-5 w-5 mr-2" />
                                            Instagram
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl bg-transparent"
                                            onClick={() => window.open("https://www.facebook.com/linktrix", "_blank")}
                                        >
                                            <Facebook className="h-5 w-5 mr-2" />
                                            Facebook
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Quick answers to common questions about our process and services.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <Card
                                    key={index}
                                    className="p-12 bg-white shadow-xl border-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-2xl"
                                >
                                    <h3 className="text-2xl font-bold text-black mb-4">{faq.question}</h3>
                                    <div className="w-16 h-1 bg-gray-300 mb-6 rounded-full"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
