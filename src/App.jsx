import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 border-t border-glass-border">
    <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-md bg-[#af49ff] flex items-center justify-center font-bold text-white text-xs">
            CC
          </div>
          <span className="font-bold">Cosecha Creativa</span>
        </div>
        <p className="text-dim text-sm">© 2026 Cosecha Creativa. Todos los derechos reservados.</p>
      </div>

      <div className="flex gap-6">
        <a href="#" className="text-dim hover:text-[#af49ff] transition-colors"><Instagram size={20} /></a>
        <a href="#" className="text-dim hover:text-[#af49ff] transition-colors"><Facebook size={20} /></a>
        <a href="#" className="text-dim hover:text-[#af49ff] transition-colors"><Linkedin size={20} /></a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Universal Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />

      {/* AI Automation Teaser Section */}
      <section id="ai" className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0c]">
        <div className="section-container">
          <div className="glass p-12 text-center overflow-hidden relative glow">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl mb-6">Impulsamos tu eficiencia con IA</h2>
              <p className="text-lg text-dim max-w-3xl mx-auto mb-10">
                Desde bots de atención al cliente hasta automatización de flujos de trabajo complejos.
                Dejá que la tecnología trabaje por vos mientras vos te enfocás en crecer.
              </p>
              <button className="btn-primary">Ver Casos de Éxito</button>
            </div>

            {/* Background "neural" pulses */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 400">
                <circle cx="400" cy="200" r="150" fill="none" stroke="#af49ff" strokeWidth="1" strokeDasharray="10 5" />
                <circle cx="400" cy="200" r="100" fill="none" stroke="#af49ff" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="400" cy="200" r="50" fill="none" stroke="#af49ff" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
