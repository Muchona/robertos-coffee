import React from 'react';
import { motion } from 'framer-motion';

export const SteamParticles: React.FC = () => {
    // Simple check for mobile/tablet (screens smaller than 1024px)
    // We use a state to ensure hydration matches if SSR, but for this SPA simple effect is fine.
    // However, to be safe and responsive, we can just force the animation via a prop or CSS, 
    // but Framer Motion variants are JS based. 
    // Let's use a media query hook or simple check.

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    return (
        <>
            {[1, 2, 3].map((i) => (
                <motion.span
                    key={i}
                    className="absolute bg-white/60 w-1.5 h-4 rounded-full blur-[2px] pointer-events-none"
                    style={{
                        left: i === 1 ? '30%' : i === 2 ? '50%' : '70%',
                        top: -5
                    }}
                    animate={isMobile ? "hover" : undefined}
                    variants={{
                        idle: { opacity: 0, y: 0 },
                        hover: {
                            opacity: [0, 0.8, 0],
                            y: [0, -20, -40],
                            x: [0, i % 2 === 0 ? 8 : -8, 0],
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }
                        }
                    }}
                />
            ))}
        </>
    );
};

export default SteamParticles;
