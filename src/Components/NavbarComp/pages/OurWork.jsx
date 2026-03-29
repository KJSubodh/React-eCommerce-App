import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';

import stripeLogo from '/src/assets/Stripe-Verified-Partner-Logo.png'
import awsLogo from '/src/assets/aws-logo.png'
import isoLogo from '/src/assets/iso-27001-logo.png'

const OurWork = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const trustLogos = [
        { src: stripeLogo, alt: "Stripe Verified" },
        { src: awsLogo, alt: "AWS Partner" },
        { src: isoLogo, alt: "ISO 27001" },
    ];

    const projects = [
        {
            title: "NexusPay: Global Fintech API",
            category: "Fintech & Web3",
            desc: "Architected a high-throughput payment gateway handling $2M+ in daily cross-border transactions with sub-second latency.",
            tags: ["React", "Node.js", "Solidity", "AWS"],
            result: "40% reduction in tx fees",
            imageColor: "bg-gradient-to-br from-amber-400 to-orange-600"
        },
        {
            title: "VitalSync: Health Management",
            category: "Healthcare SaaS",
            desc: "A HIPAA-compliant remote patient monitoring platform used by 50+ clinics to track vitals in real-time via IoT integration.",
            tags: ["Next.js", "Python", "MQTT", "PostgreSQL"],
            result: "15K+ Active Patients",
            imageColor: "bg-gradient-to-br from-blue-400 to-indigo-600"
        },
        {
            title: "OmniCart: AI Retail Engine",
            category: "E-commerce AI",
            desc: "An intelligent recommendation engine that uses machine learning to predict user intent and personalize shopping feeds.",
            tags: ["Vue.js", "TensorFlow", "Firebase", "Tailwind"],
            result: "22% Increase in Conversion",
            imageColor: "bg-gradient-to-br from-purple-400 to-pink-600"
        },
        {
            title: "LogiTrack Pro: Supply Chain",
            category: "Logistics & ERP",
            desc: "Real-time fleet tracking and warehouse management system with automated route optimization for last-mile delivery.",
            tags: ["React Native", "Go", "MongoDB", "Google Maps API"],
            result: "18% Fuel Savings",
            imageColor: "bg-gradient-to-br from-emerald-400 to-teal-600"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* 1. HERO HEADER */}
            <section className="bg-white py-24 border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="text-base font-semibold leading-7 text-amber-600 uppercase tracking-[0.2em]">Our Portfolio</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Proven <span className="text-amber-500 italic">Results.</span>
                        </p>
                        <p className="mt-6 text-lg text-gray-600">
                            We don't just write code; we build products that solve real-world problems. Explore our recent deployments across various industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. PROJECT GRID */}
            <section className="py-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">

                            {/* Image Placeholder / Gradient Area */}
                            <div className={`h-64 w-full ${project.imageColor} relative flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                <span className="text-white/20 text-9xl font-black group-hover:scale-110 transition-transform duration-700">0{index + 1}</span>

                                {/* Result Badge */}
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                    <p className="text-xs font-bold text-gray-900 uppercase tracking-tighter">Result: <span className="text-amber-600">{project.result}</span></p>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-10 flex flex-col flex-1">
                                <span className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                    {project.desc}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-lg border border-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link to={`/work/${index}`} className="w-full py-4 text-center border-2 border-gray-900 rounded-2xl font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95">
                                    View Full Case Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. TESTIMONIAL MINI-SECTION */}
            <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-[0.3em]">
                        Certified Security & Infrastructure
                    </h3>
                </div>

                {/* The Masking Container */}
                <div className="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                    {/* The Marquee Track */}
                    <div className="flex animate-marquee1 gap-20 items-center pause-on-hover">

                        {/* Set 1 */}
                        <div className="flex gap-20 items-center justify-center min-w-full">
                            {trustLogos.map((logo, index) => (
                                <img
                                    key={`set1-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-9 md:h-11 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer flex-shrink-0"
                                />
                            ))}
                        </div>

                        {/* Set 2 (Identical clone for seamless loop) */}
                        <div className="flex gap-20 items-center justify-center min-w-full">
                            {trustLogos.map((logo, index) => (
                                <img
                                    key={`set2-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-9 md:h-11 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OurWork