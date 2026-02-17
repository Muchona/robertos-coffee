import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import ScrollSequence from './components/ui/ScrollSequence';
import CornerDecorations from './components/ui/CornerDecorations';
import Origins from './components/sections/Origins';
import BagelMenu from './components/sections/BagelMenu';
import Gallery from './components/sections/Gallery';
import Reviews from './components/sections/Reviews';
import Sanctuary from './components/sections/Sanctuary';
import GalleryPage from './pages/GalleryPage';
import AllReviewsPage from './pages/AllReviewsPage';
import WriteReviewModal from './components/ui/WriteReviewModal';
import { AnimatePresence } from 'framer-motion';

// Initial Review Data
const initialReviews = [
  { id: 1, user: "Sarah J.", rating: 5, text: "Best coffee in Monaghan. The atmosphere is unmatched.", date: "2 days ago", image: null },
  { id: 2, user: "Michael R.", rating: 5, text: "Hidden gem! The bagel menu is incredible.", date: "1 week ago", image: null },
  { id: 3, user: "Emma W.", rating: 4, text: "Great service, slightly busy during lunch but worth the wait.", date: "3 weeks ago", image: null },
  { id: 4, user: "David K.", rating: 5, text: "A true sanctuary. Perfect spot to get work done.", date: "1 month ago", image: null },
  { id: 5, user: "John D.", rating: 5, text: "Love the new renovations. Very modern.", date: "2 months ago", image: null },
];

function App() {
  const [view, setView] = useState<'home' | 'gallery' | 'reviews'>('home');
  const [reviews, setReviews] = useState(initialReviews);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleAddReview = (newReview: any) => {
    setReviews(prev => [{ ...newReview, id: prev.length + 1 }, ...prev]);
  };

  return (
    <div className="bg-void min-h-screen text-white selection:bg-gold/30">
      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleAddReview}
      />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <div key="home">
            <Navbar />
            <CornerDecorations />
            <ScrollSequence
              frameCount={296}
              pathBase={`${import.meta.env.BASE_URL}images/ezgif-frame-`}
              extension=".jpg"
              digits={3}
              scaleFactor={0.85}
            >
              <Hero />
            </ScrollSequence>

            <div className="relative z-10 bg-void">
              <Origins />
              <BagelMenu />
              <Gallery onOpenGallery={() => setView('gallery')} />
              <Reviews
                reviews={reviews}
                onWriteReview={() => setIsReviewModalOpen(true)}
                onViewAll={() => setView('reviews')}
              />
              <Sanctuary />
            </div>

            <Footer />
          </div>
        )}

        {view === 'gallery' && (
          <GalleryPage key="gallery" onBack={() => setView('home')} />
        )}

        {view === 'reviews' && (
          <AllReviewsPage key="reviews" reviews={reviews} onBack={() => setView('home')} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
