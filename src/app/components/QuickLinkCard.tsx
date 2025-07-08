import React from 'react';
import Link from 'next/link';
import { Card } from "@/app/components/ui/card";
import { ArrowRight } from "lucide-react";

interface QuickLinkCardProps {
    title: string;
    description: string;
    link: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ title, description, link }) => {
    return (
        <Link href={link}>
            <Card
                className="p-8 bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group cursor-pointer"
            >
                <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                <div className="flex items-center justify-center text-black group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </Card>
        </Link>
    );
};

export default QuickLinkCard;