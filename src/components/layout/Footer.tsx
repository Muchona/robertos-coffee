import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import OnyxBadge from '../ui/OnyxBadge';

const Footer: React.FC = () => {
    return (
        <footer className="bg-void border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold text-white tracking-tighter">
                            ROBERTO'S
                        </h2>
                        <p className="text-silver/60 text-sm leading-relaxed max-w-xs">
                            Premium coffee and hand-rolled bagels in the heart of Monaghan. Experience the future of café culture.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/robertoscoffeehouse/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-silver hover:bg-gold hover:text-black transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/robertoscoffeehouse" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-silver hover:bg-gold hover:text-black transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Group (Explore + Visit Us) for better tablet layout */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-bold mb-6">Explore</h3>
                            <ul className="space-y-4 text-sm text-silver/60">
                                <li><a href="#menu" className="hover:text-gold transition-colors">Our Menu</a></li>
                                <li><a href="#gallery" className="hover:text-gold transition-colors">The Gallery</a></li>
                                <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
                                <li><a href="#sanctuary" className="hover:text-gold transition-colors">Location</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-6">Visit Us</h3>
                            <ul className="space-y-4 text-sm text-silver/60">
                                <li>Unit 9 /10, Dawson St</li>
                                <li>Monaghan, H18 FX34</li>
                                <li>(047) 75888</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Opening Hours</h3>
                        <ul className="space-y-4 text-sm text-silver/60">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span className="text-white">8:00 AM - 5:30 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span className="text-white">8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">11:00 AM - 5:30 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-silver/40 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Roberto's Coffee Shop. All rights reserved.
                    </div>

                    {/* Mandatory Onyx Badge */}
                    <OnyxBadge />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
