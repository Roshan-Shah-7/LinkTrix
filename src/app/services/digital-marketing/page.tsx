"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Target,
    Search,
    TrendingUp,
    Users,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
    BarChart3,
    Globe,
    Share2,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function DigitalMarketingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const marketingServices = [
        {
            icon: <Search className="h-10 w-10" />,
            title: "Search Engine Optimization",
            description: "Improve your search rankings and drive organic traffic",
            features: [
                "Keyword Research & Strategy",
                "On-Page SEO Optimization",
                "Technical SEO Audits",
                "Content Optimization",
                "Link Building Campaigns",
                "Local SEO",
                "SEO Analytics & Reporting",
                "Competitor Analysis",
            ],
            technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
            startingPrice: "$2,000",
            timeline: "3-6 months",
            examples: ["Local Business SEO", "E-commerce SEO", "Content Marketing", "Technical SEO"],
        },
        {
            icon: <Target className="h-10 w-10" />,
            title: "Pay-Per-Click Advertising",
            description: "Targeted advertising campaigns that deliver immediate results",
            features: [
                "Google Ads Management",
                "Facebook & Instagram Ads",
                "LinkedIn Advertising",
                "Display Advertising",
                "Remarketing Campaigns",
                "Shopping Ads",
                "Video Advertising",
                "Conversion Tracking",
            ],
            technologies: ["Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager"],
            startingPrice: "$1,500",
            timeline: "1-3 months",
            examples: ["Lead Generation", "E-commerce Sales", "Brand Awareness", "App Downloads"],
        },
        {
            icon: <Share2 className="h-10 w-10" />,
            title: "Social Media Marketing",
            description: "Build your brand presence across social media platforms",
            features: [
                "Social Media Strategy",
                "Content Creation & Curation",
                "Community Management",
                "Influencer Partnerships",
                "Social Media Advertising",
                "Analytics & Reporting",
                "Brand Monitoring",
                "Crisis Management",
            ],
            technologies: ["Hootsuite", "Buffer", "Sprout Social", "Canva", "Facebook Creator Studio"],
            startingPrice: "$1,800",
            timeline: "2-6 months",
            examples: ["Brand Building", "Community Growth", "Product Launches", "Customer Engagement"],
        },
    ]

    const marketingBenefits = [
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Increased Traffic",
            description: "Drive more qualified visitors to your website",
            metric: "Average 150% increase in organic traffic",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Better Conversions",
            description: "Turn visitors into customers with optimized campaigns",
            metric: "Average 40% improvement in conversion rates",
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Measurable ROI",
            description: "Track and measure every marketing dollar spent",
            metric: "Average 300% return on ad spend",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Brand Awareness",
            description: "Build recognition and trust in your market",
            metric: "Average 200% increase in brand searches",
        },
    ]

    const marketingProcess = [
        {
            step: "01",
            title: "Strategy & Planning",
            description: "Comprehensive analysis and strategic planning",
            duration: "1-2 weeks",
            activities: ["Market Research", "Competitor Analysis", "Goal Setting", "Strategy Development"],
        },
        {
            step: "02",
            title: "Campaign Setup",
            description: "Setting up tracking, campaigns, and content",
            duration: "1-2 weeks",
            activities: ["Analytics Setup", "Campaign Creation", "Content Development", "Landing Page Optimization"],
        },
        {
            step: "03",
            title: "Launch & Optimize",
            description: "Campaign launch with continuous optimization",
            duration: "Ongoing",
            activities: ["Campaign Launch", "Performance Monitoring", "A/B Testing", "Optimization"],
        },
        {
            step: "04",
            title: "Report & Scale",
            description: "Regular reporting and scaling successful campaigns",
            duration: "Monthly",
            activities: ["Performance Reports", "Strategy Refinement", "Budget Optimization", "Scaling"],
        },
    ]

    const caseStudies = [
        {
            title: "Local Restaurant Chain",
            category: "Local SEO & PPC",
            description: "Increased online orders and foot traffic for a restaurant chain across 5 locations",
            challenge: "Low online visibility and declining foot traffic",
            solution: "Local SEO optimization, Google Ads, and social media marketing",
            results: ["300% increase in online orders", "150% more foot traffic", "40% higher revenue"],
            technologies: ["Google Ads", "Google My Business", "Facebook Ads"],
        },
        {
            title: "E-commerce Fashion Brand",
            category: "Social Media & PPC",
            description: "Built brand awareness and drove sales for a new fashion e-commerce brand",
            challenge: "New brand with no market presence",
            solution: "Instagram marketing, influencer partnerships, and targeted advertising",
            results: ["50K+ Instagram followers", "$500K+ in sales", "25% repeat customer rate"],
            technologies: ["Instagram Ads", "Facebook Ads", "Influencer Platforms"],
        },
        {
            title: "B2B Software Company",
            category: "Content Marketing & SEO",
            description: "Generated qualified leads for a B2B software company through content marketing",
            challenge: "Long sales cycles and high customer acquisition costs",
            solution: "SEO-optimized content marketing and LinkedIn advertising",
            results: ["400% increase in organic leads", "50% lower cost per lead", "200% more demo requests"],
            technologies: ["HubSpot", "SEMrush", "LinkedIn Ads"],
        },
    ]

    const pricingPlans = [
        {
            name: "Starter",
            price: "$2,000",
            period: "/month",
            description: "Perfect for small businesses getting started",
            features: [
                "SEO Optimization",
                "Google Ads Management",
                "Social Media Setup",
                "Monthly Reporting",
                "Email Support",
            ],
            popular: false,
        },
        {
            name: "Growth",
            price: "$4,000",
            period: "/month",
            description: "Comprehensive marketing for growing businesses",
            features: [
                "Everything in Starter",
                "Social Media Management",
                "Content Creation",
                "Advanced Analytics",
                "Bi-weekly Strategy Calls",
                "A/B Testing",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$8,000",
            period: "/month",
            description: "Full-service marketing for established companies",
            features: [
                "Everything in Growth",
                "Dedicated Account Manager",
                "Custom Strategy Development",
                "Advanced Automation",
                "Weekly Strategy Calls",
                "Priority Support",
            ],
            popular: false,
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
                                    <Target className="w-3 h-3 mr-2 opacity-60" />
                                    SEO • PPC • Social Media • Content Marketing
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Digital{" "}
                                        <span className="relative inline-block">
                                            Marketing
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Data-driven marketing strategies that grow your business and maximize your return on investment
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button
                                        size="lg"
                                        className="text-lg px-12 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                    >
                                        Start Your Campaign
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="text-lg px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 bg-white/90 backdrop-blur-sm rounded-xl font-semibold"
                                    >
                                        <Play className="mr-3 h-5 w-5" />
                                        View Case Studies
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing Services */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Marketing Services</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive digital marketing solutions to reach your target audience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {marketingServices.map((service, index) => (
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

            {/* Marketing Benefits */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">
                                Why Digital Marketing Works
                            </h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {marketingBenefits.map((benefit, index) => (
                                <Card
                                    key={index}
                                    className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group"
                                >
                                    <div className="p-4 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                                        {benefit.metric}
                                    </Badge>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Success Stories</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <Card
                                    key={index}
                                    className="p-10 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="mb-6">
                                        <Badge className="bg-black text-white mb-4">{study.category}</Badge>
                                        <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Challenge</h4>
                                            <p className="text-sm text-gray-700">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Solution</h4>
                                            <p className="text-sm text-gray-700">{study.solution}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Results</h4>
                                            <ul className="space-y-1">
                                                {study.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <CheckCircle className="h-3 w-3 text-black flex-shrink-0" />
                                                        <span className="text-xs text-gray-700">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-black mb-2">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.technologies.map((tech, idx) => (
                                                    <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                                        {tech}
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

            {/* Pricing */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Marketing Packages</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Choose the perfect marketing package for your business needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricingPlans.map((plan, index) => (
                                <Card
                                    key={index}
                                    className={`p-10 shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative ${plan.popular ? "bg-black text-white" : "bg-white"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <Badge className="bg-white text-black px-4 py-2 font-semibold">Most Popular</Badge>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center mb-4">
                                            <span className="text-4xl font-black">{plan.price}</span>
                                            <span className="text-lg ml-1">{plan.period}</span>
                                        </div>
                                        <p className={`leading-relaxed ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle
                                                    className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-black"}`}
                                                />
                                                <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full text-lg py-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold ${plan.popular ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"
                                            }`}
                                    >
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
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
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's create a digital marketing strategy that drives real results for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start Your Campaign
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Free Marketing Audit
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
