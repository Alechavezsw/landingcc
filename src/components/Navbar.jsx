import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
            <div className="container flex justify-between items-center text-xs font-black tracking-widest uppercase">
                <div className="flex items-center gap-4">
                    <span className="text-white hover:text-[#af49ff] transition-colors cursor-pointer">Cosecha Creativa</span>
                </div>

                <div className="hidden md:flex gap-12 text-white/50">
                    <a href="#inicio" className="hover:text-white transition-colors">Intro</a>
                    <a href="#servicios" className="hover:text-white transition-colors">Expertise</a>
                    <a href="#ai" className="hover:text-white transition-colors">Intelligence</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Connect</a>
                </div>

                <button className="text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">
                    Menu
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
