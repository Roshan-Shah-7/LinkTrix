import Link from 'next/link';
import React from 'react';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSectionProps {
    title: string;
    links: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    return (
        <div className="max-lg:min-w-[140px]">
            <h4 className="text-white font-semibold text-sm relative max-sm:cursor-pointer">{title}</h4>
            <ul className="mt-6 space-y-4">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="hover:text-white text-gray-400 text-sm font-normal transition-colors duration-300">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;