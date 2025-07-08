"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Cloud,
    Server,
    Shield,
    ArrowRight,
    CheckCircle,
    Play,
    Download,
    MessageSquare,
    Zap,
    Globe,
    Lock,
    BarChart3,
} from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"

export default function CloudHostingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const hostingServices = [
        {
            icon: <Cloud className="h-10 w-10" />,
            title: "Cloud Deployment",
            description: "Scalable cloud infrastructure for modern applications",
            features: [
                "Auto-scaling Infrastructure",
                "Global CDN Distribution",
                "Load Balancing",
                "Database Management",
                "Backup & Recovery",
                "Monitoring & Alerts",
                "SSL Certificates",
                "Domain Management",
            ],
            technologies: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "DigitalOcean"],
            startingPrice: "$500",
            timeline: "1-2 weeks",
            examples: ["Web Applications", "API Services", "Static Sites", "E-commerce Platforms"],
        },
        {
            icon: <Server className="h-10 w-10" />,
            title: "Server Management",
            description: "Complete server setup and ongoing maintenance",
            features: [
                "Server Configuration",
                "Security Hardening",
                "Performance Optimization",
                "Regular Updates",
                "Backup Management",
                "Monitoring Setup",
                "Troubleshooting",
                "24/7 Support",
            ],
            technologies: ["Linux", "Docker", "Kubernetes", "Nginx", "Apache", "MySQL", "PostgreSQL"],
            startingPrice: "$800",
            timeline: "1-3 weeks",
            examples: ["Dedicated Servers", "VPS Setup", "Container Orchestration", "Database Servers"],
        },
        {
            icon: <Zap className="h-10 w-10" />,
            title: "DevOps Implementation",
            description: "Streamlined development and deployment workflows",
            features: [
                "CI/CD Pipelines",
                "Infrastructure as Code",
                "Automated Testing",
                "Deployment Automation",
                "Environment Management",
                "Code Quality Gates",
                "Performance Monitoring",
                "Security Scanning",
            ],
            technologies: ["GitHub Actions", "GitLab CI", "Jenkins", "Terraform", "Ansible", "Docker"],
            startingPrice: "$1,200",
            timeline: "2-4 weeks",
            examples: ["Automated Deployments", "Testing Pipelines", "Infrastructure Automation", "Monitoring Setup"],
        },
    ]

    const cloudBenefits = [
        {
            icon: <Zap className="h-8 w-8" />,
            title: "High Performance",
            description: "Lightning-fast loading times and optimal performance",
            metric: "99.9% uptime guarantee",
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Enterprise Security",
            description: "Advanced security measures and compliance",
            metric: "SOC 2 Type II compliant",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Reach",
            description: "Worldwide content delivery network",
            metric: "150+ edge locations",
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Auto Scaling",
            description: "Automatically scale based on demand",
            metric: "Handle 10x traffic spikes",
        },
    ]

    const hostingPlans = [
        {
            name: "Starter",
            price: "$29",
            period: "/month",
            description: "Perfect for small websites and applications",
            features: ["1 Website", "10GB Storage", "100GB Bandwidth", "SSL Certificate", "Daily Backups", "Email Support"],
            popular: false,
            resources: {
                cpu: "1 vCPU",
                ram: "1GB RAM",
                storage: "10GB SSD",
            },
        },
        {
            name: "Professional",
            price: "$79",
            period: "/month",
            description: "Ideal for growing businesses and applications",
            features: [
                "5 Websites",
                "50GB Storage",
                "500GB Bandwidth",
                "SSL Certificate",
                "Daily Backups",
                "Priority Support",
                "CDN Included",
                "Staging Environment",
            ],
            popular: true,
            resources: {
                cpu: "2 vCPU",
                ram: "4GB RAM",
                storage: "50GB SSD",
            },
        },
        {
            name: "Enterprise",
            price: "$199",
            period: "/month",
            description: "High-performance hosting for large applications",
            features: [
                "Unlimited Websites",
                "200GB Storage",
                "Unlimited Bandwidth",
                "SSL Certificate",
                "Hourly Backups",
                "24/7 Phone Support",
                "Global CDN",
                "Advanced Monitoring",
                "Custom Configurations",
            ],
            popular: false,
            resources: {
                cpu: "4 vCPU",
                ram: "8GB RAM",
                storage: "200GB SSD",
            },
        },
    ]

    const migrationProcess = [
        {
            step: "01",
            title: "Assessment & Planning",
            description: "Analyze current infrastructure and plan migration",
            duration: "1 week",
            activities: ["Infrastructure Audit", "Migration Strategy", "Risk Assessment", "Timeline Planning"],
        },
        {
            step: "02",
            title: "Environment Setup",
            description: "Prepare new cloud environment and configurations",
            duration: "1-2 weeks",
            activities: ["Cloud Setup", "Security Configuration", "Network Setup", "Testing Environment"],
        },
        {
            step: "03",
            title: "Data Migration",
            description: "Migrate data and applications with minimal downtime",
            duration: "1-3 days",
            activities: ["Data Transfer", "Application Migration", "DNS Updates", "Testing & Validation"],
        },
        {
            step: "04",
            title: "Optimization & Monitoring",
            description: "Optimize performance and setup monitoring",
            duration: "1 week",
            activities: ["Performance Tuning", "Monitoring Setup", "Backup Configuration", "Documentation"],
        },
    ]

    const technologies = [
        { name: "Amazon Web Services", category: "Cloud Provider", description: "Leading cloud platform" },
        { name: "Google Cloud Platform", category: "Cloud Provider", description: "Google's cloud services" },
        { name: "Microsoft Azure", category: "Cloud Provider", description: "Microsoft's cloud platform" },
        { name: "Docker", category: "Containerization", description: "Application containerization" },
        { name: "Kubernetes", category: "Orchestration", description: "Container orchestration" },
        { name: "Terraform", category: "Infrastructure", description: "Infrastructure as code" },
        { name: "Nginx", category: "Web Server", description: "High-performance web server" },
        { name: "PostgreSQL", category: "Database", description: "Advanced relational database" },
    ]

    const securityFeatures = [
        "DDoS Protection",
        "Web Application Firewall",
        "SSL/TLS Encryption",
        "Regular Security Updates",
        "Intrusion Detection",
        "Vulnerability Scanning",
        "Access Control",
        "Audit Logging",
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
                                    <Cloud className="w-3 h-3 mr-2 opacity-60" />
                                    Cloud Deployment • Server Management • DevOps
                                </Badge>

                                <div className="space-y-6 mb-12">
                                    <h1 className="text-7xl md:text-9xl font-black tracking-tight text-black relative leading-none">
                                        Cloud &{" "}
                                        <span className="relative inline-block">
                                            Hosting
                                            <div className="absolute -bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                        Reliable, scalable, and secure cloud infrastructure solutions for your applications and websites
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button
                                        size="lg"
                                        className="text-lg px-12 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl font-semibold"
                                    >
                                        Get Started
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="text-lg px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 bg-white/90 backdrop-blur-sm rounded-xl font-semibold"
                                    >
                                        <Play className="mr-3 h-5 w-5" />
                                        Free Consultation
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hosting Services */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Hosting Solutions</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Comprehensive cloud and hosting services for modern applications
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {hostingServices.map((service, index) => (
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
                                                <p className="text-sm text-gray-600 mb-1">Setup Time</p>
                                                <p className="text-lg font-bold text-black">{service.timeline}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-4">Features</h4>
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

            {/* Cloud Benefits */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Why Choose Our Hosting</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {cloudBenefits.map((benefit, index) => (
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

            {/* Hosting Plans */}
            <section className="py-32 bg-gradient-to-b from-gray-50/80 to-white relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Hosting Plans</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Choose the perfect hosting plan for your needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {hostingPlans.map((plan, index) => (
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
                                        <p className={`leading-relaxed mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                                            {plan.description}
                                        </p>

                                        <div
                                            className={`grid grid-cols-3 gap-4 p-4 rounded-xl mb-6 ${plan.popular ? "bg-white/10" : "bg-gray-50"}`}
                                        >
                                            <div className="text-center">
                                                <p className={`text-xs ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>CPU</p>
                                                <p className="font-bold">{plan.resources.cpu}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className={`text-xs ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>RAM</p>
                                                <p className="font-bold">{plan.resources.ram}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className={`text-xs ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>Storage</p>
                                                <p className="font-bold">{plan.resources.storage}</p>
                                            </div>
                                        </div>
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

            {/* Security Features */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 tracking-tight">Security Features</h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Enterprise-grade security to protect your applications and data
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {securityFeatures.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="p-6 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-center"
                                >
                                    <div className="p-3 bg-black rounded-xl text-white shadow-lg mx-auto w-fit mb-4">
                                        <Lock className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-black">{feature}</h3>
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
                        Ready to Move to the Cloud?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                        Let's migrate your applications to a secure, scalable cloud infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-xl px-16 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl font-semibold"
                        >
                            <MessageSquare className="mr-3 h-6 w-6" />
                            Start Migration
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-xl px-16 py-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 bg-transparent rounded-2xl font-semibold"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Free Assessment
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
