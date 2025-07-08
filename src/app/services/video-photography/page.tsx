"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Camera,
    Video,
    Edit,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
    ImageIcon,
    Film,
    Zap,
    Award,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function VideoPhotographyPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const mediaServices = [
        {
            icon: <Video className="h-10 w-10" />,
            title: "Video Production",
            description: "Professional video content that tells your story",
            features: [
                "Corporate Videos",
                "Product Demonstrations",
                "Brand Storytelling",
                "Event Coverage",
                "Training Videos",
                "Social Media Content",
                "Testimonial Videos",
                "Promotional Content",
            ],
            technologies: ["4K Cameras", "Professional Lighting", "Drone Footage", "Multi-Camera Setup"],
            startingPrice: "$3,500",
            timeline: "2-6 weeks",
            examples: ["Corporate Films", "Product Videos", "Event Documentation", "Social Content"],
        },
        {
            icon: <Camera className="h-10 w-10" />,
            title: "Commercial Photography",
            description: "High-quality photography for your business needs",
            features: [
                "Product Photography",
                "Corporate Headshots",
                "Event Photography",
                "Architectural Photography",
                "Food Photography",
                "Lifestyle Photography",
                "Brand Photography",
                "Stock Photography",
            ],
            technologies: ["Professional DSLR", "Studio Lighting", "Photo Editing", "Color Grading"],
            startingPrice: "$1,500",
            timeline: "1-3 weeks",
            examples: ["Product Catalogs", "Corporate Portraits", "Event Coverage", "Marketing Materials"],
        },
        {
            icon: <Edit className="h-10 w-10" />,
            title: "Video Editing & Post-Production",
            description: "Professional editing and post-production services",
            features: [
                "Video Editing",
                "Color Correction",
                "Audio Enhancement",
                "Motion Graphics",
                "Visual Effects",
                "Subtitle Creation",
                "Format Optimization",
                "Delivery & Distribution",
            ],
            technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Pro Tools"],
            startingPrice: "$1,200",
            timeline: "1-4 weeks",
            examples: ["Documentary Editing", "Commercial Post", "Social Media Edits", "Motion Graphics"],
        },
    ]

    const mediaTypes = [
        {
            icon: <Film className="h-8 w-8" />,
            title: "Corporate Videos",
            description: "Professional videos that showcase your business",
            applications: ["Company Overviews", "Team Introductions", "Service Explanations", "Client Testimonials"],
        },
        {
            icon: <ImageIcon className="h-8 w-8" />,
            title: "Product Photography",
            description: "Stunning product images that drive sales",
            applications: ["E-commerce Photos", "Catalog Images", "Marketing Materials", "Social Media Content"],
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Social Media Content",
            description: "Engaging content optimized for social platforms",
            applications: ["Instagram Stories", "YouTube Videos", "Facebook Posts", "LinkedIn Content"],
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Event Documentation",
            description: "Capture your important moments professionally",
            applications: ["Corporate Events", "Product Launches", "Conferences", "Award Ceremonies"],
        },
    ]

    const productionProcess = [
        {
            step: "01",
            title: "Pre-Production Planning",
            description: "Concept development and production planning",
            duration: "1-2 weeks",
            activities: ["Creative Brief", "Storyboard Creation", "Location Scouting", "Talent Casting"],
        },
        {
            step: "02",
            title: "Production & Shooting",
            description: "Professional filming and photography",
            duration: "1-3 days",
            activities: ["Equipment Setup", "Filming/Photography", "Multiple Takes", "Quality Control"],
        },
        {
            step: "03",
            title: "Post-Production",
            description: "Editing and enhancement of content",
            duration: "1-3 weeks",
            activities: ["Video Editing", "Color Correction", "Audio Enhancement", "Graphics Integration"],
        },
        {
            step: "04",
            title: "Delivery & Distribution",
            description: "Final delivery in required formats",
            duration: "1 week",
            activities: ["Format Optimization", "Quality Review", "File Delivery", "Distribution Support"],
        },
    ]

    const portfolioItems = [
        {
            title: "TechCorp Product Launch",
            category: "Corporate Video",
            description: "Complete video production for major product launch event with multi-camera coverage",
            scope: "3-day event coverage with live streaming and post-production",
            deliverables: ["Event Highlight Reel", "Individual Speaker Videos", "Social Media Clips", "Live Stream"],
            results: ["1M+ video views", "500% social engagement increase", "Featured in industry publications"],
            duration: "4 weeks",
        },
        {
            title: "Luxury Fashion Brand",
            category: "Product Photography",
            description: "High-end fashion photography for e-commerce and marketing campaigns",
            scope: "Studio and lifestyle photography for seasonal collection",
            deliverables: ["200+ Product Photos", "Lifestyle Images", "Social Media Content", "Marketing Materials"],
            results: ["40% increase in online sales", "Featured in fashion magazines", "Award-winning campaign"],
            duration: "2 weeks",
        },
        {
            title: "Restaurant Chain Campaign",
            category: "Food Photography & Video",
            description: "Comprehensive visual content for restaurant chain's marketing campaign",
            scope: "Food photography and video content for menu and advertising",
            deliverables: ["Menu Photography", "Commercial Videos", "Social Media Content", "Print Materials"],
            results: ["25% increase in foot traffic", "Viral social media campaign", "Regional expansion"],
            duration: "3 weeks",
        },
    ]

    const equipment = [
        { name: "4K Cameras", description: "Professional cinema cameras for high-quality footage" },
        { name: "Drone Technology", description: "Aerial photography and videography capabilities" },
        { name: "Studio Lighting", description: "Professional lighting equipment for perfect shots" },
        { name: "Audio Equipment", description: "High-quality microphones and recording gear" },
        { name: "Editing Suites", description: "Professional post-production facilities" },
        { name: "Color Grading", description: "Advanced color correction and grading tools" },
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
                                    <Camera className="w-3 h-3 mr-2 opacity-60" />
                                    Video Production • Photography • Post-Production
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Video &{" "}
                                        <span className="relative inline-block">
                                            Photography
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Professional visual content that captures your brand story and engages your audience
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
                                        View Our Reel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Services */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Our Services</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive video and photography services for all your visual content needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {mediaServices.map((service, index) => (
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
                                            <h4 className="text-lg font-bold text-black mb-4">Services Include</h4>
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
                                            <h4 className="text-lg font-bold text-black mb-4">Equipment</h4>
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

            {/* Media Types */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Content We Create</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {mediaTypes.map((type, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group"
                                >
                                    <div className="p-4 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">{type.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                                    <div className="space-y-2">
                                        {type.applications.map((app, idx) => (
                                            <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                                {app}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Production Process</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Our streamlined process ensures high-quality results on time and on budget
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {productionProcess.map((step, index) => (
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

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Project Scope</h4>
                                            <p className="text-sm text-gray-700">{item.scope}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Deliverables</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.deliverables.map((deliverable, idx) => (
                                                    <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                                        {deliverable}
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

                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-xs text-gray-500">Duration: {item.duration}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Professional Equipment</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                State-of-the-art equipment for exceptional quality results
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {equipment.map((item, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                                >
                                    <h3 className="text-xl font-bold text-black mb-4">{item.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                        Ready to Create Amazing Content?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's bring your vision to life with professional video and photography services.
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
                            View Our Portfolio
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
