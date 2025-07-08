import React from 'react';
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { MessageSquare, Phone, Mail, Clock, ArrowRight } from "lucide-react";

interface ContactCardProps {
    icon: string; // Name of the Lucide icon as a string
    title: string;
    description: string;
    action: string;
    available: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, action, available }) => {
    const LucideIcon = (props: React.SVGProps<SVGSVGElement>) => {
        switch (icon) {
            case "MessageSquare":
                return <MessageSquare {...props} />;
            case "Phone":
                return <Phone {...props} />;
            case "Mail":
                return <Mail {...props} />;
            default:
                return null;
        }
    };

    return (
        <Card
            className="p-10 bg-white shadow-2xl border-0 rounded-3xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 text-center group"
        >
            <div className="p-6 bg-black rounded-2xl text-white shadow-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300 mb-6">
                <LucideIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <div className="mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    {available}
                </div>
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-xl font-semibold">
                {action}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Card>
    );
};

export default ContactCard;