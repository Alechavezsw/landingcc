import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-[90vh] flex items-center relative">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <Sparkles size={14} className="text-[#af49ff]" />
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Digital Growth Agency</span>
                        </div>

                        <h1 className="title-xl mb-8">
                            Cosechamos El <br />
                            <span className="accent-text italic">Futuro</span> Digital<br />
                            De Tu Marca.
                        </h1>

                        <p className="text-xl text-soft max-w-lg mb-12 leading-relaxed">
                            En Cosecha Creativa, no solo plantamos ideas. Cultivamos ecosistemas inteligentes que
                            escalan tu negocio mediante IA y diseño de vanguardia.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="btn-fancy flex items-center gap-2">
                                Hablemos Hoy <ArrowUpRight size={18} />
                            </button>
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030205] bg-[#af49ff]/20 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-[#af49ff] to-transparent opacity-50"></div>
                                    </div>
                                ))}
                                <div className="ml-4 pl-8 flex flex-col justify-center">
                                    <span className="text-xs font-bold text-white">19+ Años</span>
                                    <span className="text-[10px] text-white/40 uppercase tracking-tighter">De Experiencia Real</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Element: Dynamic Nodes/Shapes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-[500px] h-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#af49ff]/20 to-transparent rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/5 rounded-full rotate-45"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border border-[#af49ff]/20 rounded-full -rotate-12"></div>

                            {/* Floating Content Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-0 glass-v2 p-6 rounded-2xl border-white/10 backdrop-blur-xl"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#af49ff]/20 mb-4"></div>
                                <div className="space-y-2">
                                    <div className="h-2 w-24 bg-white/20 rounded"></div>
                                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-10 glass-v2 p-6 rounded-2xl border-white/10 backdrop-blur-xl"
                            >
                                <div className="flex gap-2 items-center mb-4 text-[#50e3c2]">
                                    <Sparkles size={16} />
                                    <span className="text-[10px] font-black uppercase">IA Active</span>
                                </div>
                                <div className="h-1 w-32 bg-white/20 rounded-full">
                                    <div className="h-full w-2/3 bg-[#50e3c2] rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Blobs for the Hero section specifically */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#af49ff] opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
};

export default Hero;
