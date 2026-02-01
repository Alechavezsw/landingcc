import React from 'react';

const Contact = () => {
    return (
        <section id="connect" className="py-40 bg-black border-none">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                    <div className="md:col-span-12">
                        <span className="label-mono mb-6 block">Initialization</span>
                        <h2 className="uppercase text-huge mb-20 text-[#af49ff]">Establish<br />Connection</h2>
                    </div>

                    <div className="md:col-span-4 self-center">
                        <div className="space-y-12">
                            <div>
                                <span className="label-mono block mb-4 opacity-30">Channel.A</span>
                                <a href="mailto:hola@cosechacreativa.com.ar" className="text-2xl font-bold hover:text-[#af49ff] transition-colors border-b border-white/10 pb-2">
                                    hola@cosechacreativa.com.ar
                                </a>
                            </div>
                            <div>
                                <span className="label-mono block mb-4 opacity-30">Channel.B</span>
                                <p className="text-2xl font-bold">San Juan, Argentina</p>
                                <p className="label-mono opacity-50 mt-2">UTC-3 / Available Globally</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="border-b border-white/10 pb-4 focus-within:border-[#af49ff] transition-colors">
                                    <span className="label-mono block mb-4 opacity-30">Input.Identity</span>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none w-full text-3xl font-bold outline-none placeholder:opacity-10"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="border-b border-white/10 pb-4 focus-within:border-[#af49ff] transition-colors">
                                    <span className="label-mono block mb-4 opacity-30">Input.Link</span>
                                    <input
                                        type="email"
                                        className="bg-transparent border-none w-full text-3xl font-bold outline-none placeholder:opacity-10"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="border-b border-white/10 pb-4 focus-within:border-[#af49ff] transition-colors">
                                <span className="label-mono block mb-4 opacity-30">Input.Message</span>
                                <textarea
                                    rows="1"
                                    className="bg-transparent border-none w-full text-3xl font-bold outline-none placeholder:opacity-10 resize-none"
                                    placeholder="Tell us about the mission"
                                ></textarea>
                            </div>
                            <button className="btn-precision w-full md:w-auto">Execute Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
