"use client"

import { useState, useEffect } from "react"
import { FileText, Calendar, Mail, Phone, MapPin, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            const scrollPosition = window.scrollY + 100

            sections.forEach((section) => {
                const element = section as HTMLElement
                if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
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
        { id: "acceptance", title: "1. Acceptance of Terms", icon: CheckCircle },
        { id: "services", title: "2. Services Description", icon: FileText },
        { id: "user-responsibilities", title: "3. User Responsibilities", icon: Shield },
        { id: "payment-terms", title: "4. Payment Terms", icon: Clock },
        { id: "intellectual-property", title: "5. Intellectual Property", icon: Shield },
        { id: "confidentiality", title: "6. Confidentiality", icon: Shield },
        { id: "project-timeline", title: "7. Project Timeline & Delivery", icon: Calendar },
        { id: "revisions", title: "8. Revisions & Changes", icon: FileText },
        { id: "termination", title: "9. Termination", icon: AlertTriangle },
        { id: "limitation-liability", title: "10. Limitation of Liability", icon: Shield },
        { id: "indemnification", title: "11. Indemnification", icon: Shield },
        { id: "governing-law", title: "12. Governing Law", icon: FileText },
        { id: "modifications", title: "13. Modifications", icon: FileText },
        { id: "contact", title: "14. Contact Information", icon: Mail },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <FileText className="w-16 h-16 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Please read these terms and conditions carefully before using our services. By engaging with Link Trix,
                            you agree to be bound by these terms.
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                Last Updated: January 8, 2025
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                Effective Date: January 1, 2025
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-22">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Table of Contents
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => {
                                        const Icon = section.icon
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex items-center ${activeSection === section.id ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200"
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
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
                            {/* Section 1: Acceptance of Terms */}
                            <section id="acceptance" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 mr-3" />
                                    1. Acceptance of Terms
                                </h2>
                                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        By accessing and using the services provided by Link Trix ("Company", "we", "us", or "our"), you
                                        ("Client", "you", or "your") acknowledge that you have read, understood, and agree to be bound by
                                        these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and
                                        Link Trix.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you do not agree to these Terms, you must not use our services. Your continued use of our services
                                    constitutes acceptance of any modifications to these Terms.
                                </p>
                            </section>

                            {/* Section 2: Services Description */}
                            <section id="services" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <FileText className="w-6 h-6 mr-3" />
                                    2. Services Description
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Link Trix provides comprehensive digital services including but not limited to:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Development Services</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Web Development</li>
                                            <li>• Mobile App Development</li>
                                            <li>• Software Development</li>
                                            <li>• E-commerce Solutions</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Design & Marketing</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• UI/UX Design</li>
                                            <li>• Branding & Identity</li>
                                            <li>• Digital Marketing</li>
                                            <li>• Video & Photography</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    All services are provided subject to the terms and conditions outlined in this agreement and any
                                    additional project-specific agreements or proposals.
                                </p>
                            </section>

                            {/* Section 3: User Responsibilities */}
                            <section id="user-responsibilities" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3" />
                                    3. User Responsibilities
                                </h2>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <div className="flex">
                                        <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-800">Important Client Obligations</h4>
                                            <p className="text-yellow-700 text-sm mt-1">
                                                Failure to meet these responsibilities may result in project delays or additional charges.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Content & Materials</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            You are responsible for providing all necessary content, materials, and information required for
                                            project completion in a timely manner. This includes text, images, logos, and any other assets
                                            needed for your project.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Feedback & Communication</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            You agree to provide timely feedback and responses to our communications. Delays in feedback may
                                            result in project timeline extensions.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Legal Compliance</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            You warrant that all materials provided to us are legally owned by you or properly licensed, and
                                            that the use of such materials will not infringe upon any third-party rights.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Payment Terms */}
                            <section id="payment-terms" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Clock className="w-6 h-6 mr-3" />
                                    4. Payment Terms
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-3">Payment Schedule</h4>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• 50% deposit required to begin work</li>
                                            <li>• Remaining balance due upon completion</li>
                                            <li>• Monthly payments for ongoing services</li>
                                            <li>• Net 15 payment terms for invoices</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-3">Accepted Methods</h4>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Bank transfer (preferred)</li>
                                            <li>• Credit/Debit cards</li>
                                            <li>• PayPal</li>
                                            <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <div className="flex">
                                        <AlertTriangle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-red-800">Late Payment Policy</h4>
                                            <p className="text-red-700 text-sm mt-1">
                                                Late payments may incur a 2% monthly service charge and may result in suspension of services
                                                until payment is received.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5: Intellectual Property */}
                            <section id="intellectual-property" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3" />
                                    5. Intellectual Property
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3">Client Ownership</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                            Upon full payment, you will own all custom work created specifically for your project, including
                                            but not limited to custom code, designs, and content created by Link Trix.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Link Trix Retention</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                            Link Trix retains ownership of all pre-existing intellectual property, including but not limited
                                            to frameworks, libraries, methodologies, and general knowledge used in the creation of your
                                            project.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Portfolio Rights</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Link Trix reserves the right to display completed work in our portfolio and marketing materials
                                            unless otherwise agreed upon in writing.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 6: Confidentiality */}
                            <section id="confidentiality" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3" />
                                    6. Confidentiality
                                </h2>
                                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                    <p className="text-blue-800 leading-relaxed">
                                        Link Trix agrees to maintain the confidentiality of all proprietary information shared during the
                                        course of our business relationship. We will not disclose, use, or reproduce any confidential
                                        information for purposes other than fulfilling our contractual obligations.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    This confidentiality obligation survives the termination of our business relationship and remains in
                                    effect indefinitely unless otherwise specified in a separate non-disclosure agreement.
                                </p>
                            </section>

                            {/* Section 7: Project Timeline & Delivery */}
                            <section id="project-timeline" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Calendar className="w-6 h-6 mr-3" />
                                    7. Project Timeline & Delivery
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Timeline Estimates</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            All project timelines are estimates based on the scope of work defined at project initiation.
                                            Actual delivery dates may vary based on project complexity, client feedback timing, and scope
                                            changes.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Delivery Method</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Final deliverables will be provided through secure digital channels unless otherwise specified.
                                            Physical delivery may incur additional charges.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Force Majeure</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Link Trix is not liable for delays caused by circumstances beyond our reasonable control,
                                            including but not limited to natural disasters, government actions, or technical failures of
                                            third-party services.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 8: Revisions & Changes */}
                            <section id="revisions" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <FileText className="w-6 h-6 mr-3" />
                                    8. Revisions & Changes
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-3 text-green-800">Included Revisions</h4>
                                        <ul className="text-sm text-green-700 space-y-2">
                                            <li>• Minor content updates</li>
                                            <li>• Color and font adjustments</li>
                                            <li>• Layout refinements</li>
                                            <li>• Bug fixes and corrections</li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-3 text-orange-800">Additional Charges</h4>
                                        <ul className="text-sm text-orange-700 space-y-2">
                                            <li>• Major design overhauls</li>
                                            <li>• New feature additions</li>
                                            <li>• Scope expansions</li>
                                            <li>• Third-party integrations</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-6">
                                    All revision requests must be submitted in writing. Major changes that significantly alter the project
                                    scope will require a separate agreement and additional payment.
                                </p>
                            </section>

                            {/* Section 9: Termination */}
                            <section id="termination" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <AlertTriangle className="w-6 h-6 mr-3" />
                                    9. Termination
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3">Termination by Client</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            You may terminate this agreement at any time with written notice. You will be responsible for
                                            payment of all work completed up to the termination date, plus any non-refundable expenses
                                            incurred.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Termination by Link Trix</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            We may terminate this agreement with 30 days written notice, or immediately in cases of
                                            non-payment, breach of terms, or if continuation of the project becomes impractical.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Post-Termination</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Upon termination, all work completed and paid for will be delivered to you. Confidentiality
                                            obligations and intellectual property rights survive termination.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 10: Limitation of Liability */}
                            <section id="limitation-liability" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3" />
                                    10. Limitation of Liability
                                </h2>
                                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, LINK TRIX'S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR
                                        RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING
                                        RISE TO THE CLAIM.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Link Trix shall not be liable for any indirect, incidental, special, consequential, or punitive
                                    damages, including but not limited to loss of profits, data, or business opportunities, regardless of
                                    the theory of liability.
                                </p>
                            </section>

                            {/* Section 11: Indemnification */}
                            <section id="indemnification" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3" />
                                    11. Indemnification
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You agree to indemnify, defend, and hold harmless Link Trix from and against any and all claims,
                                    damages, losses, costs, and expenses (including reasonable attorney's fees) arising from or related
                                    to:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Your use of our services</li>
                                    <li>Your violation of these Terms</li>
                                    <li>Content or materials you provide to us</li>
                                    <li>Your violation of any third-party rights</li>
                                </ul>
                            </section>

                            {/* Section 12: Governing Law */}
                            <section id="governing-law" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <FileText className="w-6 h-6 mr-3" />
                                    12. Governing Law
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                                    without regard to its conflict of law provisions. Any disputes arising from these Terms shall be
                                    resolved through binding arbitration or in the courts of [Your Jurisdiction].
                                </p>
                            </section>

                            {/* Section 13: Modifications */}
                            <section id="modifications" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <FileText className="w-6 h-6 mr-3" />
                                    13. Modifications
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Link Trix reserves the right to modify these Terms at any time. We will notify you of any material
                                    changes by email or through our website. Your continued use of our services after such modifications
                                    constitutes acceptance of the updated Terms.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-blue-800 text-sm">
                                        <strong>Recommendation:</strong> We encourage you to review these Terms periodically to stay
                                        informed of any updates or changes.
                                    </p>
                                </div>
                            </section>

                            {/* Section 14: Contact Information */}
                            <section id="contact" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <Mail className="w-6 h-6 mr-3" />
                                    14. Contact Information
                                </h2>
                                <div className="bg-black text-white p-6 rounded-lg">
                                    <h4 className="font-semibold mb-4">Questions About These Terms?</h4>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="flex items-center">
                                            <Mail className="w-5 h-5 mr-3 text-gray-300" />
                                            <div>
                                                <p className="text-sm text-gray-300">Email</p>
                                                <p className="font-medium">legal@linktrix.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-5 h-5 mr-3 text-gray-300" />
                                            <div>
                                                <p className="text-sm text-gray-300">Phone</p>
                                                <p className="font-medium">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-5 h-5 mr-3 text-gray-300" />
                                            <div>
                                                <p className="text-sm text-gray-300">Address</p>
                                                <p className="font-medium">123 Business Ave</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Footer */}
                            <div className="border-t pt-8 mt-12">
                                <div className="flex flex-col md:flex-row justify-between items-center">
                                    <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 Link Trix. All rights reserved.</p>
                                    <div className="flex space-x-6">
                                        <a href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
                                            Privacy Policy
                                        </a>
                                        <a href="/sitemap" className="text-sm text-gray-600 hover:text-black transition-colors">
                                            Sitemap
                                        </a>
                                        <a href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
