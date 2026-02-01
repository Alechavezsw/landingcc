import React from 'react';
import { motion } from 'framer-motion';

const ServiceItem = ({ id, title, desc, colSpan = "md:col-span-4" }) => (
    <motion.div
        whileHover={{ backgroundColor: "rgba(175, 73, 255, 0.05)" }}
        className={`bento-item ${colSpan} flex flex-col justify-between group`}
    >
        <div>
            <span className="label-mono opacity-30 mb-10 block">System.ID_{id}</span>
            <h3 className="text-3xl md:text-5xl mb-6 uppercase leading-none">{title}</h3>
            <p className="text-secondary text-lg leading-relaxed max-w-sm">
                {desc}
            </p>
        </div>
        <div className="mt-20 flex justify-between items-center">
            <div className="flex gap-2">
                <div className="w-1 h-1 bg-[#af49ff]"></div>
                <div className="w-1 h-1 bg-[#af49ff]/30"></div>
                <div className="w-1 h-1 bg-[#af49ff]/10"></div>
            </div>
            <span className="label-mono opacity-0 group-hover:opacity-100 transition-opacity">Deploy →</span>
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <section id="expertise" className="py-0 border-none">
            <div className="container py-20">
                <div className="mb-20">
                    <span className="label-mono mb-6 block">Capabilities Matrix</span>
                    <h2 className="uppercase">Technical<br /><span className="text-[#af49ff]">Ecosystem</span></h2>
                </div>
            </div>

            <div className="bento-grid">
                <ServiceItem
                    id="001"
                    title="Digital Marketing"
                    desc="Performance-driven strategies optimized by proprietary AI models to maximize conversion and LTV."
                />
                <ServiceItem
                    id="002"
                    title="AI Automation"
                    desc="Surgical integration of LLMs and autonomous agents to eliminate operational friction."
                    colSpan="md:col-span-8"
                />
                <ServiceItem
                    id="003"
                    title="Custom Software"
                    desc="Enterprise-grade architectures built with Next.js, Node, and cloud-native technologies."
                    colSpan="md:col-span-7"
                />
                <ServiceItem
                    id="004"
                    title="Growth Design"
                    desc="Visual identities and conversion-optimized interfaces that command attention and trust."
                    colSpan="md:col-span-5"
                />
                <ServiceItem
                    id="005"
                    title="Data Intelligence"
                    desc="Deep analytics and predictive modeling to turn raw data into strategic harvesting opportunities."
                />
                <ServiceItem
                    id="006"
                    title="Precision SEO"
                    desc="Algorithmic dominance ensuring your brand sits at the apex of global search results."
                />
                <ServiceItem
                    id="007"
                    title="Visual Assets"
                    desc="High-fidelity photography and cinematography that translates brand value into visual desire."
                />
            </div>
        </section>
    );
};

export default Services;
