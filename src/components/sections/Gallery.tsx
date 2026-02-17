import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { galleryImages } from '../../data/gallery';

interface GalleryProps {
    onOpenGallery: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onOpenGallery }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Take first 8 images for the teaser
    const teaserImages = galleryImages.slice(0, 8);

    return (
        <section id="gallery" ref={containerRef} className="min-h-screen bg-void py-24 relative overflow-hidden flex flex-col justify-center">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>

            <motion.div style={{ opacity }} className="relative z-10 mb-12 px-8 text-center">
                <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-2 relative inline-block">
                    <span className="relative z-10">VISUAL CHRONICLES</span>
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-gold/20 -skew-x-12 blur-sm"></span>
                </h2>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={onOpenGallery}
                        className="px-8 py-4 bg-transparent border border-gold/50 text-gold font-display tracking-widest hover:bg-gold hover:text-black transition-all duration-500 rounded-lg relative group overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            ENTER ARCHIVE
                            <span className="block w-2 h-2 bg-current rounded-full animate-pulse" />
                        </span>
                        <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>
            </motion.div>

            {/* Horizontal Scroll Teaser */}
            <div className="relative w-full overflow-hidden py-12">
                <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void z-20 pointer-events-none" />

                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-8 w-max"
                >
                    {teaserImages.map((src, index) => (
                        <div
                            key={index}
                            onClick={onOpenGallery}
                            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 group overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Teaser ${index}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                            </div>
                        </div>
                    ))}
                    {/* Duplicate for loop feel if needed, simplified here */}
                </motion.div>
            </div>

        </section>
    );
};

export default Gallery;
