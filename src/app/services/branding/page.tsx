"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Zap,
    Palette,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
    Eye,
    Heart,
    Target,
    Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function BrandingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const brandingServices = [
        {
            icon: <Zap className="h-10 w-10" />,
            title: "Logo Design",
            description: "Memorable logos that capture your brand essence",
            features: [
                "Custom Logo Design",
                "Multiple Concept Variations",
                "Vector File Formats",
                "Color Variations",
                "Black & White Versions",
                "Favicon Creation",
                "Logo Usage Guidelines",
                "Trademark Research",
            ],
            technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Sketch"],
            startingPrice: "$2,500",
            timeline: "2-4 weeks",
            examples: ["Corporate Logos", "Startup Branding", "Logo Redesign", "Icon Design"],
        },
        {
            icon: <Palette className="h-10 w-10" />,
            title: "Visual Identity Systems",
            description: "Complete visual identity that tells your brand story",
            features: [
                "Brand Color Palette",
                "Typography System",
                "Visual Style Guide",
                "Pattern & Texture Library",
                "Photography Style",
                "Iconography System",
                "Layout Templates",
                "Brand Applications",
            ],
            technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines", "Style Systems"],
            startingPrice: "$5,000",
            timeline: "4-8 weeks",
            examples: ["Complete Rebrands", "Visual Systems", "Brand Extensions", "Style Guides"],
        },
        {
            icon: <Target className="h-10 w-10" />,
            title: "Brand Strategy",
            description: "Strategic foundation for your brand positioning",
            features: [
                "Brand Positioning",
                "Target Audience Analysis",
                "Competitive Research",
                "Brand Messaging",
                "Value Proposition",
                "Brand Personality",
                "Brand Architecture",
                "Go-to-Market Strategy",
            ],
            technologies: ["Market Research", "Brand Strategy", "Positioning Maps", "Messaging Frameworks"],
            startingPrice: "$4,000",
            timeline: "3-6 weeks",
            examples: ["Brand Positioning", "Market Entry", "Brand Refresh", "Strategic Planning"],
        },
    ]

    const brandingBenefits = [
        {
            icon: <Eye className="h-8 w-8" />,
            title: "Brand Recognition",
            description: "Stand out in a crowded marketplace",
            impact: "Increase brand recall by up to 80%",
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "Customer Loyalty",
            description: "Build emotional connections with your audience",
            impact: "Improve customer retention by 60%",
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Premium Positioning",
            description: "Command higher prices with strong branding",
            impact: "Increase pricing power by 20-30%",
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: "Business Value",
            description: "Increase overall business valuation",
            impact: "Add 15-20% to company valuation",
        },
    ]

    const brandingProcess = [
        {
            step: "01",
            title: "Discovery & Research",
            description: "Understanding your business, market, and goals",
            duration: "1-2 weeks",
            activities: ["Brand Audit", "Market Research", "Competitor Analysis", "Stakeholder Interviews"],
        },
        {
            step: "02",
            title: "Strategy Development",
            description: "Creating your brand positioning and messaging",
            duration: "2-3 weeks",
            activities: ["Brand Positioning", "Messaging Framework", "Brand Personality", "Value Proposition"],
        },
        {
            step: "03",
            title: "Visual Identity Creation",
            description: "Designing your visual brand elements",
            duration: "3-5 weeks",
            activities: ["Logo Design", "Color Palette", "Typography", "Visual Style Guide"],
        },
        {
            step: "04",
            title: "Implementation & Guidelines",
            description: "Creating brand guidelines and applications",
            duration: "1-2 weeks",
            activities: ["Brand Guidelines", "Application Examples", "Asset Library", "Launch Strategy"],
        },
    ]

    const portfolioItems = [
        {
            title: "TechStart Innovations",
            category: "Technology Startup",
            description: "Complete brand identity for a B2B SaaS startup targeting enterprise clients",
            challenge: "New company needed to establish credibility in competitive market",
            solution: "Professional, modern brand identity with emphasis on innovation and trust",
            results: ["300% increase in website conversions", "Secured $2M Series A funding", "Industry recognition"],
            deliverables: ["Logo Design", "Visual Identity", "Brand Guidelines", "Website Design"],
        },
        {
            title: "GreenEarth Organics",
            category: "Sustainable Food Brand",
            description: "Eco-friendly brand identity for organic food company with sustainability focus",
            challenge: "Differentiate in crowded organic market while conveying authenticity",
            solution: "Natural, authentic brand identity with strong environmental messaging",
            results: ["150% sales growth", "Retail partnership with major chains", "Award-winning packaging"],
            deliverables: ["Brand Strategy", "Logo Design", "Packaging Design", "Marketing Materials"],
        },
        {
            title: "UrbanFit Studios",
            category: "Fitness & Wellness",
            description: "Dynamic brand identity for boutique fitness studio chain",
            challenge: "Create energetic brand that appeals to urban professionals",
            solution: "Bold, energetic brand identity with flexible system for multiple locations",
            results: ["5 new locations opened", "40% membership growth", "Strong social media presence"],
            deliverables: ["Visual Identity", "Interior Branding", "Digital Assets", "Merchandise Design"],
        },
    ]

    const brandElements = [
        { name: "Logo Design", description: "Primary brand mark and variations" },
        { name: "Color Palette", description: "Primary and secondary color systems" },
        { name: "Typography", description: "Font families and hierarchy" },
        { name: "Photography Style", description: "Visual style and treatment guidelines" },
        { name: "Iconography", description: "Custom icons and graphic elements" },
        { name: "Voice & Tone", description: "Brand personality and communication style" },
        { name: "Applications", description: "Business cards, letterheads, and materials" },
        { name: "Digital Assets", description: "Social media templates and web elements" },
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
                                    <Zap className="w-3 h-3 mr-2 opacity-60" />
                                    Logo Design • Visual Identity • Brand Strategy
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Brand{" "}
                                        <span className="relative inline-block">
                                            Identity
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Create a powerful brand identity that resonates with your audience and drives business growth
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button
                                        size="lg"
                                        className="text-lg px-12 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                    >
                                        Start Your Brand
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

            {/* Branding Services */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Branding Services</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive branding solutions from strategy to visual implementation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {brandingServices.map((service, index) => (
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

            {/* Brand Elements */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">What's Included</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Complete brand identity elements for consistent brand experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {brandElements.map((element, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                                >
                                    <h3 className="text-lg font-bold text-black mb-4">{element.name}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{element.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Brand Success Stories</h2>
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
                                            <h4 className="text-sm font-bold text-black mb-2">Challenge</h4>
                                            <p className="text-sm text-gray-700">{item.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Solution</h4>
                                            <p className="text-sm text-gray-700">{item.solution}</p>
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
                        Ready to Build Your Brand?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's create a brand identity that sets you apart and drives business success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start Your Brand Project
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Brand Strategy Guide
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
