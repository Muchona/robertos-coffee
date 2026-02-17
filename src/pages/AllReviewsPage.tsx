import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';

interface Review {
    id: number;
    user: string;
    rating: number;
    text: string;
    date: string;
    image?: string | null;
}

interface AllReviewsPageProps {
    reviews: Review[];
    onBack: () => void;
}

const AllReviewsPage: React.FC<AllReviewsPageProps> = ({ reviews, onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-900 overflow-y-auto"
        >
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center bg-neutral-900/95 backdrop-blur-md border-b border-white/5">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-silver hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-display tracking-widest text-sm">BACK TO HOME</span>
                </button>
                <h1 className="ml-auto mr-auto text-xl font-display font-bold text-white tracking-widest">
                    ALL REVIEWS
                </h1>
                <div className="w-24"></div> {/* Spacer for centering */}
            </div>

            <div className="max-w-4xl mx-auto px-4 py-32 space-y-6">
                {reviews.map((review, i) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="glass-card p-6 md:p-8 rounded-2xl border border-white/5"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* User & Rating */}
                            <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-bold text-lg">
                                    {review.user.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{review.user}</h4>
                                    <span className="text-xs text-silver/40 block">{review.date}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex text-gold gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-white/20'}`} />
                                    ))}
                                </div>
                                <p className="text-silver/90 leading-relaxed text-lg">
                                    "{review.text}"
                                </p>

                                {review.image && (
                                    <div className="mt-4 rounded-xl overflow-hidden border border-white/10 max-w-sm">
                                        <img src={review.image} alt="Review attachment" className="w-full h-auto object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default AllReviewsPage;
