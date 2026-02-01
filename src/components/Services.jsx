import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Code, Brain, Search, Camera, Palette } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Megaphone className="text-[#af49ff]" />,
            title: "Marketing Digital",
            p: "Estrategias de contenido y publicidad en Google Ads y Meta para maximizar tu conversión."
        },
        {
            icon: <Code className="text-[#af49ff]" />,
            title: "Desarrollo y Sistemas",
            p: "Webs, APPs y sistemas a medida que automatizan y optimizan la gestión de tu empresa."
        },
        {
            icon: <Brain className="text-[#af49ff]" />,
            title: "Inteligencia Artificial",
            p: "Implementación de IA para automatizar tareas, chats inteligentes y toma de decisiones."
        },
        {
            icon: <Search className="text-[#af49ff]" />,
            title: "SEO",
            p: "Posicionamiento orgánico para que tus clientes te encuentren primero en los buscadores."
        },
        {
            icon: <Palette className="text-[#af49ff]" />,
            title: "Diseño y Branding",
            p: "Identidad visual completa y diseño creativo que comunica la esencia de tu marca."
        },
        {
            icon: <Camera className="text-[#af49ff]" />,
            title: "Fotografía",
            p: "Captura de alta calidad para productos y eventos, potenciando tu imagen profesional."
        }
    ];

    return (
        <section id="servicios" className="bg-[#0c0c0e] py-24">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl mb-6">Nuestros Servicios</h2>
                    <p className="text-dim max-w-2xl mx-auto">
                        Combinamos tecnología y creatividad para ofrecer soluciones que realmente
                        impactan en el crecimiento de tu negocio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 hover:border-[#af49ff]/40 transition-all group"
                        >
                            <div className="mb-6 p-3 bg-[#af49ff]/10 rounded-xl w-fit group-hover:bg-[#af49ff]/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl mb-4">{service.title}</h3>
                            <p className="text-dim leading-relaxed">{service.p}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
