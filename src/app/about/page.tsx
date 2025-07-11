"use client"

import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Users, Zap, Target, Heart, ArrowRight, Sparkles, Quote, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import Particles from "@/app/components/about/ParticlesProps"
import InteractiveMap from "@/app/components/about/InteractiveMap"
import TimelineItem from "@/app/components/about/TimelineItem"
import { Tilt } from "react-tilt"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(progress)
  }

  useEffect(() => {
    setIsVisible(true)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      emoji: "🤝",
      description:
        "We believe real impact comes from working together. We listen first, speak with purpose, and move forward as partners.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      emoji: "⚙️",
      description:
        "Technology changes fast. We stay curious, challenge norms, and build solutions that evolve with your needs.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impact",
      emoji: "🎯",
      description:
        "We care about outcomes — not just deliverables. Every decision we make is aimed at creating real value for your business.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      emoji: "🌍",
      description: "We operate with honesty, transparency, and respect — every step of the way.",
    },
  ]

  const highlights = [
    "Custom Software Development",
    "Mobile Application Design",
    "Web Development & Design",
    "Brand Identity & Strategy",
    "Digital Transformation",
    "Technical Consulting",
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div className="h-full bg-gradient-to-r from-black via-gray-600 to-black" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Refined Geometric Elements */}
        <div className="absolute top-32 right-16 w-40 h-40 border border-gray-100/60 rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 border-2 border-gray-200/40 rotate-12 opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-black/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gray-400/30 rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-black/20 rounded-full"></div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div
              className={`transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              <div className="text-center mb-24">
                <Badge
                  variant="outline"
                  className="mb-8 text-sm font-medium border-gray-300/60 px-6 py-3 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Quote className="w-3 h-3 mr-2 opacity-60" />
                  We don't just build tech — we build trust, ideas, and futures.
                </Badge>

                <div className="space-y-6 mb-12">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black relative leading-tight">
                    About{" "}
                    <span className="relative inline-block">
                      Link Trix
                      <div className="absolute -bottom-4 md:-bottom-6 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></div>
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                    A modern digital agency crafting purposeful, intelligent, and lasting digital solutions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-gray-100 rounded-full opacity-30"></div>
                    <Quote className="absolute -top-4 -left-4 h-10 w-10 text-gray-200" />
                    <div className="pl-12 pt-8">
                      <p className="text-3xl md:text-4xl font-bold text-black leading-tight mb-8">
                        Link Trix is a modern digital agency born with one mission — to build{" "}
                        <span className="relative inline-block">
                          purposeful
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gray-300 rounded-full"></div>
                        </span>
                        ,{" "}
                        <span className="relative inline-block">
                          intelligent
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gray-500 rounded-full"></div>
                        </span>
                        , and{" "}
                        <span className="relative inline-block">
                          lasting
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-black rounded-full"></div>
                        </span>{" "}
                        digital solutions.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-4 bg-gray-50/80 rounded-lg hover:bg-gray-100/90 hover:shadow-md transition-all duration-500 ease-out transform hover:-translate-y-1 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <Card className="p-10 border-l-4 border-l-gray-300 group hover:border-l-black border-t-0 border-r-0 border-b-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/90 backdrop-blur-sm">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We're a team of passionate developers, designers, and thinkers from Nepal, united by a shared
                      belief that technology should not just work — it should{" "}
                      <span className="group-hover:font-bold group-hover:text-black transition-all duration-300">
                        connect, empower, and elevate
                      </span>
                      .
                    </p>
                  </Card>

                  <Card className="p-10 border-l-4 border-l-gray-300 group hover:border-l-black border-t-0 border-r-0 border-b-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/90 backdrop-blur-sm">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      From custom{" "}
                      <span className="group-hover:font-bold group-hover:text-black transition-all duration-300">
                        software to mobile apps
                      </span>
                      ,{" "}
                      <span className="group-hover:font-bold group-hover:text-black transition-all duration-300">
                        websites to branding
                      </span>
                      , we help businesses transform their ideas into digital experiences that move with them.
                    </p>
                  </Card>

                  <Card className="p-10 border-l-4 border-l-gray-300 group hover:border-l-black border-t-0 border-r-0 border-b-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/90 backdrop-blur-sm">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Whether you're a startup looking to make your mark or an established{" "}
                      <span className="group-hover:font-bold group-hover:text-black transition-all duration-300">
                        brand
                      </span>{" "}
                      ready to evolve — we're here to{" "}
                      <span className="group-hover:font-bold group-hover:text-black transition-all duration-300">
                        create, improve, and grow
                      </span>{" "}
                      alongside you.
                    </p>
                  </Card>
                </div>
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
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Link Trix Section */}
      <section className="py-32 bg-gray-50 relative" id="timeline">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-black"></div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black">
                  The Link Trix Story
                </h2>
                <div className="w-12 h-px bg-black"></div>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-24">
                <TimelineItem
                  side="left"
                  number={1}
                  subtitle="The Spark"
                  title="The Idea Was Born"
                  content="In a world full of pre-built, one-size-fits-all solutions, we saw a need for something more thoughtful — something more human."
                />
                <TimelineItem
                  side="right"
                  number={2}
                  subtitle="The Mission"
                  title="Bridging the Gap"
                  content="Too often, businesses are handed tools without guidance, or result without meaning. We opened Link Trix to change that."
                />
                <TimelineItem
                  side="left"
                  number={3}
                  subtitle="The Goal"
                  title="Great Execution"
                  content="To bridge the gap between great ideas and great execution."
                  hasQuote
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative bg-black" style={{ height: "300px" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-lg lg:text-2xl text-center font-bold text-white w-full max-w-2xl lg:max-w-4xl px-4">
          We exist to build relationships, not just products. We're here to collaborate, listen, adapt, and deliver
          solutions that truly fit.
        </h1>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Card className="p-8 md:p-12 bg-white shadow-2xl border-0 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-gray-100 rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-700"></div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-black rounded-xl text-white shadow-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-black">Our Mission</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-bold text-black leading-tight">
                    To simplify digital growth through collaboration, creativity, and technology.
                  </p>
                  <div className="w-20 h-1 bg-black rounded-sm"></div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We aim to empower businesses — especially in Nepal and developing markets — with tools that are not
                    just functional, but scalable, intuitive, and built for long-term success.
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 bg-black text-white shadow-2xl border-0 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-gray-800 rotate-12 opacity-30 group-hover:rotate-45 transition-transform duration-700"></div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-white rounded-xl text-black shadow-lg">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Our Vision</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                    To become a trusted digital partner that doesn't just offer solutions — but explores possibilities.
                  </p>
                  <div className="w-20 h-1 bg-white rounded-sm"></div>
                  <p className="text-lg text-gray-100 leading-relaxed">
                    We don't believe in one-way thinking or fixed formulas. Every business is unique — and so are its
                    challenges. We approach every problem with curiosity and openness, exploring multiple paths to find
                    the most effective, creative, and sustainable solution.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-black">💡 Our Core Values</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These values guide everything we do and shape how we work with our clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Tilt options={{ max: 25, scale: 1.05, speed: 400, glare: true, "max-glare": 0.5 }}>
                  <Card
                    key={index}
                    className="p-8 md:p-10 bg-white shadow-xl border-t-4 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                    style={{ borderColor: `hsl(${index * 90}, 60%, 50%)` }}
                  >
                    <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-gray-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="flex items-start gap-8">
                      <div
                        className="p-4 rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `hsl(${index * 90}, 60%, 50%)`, color: "white" }}
                      >
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-4 text-black">
                          {value.title}
                        </h3>
                        <div className="w-16 h-0.5 bg-gray-300 mb-4"></div>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Note CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 sm:p-12 md:p-16 text-center bg-gradient-to-br from-gray-50 to-white shadow-3xl border-0 relative overflow-hidden hover:-translate-y-2 transition-all duration-500 group">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-black via-gray-600 to-black"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 border-4 border-gray-100 rounded-full opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border-2 border-gray-200 rounded-full opacity-10 group-hover:rotate-12 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-12">
                  <div className="p-6 bg-black rounded-full text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-12 w-12" />
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-black">Final Note</h2>

                <div className="space-y-8 mb-16 max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-bold text-black leading-relaxed">
                    We're not here to be just another service provider.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <Card className="p-6 bg-gray-50 border-0 shadow-lg">
                      <p className="font-bold text-black text-lg">Creative Problem-Solvers</p>
                    </Card>
                    <Card className="p-6 bg-black text-white border-0 shadow-lg">
                      <p className="font-bold text-lg">Technical Partners</p>
                    </Card>
                    <Card className="p-6 bg-gray-50 border-0 shadow-lg">
                      <p className="font-bold text-black text-lg">Long-term Digital Allies</p>
                    </Card>
                  </div>

                  <p className="text-2xl md:text-3xl font-black text-black">
                    Built with code. Driven by purpose. Designed for people.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="text-lg sm:text-xl px-8 sm:px-12 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform hover:-translate-y-1"
                  >
                    Start Your Project
                    <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg sm:text-xl px-8 sm:px-12 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 bg-transparent transform hover:-translate-y-1"
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black">
                Our Home Base
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mt-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
                We're proud to be based in the vibrant city of Kathmandu, Nepal.
              </p>
            </div>
            <InteractiveMap />
          </div>
        </div>
      </section>
    </div>
  )
}
