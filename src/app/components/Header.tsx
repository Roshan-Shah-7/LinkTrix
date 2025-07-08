"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceCategory {
    name: string
    href: string
    description: string
}

interface ServiceGroup {
    category: string
    services: ServiceCategory[]
}

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMouseEnterServices = () => {
        if (servicesTimeout) {
            clearTimeout(servicesTimeout)
            setServicesTimeout(null)
        }
        setIsServicesOpen(true)
    }

    const handleMouseLeaveServices = () => {
        const timeout = setTimeout(() => {
            setIsServicesOpen(false)
        }, 200) // 200ms delay
        setServicesTimeout(timeout)
    }

    const serviceGroups: ServiceGroup[] = [
        {
            category: "Development",
            services: [
                {
                    name: "Software Development",
                    href: "/services/software-development",
                    description: "Mobile apps, Desktop apps, Custom tools",
                },
                { name: "Web Development", href: "/services/web-development", description: "Websites, Web apps, E-commerce" },
            ],
        },
        {
            category: "Design & Marketing",
            services: [
                {
                    name: "UI/UX Design",
                    href: "/services/ui-ux-design",
                    description: "Wireframing, Prototyping, Interface Design",
                },
                {
                    name: "Digital Marketing",
                    href: "/services/digital-marketing",
                    description: "SEO, Ads, Social Media, Content Strategy",
                },
                { name: "Branding", href: "/services/branding", description: "Logo, Visual Identity, Brand Strategy" },
                {
                    name: "Video/Photography",
                    href: "/services/video-photography",
                    description: "Video production, Photography, Editing",
                },
            ],
        },
        {
            category: "Infrastructure",
            services: [
                {
                    name: "Cloud & Hosting",
                    href: "/services/cloud-hosting",
                    description: "Deployment, Hosting, Server setup, DevOps",
                },
            ],
        },
    ]

    interface NavLinkItem {
        name: string;
        href: string;
        isDropdown?: boolean;
    }

    const navLinks: NavLinkItem[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services", isDropdown: true },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
    ]

    return (
        <header
            className={`fixed py-4 top-0 left-0 right-0 z-[10000] ${isScrolled ? "lg:py-2" : "lg:py-4"} transition-all duration-300`}
        >
            <nav className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300
                ${isScrolled ? "max-w-6xl backdrop-blur-md border-2 rounded-full border-gray-200 bg-white py-1" : "max-w-7xl bg-transparent"}`}>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-black font-bold text-xl ">
                            LinkTrix.
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                if (link.isDropdown) {
                                    return (
                                        <div
                                            className="relative"
                                            key={link.name}
                                            onMouseEnter={handleMouseEnterServices}
                                            onMouseLeave={handleMouseLeaveServices}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsServicesOpen(false)}
                                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center cursor-pointer
                                                    ${link.isDropdown && pathname.startsWith(link.href) ? "text-black font-bold after:absolute after:left-1/2 after:rounded-full after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[70%] after:bg-black after:transition-all after:duration-300" : "text-gray-600 hover:text-black"}`}
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                                />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <AnimatePresence>
                                                {isServicesOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-[900px] bg-[#111111] backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 py-4 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 items-start"
                                                    >
                                                        {serviceGroups.map((group, groupIndex) => (
                                                            <div
                                                                key={group.category}
                                                                className="pb-4"
                                                            >
                                                                <h3 className="text-[#ffcb74] text-xs font-semibold uppercase tracking-wider mb-3">
                                                                    {group.category}
                                                                </h3>
                                                                <div className="space-y-2">
                                                                    {group.services.map((service) => (
                                                                        <Link
                                                                            key={service.name}
                                                                            href={service.href}
                                                                            className="block p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200"
                                                                            onClick={() => setIsServicesOpen(false)}
                                                                        >
                                                                            <div className="text-white text-sm font-medium">{service.name}</div>
                                                                            <div className="text-gray-400 text-xs mt-1">{service.description}</div>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200
                                            ${isActive ? "text-black font-bold after:absolute after:left-1/2 after:rounded-full after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[70%] after:bg-black after:transition-all after:duration-300" : "text-gray-600 hover:text-black"}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="bg-black hover:scale-105 text-white px-6 py-2 rounded-lg 
                            text-sm font-medium transition-all duration-500 shadow-md hover:shadow-none shadow-gray-500"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-black p-2"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700/50 relative z-50">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                if (link.isDropdown) {
                                    return (
                                        <div className="px-3 py-2" key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setIsServicesOpen(false);
                                                }}
                                                className={`relative text-base font-medium transition-colors duration-200 flex items-center w-full
                                                    ${pathname.startsWith(link.href) ? "text-white font-bold after:absolute after:left-0 after:top-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300" : "text-gray-300 hover:text-white"}`}
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                                />
                                            </Link>

                                            <AnimatePresence>
                                                {isServicesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="mt-2 pl-4 space-y-2 overflow-hidden"
                                                    >
                                                        {serviceGroups.map((group) => (
                                                            <div key={group.category}>
                                                                <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                                                    {group.category}
                                                                </h4>
                                                                {group.services.map((service) => (
                                                                    <Link
                                                                        key={service.name}
                                                                        href={service.href}
                                                                        className="block text-gray-300 hover:text-white text-sm py-1 transition-colors duration-200"
                                                                        onClick={() => {
                                                                            setIsMobileMenuOpen(false)
                                                                            setIsServicesOpen(false)
                                                                        }}
                                                                    >
                                                                        {service.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive ? "text-white font-bold after:absolute after:left-0 after:top-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300" : "text-gray-300 hover:text-white"}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}

                            {/* Mobile CTA */}
                            <div className="px-3 pt-4">
                                <Link
                                    href="/contact"
                                    className="bg-blue-600 hover:bg-blue-700 text-white block text-center px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Let's Talk
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Overlay to close dropdowns when clicking outside */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setIsMobileMenuOpen(false)
                    }}
                />
            )}
        </header>
    )
}

export default Header