import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#af49ff] opacity-10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#af49ff] opacity-10 blur-[120px] rounded-full"></div>

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
                        <Sparkles size={16} className="text-[#af49ff]" />
                        <span className="text-xs font-semibold tracking-wider text-[#af49ff]">POTENCIADO POR IA</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl leading-tight mb-8 gradient-text">
                        Cosechamos ideas,<br />
                        escalamos negocios.
                    </h1>

                    <p className="text-lg md:text-xl text-dim max-w-2xl mx-auto mb-12">
                        Somos Cosecha Creativa. Especialistas en marketing digital, desarrollo de software
                        y automatización inteligente para empresas que buscan el próximo nivel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-primary flex items-center gap-2 group">
                            Nuestros Servicios
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3 rounded-full border border-glass-border hover:bg-white/5 transition-colors">
                            Ver procesos de IA
                        </button>
                    </div>
                </motion.div>

                {/* Feature widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass p-8 text-left group transition-all"
                    >
                        <Rocket className="text-[#af49ff] mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl mb-2 italic">Creatividad sin límites</h3>
                        <p className="text-sm text-dim">Diseño y marketing que rompe moldes y conecta con tu audiencia.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass p-8 text-left group glow border-[#af49ff]/20"
                    >
                        <Bot className="text-[#af49ff] mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl mb-2">Automatización IA</h3>
                        <p className="text-sm text-dim">Optimizamos tus ventas y procesos con inteligencia artificial de vanguardia.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass p-8 text-left group transition-all"
                    >
                        <Sparkles className="text-[#af49ff] mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl mb-2">Software a medida</h3>
                        <p className="text-sm text-dim">Desarrollamos herramientas robustas para que tu empresa nunca se detenga.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
