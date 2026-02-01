import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-40 bg-black">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                    <div className="md:col-span-12 mb-10">
                        <span className="text-xs font-black tracking-[0.5em] text-[#af49ff] uppercase block mb-4">Start a conversation</span>
                        <h2 className="text-huge text-gradient">Let's Talk.</h2>
                    </div>

                    <div className="md:col-span-5">
                        <p className="text-2xl text-white/70 mb-12 font-medium">
                            ¿Listo para cosechar resultados reales? Estamos a un mensaje de distancia.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <span className="text-[10px] font-black uppercase text-muted tracking-widest block mb-1">Email</span>
                                <a href="mailto:hola@cosechacreativa.com.ar" className="text-xl hover:text-[#af49ff] transition-colors border-b border-white/10 pb-1">
                                    hola@cosechacreativa.com.ar
                                </a>
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase text-muted tracking-widest block mb-1">Social</span>
                                <div className="flex gap-6 mt-2">
                                    <a href="#" className="hover:text-[#af49ff] transition-colors">Instagram</a>
                                    <a href="#" className="hover:text-[#af49ff] transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-[#af49ff] transition-colors">Behance</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group border-b border-white/10 focus-within:border-[#af49ff] transition-colors pb-4">
                                <span className="text-[10px] font-black uppercase text-muted tracking-widest block mb-4">Nombre Completo</span>
                                <input
                                    type="text"
                                    className="bg-transparent border-none w-full text-xl text-white outline-none placeholder:text-white/10"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group border-b border-white/10 focus-within:border-[#af49ff] transition-colors pb-4">
                                <span className="text-[10px] font-black uppercase text-muted tracking-widest block mb-4">Tu Email</span>
                                <input
                                    type="email"
                                    className="bg-transparent border-none w-full text-xl text-white outline-none placeholder:text-white/10"
                                    placeholder="john@agency.com"
                                />
                            </div>
                            <div className="md:col-span-2 group border-b border-white/10 focus-within:border-[#af49ff] transition-colors pb-4 mt-8">
                                <span className="text-[10px] font-black uppercase text-muted tracking-widest block mb-4">Tu Mensaje</span>
                                <textarea
                                    rows="1"
                                    className="bg-transparent border-none w-full text-xl text-white outline-none placeholder:text-white/10 resize-none"
                                    placeholder="Cuéntanos brevemente sobre tu proyecto..."
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 mt-8">
                                <button className="btn-minimal w-full md:w-auto flex items-center justify-center gap-4 group">
                                    Enviar Mensaje
                                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
