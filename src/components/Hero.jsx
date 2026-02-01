import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-[#af49ff] opacity-[0.03] blur-[150px] rounded-full"></div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <div className="flex flex-col md:flex-row items-end gap-4 mb-2">
                        <span className="text-xs font-bold tracking-[0.5em] text-[#af49ff] uppercase">Creative Studio</span>
                        <div className="h-[1px] flex-grow bg-white/10 mb-2"></div>
                    </div>

                    <h1 className="text-huge text-gradient mb-12">
                        Cosechamos<br />
                        <span className="md:ml-20">Ideas</span><br />
                        <span className="italic font-light">Escalamos</span><br />
                        Mundos.
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
                        <div className="md:col-start-1 md:col-span-4 self-center">
                            <p className="text-sm text-secondary leading-relaxed uppercase tracking-wider">
                                Marketing / Software / AI<br />
                                Based in Argentina. Working globally.
                            </p>
                        </div>

                        <div className="md:col-start-6 md:col-span-7">
                            <p className="text-xl md:text-2xl text-white/80 leading-snug mb-10">
                                Somos una agencia boutique dedicada a transformar la tecnología en ventaja competitiva.
                                Combinamos inteligencia artificial con diseño disruptivo para crear productos que no solo
                                funcionan, sino que inspiran.
                            </p>

                            <div className="flex gap-4">
                                <button className="btn-minimal">Iniciar Proyecto</button>
                                <button className="btn-outline">Nuestra Visión</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background large text for scale */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
                <span className="text-[25vw] font-black uppercase tracking-tighter">COSECHA CREATIVA</span>
            </div>
        </section>
    );
};

export default Hero;
