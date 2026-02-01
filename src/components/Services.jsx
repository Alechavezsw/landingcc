import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Layout, Cpu, LineChart, Camera, Gem } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="organic-card group"
    >
        <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#af49ff]/10 group-hover:border-[#af49ff]/30 transition-all duration-500">
            <Icon className="text-white/60 group-hover:text-[#af49ff] transition-colors" size={32} />
        </div>
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-soft text-sm leading-relaxed mb-8">
            {desc}
        </p>
        <div className="h-[1px] w-12 bg-white/10 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: Megaphone,
            title: "Marketing Digital",
            desc: "Estrategias omnicanal que no solo buscan clicks, sino conversiones reales y crecimiento sostenible.",
            delay: 0.1
        },
        {
            icon: Layout,
            title: "Diseño & Branding",
            desc: "Identidades visuales que cuentan una historia y conectan emocionalmente con tu audiencia.",
            delay: 0.2
        },
        {
            icon: Cpu,
            title: "Desarrollo & IA",
            desc: "Software a medida potenciado por inteligencia artificial para automatizar lo complejo y escalar lo humano.",
            delay: 0.3
        },
        {
            icon: LineChart,
            title: "Growth & SEO",
            desc: "Optimización continua basada en datos para que tu marca lidere su nicho en los buscadores.",
            delay: 0.1
        },
        {
            icon: Gem,
            title: "Soluciones High-End",
            desc: "Micro-sitios, apps móviles y sistemas interactivos diseñados para impresionar y convertir.",
            delay: 0.2
        },
        {
            icon: Camera,
            title: "Contenido Visual",
            desc: "Fotografía y video profesional que eleva la calidad percibida de tus productos y servicios.",
            delay: 0.3
        }
    ];

    return (
        <section id="servicios" className="relative py-32 bg-black/40">
            <div className="container">
                <div className="max-w-3xl mb-24">
                    <span className="text-xs font-black tracking-widest text-[#af49ff] uppercase block mb-6">Nuestra Expertise</span>
                    <h2 className="title-xl mb-10">
                        Un Ecosistema De <br />
                        <span className="italic font-light">Evolución</span> Digital.
                    </h2>
                    <p className="text-xl text-soft leading-relaxed">
                        Ofrecemos soluciones integrales diseñadas para hacer crecer tu negocio en la era de la IA.
                        Desde San Juan hacia el mundo, combinamos arte y tecnología.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <Card key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
