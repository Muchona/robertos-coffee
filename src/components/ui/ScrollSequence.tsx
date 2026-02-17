import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollSequenceProps {
    frameCount: number;
    pathBase: string; // e.g., "/images/ezgif-frame-"
    extension: string; // e.g., ".jpg"
    digits: number; // e.g., 3 for "001"
    children?: React.ReactNode;
    scaleFactor?: number; // Visual scale multiplier
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({
    frameCount,
    pathBase,
    extension,
    digits,
    children,
    scaleFactor = 1
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Track scroll progress ONLY within this component's height
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Batched Preload
    useEffect(() => {
        let isMounted = true;
        const imgArray: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
        let loadedCount = 0;

        const loadBatch = (startIndex: number, batchSize: number) => {
            if (!isMounted) return;

            for (let i = startIndex; i < Math.min(startIndex + batchSize, frameCount); i++) {
                if (imgArray[i]) continue; // Already loaded

                const img = new Image();
                const frameNumber = (i + 1).toString().padStart(digits, '0');
                img.src = `${pathBase}${frameNumber}${extension}`;

                img.onload = () => {
                    loadedCount++;
                    // Optional: Update loading progress state here if needed
                    if (loadedCount === frameCount && isMounted) {
                        setIsLoaded(true);
                    }
                };
                imgArray[i] = img;
            }

            setImages(prev => {
                const newImages = [...prev];
                for (let i = startIndex; i < Math.min(startIndex + batchSize, frameCount); i++) {
                    newImages[i] = imgArray[i]!;
                }
                return newImages;
            });

            // Schedule next batch
            if (startIndex + batchSize < frameCount) {
                setTimeout(() => {
                    requestAnimationFrame(() => loadBatch(startIndex + batchSize, batchSize));
                }, 100); // 100ms delay between batches to yield to main thread
            } else {
                if (isMounted) setIsLoaded(true);
            }
        };

        // Initialize with first batch (e.g. 50 frames - enough for initial scroll)
        setImages(new Array(frameCount).fill(null)); // Init placeholder
        loadBatch(0, 30); // Load first 30 frames immediately

        return () => {
            isMounted = false;
        };
    }, [frameCount, pathBase, extension, digits]);

    // Render frame based on scroll
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear and draw
        const img = images[index];

        // Maintain aspect ratio cover logic with custom scale factor
        const coverScale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const finalScale = coverScale * scaleFactor;

        const x = (canvas.width / 2) - (img.width / 2) * finalScale;
        const y = (canvas.height / 2) - (img.height / 2) * finalScale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * finalScale, img.height * finalScale);
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame if possible, or just wait for next scroll tick
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Bind scroll to frames
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[400vh] relative"> {/* 400vh scroll distance */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-void">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-gold font-display animate-pulse z-20">
                        LOADING ONYX SEQUENCE...
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Vignette Overlay for Blending Corners */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, transparent 15%, #050505 85%)',
                        boxShadow: 'inset 0 0 250px 125px #050505'
                    }}
                />

                {/* Content Overlay */}
                <div className="relative z-20 w-full h-full pointer-events-none">
                    {children}
                </div>

                {/* Helper overlay to show scroll hint if needed */}
                <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none mix-blend-difference text-white/50 text-sm z-20">
                    SCROLL TO EXPLORE
                </div>
            </div>
        </div>
    );
};

export default ScrollSequence;
