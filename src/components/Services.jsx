import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Brain, Target, Globe, Zap } from 'lucide-react';

const Services = () => {
    return (
        <section id="servicios" className="py-32 bg-[#080808]">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl mb-8 text-gradient">Expertise & <br />Impacto</h2>
                        <p className="text-secondary text-lg">
                            No hacemos solo marketing. Diseñamos ecosistemas digitales donde el software, la IA y la creatividad convergen para generar resultados medibles.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-[10rem] font-black opacity-[0.03] select-none text-white leading-none">01</span>
                    </div>
                </div>

                <div className="services-grid-v2">
                    {/* Main Card - IA */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 glass-v2 p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 text-[#af49ff] opacity-20 group-hover:opacity-100 transition-opacity">
                            <Brain size={120} />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles size={20} className="text-[#af49ff]" />
                                <span className="text-xs font-black tracking-widest text-[#af49ff] uppercase">Core Technology</span>
                            </div>
                            <h3 className="text-4xl mb-6">Inteligencia Artificial Aplicada</h3>
                            <p className="text-secondary mb-8">
                                Desarrollamos soluciones personalizadas que automatizan flujos,
                                optimizan la toma de decisiones y crean experiencias de usuario hiper-personalizadas.
                            </p>
                            <ul className="space-y-3 text-sm font-medium text-white/60">
                                <li>• Automatización de Procesos (RPA)</li>
                                <li>• Modelos de Lenguaje Propios (LLM)</li>
                                <li>• Análisis Predictivo de Datos</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Side Card - Software */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 glass-v2 p-12 border-l-0"
                    >
                        <Code size={40} className="text-[#af49ff] mb-8" />
                        <h3 className="text-2xl mb-4">Ingeniería Web & Software</h3>
                        <p className="text-sm text-secondary mb-8">
                            Arquitecturas robustas, escalables y seguras. Creamos herramientas que son la columna vertebral de tu negocio.
                        </p>
                        <div className="h-[1px] bg-white/10 w-full mb-6"></div>
                        <span className="text-xs font-bold uppercase tracking-widest">Next.js / Node / Cloud</span>
                    </motion.div>

                    {/* Bottom Cards */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 glass-v2 p-12"
                    >
                        <Target size={40} className="text-[#af49ff] mb-8" />
                        <h3 className="text-2xl mb-4">Marketing de Crecimiento</h3>
                        <p className="text-sm text-secondary">
                            Estrategias basadas en datos. SEO, SEM y Paid Media optimizado para conversión real, no solo likes.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 glass-v2 p-12 border-l-0 border-r-0"
                    >
                        <Zap size={40} className="text-[#af49ff] mb-8" />
                        <h3 className="text-2xl mb-4">Automatización Comercial</h3>
                        <p className="text-sm text-secondary">
                            Acortamos el ciclo de venta integrando CRMs, bots inteligentes y flujos de nutrición automáticos.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 glass-v2 p-12"
                    >
                        <Globe size={40} className="text-[#af49ff] mb-8" />
                        <h3 className="text-2xl mb-4">Presencia Global</h3>
                        <p className="text-sm text-secondary">
                            Branding y diseño que trasciende fronteras. Creamos marcas que resuenan en cualquier mercado.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
