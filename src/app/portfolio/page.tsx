"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog"
import {
  ExternalLink,
  Eye,
  Filter,
  ArrowRight,
  Calendar,
  User,
  Briefcase,
  Code,
  Palette,
  Camera,
  TrendingUp,
  Smartphone,
} from "lucide-react"
import { Waves } from "../components/ui/waves-background"

const portfolioData = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "web-development",
    client: "TechMart Solutions",
    description:
      "Complete redesign and development of a scalable e-commerce platform with advanced analytics and payment integration.",
    fullDescription:
      "We transformed TechMart Solutions' legacy e-commerce platform into a modern, scalable solution built for enterprise growth. The project encompassed a complete architectural overhaul, implementation of advanced product filtering, secure payment gateway integration, real-time analytics dashboard, and mobile-first responsive design. The new platform resulted in a 150% increase in conversion rates, 200% improvement in mobile user engagement, and 40% reduction in page load times.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://techmart-demo.com",
    caseStudyUrl: "#",
    completedDate: "March 2024",
    featured: true,
    impact: "150% increase in conversions",
  },
  {
    id: 2,
    title: "Sustainable Brand Identity System",
    category: "graphic-design",
    client: "GreenLeaf Organics",
    description: "Comprehensive brand identity design including logo, guidelines, packaging, and digital assets.",
    fullDescription:
      "Created a complete brand identity ecosystem for GreenLeaf Organics, a premium sustainable food company. The project encompassed strategic brand positioning, logo design, comprehensive brand guidelines, packaging design, marketing collateral, and digital asset creation. We developed a nature-inspired visual identity that authentically communicates the brand's commitment to sustainability and organic products, resulting in 40% increase in brand recognition and 25% improvement in customer trust metrics.",
    technologies: ["Adobe Creative Suite", "Figma", "Adobe InDesign", "Sketch", "Principle"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    caseStudyUrl: "#",
    completedDate: "February 2024",
    featured: false,
    impact: "40% increase in brand recognition",
  },
  {
    id: 3,
    title: "AI-Powered Fitness Mobile App",
    category: "software-development",
    client: "FitTrack Pro",
    description: "Cross-platform mobile application with AI-powered workout recommendations and social features.",
    fullDescription:
      "Developed a comprehensive fitness ecosystem for iOS and Android platforms featuring AI-powered workout recommendations, advanced progress tracking, social challenges, and seamless integration with popular wearable devices. Built with React Native for optimal cross-platform performance and Firebase for real-time data synchronization. The app incorporates machine learning algorithms for personalized fitness plans and has achieved over 100,000 downloads with a 4.8-star rating across app stores.",
    technologies: ["React Native", "Firebase", "TensorFlow", "Redux", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://fittrack-app.com",
    caseStudyUrl: "#",
    completedDate: "January 2024",
    featured: true,
    impact: "100K+ downloads in 6 months",
  },
  {
    id: 4,
    title: "Corporate Video Campaign Series",
    category: "videography",
    client: "InnovateTech Corp",
    description: "Professional video production series including corporate overview, product demos, and testimonials.",
    fullDescription:
      "Produced a comprehensive video marketing campaign for InnovateTech Corp, featuring a cinematic 3-minute company overview, multiple product demonstration videos, customer testimonial series, and social media content. The project involved strategic pre-production planning, multi-location filming, professional lighting and audio setup, advanced post-production editing with motion graphics, color grading, and sound design. The video series increased website engagement by 300%, generated 25% more qualified leads, and improved brand perception scores by 35%.",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Pro Tools"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://vimeo.com/innovatetech",
    caseStudyUrl: "#",
    completedDate: "December 2023",
    featured: false,
    impact: "300% increase in engagement",
  },
  {
    id: 5,
    title: "Integrated Digital Marketing Strategy",
    category: "digital-marketing",
    client: "Metro Restaurant Group",
    description:
      "Comprehensive digital marketing ecosystem including SEO, social media, PPC campaigns, and marketing automation.",
    fullDescription:
      "Implemented a full-scale digital marketing transformation for Metro Restaurant Group's 8 locations. The comprehensive strategy included technical SEO optimization, local search domination, social media content creation and management, targeted Google and Facebook advertising campaigns, email marketing automation, and reputation management. Our data-driven approach resulted in 250% increase in organic traffic, 180% improvement in local search rankings, 45% increase in online orders, and 60% growth in social media engagement within 8 months.",
    technologies: ["Google Analytics", "SEMrush", "Google Ads", "Facebook Business", "HubSpot", "Mailchimp"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    caseStudyUrl: "#",
    completedDate: "November 2023",
    featured: false,
    impact: "250% increase in organic traffic",
  },
  {
    id: 6,
    title: "Luxury Product Photography Collection",
    category: "photography",
    client: "Prestige Jewelry House",
    description:
      "High-end product photography portfolio featuring luxury jewelry with studio and lifestyle compositions.",
    fullDescription:
      "Created an exquisite product photography portfolio for Prestige Jewelry House's exclusive collection launch. The project included precision macro photography for intricate detail shots, elegant lifestyle photography with professional models, creative artistic compositions for marketing materials, and 360-degree product views for e-commerce. We utilized state-of-the-art studio lighting, specialized macro lenses, and advanced post-processing techniques to highlight the exceptional craftsmanship of each piece. The imagery was deployed across their website, social media, print advertising, and retail displays, resulting in 60% increase in online sales and 45% improvement in social media engagement.",
    technologies: ["Canon EOS R5", "Macro Lenses", "Profoto Lighting", "Adobe Lightroom", "Photoshop", "Capture One"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    caseStudyUrl: "#",
    completedDate: "October 2023",
    featured: true,
    impact: "60% increase in online sales",
  },
]

const categories = [
  {
    id: "all",
    label: "All Projects",
    count: portfolioData.length,
    icon: Briefcase,
    color: "from-slate-600 to-slate-700",
  },
  {
    id: "web-development",
    label: "Web Development",
    count: portfolioData.filter((p) => p.category === "web-development").length,
    icon: Code,
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "software-development",
    label: "Software Development",
    count: portfolioData.filter((p) => p.category === "software-development").length,
    icon: Smartphone,
    color: "from-indigo-600 to-indigo-700",
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    count: portfolioData.filter((p) => p.category === "graphic-design").length,
    icon: Palette,
    color: "from-purple-600 to-purple-700",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    count: portfolioData.filter((p) => p.category === "digital-marketing").length,
    icon: TrendingUp,
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: "videography",
    label: "Videography",
    count: portfolioData.filter((p) => p.category === "videography").length,
    icon: Camera,
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "photography",
    label: "Photography",
    count: portfolioData.filter((p) => p.category === "photography").length,
    icon: Camera,
    color: "from-teal-600 to-teal-700",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const sectionRef = useRef(null)

  const filteredProjects =
    activeCategory === "all" ? portfolioData : portfolioData.filter((project) => project.category === activeCategory)
  const featuredProjects = portfolioData.filter((project) => project.featured)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-project-id")
            if (projectId) {
              setVisibleProjects((prev) => new Set([...prev, Number.parseInt(projectId)]))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    const projectElements = document.querySelectorAll("[data-project-id]")
    projectElements.forEach((el) => projectObserver.observe(el))

    return () => projectObserver.disconnect()
  }, [filteredProjects])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 via-slate-50/50 to-blue-50/30 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >

      <div className="max-w-7xl mx-auto relative z-10 mt-20 sm:mt-32 lg:mt-40">
        {/* Professional Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm">
            <Briefcase className="w-5 h-5 text-slate-600" />
            Professional Portfolio
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-700 via-slate-700 to-blue-700 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our comprehensive portfolio showcasing innovative digital solutions that drive business growth and
            deliver measurable results across industries.
          </p>
        </div>


        {/* Professional Category Filter */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
              <Filter className="w-6 h-6 text-slate-600" />
              Explore Our Expertise
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0`
                    : "hover:shadow-md border-slate-300 text-slate-700 hover:border-slate-400 bg-white/80 backdrop-blur-sm"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10 font-medium">{category.label}</span>
                  <Badge
                    variant={activeCategory === category.id ? "secondary" : "outline"}
                    className={`ml-2 relative z-10 ${activeCategory === category.id
                      ? "bg-white/20 text-white border-white/30"
                      : "border-slate-300 text-slate-600"
                      }`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Professional Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group transition-all duration-700 ${visibleProjects.has(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="bg-white/95 text-slate-700 hover:bg-white flex-1 font-medium">
                              <Eye className="w-3 h-3 mr-1" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader className="text-center">
                              <DialogTitle className="text-2xl text-slate-900">{project.title}</DialogTitle>
                            </DialogHeader>
                            <div className="grid md:grid-cols-2 gap-8">
                              <div className="relative col-span-full md:col-span-1">
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  width={600}
                                  height={400}
                                  className="w-full rounded-lg shadow-lg"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {project.impact}
                                </div>
                              </div>
                              <div className="space-y-6 col-span-full md:col-span-1">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                  <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
                                    <User className="w-4 h-4" />
                                    <span className="font-medium">{project.client}</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
                                    <Calendar className="w-4 h-4" />
                                    <span>{project.completedDate}</span>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-3 text-lg text-slate-900">Project Overview</h4>
                                  <p className="text-slate-600 leading-relaxed">{project.fullDescription}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-3 text-slate-900">Technologies & Tools</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                      <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                                      >
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                  <Button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700"
                                    asChild
                                  >
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Live Project
                                    </a>
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                                    asChild
                                  >
                                    <a href={project.caseStudyUrl}>Case Study</a>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" className="bg-blue-600/95 text-white hover:bg-blue-700 flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-white/95 text-slate-700 shadow-sm border-0 font-medium">
                    {categories.find((cat) => cat.id === project.category)?.label}
                  </Badge>

                  {/* Impact Metric */}
                  {project.impact && (
                    <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {project.impact}
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-slate-600 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm mb-4">
                    <span className="text-slate-700 font-medium bg-slate-100 px-3 py-1 rounded-full mb-2 sm:mb-0">
                      {project.client}
                    </span>
                    <span className="text-slate-500">{project.completedDate}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Professional Call to Action */}
      <div
        className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative overflow-hidden bg-black p-12 text-white">
          <div className="absolute inset-0">
            <Waves
              lineColor="rgba(255,255,255,0.2)"
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Ready to Start Your Project?
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something
              <span className="block text-blue-300">Exceptional Together</span>
            </h3>
            <p className="text-base sm:text-lg mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
              Partner with our expert team to transform your vision into reality. We deliver innovative digital
              solutions that drive measurable business growth and exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-gray-100 shadow-xl font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
