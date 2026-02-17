import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Facebook, Instagram } from 'lucide-react';

const Sanctuary: React.FC = () => {
    // Open/Closed Logic
    const isOpen = () => {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Mon, etc.
        const hour = now.getHours();
        const min = now.getMinutes();
        const time = hour + min / 60;

        // Hours:
        // Mon (1) - Thu (4): 8am - 5:30pm (8 - 17.5)
        // Fri (5) - Sat (6): 8am - 6pm (8 - 18)
        // Sun (0): 11am - 5:30pm (11 - 17.5)

        if (day >= 1 && day <= 4) return time >= 8 && time < 17.5;
        if (day === 5 || day === 6) return time >= 8 && time < 18;
        if (day === 0) return time >= 11 && time < 17.5;
        return false;
    };

    const open = isOpen();

    return (
        <section id="find-us" className="min-h-screen bg-neutral-900 py-24 relative overflow-hidden flex flex-col justify-center">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Location Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                                THE <span className="text-gold">SANCTUARY</span>
                            </h2>
                            <p className="text-silver/60 text-lg">Where time stops and coffee begins.</p>

                            {/* Live Status Indicator */}
                            <div className="mt-6 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${open ? 'bg-green-400' : 'bg-red-400'}`}></span>
                                    <span className={`relative inline-flex rounded-full h-3 w-3 ${open ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                </span>
                                <span className={`font-medium tracking-wide ${open ? 'text-green-400' : 'text-red-400'}`}>
                                    {open ? 'OPEN NOW' : 'CLOSED NOW'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Visit Us</h3>
                                    <p className="text-silver/80">Unit 9 /10, Dawson St<br />Mullaghmonaghan, Monaghan, H18 FX34</p>
                                    <p className="text-silver/60 text-sm mt-1">Located in: Monaghan Shopping Centre</p>
                                    <a href="https://maps.app.goo.gl/R76dtCmUGQYKBKTa7" target="_blank" rel="noreferrer" className="text-gold text-sm uppercase tracking-widest mt-2 inline-block hover:underline">Get Directions</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Hours</h3>
                                    <ul className="text-silver/80 space-y-2 text-sm md:text-base">
                                        <li className="flex justify-between w-60 border-b border-white/5 pb-1"><span>Mon - Thu</span> <span>8am – 5:30pm</span></li>
                                        <li className="flex justify-between w-60 border-b border-white/5 pb-1 text-white font-medium"><span>Fri - Sat</span> <span>8am – 6pm</span></li>
                                        <li className="flex justify-between w-60"><span>Sunday</span> <span>11am – 5:30pm</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Contact</h3>
                                    <a href="tel:04775888" className="text-silver/80 block hover:text-gold transition-colors text-lg mb-2">
                                        (047) 75888
                                    </a>

                                    <div className="flex gap-4 mt-2">
                                        <a href="https://www.facebook.com/robertoscoffeehouse" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-silver hover:bg-gold hover:text-black transition-all duration-300 group/icon">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/robertoscoffeehouse/" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-silver hover:bg-gold hover:text-black transition-all duration-300 group/icon">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Google Map Integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Roberto's%20Coffee%20House%20Monaghan&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 transition-opacity duration-500 opacity-90 hover:opacity-100"
                        />

                        {/* Map Overlay for blending */}
                        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] border border-white/10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Sanctuary;
