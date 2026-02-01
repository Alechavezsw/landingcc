import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 relative">
            <div className="section-container">
                <div className="glass p-12 md:p-16 overflow-hidden relative">
                    {/* Decorative background circle */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#af49ff] opacity-10 blur-[80px] rounded-full"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl mb-8">Hablemos de tu próximo proyecto</h2>
                            <p className="text-dim text-lg mb-12">
                                Estamos listos para escucharte y empezar a cosechar resultados juntos.
                                Envíanos un mensaje y nos pondremos en contacto en menos de 24hs.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-[#af49ff]/10 rounded-full text-[#af49ff]">
                                        <Mail size={20} />
                                    </div>
                                    <span>hola@cosechacreativa.com.ar</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-[#af49ff]/10 rounded-full text-[#af49ff]">
                                        <MapPin size={20} />
                                    </div>
                                    <span>San Juan, Argentina</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-[#af49ff]/10 rounded-full text-[#af49ff]">
                                        <Phone size={20} />
                                    </div>
                                    <span>+54 (264) ...</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dim">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-glass-border rounded-xl p-4 focus:outline-none focus:border-[#af49ff] transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dim">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-glass-border rounded-xl p-4 focus:outline-none focus:border-[#af49ff] transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dim">Mensaje</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-glass-border rounded-xl p-4 focus:outline-none focus:border-[#af49ff] transition-colors resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
