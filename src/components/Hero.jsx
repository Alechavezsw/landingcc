import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-end pb-32 relative overflow-hidden border-none">
            {/* Surgical Glows */}
            <div className="glow-surgical top-[-10%] right-[-5%]"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-12"
                    >
                        <div className="mb-10 flex items-center gap-6">
                            <span className="label-mono">Established 2007</span>
                            <div className="h-[1px] w-20 bg-white/20"></div>
                            <span className="label-mono">San Juan, AR</span>
                        </div>

                        <h1 className="mb-12">
                            Building<br />
                            <span className="text-[#af49ff]">Digital</span><br />
                            Supremacy.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="md:col-span-5"
                    >
                        <p className="text-xl md:text-2xl font-medium leading-tight text-white/60 mb-12 italic">
                            "We synthesize artificial intelligence and human creativity into
                            architectures that scale businesses beyond current limits."
                        </p>
                        <div className="flex gap-4">
                            <button className="btn-precision">Start Transmission</button>
                            <button className="btn-secondary">View Framework</button>
                        </div>
                    </motion.div>

                    <div className="hidden md:block md:col-start-9 md:col-span-4 text-right">
                        <div className="inline-block text-left p-8 border border-white/5 bg-black/50 backdrop-blur-xl">
                            <span className="label-mono block mb-4">Core Systems</span>
                            <ul className="label-mono space-y-2 text-white/30">
                                <li className="flex justify-between gap-10"><span>01. AI Automations</span> <span className="text-white">Active</span></li>
                                <li className="flex justify-between gap-10"><span>02. Software Eng.</span> <span className="text-white">Active</span></li>
                                <li className="flex justify-between gap-10"><span>03. Growth Marketing</span> <span className="text-white">Active</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background large stroke text */}
            <div className="absolute top-[20%] right-[-5%] rotate-90 origin-right pointer-events-none opacity-[0.03]">
                <span className="text-[20vh] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent" style={{ WebkitTextStroke: '2px white' }}>
                    COSECHA CREATIVA
                </span>
            </div>
        </section>
    );
};

export default Hero;
