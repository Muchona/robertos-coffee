import React from 'react';
import { motion } from 'framer-motion';

const CornerDecorations: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden mix-blend-screen">
            {/* Top Left - Tech Brackets */}
            <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-8 left-8"
            >
                <div className="w-24 h-24 border-l-2 border-t-2 border-gold/40 rounded-tl-xl relative">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-gold/60" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-gold/60" />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-mono text-gold/60 tracking-widest">
                    SYS.ONYX.V1
                </div>
            </motion.div>

            {/* Top Right - Status Indicator */}
            <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-8 right-8 text-right"
            >
                <div className="w-24 h-24 border-r-2 border-t-2 border-silver/20 rounded-tr-xl absolute top-0 right-0" />
                <div className="flex flex-col items-end pt-4 pr-4 gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-silver/40">ONLINE</span>
                    </div>
                    <div className="h-[1px] w-16 bg-silver/20" />
                    <span className="text-[10px] font-mono text-silver/20">SECURE_CONN</span>
                </div>
            </motion.div>

            {/* Bottom Left - Coordinates/Data */}
            <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute bottom-8 left-8"
            >
                <div className="w-24 h-24 border-l-2 border-b-2 border-silver/20 rounded-bl-xl absolute bottom-0 left-0" />
                <div className="pb-4 pl-4 flex flex-col gap-1">
                    <div className="text-[10px] font-mono text-silver/40">
                        COORD: 45.20.91
                    </div>
                    <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-1 h-3 bg-silver/20 rounded-full" />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom Right - Compensates for OnyxBadge */}
            <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute bottom-8 right-8"
            >
                <div className="w-24 h-24 border-r-2 border-b-2 border-gold/40 rounded-br-xl opacity-50" />
            </motion.div>
        </div>
    );
};

export default CornerDecorations;
