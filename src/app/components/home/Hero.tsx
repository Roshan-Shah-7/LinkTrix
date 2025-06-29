import React from 'react'
import ScrollMackContainer from '@/app/components/home/ScrollMackContainer'
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero max-w-7xl m-auto py-4
     min-h-screen flex flex-col justify-center items-center gap-6">
            <button className='relative mt-40 border-2 border-gray-100
             bg-gray-50 text-black px-6 py-2
             rounded-full shadow-sm overflow-hidden group'>
                - Together we can. Together we will -
            </button>
            <div className="title text-center font-bold text-2xl 
            lg:text-4xl xl:text-6xl leading-tight">
                <h1>
                    <span>We Build. </span>
                    <span>You Grow.</span>
                </h1>
                <h2 className="lg:text-4xl mt-4">Modern, scalable digital solutions tailored for your business.</h2>
            </div>
            <p className="text-gray-500 text-center text-lg max-w-xl mx-auto mt-4">
                At <span className="font-bold">Link Trix</span>, we partner with brands to build
                powerful digital experiences from mobile apps to
                web platforms, marketing campaigns, and beyond.
                Let's make something great, together.
            </p>
            <div className="cta flex gap-4 mt-6">
                <button className='group flex items-center gap-2 bg-black text-white px-6 py-2
                rounded-full shadow-sm hover:bg-white border-2 hover:border-2 border-black
                 hover:text-black duration-500
                transition-colors'>
                    View Our Work
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={18} />
                    </span>
                </button>
                <button className='group flex items-center gap-2 border-2 border-black
                 text-black px-6 py-2 rounded-full shadow-sm duration-500
                   hover:bg-black hover:text-white transition-all'>
                    Contact Us
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={18} />
                    </span>
                </button>
            </div>
            <ScrollMackContainer />
        </section>
    )
}

export default Hero