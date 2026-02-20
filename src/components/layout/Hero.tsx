import React from 'react';
import { motion } from 'framer-motion';
import SteamParticles from '../ui/SteamParticles';

const Hero: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center pointer-events-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            BREWING
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-yellow-200 to-gold text-glow">
                            PERFECTION
                        </span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-silver/80 font-light leading-relaxed drop-shadow-md">
                        Experience the art of dark raost.
                        Where every sip creates a moment of silence.
                    </p>

                    <div className="mt-24 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
                        <motion.a
                            href="#reserve"
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gold/10 border border-gold/50 text-gold text-sm sm:text-base font-medium tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)] relative overflow-visible group flex items-center justify-center"
                            whileHover="hover"
                            initial="idle"
                        >
                            {/* Smoke/Steam Particles - Enhanced & Z-Indexed */}
                            <SteamParticles />
                            <span className="relative z-30 transition-colors duration-300 group-hover:text-white">Reserve Table</span>
                            <span className="ml-2 relative z-30 transition-colors duration-300 group-hover:text-white">→</span>
                            <div className="absolute inset-0 bg-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </motion.a>

                        <motion.a
                            href="#menu"
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10 text-white text-sm sm:text-base font-medium tracking-wide backdrop-blur-md relative overflow-visible group flex items-center justify-center bg-white/5"
                            whileHover="hover"
                            initial="idle"
                        >
                            {/* Smoke/Steam Particles - Enhanced & Z-Indexed */}
                            <SteamParticles />
                            <span className="relative z-30">Explore Menu</span>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
