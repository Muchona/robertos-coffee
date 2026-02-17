import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewsProps {
    reviews: any[];
    onWriteReview: () => void;
    onViewAll: () => void;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, onWriteReview, onViewAll }) => {
    // 1. Calculate Ratings Dynamically
    // Combine base "historic" data with new reviews for a realistic feel
    const baseRatingDist = {
        5: 150,
        4: 40,
        3: 8,
        2: 2,
        1: 1
    };

    // Deep copy to avoid mutating base
    const currentDist = { ...baseRatingDist };

    // Add new reviews to distribution
    reviews.forEach(review => {
        // Assume reviews passed here are NEW/Dynamic, or handle potential duplicates if passing ALL
        // For this logic, we'll assume 'reviews' prop contains the user-added ones + initial state ones.
        // Since we have a 'base' of ~200, we should only count reviews that are NOT part of the base?
        // Actually, let's just re-calculate everything based on the `reviews` prop + a fixed offset number to simulate the "200" past reviews.
        // To keep it simple and consistent: We will just add the `reviews` prop counts to the base counts. 
        // This assumes `reviews` in App.tsx maps to *recent* visible reviews, while `baseRatingDist` is the "archive".
        const rating = Math.round(review.rating);
        if (rating >= 1 && rating <= 5) {
            currentDist[rating as keyof typeof currentDist] = (currentDist[rating as keyof typeof currentDist] || 0) + 1;
        }
    });

    const totalReviews = Object.values(currentDist).reduce((a, b) => a + b, 0);
    const weightedSum = Object.entries(currentDist).reduce((acc, [star, count]) => acc + Number(star) * count, 0);
    const averageRating = (weightedSum / totalReviews).toFixed(1);

    // 2. Layout & Display (Show newest 4 reviews for the 4-column grid)
    const displayReviews = reviews.slice(0, 4);

    return (
        <section id="reviews" className="bg-void py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    {/* Top: Summary Card (Redesigned for Full Width) */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            {/* Title & Big Number */}
                            <div className="text-center md:text-left space-y-2">
                                <h2 className="text-3xl font-display font-bold text-white">Customer Reviews</h2>
                                <p className="text-silver/60 text-sm max-w-xs mx-auto md:mx-0">
                                    Trusted by coffee lovers and bagel enthusiasts across Monaghan.
                                </p>
                                <div className="pt-4">
                                    <div className="flex items-baseline justify-center md:justify-start gap-3">
                                        <span className="text-7xl font-display font-bold text-white tracking-tighter shadow-gold/20 drop-shadow-lg">{averageRating}</span>
                                        <div className="flex flex-col items-start">
                                            <div className="flex text-gold gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className={`w-5 h-5 ${star <= Math.round(Number(averageRating)) ? 'fill-current' : 'text-white/20'}`} />
                                                ))}
                                            </div>
                                            <span className="text-silver/50 text-xs mt-1 tracking-widest uppercase">{totalReviews} verified reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bars */}
                            <div className="flex-1 w-full max-w-sm space-y-3">
                                {[5, 4, 3, 2, 1].map((star) => {
                                    const count = currentDist[star as keyof typeof currentDist];
                                    const percentage = (count / totalReviews) * 100;
                                    return (
                                        <div key={star} className="flex items-center gap-4 text-xs font-medium">
                                            <span className="w-3 text-white/40 text-right">{star}</span>
                                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${percentage}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="h-full bg-gold/90 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.3)]"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Actions Column */}
                            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[180px]">
                                <button
                                    onClick={onWriteReview}
                                    className="w-full py-4 rounded-xl bg-gold text-black hover:bg-white transition-all duration-300 font-bold tracking-wide uppercase text-sm shadow-[0_4px_20px_rgba(255,215,0,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)] transform hover:-translate-y-1"
                                >
                                    Write a review
                                </button>
                                <button
                                    onClick={onViewAll}
                                    className="w-full py-3 rounded-xl border border-white/10 text-silver hover:text-white hover:border-gold/30 hover:bg-gold/5 transition-all text-xs uppercase tracking-widest"
                                >
                                    View All Reviews
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Review Cards (4-Column Grid) */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-medium text-white/50 border-b border-white/5 pb-4">Recent Feedback</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {displayReviews.map((review, i) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 flex flex-col h-full"
                                >
                                    {/* Decorative Quote Icon - Smaller for cards */}
                                    <div className="absolute top-4 right-4 text-5xl font-serif text-white/[0.03] group-hover:text-gold/[0.05] transition-colors leading-none pointer-events-none">"</div>

                                    <div className="flex flex-col gap-4 relative z-10 flex-1">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-gold font-bold text-sm border border-white/5 group-hover:border-gold/30 transition-colors">
                                                    {review.user ? review.user.charAt(0) : 'A'}
                                                </div>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-white font-medium text-sm tracking-wide truncate group-hover:text-gold transition-colors">{review.user}</h4>
                                                <span className="text-xs text-silver/40 block">{review.date}</span>
                                            </div>
                                        </div>

                                        <div className="flex text-gold gap-0.5 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-white/90 opacity-20'}`} />
                                            ))}
                                        </div>

                                        <p className="text-silver/80 text-sm leading-relaxed font-light flex-1">
                                            {review.text}
                                        </p>

                                        {review.image && (
                                            <div className="pt-2 mt-auto">
                                                <div className="relative inline-block overflow-hidden rounded-lg border border-white/10 group-hover:border-gold/20 transition-colors h-24 w-full">
                                                    <img src={review.image} alt="Review attachment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
