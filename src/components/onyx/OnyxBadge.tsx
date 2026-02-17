import React from 'react';
import { motion } from 'framer-motion';

const OnyxBadge: React.FC = () => {
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        >
            <div className="relative">
                <div className="absolute -inset-1 bg-gold rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-500" />
            </div>

            <motion.span
                className="text-xs font-display font-bold tracking-[0.2em] text-silver/50 group-hover:text-gold transition-colors duration-500 uppercase"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
            >
                Onyx Team
            </motion.span>
        </motion.div>
    );
};

export default OnyxBadge;
