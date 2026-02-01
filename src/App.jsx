import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => (
  <footer className="py-24 border-t border-white/5 bg-black/50 backdrop-blur-md">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#af49ff] flex items-center justify-center font-bold text-white tracking-tighter">CC</div>
            <span className="text-xl font-bold tracking-tight">Cosecha Creativa</span>
          </div>
          <p className="text-soft max-w-sm mb-8 leading-relaxed">
            Cultivando el futuro digital mediante inteligencia artificial,
            software de vanguardia y marketing orientado a resultados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#af49ff]/20 hover:text-[#af49ff] transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#af49ff]/20 hover:text-[#af49ff] transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#af49ff]/20 hover:text-[#af49ff] transition-all"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 text-soft text-sm font-medium">
            <li><a href="#inicio" className="hover:text-white transition-colors">Intro</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#ai" className="hover:text-white transition-colors">IA Experience</a></li>
            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Legal</h4>
          <ul className="space-y-4 text-soft text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
          © 2026 Cosecha Creativa / San Juan, Argentina
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-4 rounded-full bg-[#af49ff]/10 text-[#af49ff] hover:bg-[#af49ff] hover:text-white transition-all"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen relative selection:bg-[#af49ff] selection:text-white">
      {/* Dynamic Backgrounds */}
      <div className="mesh-bg">
        <div className="blob top-[-10%] left-[-10%]"></div>
        <div className="blob bottom-[-20%] right-[-10%]" style={{ animationDelay: '-5s', background: '#50e3c2', opacity: 0.1 }}></div>
        <div className="blob top-[40%] left-[60%]" style={{ animationDelay: '-10s', width: '400px', height: '400px', opacity: 0.05 }}></div>
      </div>

      <Navbar />

      <main>
        <Hero />

        {/* Growth Stats Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <span className="text-4xl md:text-6xl font-black block mb-2 text-gradient tracking-tighter">19+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Años de Trayectoria</span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black block mb-2 text-gradient tracking-tighter">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Proyectos Web</span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black block mb-2 text-gradient tracking-tighter">120+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Clientes Globales</span>
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black block mb-2 text-gradient tracking-tighter">15+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Países Impactados</span>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* AI Interstitial */}
        <section id="ai" className="py-40 relative overflow-hidden">
          <div className="container">
            <div className="organic-card relative overflow-hidden text-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#af49ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                  La Inteligencia Artificial <br />
                  <span className="accent-text">No Es Una Opción</span>. Es Tu Ventaja.
                </h2>
                <p className="text-xl text-soft max-w-2xl mx-auto mb-12">
                  Implementamos sistemas que aprenden, evolucionan y ejecutan tareas
                  complejas mientras tú te enfocas en liderar la estrategia de tu negocio.
                </p>
                <button className="btn-fancy px-12">Explorar Soluciones IA</button>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
