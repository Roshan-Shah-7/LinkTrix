"use client"

import { useState, useEffect } from "react"
import {
    Shield,
    Eye,
    Lock,
    Users,
    Database,
    Globe,
    Mail,
    Phone,
    MapPin,
    Calendar,
    FileText,
    AlertTriangle,
    Info,
    CheckCircle,
} from "lucide-react"

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            const scrollPosition = window.scrollY + 100

            sections.forEach((section) => {
                const element = section as HTMLElement
                const top = element.offsetTop
                const height = element.offsetHeight

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(element.id)
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const sections = [
        { id: "overview", title: "Privacy Overview", icon: Shield },
        { id: "information-collection", title: "Information We Collect", icon: Database },
        { id: "information-usage", title: "How We Use Information", icon: Eye },
        { id: "information-sharing", title: "Information Sharing", icon: Users },
        { id: "data-security", title: "Data Security", icon: Lock },
        { id: "cookies", title: "Cookies & Tracking", icon: Globe },
        { id: "user-rights", title: "Your Rights", icon: CheckCircle },
        { id: "data-retention", title: "Data Retention", icon: Calendar },
        { id: "third-party", title: "Third-Party Services", icon: Globe },
        { id: "international", title: "International Transfers", icon: Globe },
        { id: "children", title: "Children's Privacy", icon: Shield },
        { id: "updates", title: "Policy Updates", icon: FileText },
        { id: "contact", title: "Contact Us", icon: Mail },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <Shield className="h-12 w-12 mr-4" />
                            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Your privacy is important to us. This policy explains how Link Trix collects, uses, and protects your
                            personal information.
                        </p>
                        <div className="mt-8 flex items-center justify-center text-gray-400">
                            <Calendar className="h-5 w-5 mr-2" />
                            <span>Last Updated: January 8, 2025</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-22">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <FileText className="h-5 w-5 mr-2" />
                                    Table of Contents
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => {
                                        const Icon = section.icon
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center ${activeSection === section.id ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200"
                                                    }`}
                                            >
                                                <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                                                <span className="truncate">{section.title}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="prose prose-lg max-w-none">
                            {/* Privacy Overview */}
                            <section id="overview" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Shield className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Privacy Overview</h2>
                                </div>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                                    <div className="flex items-start">
                                        <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-blue-800 font-medium mb-2">Our Commitment to Privacy</p>
                                            <p className="text-blue-700 text-sm m-0">
                                                Link Trix is committed to protecting your privacy and ensuring the security of your personal
                                                information. This Privacy Policy explains our practices regarding the collection, use, and
                                                disclosure of information.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    At Link Trix, we understand that your privacy is fundamental to your trust in our services. This
                                    Privacy Policy describes how we collect, use, store, and protect your personal information when you
                                    use our website, services, or interact with us in any way.
                                </p>
                                <p>
                                    By using our services, you consent to the collection and use of information in accordance with this
                                    policy. We will not use or share your information with anyone except as described in this Privacy
                                    Policy.
                                </p>
                            </section>

                            {/* Information We Collect */}
                            <section id="information-collection" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Database className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
                                </div>

                                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                                <p>We may collect the following types of personal information:</p>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Contact Information:</strong> Name, email address, phone number, mailing address
                                    </li>
                                    <li>
                                        <strong>Business Information:</strong> Company name, job title, industry, business requirements
                                    </li>
                                    <li>
                                        <strong>Project Information:</strong> Project details, requirements, preferences, and specifications
                                    </li>
                                    <li>
                                        <strong>Communication Records:</strong> Messages, emails, chat logs, and call recordings
                                    </li>
                                    <li>
                                        <strong>Payment Information:</strong> Billing address, payment method details (processed securely)
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Automatically Collected Information</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Usage Data:</strong> Pages visited, time spent, click patterns, referral sources
                                    </li>
                                    <li>
                                        <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers
                                    </li>
                                    <li>
                                        <strong>Location Data:</strong> General geographic location based on IP address
                                    </li>
                                    <li>
                                        <strong>Cookies and Tracking:</strong> Website preferences, session data, analytics information
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Information from Third Parties</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Social Media:</strong> Profile information when you connect social accounts
                                    </li>
                                    <li>
                                        <strong>Business Partners:</strong> Referral information from trusted partners
                                    </li>
                                    <li>
                                        <strong>Public Sources:</strong> Publicly available business information for B2B purposes
                                    </li>
                                </ul>
                            </section>

                            {/* How We Use Information */}
                            <section id="information-usage" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Eye className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">How We Use Information</h2>
                                </div>

                                <p>We use the collected information for the following purposes:</p>

                                <h3 className="text-xl font-semibold mb-4">Service Delivery</h3>
                                <ul className="space-y-2">
                                    <li>Providing web development, design, and digital marketing services</li>
                                    <li>Managing projects and communicating about project progress</li>
                                    <li>Delivering completed work and ongoing support</li>
                                    <li>Processing payments and managing billing</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Communication</h3>
                                <ul className="space-y-2">
                                    <li>Responding to inquiries and providing customer support</li>
                                    <li>Sending project updates and important notifications</li>
                                    <li>Sharing relevant industry insights and company updates</li>
                                    <li>Marketing communications (with your consent)</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Business Operations</h3>
                                <ul className="space-y-2">
                                    <li>Improving our services and website functionality</li>
                                    <li>Analyzing usage patterns and user preferences</li>
                                    <li>Preventing fraud and ensuring security</li>
                                    <li>Complying with legal obligations</li>
                                </ul>
                            </section>

                            {/* Information Sharing */}
                            <section id="information-sharing" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Users className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Information Sharing</h2>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                                    <div className="flex items-start">
                                        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-yellow-800 font-medium mb-2">Limited Sharing Policy</p>
                                            <p className="text-yellow-700 text-sm m-0">
                                                We do not sell, trade, or rent your personal information to third parties. We only share
                                                information in specific circumstances outlined below.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-4">When We Share Information</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Service Providers:</strong> Trusted third-party vendors who assist in service delivery
                                    </li>
                                    <li>
                                        <strong>Legal Requirements:</strong> When required by law, court order, or government request
                                    </li>
                                    <li>
                                        <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of business assets
                                    </li>
                                    <li>
                                        <strong>Consent:</strong> When you explicitly authorize us to share specific information
                                    </li>
                                    <li>
                                        <strong>Protection:</strong> To protect our rights, property, or safety, or that of others
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Third-Party Service Providers</h3>
                                <p>We work with carefully selected service providers who may have access to your information:</p>
                                <ul className="space-y-2">
                                    <li>Cloud hosting and storage providers</li>
                                    <li>Payment processing companies</li>
                                    <li>Email and communication platforms</li>
                                    <li>Analytics and marketing tools</li>
                                    <li>Customer support platforms</li>
                                </ul>
                            </section>

                            {/* Data Security */}
                            <section id="data-security" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Lock className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Data Security</h2>
                                </div>

                                <p>
                                    We implement comprehensive security measures to protect your personal information against unauthorized
                                    access, alteration, disclosure, or destruction.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Encryption:</strong> Data encrypted in transit and at rest using industry-standard protocols
                                    </li>
                                    <li>
                                        <strong>Access Controls:</strong> Strict access controls and authentication requirements
                                    </li>
                                    <li>
                                        <strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing
                                    </li>
                                    <li>
                                        <strong>Employee Training:</strong> Regular security training for all team members
                                    </li>
                                    <li>
                                        <strong>Secure Infrastructure:</strong> Protected servers and secure hosting environments
                                    </li>
                                    <li>
                                        <strong>Backup Systems:</strong> Regular backups with secure storage and recovery procedures
                                    </li>
                                </ul>

                                <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
                                    <div className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-green-800 font-medium mb-2">Security Commitment</p>
                                            <p className="text-green-700 text-sm m-0">
                                                While we implement robust security measures, no method of transmission over the internet is 100%
                                                secure. We continuously update our security practices to maintain the highest level of
                                                protection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Cookies & Tracking */}
                            <section id="cookies" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Globe className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Cookies & Tracking Technologies</h2>
                                </div>

                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our website and provide
                                    personalized services.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Types of Cookies We Use</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Essential Cookies:</strong> Required for basic website functionality and security
                                    </li>
                                    <li>
                                        <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
                                    </li>
                                    <li>
                                        <strong>Functional Cookies:</strong> Remember your preferences and personalize your experience
                                    </li>
                                    <li>
                                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign
                                        effectiveness
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Managing Cookies</h3>
                                <p>You can control cookies through:</p>
                                <ul className="space-y-2">
                                    <li>Browser settings to block or delete cookies</li>
                                    <li>Our cookie consent banner when you first visit</li>
                                    <li>Third-party opt-out tools for advertising cookies</li>
                                    <li>Contacting us directly for assistance</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Third-Party Tracking</h3>
                                <p>We may use third-party analytics and marketing tools:</p>
                                <ul className="space-y-2">
                                    <li>Google Analytics for website usage analysis</li>
                                    <li>Social media pixels for advertising optimization</li>
                                    <li>Marketing automation platforms for email campaigns</li>
                                    <li>Customer support tools for chat functionality</li>
                                </ul>
                            </section>

                            {/* Your Rights */}
                            <section id="user-rights" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <CheckCircle className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Your Privacy Rights</h2>
                                </div>

                                <p>
                                    You have several rights regarding your personal information. We are committed to honoring these rights
                                    and providing you with control over your data.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Your Rights Include</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Access:</strong> Request a copy of the personal information we hold about you
                                    </li>
                                    <li>
                                        <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                                    </li>
                                    <li>
                                        <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                                        requirements)
                                    </li>
                                    <li>
                                        <strong>Portability:</strong> Request transfer of your data to another service provider
                                    </li>
                                    <li>
                                        <strong>Restriction:</strong> Request limitation of how we process your information
                                    </li>
                                    <li>
                                        <strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing
                                    </li>
                                    <li>
                                        <strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">How to Exercise Your Rights</h3>
                                <p>To exercise any of these rights:</p>
                                <ul className="space-y-2">
                                    <li>Email us at privacy@linktrix.com</li>
                                    <li>Use our online contact form</li>
                                    <li>Call us at (555) 123-4567</li>
                                    <li>Mail us at our business address</li>
                                </ul>

                                <p className="mt-4">
                                    We will respond to your request within 30 days and may require verification of your identity to
                                    protect your information.
                                </p>
                            </section>

                            {/* Data Retention */}
                            <section id="data-retention" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Calendar className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Data Retention</h2>
                                </div>

                                <p>
                                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this
                                    Privacy Policy or as required by law.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Retention Periods</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Active Clients:</strong> Throughout the duration of our business relationship
                                    </li>
                                    <li>
                                        <strong>Project Data:</strong> 7 years after project completion for business records
                                    </li>
                                    <li>
                                        <strong>Marketing Data:</strong> Until you unsubscribe or request deletion
                                    </li>
                                    <li>
                                        <strong>Website Analytics:</strong> 26 months for Google Analytics data
                                    </li>
                                    <li>
                                        <strong>Support Records:</strong> 3 years after the last interaction
                                    </li>
                                    <li>
                                        <strong>Legal Requirements:</strong> As required by applicable laws and regulations
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4 mt-8">Secure Deletion</h3>
                                <p>
                                    When we no longer need your information, we securely delete or anonymize it using industry-standard
                                    methods to ensure it cannot be recovered or reconstructed.
                                </p>
                            </section>

                            {/* Third-Party Services */}
                            <section id="third-party" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Globe className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Third-Party Services</h2>
                                </div>

                                <p>
                                    Our website and services may contain links to third-party websites or integrate with third-party
                                    services. This Privacy Policy does not apply to these external services.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Third-Party Integrations</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Social Media Platforms:</strong> Facebook, Twitter, LinkedIn, Instagram
                                    </li>
                                    <li>
                                        <strong>Payment Processors:</strong> Stripe, PayPal, and other secure payment gateways
                                    </li>
                                    <li>
                                        <strong>Cloud Services:</strong> AWS, Google Cloud, Microsoft Azure
                                    </li>
                                    <li>
                                        <strong>Analytics Tools:</strong> Google Analytics, Hotjar, and similar platforms
                                    </li>
                                    <li>
                                        <strong>Communication Tools:</strong> Email providers, chat platforms, video conferencing
                                    </li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
                                    <div className="flex items-start">
                                        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-yellow-800 font-medium mb-2">Third-Party Responsibility</p>
                                            <p className="text-yellow-700 text-sm m-0">
                                                We are not responsible for the privacy practices of third-party websites or services. We
                                                encourage you to review their privacy policies before providing any personal information.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* International Transfers */}
                            <section id="international" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Globe className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">International Data Transfers</h2>
                                </div>

                                <p>
                                    Your information may be transferred to and processed in countries other than your own. We ensure
                                    appropriate safeguards are in place for international transfers.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Transfer Safeguards</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection laws
                                    </li>
                                    <li>
                                        <strong>Standard Contractual Clauses:</strong> EU-approved contracts for data protection
                                    </li>
                                    <li>
                                        <strong>Certification Programs:</strong> Privacy Shield and similar certification frameworks
                                    </li>
                                    <li>
                                        <strong>Binding Corporate Rules:</strong> Internal policies for multinational organizations
                                    </li>
                                </ul>

                                <p className="mt-4">
                                    By using our services, you consent to the transfer of your information to countries that may have
                                    different data protection laws than your jurisdiction.
                                </p>
                            </section>

                            {/* Children's Privacy */}
                            <section id="children" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Shield className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Children's Privacy</h2>
                                </div>

                                <p>
                                    Our services are not intended for children under the age of 13. We do not knowingly collect personal
                                    information from children under 13 years of age.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">Our Policy</h3>
                                <ul className="space-y-2">
                                    <li>We do not target our services to children under 13</li>
                                    <li>We do not knowingly collect information from children under 13</li>
                                    <li>If we learn we have collected information from a child under 13, we will delete it promptly</li>
                                    <li>Parents can contact us to review, delete, or stop collection of their child's information</li>
                                </ul>

                                <p className="mt-4">
                                    If you are a parent or guardian and believe your child has provided us with personal information,
                                    please contact us immediately so we can take appropriate action.
                                </p>
                            </section>

                            {/* Policy Updates */}
                            <section id="updates" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <FileText className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Privacy Policy Updates</h2>
                                </div>

                                <p>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                                    legal requirements, or other factors.
                                </p>

                                <h3 className="text-xl font-semibold mb-4">How We Handle Updates</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <strong>Notification:</strong> We will notify you of significant changes via email or website notice
                                    </li>
                                    <li>
                                        <strong>Effective Date:</strong> Changes become effective on the date specified in the updated
                                        policy
                                    </li>
                                    <li>
                                        <strong>Review Period:</strong> We provide reasonable time to review changes before they take effect
                                    </li>
                                    <li>
                                        <strong>Continued Use:</strong> Continued use of our services constitutes acceptance of the updated
                                        policy
                                    </li>
                                </ul>

                                <p className="mt-4">
                                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
                                    information.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section id="contact" className="mb-12">
                                <div className="flex items-center mb-6">
                                    <Mail className="h-6 w-6 mr-3" />
                                    <h2 className="text-2xl font-bold m-0">Contact Us</h2>
                                </div>

                                <p>
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy
                                    practices, please contact us using the information below.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                                            <Mail className="h-5 w-5 mr-2" />
                                            Privacy Officer
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 mr-3 text-gray-500" />
                                                <span>privacy@linktrix.com</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 mr-3 text-gray-500" />
                                                <span>(555) 123-4567</span>
                                            </div>
                                            <div className="flex items-start">
                                                <MapPin className="h-4 w-4 mr-3 text-gray-500 mt-1" />
                                                <div>
                                                    <p>123 Business Avenue</p>
                                                    <p>Suite 100</p>
                                                    <p>City, State 12345</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-4">Response Time</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>
                                                <strong>Privacy Inquiries:</strong> Within 48 hours
                                            </li>
                                            <li>
                                                <strong>Data Requests:</strong> Within 30 days
                                            </li>
                                            <li>
                                                <strong>Urgent Matters:</strong> Within 24 hours
                                            </li>
                                            <li>
                                                <strong>General Questions:</strong> Within 5 business days
                                            </li>
                                        </ul>

                                        <div className="mt-6 p-4 bg-white rounded border">
                                            <p className="text-sm text-gray-600">
                                                <strong>Data Protection Officer:</strong>
                                                <br />
                                                For EU residents, you may also contact our Data Protection Officer at dpo@linktrix.com for
                                                matters related to GDPR compliance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-black text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We're here to help you understand how we protect your information.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            Contact Us
                        </a>
                        <a
                            href="/terms"
                            className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
                        >
                            <FileText className="h-5 w-5 mr-2" />
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
