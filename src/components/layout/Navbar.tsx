import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import SteamParticles from '../ui/SteamParticles';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 w-full z-40 glass-card border-b border-white/5 bg-void/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <h1 className="text-2xl font-display font-bold tracking-wider text-white">
                            ROBERTO'S<span className="text-gold"> COFFEE</span>
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Gallery', 'Menu', 'Reviews', 'Find Us'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-silver hover:text-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest"
                                >
                                    {item}
                                </a>
                            ))}

                            <motion.a
                                href="tel:+1234567890"
                                className="ml-8 px-6 py-2 rounded-full bg-gold/10 border border-gold/50 text-gold text-sm font-medium tracking-wider backdrop-blur-md shadow-[0_0_10px_rgba(255,215,0,0.1)] flex items-center gap-2 relative overflow-visible group"
                                whileHover="hover"
                                initial="idle"
                            >
                                {/* Smoke/Steam Particles - Enhanced Visibility */}
                                {/* Smoke/Steam Particles - Enhanced Visibility */}
                                <SteamParticles />

                                <Phone className="w-4 h-4 relative z-10" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">CALL NOW</span>
                                <div className="absolute inset-0 bg-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass-card"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Gallery', 'Menu', 'Reviews', 'Find Us'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="tel:+3534775888"
                            className="flex items-center gap-2 px-3 py-2 text-gold font-medium relative overflow-visible group"
                        >
                            <SteamParticles />
                            <Phone className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">CALL NOW</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
