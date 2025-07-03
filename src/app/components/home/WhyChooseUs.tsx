import React from 'react';
import { Handshake, Settings, Rocket, Target, Lightbulb, Globe } from 'lucide-react';
import Image from 'next/image';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: Handshake,
            title: 'Collaboration at the Core',
            description: 'We partner with you — not just work for you. From concept to launch, we co-create every step of the way to ensure your vision is fully realized.',
        },
        {
            icon: Settings,
            title: 'End-to-End Digital Expertise',
            description: 'From websites and mobile apps to marketing strategies and full-scale digital transformations — our multidisciplinary team is equipped to deliver from start to scale.',
        },
        {
            icon: Rocket,
            title: 'Future-Ready Solutions',
            description: 'No templates. No shortcuts. We craft tailored, scalable solutions using modern tech stacks that are built to last and evolve with your business.',
        },
        {
            icon: Target,
            title: 'Outcome-Driven Approach',
            description: 'We don’t just deliver projects — we deliver results. Whether it’s conversions, engagement, or revenue, we measure what matters and optimize relentlessly.',
        },
        {
            icon: Lightbulb,
            title: 'Where Creativity Meets Code',
            description: 'Strategy, design, and engineering — seamlessly integrated. We help brands not only look exceptional, but perform exceptionally.',
        },
        {
            icon: Globe,
            title: 'Global Standards with Local Insight',
            description: 'Proudly rooted in Nepal, our work meets international quality while understanding the nuances of local markets — ready to scale across borders.',
        },
    ];

    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <Image
                    src="/home/whyUs.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            </div>
            <div className="relative max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 z-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose LinkTrix ?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-5xl mx-auto">
                        At Link Trix, we merge cutting-edge technology with a human-first approach to create solutions that truly make an impact.
                        <br />
                        Here's what sets us apart:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left border-l rounded-md border-gray-300 p-2">
                            <div className="mb-4">
                                <benefit.icon size={26} className="text-gray-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-md text-justify text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;