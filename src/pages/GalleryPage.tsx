import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { galleryImages } from '../data/gallery';

interface GalleryPageProps {
    onBack: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black overflow-y-auto"
        >
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <button
                    onClick={onBack}
                    className="pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-black transition-all duration-300 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-display tracking-widest text-sm">BACK TO HOME</span>
                </button>
                <div className="text-right">
                    <h1 className="text-4xl font-display font-bold text-white tracking-widest">
                        ARCHIVE <span className="text-gold">001</span>
                    </h1>
                    <p className="text-silver/50 text-xs font-mono tracking-[0.2em]">ROBERTO'S VISUAL DATABASE</p>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="min-h-screen px-4 py-32 md:px-8">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                            onClick={() => setSelectedId(index.toString())}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Controls */}
                        <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
                            <a
                                href={galleryImages[parseInt(selectedId)]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                                title="Open Original"
                            >
                                <span className="font-mono text-xs">ORIGINAL</span>
                            </a>
                            <button
                                onClick={() => setSelectedId(null)}
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <motion.img
                            src={galleryImages[parseInt(selectedId)]}
                            alt="Full screen"
                            className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl shadow-gold/10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GalleryPage;
