import React, { useState } from 'react';
import useScrollAnimations from '../../hooks/useScrollAnimations';

const galleryImages = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
];

const GallerySection = () => {
    useScrollAnimations();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="gallery-section section-py">
            <div className="container text-center">
                <span className="section-tag gsap-reveal">📸 Our Gallery</span>
                <h2 className="section-title gsap-reveal">Moments of Joy</h2>
                <p className="section-subtitle gsap-reveal" style={{ marginBottom: 40 }}>
                    Take a peek into the daily adventures, learning, and fun at Kid&apos;s Play House.
                </p>

                <div className="gallery-slider-wrap gsap-reveal">
                    <button className="gallery-arrow gallery-arrow-left" onClick={handlePrev} aria-label="Previous image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="gallery-image-container">
                        <img
                            src={galleryImages[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="gallery-image"
                        />
                    </div>

                    <button className="gallery-arrow gallery-arrow-right" onClick={handleNext} aria-label="Next image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
