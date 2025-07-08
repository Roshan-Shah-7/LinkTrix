"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Code,
    Smartphone,
    Monitor,
    Settings,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function SoftwareDevelopmentPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSubService, setActiveSubService] = useState(0)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const subServices = [
        {
            icon: <Smartphone className="h-10 w-10" />,
            title: "Mobile Applications",
            description: "Native and cross-platform mobile apps for iOS and Android",
            features: [
                "Native iOS Development (Swift)",
                "Native Android Development (Kotlin)",
                "Cross-Platform with React Native",
                "Cross-Platform with Flutter",
                "App Store Optimization",
                "Push Notifications",
                "Offline Functionality",
                "In-App Purchases",
            ],
            technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
            startingPrice: "$12,000",
            timeline: "8-16 weeks",
            examples: ["E-commerce Apps", "Social Media Apps", "Fitness Tracking", "Food Delivery"],
        },
        {
            icon: <Monitor className="h-10 w-10" />,
            title: "Desktop Applications",
            description: "Powerful desktop software for Windows, macOS, and Linux",
            features: [
                "Cross-Platform Desktop Apps",
                "Native Windows Applications",
                "macOS Applications",
                "Linux Applications",
                "System Integration",
                "File Management",
                "Database Integration",
                "Real-time Updates",
            ],
            technologies: ["Electron", "Tauri", "Qt", "C#/.NET", "Python", "Java"],
            startingPrice: "$15,000",
            timeline: "10-20 weeks",
            examples: ["Business Management", "Data Analysis Tools", "Creative Software", "Productivity Apps"],
        },
        {
            icon: <Settings className="h-10 w-10" />,
            title: "Custom Development Tools",
            description: "Specialized tools and utilities tailored to your workflow",
            features: [
                "Automation Scripts",
                "Data Processing Tools",
                "API Integration Tools",
                "Custom Plugins",
                "Workflow Optimization",
                "Batch Processing",
                "Report Generation",
                "System Monitoring",
            ],
            technologies: ["Python", "Node.js", "Go", "Rust", "Shell Scripting", "PowerShell"],
            startingPrice: "$8,000",
            timeline: "4-12 weeks",
            examples: ["Data Migration Tools", "Reporting Systems", "Integration Platforms", "Monitoring Tools"],
        },
    ]

    const developmentProcess = [
        {
            step: "01",
            title: "Requirements Analysis",
            description: "Deep dive into your business needs and technical requirements",
            duration: "1-2 weeks",
            activities: [
                "Stakeholder Interviews",
                "Technical Feasibility Study",
                "Platform Selection",
                "Architecture Planning",
            ],
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Create user experience designs and interactive prototypes",
            duration: "2-3 weeks",
            activities: ["UI/UX Design", "Interactive Prototypes", "User Flow Mapping", "Technical Specifications"],
        },
        {
            step: "03",
            title: "Development & Integration",
            description: "Build your software with regular testing and integration",
            duration: "6-16 weeks",
            activities: ["Agile Development", "Code Reviews", "Testing", "Third-party Integrations"],
        },
        {
            step: "04",
            title: "Testing & Deployment",
            description: "Comprehensive testing and deployment to your target platforms",
            duration: "2-3 weeks",
            activities: ["Quality Assurance", "Performance Testing", "App Store Submission", "Deployment"],
        },
    ]

    const technologies = [
        { name: "React Native", category: "Mobile", description: "Cross-platform mobile development" },
        { name: "Flutter", category: "Mobile", description: "Google's UI toolkit for mobile" },
        { name: "Swift", category: "iOS", description: "Native iOS development" },
        { name: "Kotlin", category: "Android", description: "Modern Android development" },
        { name: "Electron", category: "Desktop", description: "Cross-platform desktop apps" },
        { name: "Python", category: "Backend", description: "Versatile programming language" },
        { name: "Node.js", category: "Backend", description: "JavaScript runtime for servers" },
        { name: "Firebase", category: "Backend", description: "Google's mobile platform" },
    ]

    const portfolioItems = [
        {
            title: "FinanceTracker Pro",
            category: "Mobile App",
            description: "Personal finance management app with AI-powered insights",
            technologies: ["React Native", "Node.js", "MongoDB"],
            results: ["50K+ Downloads", "4.8 App Store Rating", "Featured by Apple"],
        },
        {
            title: "DataSync Desktop",
            category: "Desktop Application",
            description: "Enterprise data synchronization tool for large organizations",
            technologies: ["Electron", "Python", "PostgreSQL"],
            results: ["99.9% Uptime", "500% Faster Processing", "Enterprise Ready"],
        },
        {
            title: "AutoReport Generator",
            category: "Custom Tool",
            description: "Automated reporting system for marketing agencies",
            technologies: ["Python", "APIs", "PDF Generation"],
            results: ["80% Time Saved", "100% Accuracy", "Multi-platform Support"],
        },
    ]

    const faqs = [
        {
            question: "What platforms do you develop for?",
            answer:
                "We develop for iOS, Android, Windows, macOS, Linux, and web platforms. We can also create cross-platform solutions that work across multiple platforms with a single codebase.",
        },
        {
            question: "How do you ensure the security of the software?",
            answer:
                "We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with relevant security standards like OWASP guidelines.",
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer:
                "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements based on your needs.",
        },
        {
            question: "Can you integrate with existing systems?",
            answer:
                "Absolutely. We specialize in creating software that integrates seamlessly with your existing systems, databases, and third-party services through APIs and custom integrations.",
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
                                    <Code className="w-3 h-3 mr-2 opacity-60" />
                                    Mobile Apps • Desktop Apps • Custom Tools
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Software{" "}
                                        <span className="relative inline-block">
                                            Development
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Custom software solutions that transform your ideas into powerful, scalable applications
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

            {/* Sub-Services Section */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Our Expertise</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive software development services across all major platforms
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {subServices.map((service, index) => (
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
                                            <h4 className="text-lg font-bold text-black mb-4">Technologies</h4>
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

            {/* Development Process */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Development Process</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Our proven methodology ensures successful software delivery
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {developmentProcess.map((step, index) => (
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

            {/* Technologies */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Technologies We Use</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {technologies.map((tech, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                                >
                                    <h3 className="text-xl font-bold text-black mb-2">{tech.name}</h3>
                                    <Badge variant="secondary" className="mb-4 bg-gray-100 text-gray-700">
                                        {tech.category}
                                    </Badge>
                                    <p className="text-sm text-gray-600">{tech.description}</p>
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
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Recent Projects</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {portfolioItems.map((item, index) => (
                                <Card
                                    key={index}
                                    className="p-10 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="mb-6">
                                        <Badge className="bg-black text-white mb-4">{item.category}</Badge>
                                        <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Technologies</h4>
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
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">FAQ</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <Card
                                    key={index}
                                    className="p-10 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl transition-all duration-500"
                                >
                                    <h3 className="text-xl font-bold text-black mb-4">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
                        Ready to Build Your Software?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's discuss your software development needs and create a solution that drives your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start Your Project
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Download Case Studies
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
