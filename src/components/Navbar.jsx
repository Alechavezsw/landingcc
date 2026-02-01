import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-10">
            <div className="container flex justify-between items-baseline">
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tighter">COSECHA CREATIVA</span>
                    <span className="label-mono opacity-50">Studio.v04</span>
                </div>

                <div className="hidden md:flex gap-16">
                    {['Expertise', 'Intelligence', 'Network', 'Connect'].map((item, idx) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="label-mono text-white hover:text-[#af49ff] transition-colors"
                        >
                            <span className="opacity-20 mr-2">0{idx + 1}</span>
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#af49ff] animate-pulse"></div>
                    <span className="label-mono">Live</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
