import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

const Footer = () => (
  <footer className="py-20 bg-black border-t border-white/5">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-black mb-2">COSECHA CREATIVA</h2>
        <p className="text-xs text-muted tracking-[0.2em] font-bold uppercase">Digital Excellence Studio</p>
      </div>
      <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-muted">
        <a href="#inicio" className="hover:text-white transition-colors">Intro</a>
        <a href="#proyectos" className="hover:text-white transition-colors">Works</a>
        <a href="#contacto" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="text-xs text-muted">
        © 2026 / Global Creative Unit
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen relative bg-[#050505]">
      {/* Dynamic Background Noise is handled in body::before in CSS */}
      <Navbar />
      <Hero />
      <Services />

      {/* Interstitial Text Section */}
      <section className="py-40 bg-black border-y border-white/5 overflow-hidden">
        <div className="container">
          <p className="text-4xl md:text-6xl text-white/20 italic font-light leading-snug">
            "La tecnología no es el fin, es el medio. La verdadera <span className="text-white/80">evolución</span> ocurre cuando la creatividad humana se escala con <span className="text-[#af49ff] opacity-60">inteligencia artificial</span>."
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
