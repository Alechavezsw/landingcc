import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

const Footer = () => (
  <footer className="py-20 bg-black border-t border-white/5">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter uppercase">Cosecha Creativa</span>
        <span className="label-mono opacity-30 mt-2">© 2026 / All Systems Active</span>
      </div>

      <div className="flex gap-10">
        <a href="#" className="label-mono hover:text-white transition-colors">Instagram</a>
        <a href="#" className="label-mono hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="label-mono hover:text-white transition-colors">Behance</a>
      </div>

      <div className="label-mono opacity-30">
        [ Lat: -31.5375 | Long: -68.5364 ]
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />

        {/* Metric Strip */}
        <div className="border-b border-white/5 py-10 bg-black/50 backdrop-blur-md">
          <div className="container overflow-hidden whitespace-nowrap flex items-center gap-20">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-8 group">
                <span className="label-mono text-white/20 group-hover:text-[#af49ff] transition-colors">COSECHACREATIVA_SYSTEMS_OPERATIONAL</span>
                <div className="w-2 h-2 rounded-full bg-[#af49ff]/20"></div>
              </div>
            ))}
          </div>
        </div>

        <Services />

        {/* Focus Section: AI Systems */}
        <section id="intelligence" className="py-0 border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            <div className="p-20 flex flex-col justify-center border-r border-white/5 bg-black">
              <span className="label-mono mb-6 block">Intelligence Integration</span>
              <h2 className="mb-10 uppercase">Surgical<br />AI Implementation</h2>
              <p className="text-xl text-secondary leading-relaxed max-w-md mb-12">
                We don't just use AI; we architect bespoke intelligence layers
                that integrate directly into your business DNA.
              </p>
              <button className="btn-precision w-fit">Request Integration</button>
            </div>
            <div className="bg-[#050505] p-20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="w-64 h-64 border-2 border-[#af49ff] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-48 h-48 border border-[#af49ff]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
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
