import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Origins: React.FC = () => {
    const { scrollYProgress } = useScroll({
        target: React.useRef(null),
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="awards" className="min-h-screen relative overflow-hidden bg-void text-white py-24 flex items-center">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-void to-void opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    style={{ y, opacity }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-gold mb-6 tracking-tight">
                        COFFEE SPECIALISTS
                    </h2>
                    <div className="inline-block px-6 py-2 border border-gold/30 rounded-full bg-gold/10 backdrop-blur-md">
                        <span className="text-xl md:text-2xl text-white font-medium tracking-wide">
                            Ulster Winners 2016
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Award Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8 glass-card rounded-full border border-gold/20 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                            <img
                                src="/Award.png"
                                alt="Ulster Winners Award 2016"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 rounded-full bg-gold/5 blur-3xl -z-10" />
                        </div>
                    </motion.div>

                    {/* Right: Food Menu */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 text-center md:text-left"
                        >
                            <h3 className="text-3xl font-display font-bold text-white">
                                Freshly Made
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 glass-card rounded-xl border border-white/5 hover:border-gold/30 transition-colors group">
                                    <h4 className="text-xl text-gold mb-2 group-hover:text-white transition-colors">Sandwiches & Panini</h4>
                                    <p className="text-silver/80">
                                        Hot filled panini and handcrafted sandwiches using premium local ingredients.
                                    </p>
                                </div>
                                <div className="p-6 glass-card rounded-xl border border-white/5 hover:border-gold/30 transition-colors group">
                                    <h4 className="text-xl text-gold mb-2 group-hover:text-white transition-colors">Light Snacks</h4>
                                    <p className="text-silver/80">
                                        A curated selection of pastries and bites to pair perfectly with your brew.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Origins;
