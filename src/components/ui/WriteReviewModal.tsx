import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Star, Check } from 'lucide-react';

interface WriteReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (review: any) => void;
}

const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation: Ensure rating is selected
        if (rating === 0) {
            alert("Please select a star rating.");
            return;
        }

        onSubmit({
            user: name, // changing 'name' to 'user' to match app state
            rating,
            text: comment, // changing 'comment' to 'text' to match app state
            image,
            date: "Just now"
        });

        // Reset form
        setName('');
        setComment('');
        setRating(0);
        setImage(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-gold/5 overflow-hidden z-[101]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-silver transition-colors focus:outline-none"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl font-display font-bold text-white mb-6">Write a Review</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Rating */}
                            <div className="flex flex-col items-center gap-2 mb-6">
                                <label className="text-xs uppercase tracking-widest text-silver/60">Your Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 ${star <= (hoverRating || rating) ? 'fill-gold text-gold' : 'text-white/20'}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-silver/60">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:bg-white/10 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-silver/60">Review</label>
                                <textarea
                                    required
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:bg-white/10 transition-colors resize-none"
                                    placeholder="Share your experience..."
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-silver/60">Attach Photo (Optional)</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full h-24 border border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gold/50 hover:bg-gold/5 transition-all group"
                                >
                                    {image ? (
                                        <div className="relative h-full py-2">
                                            <img src={image} alt="Preview" className="h-full object-contain rounded" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs text-white">Change</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-5 h-5 text-silver/50 group-hover:text-gold mb-2 transition-colors" />
                                            <span className="text-xs text-silver/50 group-hover:text-gold transition-colors">Click to upload image</span>
                                        </>
                                    )}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] flex items-center justify-center gap-2"
                            >
                                <Check className="w-5 h-5" />
                                Submit Review
                            </button>

                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WriteReviewModal;
