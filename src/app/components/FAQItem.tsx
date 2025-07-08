import React, { useState } from 'react';
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
    id: number;
    question: string;
    answer: string;
    tags: string[];
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, tags, isOpen, onToggle }) => {
    return (
        <Card
            className="bg-white shadow-xl border-0 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
            <button
                onClick={() => onToggle(id)}
                className="w-full p-8 text-left hover:bg-gray-50 transition-colors duration-300"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${id}`}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-black pr-8">{question}</h3>
                    <div className="flex-shrink-0">
                        {isOpen ? (
                            <ChevronUp className="h-6 w-6 text-gray-600" />
                        ) : (
                            <ChevronDown className="h-6 w-6 text-gray-600" />
                        )}
                    </div>
                </div>
            </button>

            <div
                id={`faq-answer-${id}`}
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="min-h-0 px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-700 leading-relaxed mb-6">{answer}</p>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default FAQItem;