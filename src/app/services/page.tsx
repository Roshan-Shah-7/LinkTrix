"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Code,
    Palette,
    Target,
    Zap,
    Globe,
    ArrowRight,
    CheckCircle,
    Settings,
    ChevronRight,
    Play,
    Download,
    MessageSquare,
    Camera,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function ServicesPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeService, setActiveService] = useState(0)
    const [activeProcess, setActiveProcess] = useState(0)

    useEffect(() => {
        setIsVisible(true)

        // Auto-rotate active service every 5 seconds
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % mainServices.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const mainServices = [
        {
            icon: <Code className="h-12 w-12" />,
            title: "Software Development",
            description: "Custom software solutions tailored to your business needs",
            features: [
                "Mobile Applications",
                "Desktop Applications",
                "Custom Development Tools",
                "Cross-Platform Solutions",
                "API Integration",
            ],
            technologies: ["React Native", "Flutter", "Electron", "Swift", "Kotlin", "Python"],
            startingPrice: "$8,000",
            timeline: "6-16 weeks",
            color: "from-black to-gray-700",
        },
        {
            icon: <Globe className="h-12 w-12" />,
            title: "Web Development",
            description: "Modern websites and web applications that drive results",
            features: [
                "Custom Websites",
                "Web Applications",
                "E-commerce Platforms",
                "Content Management Systems",
                "Progressive Web Apps",
            ],
            technologies: ["React", "Next.js", "TypeScript", "Node.js", "Shopify", "WordPress"],
            startingPrice: "$5,000",
            timeline: "4-12 weeks",
            color: "from-gray-800 to-black",
        },
        {
            icon: <Palette className="h-12 w-12" />,
            title: "UI/UX Design",
            description: "User-centered design that creates meaningful digital experiences",
            features: [
                "Wireframing & Prototyping",
                "Interface Design",
                "User Experience Research",
                "Design Systems",
                "Usability Testing",
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro"],
            startingPrice: "$3,000",
            timeline: "3-8 weeks",
            color: "from-gray-700 to-gray-900",
        },
        {
            icon: <Target className="h-12 w-12" />,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your business",
            features: [
                "Search Engine Optimization",
                "Pay-Per-Click Advertising",
                "Social Media Marketing",
                "Content Strategy",
                "Analytics & Reporting",
            ],
            technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Hootsuite", "Mailchimp"],
            startingPrice: "$2,000",
            timeline: "2-6 weeks",
            color: "from-gray-600 to-black",
        },
        {
            icon: <Zap className="h-12 w-12" />,
            title: "Branding",
            description: "Complete brand identity development and strategy",
            features: [
                "Logo Design",
                "Visual Identity Systems",
                "Brand Strategy",
                "Brand Guidelines",
                "Marketing Collateral",
            ],
            technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research"],
            startingPrice: "$4,000",
            timeline: "4-10 weeks",
            color: "from-black to-gray-800",
        },
        {
            icon: <Camera className="h-12 w-12" />,
            title: "Video/Photography",
            description: "Professional video production and photography services",
            features: ["Video Production", "Commercial Photography", "Video Editing", "Motion Graphics", "Content Creation"],
            technologies: ["Adobe Premiere", "After Effects", "Final Cut Pro", "Photoshop", "Lightroom"],
            startingPrice: "$3,500",
            timeline: "2-8 weeks",
            color: "from-gray-900 to-black",
        },
        {
            icon: <Globe className="h-12 w-12" />,
            title: "Cloud & Hosting",
            description: "Reliable infrastructure and deployment solutions",
            features: [
                "Cloud Deployment",
                "Web Hosting Solutions",
                "Server Setup & Management",
                "DevOps Implementation",
                "Performance Optimization",
            ],
            technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"],
            startingPrice: "$1,500",
            timeline: "1-4 weeks",
            color: "from-gray-800 to-gray-900",
        },
    ]

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We start by understanding your business, goals, and requirements through detailed consultation.",
            duration: "1-2 weeks",
            deliverables: ["Project Scope", "Technical Requirements", "Timeline & Budget", "Team Assignment"],
        },
        {
            step: "02",
            title: "Design & Architecture",
            description: "Creating wireframes, designs, and technical architecture that align with your vision.",
            duration: "2-3 weeks",
            deliverables: ["Wireframes", "UI/UX Designs", "Technical Architecture", "Database Design"],
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Building your solution with regular updates and rigorous testing throughout the process.",
            duration: "4-12 weeks",
            deliverables: ["Working Prototypes", "Regular Updates", "Quality Assurance", "Performance Testing"],
        },
        {
            step: "04",
            title: "Launch & Support",
            description: "Deploying your solution and providing ongoing support to ensure continued success.",
            duration: "1-2 weeks",
            deliverables: ["Live Deployment", "Training Materials", "Documentation", "Ongoing Support"],
        },
    ]

    const technologies = [
        { name: "React", category: "Frontend", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Next.js", category: "Framework", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Node.js", category: "Backend", logo: "/placeholder.svg?height=60&width=60" },
        { name: "TypeScript", category: "Language", logo: "/placeholder.svg?height=60&width=60" },
        { name: "React Native", category: "Mobile", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Flutter", category: "Mobile", logo: "/placeholder.svg?height=60&width=60" },
        { name: "PostgreSQL", category: "Database", logo: "/placeholder.svg?height=60&width=60" },
        { name: "MongoDB", category: "Database", logo: "/placeholder.svg?height=60&width=60" },
        { name: "AWS", category: "Cloud", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Figma", category: "Design", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Docker", category: "DevOps", logo: "/placeholder.svg?height=60&width=60" },
        { name: "Git", category: "Version Control", logo: "/placeholder.svg?height=60&width=60" },
    ]

    const handleServiceClick = (index: number) => {
        setActiveService(index)
    }

    const handleProcessClick = (index: number) => {
        setActiveProcess(index)
    }

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
                                    <Settings className="w-3 h-3 mr-2 opacity-60" />
                                    Comprehensive digital solutions for modern businesses
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Our{" "}
                                        <span className="relative inline-block">
                                            Services
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        From concept to launch, we provide end-to-end digital solutions that drive growth and innovation
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
                                        View Our Work
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">What We Do</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                We specialize in creating digital solutions that combine cutting-edge technology with thoughtful design
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Service Navigation */}
                            <div className="space-y-4">
                                {mainServices.map((service, index) => (
                                    <Card
                                        key={index}
                                        className={`p-8 cursor-pointer transition-all duration-500 border-0 rounded-2xl ${activeService === index
                                            ? "bg-black text-white shadow-2xl scale-105"
                                            : "bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                            }`}
                                        onClick={() => handleServiceClick(index)}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div
                                                className={`p-4 rounded-2xl transition-all duration-300 ${activeService === index ? "bg-white/20 text-white" : "bg-gray-100 text-black"
                                                    }`}
                                            >
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                                <p className={`leading-relaxed ${activeService === index ? "text-gray-200" : "text-gray-600"}`}>
                                                    {service.description}
                                                </p>
                                            </div>
                                            <ChevronRight
                                                className={`h-6 w-6 transition-transform duration-300 ${activeService === index ? "rotate-90" : ""
                                                    }`}
                                            />
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Service Details */}
                            <div className="sticky top-30">
                                <Card className="p-12 bg-white shadow-2xl border-0 rounded-3xl overflow-hidden relative">
                                    <div
                                        className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${mainServices[activeService].color} rounded-t-3xl`}
                                    ></div>
                                    <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-gray-100 rounded-full opacity-20"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="p-6 bg-black rounded-2xl text-white shadow-xl">
                                                {mainServices[activeService].icon}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-black mb-2">{mainServices[activeService].title}</h3>
                                                <p className="text-gray-600">{mainServices[activeService].description}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <h4 className="text-lg font-bold text-black mb-4">Key Features</h4>
                                                <ul className="space-y-3">
                                                    {mainServices[activeService].features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3">
                                                            <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                                                            <span className="text-gray-700">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-black mb-4">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {mainServices[activeService].technologies.map((tech, idx) => (
                                                        <Badge key={idx} variant="secondary" className="px-3 py-1 bg-gray-100 text-gray-700">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 mb-8">
                                            <div className="text-center p-6 bg-gray-50 rounded-2xl">
                                                <p className="text-sm text-gray-600 mb-2">Starting From</p>
                                                <p className="text-2xl font-bold text-black">{mainServices[activeService].startingPrice}</p>
                                            </div>
                                            <div className="text-center p-6 bg-gray-50 rounded-2xl">
                                                <p className="text-sm text-gray-600 mb-2">Timeline</p>
                                                <p className="text-2xl font-bold text-black">{mainServices[activeService].timeline}</p>
                                            </div>
                                        </div>

                                        <Button
                                            size="lg"
                                            className="w-full text-lg py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                        >
                                            Get Started with {mainServices[activeService].title}
                                            <ArrowRight className="ml-3 h-5 w-5" />
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Our Process</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                A proven methodology that ensures successful project delivery from start to finish
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Process Steps */}
                            <div className="space-y-6">
                                {processSteps.map((step, index) => (
                                    <Card
                                        key={index}
                                        className={`p-8 cursor-pointer transition-all duration-500 border-0 rounded-2xl ${activeProcess === index
                                            ? "bg-black text-white shadow-2xl scale-105"
                                            : "bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                            }`}
                                        onClick={() => handleProcessClick(index)}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div
                                                className={`text-4xl font-black w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${activeProcess === index ? "bg-white/20 text-white" : "bg-gray-100 text-black"
                                                    }`}
                                            >
                                                {step.step}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                                <p
                                                    className={`leading-relaxed mb-4 ${activeProcess === index ? "text-gray-200" : "text-gray-600"
                                                        }`}
                                                >
                                                    {step.description}
                                                </p>
                                                <Badge
                                                    variant="secondary"
                                                    className={`${activeProcess === index ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {step.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Process Details */}
                            <div className="sticky top-30">
                                <Card className="p-12 bg-white shadow-2xl border-0 rounded-3xl">
                                    <div className="mb-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-5xl font-black text-black bg-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center">
                                                {processSteps[activeProcess].step}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-black">{processSteps[activeProcess].title}</h3>
                                                <p className="text-gray-600">{processSteps[activeProcess].duration}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                            {processSteps[activeProcess].description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-black mb-6">Key Deliverables</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {processSteps[activeProcess].deliverables.map((deliverable, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                                    <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{deliverable}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Technology Stack</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                We use cutting-edge technologies to build scalable, secure, and performant solutions
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {technologies.map((tech, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center"
                                >
                                    <div className="mb-6">
                                        <img
                                            src={tech.logo || "/placeholder.svg"}
                                            alt={tech.name}
                                            className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-2">{tech.name}</h3>
                                    <p className="text-sm text-gray-600">{tech.category}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Particles */}
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
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's discuss your ideas and create something amazing together. Get in touch for a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start a Conversation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Download Portfolio
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
