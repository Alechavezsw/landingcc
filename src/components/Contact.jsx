import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, val }) => (
    <div className="flex gap-6 group cursor-pointer">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#af49ff]/20 group-hover:border-[#af49ff]/40 transition-all duration-300">
            <Icon className="text-white/40 group-hover:text-[#af49ff]" size={20} />
        </div>
        <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-1">{title}</span>
            <span className="text-white group-hover:text-[#af49ff] transition-colors">{val}</span>
        </div>
    </div>
);

const Contact = () => {
    return (
        <section id="contacto" className="py-32">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-5">
                        <span className="text-xs font-black tracking-widest text-[#af49ff] uppercase block mb-6">Contact</span>
                        <h2 className="text-5xl md:text-7xl mb-10 tracking-tighter">
                            Sembrá Una <br />
                            <span className="italic font-light">Nueva Idea</span> Con Nosotros.
                        </h2>
                        <p className="text-lg text-soft mb-12 leading-relaxed">
                            ¿Tenés un proyecto en mente o simplemente querés charlar sobre las posibilidades de la IA?
                            Estamos listos para escucharte.
                        </p>

                        <div className="space-y-10">
                            <ContactItem icon={Mail} title="Email Principal" val="hola@cosechacreativa.com.ar" />
                            <ContactItem icon={Phone} title="WhatsApp Business" val="+54 9 264 000-0000" />
                            <ContactItem icon={MapPin} title="Nuestra Base" val="San Juan, Argentina (Global Remote)" />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="organic-card p-10 md:p-16"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Tu Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#af49ff] transition-all"
                                            placeholder="Alex Chavez"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Tu Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#af49ff] transition-all"
                                            placeholder="alex@digital.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Tu Mensaje</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#af49ff] transition-all resize-none"
                                        placeholder="Contanos un poco sobre tu desafío..."
                                    ></textarea>
                                </div>

                                <button className="btn-fancy w-full flex items-center justify-center gap-3">
                                    Enviar Mensaje <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
