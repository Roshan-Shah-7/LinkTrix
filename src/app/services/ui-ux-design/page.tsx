"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Palette,
    Figma,
    Users,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
    Eye,
    Layers,
    Target,
    Zap,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function UIUXDesignPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const designServices = [
        {
            icon: <Figma className="h-10 w-10" />,
            title: "Wireframing & Prototyping",
            description: "Interactive prototypes that bring your ideas to life",
            features: [
                "Low-fidelity Wireframes",
                "High-fidelity Mockups",
                "Interactive Prototypes",
                "User Flow Mapping",
                "Information Architecture",
                "Clickable Prototypes",
                "Design System Creation",
                "Responsive Layouts",
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
            startingPrice: "$3,000",
            timeline: "2-4 weeks",
            examples: ["App Prototypes", "Website Wireframes", "Dashboard Designs", "Mobile Interfaces"],
        },
        {
            icon: <Palette className="h-10 w-10" />,
            title: "Interface Design",
            description: "Beautiful, functional interfaces that users love",
            features: [
                "Visual Design",
                "Component Libraries",
                "Design Systems",
                "Brand Integration",
                "Accessibility Design",
                "Micro-interactions",
                "Icon Design",
                "Illustration",
            ],
            technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "After Effects"],
            startingPrice: "$4,000",
            timeline: "3-6 weeks",
            examples: ["Web Interfaces", "Mobile Apps", "Dashboard UI", "E-commerce Design"],
        },
        {
            icon: <Users className="h-10 w-10" />,
            title: "User Experience Research",
            description: "Data-driven insights to create user-centered designs",
            features: [
                "User Research",
                "Persona Development",
                "Journey Mapping",
                "Usability Testing",
                "A/B Testing",
                "Analytics Review",
                "Competitive Analysis",
                "User Interviews",
            ],
            technologies: ["Hotjar", "Google Analytics", "Maze", "UserTesting", "Miro", "FigJam"],
            startingPrice: "$2,500",
            timeline: "2-5 weeks",
            examples: ["User Research Studies", "Usability Audits", "Journey Maps", "Testing Reports"],
        },
    ]

    const designPrinciples = [
        {
            icon: <Eye className="h-8 w-8" />,
            title: "User-Centered Design",
            description: "Every design decision is made with the user in mind",
        },
        {
            icon: <Layers className="h-8 w-8" />,
            title: "Design Systems",
            description: "Consistent, scalable design systems for long-term success",
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Goal-Oriented",
            description: "Designs that align with your business objectives",
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Performance Focused",
            description: "Beautiful designs optimized for speed and usability",
        },
    ]

    const designProcess = [
        {
            step: "01",
            title: "Research & Discovery",
            description: "Understanding users, business goals, and market context",
            duration: "1-2 weeks",
            activities: ["User Research", "Competitive Analysis", "Stakeholder Interviews", "Requirements Gathering"],
        },
        {
            step: "02",
            title: "Information Architecture",
            description: "Organizing content and defining user flows",
            duration: "1-2 weeks",
            activities: ["Site Mapping", "User Flows", "Content Strategy", "Navigation Design"],
        },
        {
            step: "03",
            title: "Wireframing & Prototyping",
            description: "Creating low and high-fidelity designs",
            duration: "2-4 weeks",
            activities: ["Wireframes", "Interactive Prototypes", "Design Systems", "Component Libraries"],
        },
        {
            step: "04",
            title: "Testing & Refinement",
            description: "Validating designs with real users",
            duration: "1-2 weeks",
            activities: ["Usability Testing", "A/B Testing", "Design Iterations", "Final Handoff"],
        },
    ]

    const portfolioItems = [
        {
            title: "HealthTech Dashboard",
            category: "Healthcare UI/UX",
            description: "Comprehensive dashboard design for healthcare professionals with complex data visualization",
            technologies: ["Figma", "Design System", "User Research"],
            results: ["40% Faster Task Completion", "95% User Satisfaction", "Accessibility Compliant"],
            image: "/placeholder.svg?height=300&width=500",
        },
        {
            title: "FinanceApp Mobile",
            category: "Mobile App Design",
            description: "Personal finance mobile app with intuitive budgeting and investment tracking",
            technologies: ["Figma", "Prototyping", "User Testing"],
            results: ["4.9 App Store Rating", "300% User Engagement", "Award-Winning Design"],
            image: "/placeholder.svg?height=300&width=500",
        },
        {
            title: "E-learning Platform",
            category: "Web Application",
            description: "Educational platform design focused on student engagement and learning outcomes",
            technologies: ["Adobe XD", "User Journey Mapping", "A/B Testing"],
            results: ["60% Completion Rate", "Improved Learning Outcomes", "Scalable Design System"],
            image: "/placeholder.svg?height=300&width=500",
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
                                    <Palette className="w-3 h-3 mr-2 opacity-60" />
                                    Wireframing • Prototyping • Interface Design
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        UI/UX{" "}
                                        <span className="relative inline-block">
                                            Design
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        User-centered design that creates meaningful digital experiences and drives business results
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button
                                        size="lg"
                                        className="text-lg px-12 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                    >
                                        Start Your Project
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="text-lg px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 bg-white/90 backdrop-blur-sm rounded-xl font-semibold"
                                    >
                                        <Play className="mr-3 h-5 w-5" />
                                        View Portfolio
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Services */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Design Services</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive design services from research to final implementation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {designServices.map((service, index) => (
                                <Card
                                    key={index}
                                    className="p-10 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-700 group"
                                >
                                    <div className="text-center mb-8">
                                        <div className="p-6 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                <p className="text-sm text-gray-600 mb-1">Starting From</p>
                                                <p className="text-lg font-bold text-black">{service.startingPrice}</p>
                                            </div>
                                            <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                <p className="text-sm text-gray-600 mb-1">Timeline</p>
                                                <p className="text-lg font-bold text-black">{service.timeline}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-4">Key Features</h4>
                                            <ul className="space-y-2">
                                                {service.features.slice(0, 4).map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3">
                                                        <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-4">Tools</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, idx) => (
                                                    <Badge key={idx} variant="secondary" className="px-2 py-1 text-xs bg-gray-100 text-gray-700">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <Button className="w-full bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-xl font-semibold">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Principles */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Our Design Approach</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {designPrinciples.map((principle, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group"
                                >
                                    <div className="p-4 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                                        {principle.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">{principle.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Design Process</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Our structured approach ensures exceptional design outcomes
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {designProcess.map((step, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-black text-black bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                                            {step.duration}
                                        </Badge>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                                    <div>
                                        <h4 className="text-sm font-bold text-black mb-3">Key Activities</h4>
                                        <ul className="space-y-2">
                                            {step.activities.map((activity, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="h-3 w-3 text-black flex-shrink-0" />
                                                    <span className="text-xs text-gray-700">{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Design Portfolio</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {portfolioItems.map((item, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-black/80 text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                                                {item.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-bold text-black mb-2">Tools Used</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-bold text-black mb-2">Results</h4>
                                                <ul className="space-y-1">
                                                    {item.results.map((result, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <CheckCircle className="h-3 w-3 text-black flex-shrink-0" />
                                                            <span className="text-xs text-gray-700">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full relative bg-black overflow-hidden" style={{ height: "500px" }}>
                <Particles
                    particleColors={["#ffffff", "#ffffff"]}
                    particleCount={120}
                    particleSpread={10}
                    speed={0.08}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-5xl px-8">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                        Ready to Design Something Amazing?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's create user experiences that delight your customers and drive your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start Your Design Project
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            View Design Portfolio
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
