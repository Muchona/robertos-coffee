import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Menu Data
const coffeeItems = [
    { id: 'c1', title: 'Latte', description: 'Silky steamed milk over rich espresso.', calories: 190, price: '€3.50' },
    { id: 'c2', title: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.', calories: 150, price: '€3.50' },
    { id: 'c3', title: 'Flat White', description: 'Double shot with velvety microfoam.', calories: 170, price: '€3.50' },
    { id: 'c4', title: 'Americano', description: 'Espresso diluted with hot water. Smooth & strong.', calories: 15, price: '€3.00' },
    { id: 'c5', title: 'Mocha', description: 'Espresso, chocolate ganache, and steamed milk.', calories: 290, price: '€4.00' },
    { id: 'c6', title: 'Espresso', description: 'Pure, concentrated coffee shot. Rich crema.', calories: 5, price: '€2.50' },
];

const sandwichItems = [
    { id: 's1', title: 'Club Sandwich', description: 'Chicken, bacon, lettuce, tomato, mayo on toasted triple decker.', calories: 650, price: '€8.50' },
    { id: 's2', title: 'Classic BLT', description: 'Crispy bacon, fresh lettuce, tomato, and mayo.', calories: 500, price: '€7.50' },
    { id: 's3', title: 'Chicken Panini', description: 'Grilled chicken, mozzarella, pesto, and sun-dried tomatoes.', calories: 580, price: '€7.95' },
    { id: 's4', title: 'Ham & Cheese Toastie', description: 'Premium ham and mature cheddar on sourdough.', calories: 450, price: '€6.50' },
    { id: 's5', title: 'Veggie Wrap', description: 'Hummus, roasted peppers, spinach, and feta cheese.', calories: 380, price: '€7.00' },
    { id: 's6', title: 'Spicy Italian Ciabatta', description: 'Salami, pepperoni, provolone, and chili oil.', calories: 620, price: '€8.00' },
];

const BagelMenu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'coffee' | 'sandwiches'>('coffee');

    const activeItems = activeCategory === 'coffee' ? coffeeItems : sandwichItems;

    return (
        <section id="menu" className="min-h-screen bg-void py-24 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-void to-void opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        ROBERTO'S <span className="text-gold">BAGELS</span>
                    </h2>

                    {/* Functional Menu Tabs (Navbar Style) */}
                    <div className="flex justify-center gap-6 mb-8">
                        <button
                            onClick={() => setActiveCategory('coffee')}
                            className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider backdrop-blur-md transition-all duration-300 border ${activeCategory === 'coffee'
                                ? 'bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                                : 'bg-white/5 border-white/10 text-silver hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            COFFEE
                        </button>
                        <button
                            onClick={() => setActiveCategory('sandwiches')}
                            className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider backdrop-blur-md transition-all duration-300 border ${activeCategory === 'sandwiches'
                                ? 'bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                                : 'bg-white/5 border-white/10 text-silver hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            SANDWICHES
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group h-full"
                            >
                                <div className="glass-card border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                                        <span className="text-white/20 font-display text-lg z-10 uppercase tracking-widest">
                                            {item.title}
                                        </span>
                                        {/* Mock Image Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs font-mono text-silver/40 border border-white/10 px-2 py-1 rounded">
                                                {item.calories} kcal
                                            </span>
                                        </div>

                                        <p className="text-silver/80 text-sm leading-relaxed mb-4 flex-grow">
                                            {item.description}
                                        </p>

                                        <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                                            <span className="text-gold font-display text-lg">{item.price}</span>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-silver/40 text-sm">
                        *All items prepared fresh daily. Allergens available upon request.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BagelMenu;
