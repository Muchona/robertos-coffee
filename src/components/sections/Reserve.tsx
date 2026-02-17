import React from 'react';
import { motion } from 'framer-motion';

const Reserve: React.FC = () => {
    return (
        <section id="reserve" className="min-h-screen relative flex items-center bg-void py-24">
            {/* Background Image Placeholder - Dark Lounge */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/40 z-10" />
                {/* <img src="/images/lounge-bg.jpg" alt="Lounge" className="w-full h-full object-cover opacity-60" /> */}
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white/5 font-display text-9xl">
                    LOUNGE
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        SECURE YOUR <br />
                        <span className="text-gold">SANCTUARY</span>
                    </h2>
                    <p className="text-silver/80 text-lg leading-relaxed mb-8 max-w-lg">
                        The world is noisy. Roberos is not.
                        Reserve a booth in our dimly lit lounge for focused work,
                        intimate conversation, or simply to be alone with your thoughts.
                    </p>

                    <div className="flex items-center gap-4 text-sm text-silver/60">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 box-shadow-glow" />
                            Live Seating Availability
                        </span>
                    </div>
                </motion.div>

                {/* Booking Form */}
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 space-y-6"
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-silver/60">Date</label>
                            <input
                                type="date"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:bg-white/10 transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-silver/60">Time</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:bg-white/10 transition-colors appearance-none" style={{ colorScheme: 'dark' }}>
                                <option>Morning (8am - 12pm)</option>
                                <option>Afternoon (12pm - 5pm)</option>
                                <option>Evening (5pm - 10pm)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-silver/60">Guests</label>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((num) => (
                                <button
                                    key={num}
                                    type="button"
                                    className={`py-2 rounded-md border text-sm font-medium transition-all ${num === 2 ? 'bg-gold text-black border-gold' : 'border-white/10 text-silver hover:bg-white/5'}`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-silver/60">Name</label>
                        <input
                            type="text"
                            placeholder="Roberto Mucho"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:bg-white/10 transition-colors"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                        >
                            Confirm Reservation
                        </button>
                    </div>

                    <p className="text-center text-xs text-white/20 pt-2">
                        *No payment required for booking.
                    </p>
                </motion.form>

            </div>
        </section>
    );
};

export default Reserve;
