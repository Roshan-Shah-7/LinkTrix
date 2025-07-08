export const faqCategories = [
    { id: "all", name: "All Questions", count: 24 },
    { id: "general", name: "General", count: 6 },
    { id: "services", name: "Services", count: 8 },
    { id: "pricing", name: "Pricing", count: 5 },
    { id: "technical", name: "Technical", count: 5 },
];

export const faqs = [
    // General Questions
    {
        id: 1,
        category: "general",
        question: "What services does Link Trix offer?",
        answer:
            "Link Trix offers comprehensive digital solutions including Software Development, Web Development, UI/UX Design, Digital Marketing, Branding, Video/Photography, and Cloud & Hosting services. We're a full-service digital agency that can handle all aspects of your online presence and business growth.",
        tags: ["services", "overview", "digital agency"],
    },
    {
        id: 2,
        category: "general",
        question: "How long has Link Trix been in business?",
        answer:
            "Link Trix has been providing digital solutions for over 8 years, serving clients ranging from startups to enterprise companies. Our experience spans across various industries and technologies, giving us the expertise to handle complex projects.",
        tags: ["experience", "company", "history"],
    },
    {
        id: 3,
        category: "general",
        question: "What industries do you work with?",
        answer:
            "We work with clients across various industries including technology, healthcare, finance, e-commerce, education, real estate, hospitality, and more. Our diverse experience allows us to understand different business needs and provide tailored solutions.",
        tags: ["industries", "clients", "experience"],
    },
    {
        id: 4,
        category: "general",
        question: "Do you work with international clients?",
        answer:
            "Yes, we work with clients globally. Our team is experienced in working across different time zones and we have successfully delivered projects for clients in North America, Europe, Asia, and Australia. We use modern communication tools to ensure seamless collaboration.",
        tags: ["international", "global", "remote"],
    },
    {
        id: 5,
        category: "general",
        question: "What makes Link Trix different from other agencies?",
        answer:
            "Our unique combination of technical expertise, creative design, and strategic thinking sets us apart. We don't just build solutions; we create comprehensive digital experiences that drive business growth. Our team stays current with the latest technologies and trends to deliver cutting-edge solutions.",
        tags: ["differentiation", "unique", "expertise"],
    },
    {
        id: 6,
        category: "general",
        question: "How do I get started with Link Trix?",
        answer:
            "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your project requirements, goals, and timeline. From there, we'll provide a detailed proposal and project plan tailored to your needs.",
        tags: ["getting started", "consultation", "process"],
    },

    // Services Questions
    {
        id: 7,
        category: "services",
        question: "Can you help with both web and mobile app development?",
        answer:
            "We specialize in both web and mobile app development. Our team can create responsive websites, progressive web apps, native iOS and Android applications, and cross-platform solutions using technologies like React Native and Flutter.",
        tags: ["web development", "mobile apps", "cross-platform"],
    },
    {
        id: 8,
        category: "services",
        question: "Do you provide ongoing maintenance and support?",
        answer:
            "Yes, we offer comprehensive maintenance and support packages for all our services. This includes regular updates, security patches, performance optimization, bug fixes, and technical support. We believe in long-term partnerships with our clients.",
        tags: ["maintenance", "support", "ongoing"],
    },
    {
        id: 9,
        category: "services",
        question: "Can you redesign my existing website?",
        answer:
            "Definitely! We specialize in website redesigns and can help modernize your existing site. We'll analyze your current website, understand your goals, and create a new design that improves user experience, performance, and conversion rates while maintaining your brand identity.",
        tags: ["redesign", "website", "modernization"],
    },
    {
        id: 10,
        category: "services",
        question: "Do you offer SEO services?",
        answer:
            "Yes, SEO is a core part of our digital marketing services. We provide comprehensive SEO including keyword research, on-page optimization, technical SEO, content strategy, link building, and performance tracking to improve your search engine rankings and organic traffic.",
        tags: ["SEO", "digital marketing", "search optimization"],
    },
    {
        id: 11,
        category: "services",
        question: "Can you help with e-commerce development?",
        answer:
            "We have extensive experience in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. We can build complete online stores with payment integration, inventory management, and all the features needed for successful online selling.",
        tags: ["e-commerce", "online store", "shopify"],
    },
    {
        id: 12,
        category: "services",
        question: "Do you provide branding services?",
        answer:
            "Yes, we offer complete branding services including logo design, visual identity systems, brand strategy, and brand guidelines. Our branding team works closely with you to create a cohesive brand identity that resonates with your target audience.",
        tags: ["branding", "logo design", "visual identity"],
    },
    {
        id: 13,
        category: "services",
        question: "Can you help migrate my website to a new platform?",
        answer:
            "Yes, we specialize in website migrations and can help you move to a new platform, hosting provider, or technology stack. We ensure minimal downtime, preserve your SEO rankings, and maintain all your existing content and functionality.",
        tags: ["migration", "platform change", "hosting"],
    },
    {
        id: 14,
        category: "services",
        question: "Do you offer video production services?",
        answer:
            "Yes, we provide comprehensive video production services including corporate videos, product demonstrations, promotional content, and social media videos. Our team handles everything from concept development to final editing and delivery.",
        tags: ["video production", "corporate videos", "content creation"],
    },

    // Pricing Questions
    {
        id: 15,
        category: "pricing",
        question: "How do you price your services?",
        answer:
            "Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We provide detailed quotes after understanding your requirements. We offer competitive rates and transparent pricing with no hidden fees.",
        tags: ["pricing", "quotes", "project-based"],
    },
    {
        id: 16,
        category: "pricing",
        question: "Do you offer payment plans?",
        answer:
            "Yes, we offer flexible payment plans for larger projects. Typically, we work with milestone-based payments where you pay as we complete different phases of the project. We can discuss payment terms that work best for your budget and cash flow.",
        tags: ["payment plans", "milestones", "flexible"],
    },
    {
        id: 17,
        category: "pricing",
        question: "Is there a minimum project size?",
        answer:
            "While we work on projects of all sizes, we do have minimum project values for certain services to ensure we can deliver quality results. Small projects start around $2,000, while larger enterprise projects can range from $50,000 to $500,000+.",
        tags: ["minimum project", "project size", "budget"],
    },
    {
        id: 18,
        category: "pricing",
        question: "Do you provide free consultations?",
        answer:
            "Yes, we offer free initial consultations where we discuss your project requirements, goals, and provide preliminary recommendations. This helps us understand your needs and allows you to get to know our team before making any commitments.",
        tags: ["free consultation", "initial meeting", "no commitment"],
    },
    {
        id: 19,
        category: "pricing",
        question: "What's included in your pricing?",
        answer:
            "Our pricing includes all development work, testing, basic training, and initial support. Depending on the project, it may also include design, content creation, and deployment. We provide detailed breakdowns so you know exactly what's included.",
        tags: ["pricing breakdown", "included services", "transparency"],
    },

    // Technical Questions
    {
        id: 20,
        category: "technical",
        question: "What technologies do you use?",
        answer:
            "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Google Cloud, and many others. We choose the best technology stack for each project based on requirements, scalability needs, and long-term maintenance considerations.",
        tags: ["technologies", "tech stack", "modern"],
    },
    {
        id: 21,
        category: "technical",
        question: "Do you follow security best practices?",
        answer:
            "Security is a top priority in all our projects. We implement industry-standard security measures including encryption, secure authentication, regular security audits, and compliance with relevant security standards like OWASP guidelines.",
        tags: ["security", "best practices", "compliance"],
    },
    {
        id: 22,
        category: "technical",
        question: "How do you ensure website performance?",
        answer:
            "We optimize for performance from the ground up using techniques like code splitting, image optimization, caching strategies, CDN implementation, and performance monitoring. We regularly test and optimize to ensure fast loading times and smooth user experiences.",
        tags: ["performance", "optimization", "speed"],
    },
    {
        id: 23,
        category: "technical",
        question: "Do you provide hosting services?",
        answer:
            "Yes, we offer comprehensive hosting and cloud services including setup, management, monitoring, and support. We work with leading providers like AWS, Google Cloud, and Vercel to ensure reliable, scalable hosting solutions.",
        tags: ["hosting", "cloud services", "infrastructure"],
    },
    {
        id: 24,
        category: "technical",
        question: "How do you handle data backup and recovery?",
        answer:
            "We implement robust backup strategies including automated daily backups, version control, and disaster recovery plans. Your data is stored securely with multiple redundancies to ensure it's always protected and recoverable.",
        tags: ["backup", "data recovery", "disaster recovery"],
    },
];