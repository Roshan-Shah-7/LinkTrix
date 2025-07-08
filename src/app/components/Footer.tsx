import React from 'react';
import TextPressure from './ui/TextPressure';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import FooterSection from './FooterSection';
import { socialLinks } from '../data/socialLinks';
import { footerNavigation } from '../data/footerNavigation';


const Footer = () => {
    const servicesSection = footerNavigation.find(section => section.title === 'Services');
    const additionalSection = footerNavigation.find(section => section.title === 'Additional');
    const legalSection = footerNavigation.find(section => section.title === 'Legal');

    return (
        <footer className="tracking-wide bg-black px-10 py-12 border-t border-gray-800">
            <div className="flex flex-wrap justify-between gap-10 max-w-6xl mx-auto">
                <div className="max-w-md">
                    <div>
                        <h1 className='font-bold text-lg text-white'>
                            Link Trix - Digital Solutions That Move With You
                        </h1>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            At Link Trix, we craft smart, scalable digital experiences — from websites and apps to marketing and branding. Rooted in collaboration, powered by innovation, and driven by results, we help businesses grow in Nepal and beyond.
                        </p>
                    </div>
                    <ul className="mt-8 flex space-x-5">
                        {socialLinks.map((link) => (
                            <SocialIcon key={link.name} name={link.name} href={link.href} />
                        ))}
                    </ul>
                </div>

                {servicesSection && <FooterSection title={servicesSection.title} links={servicesSection.links} />}
                {additionalSection && <FooterSection title={additionalSection.title} links={additionalSection.links} />}

            </div>

            <hr className="mt-10 mb-6 border-t border-gray-800" />

            <div className="flex flex-wrap max-md:flex-col gap-4 max-w-7xl mx-auto">
                {legalSection && (
                    <ul className="md:flex md:space-x-6 max-md:space-y-2">
                        {legalSection.links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:text-white text-gray-400 text-sm font-normal transition-colors duration-300">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <p className="text-gray-400 text-sm md:ml-auto text-center md:text-right font-semibold">© {new Date().getFullYear()} LinkTrix. All rights reserved.</p>
            </div>

            <div className='relative'>
                <TextPressure
                    text="LinkTrix"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={36}
                />
            </div>
        </footer>
    );
};

export default Footer