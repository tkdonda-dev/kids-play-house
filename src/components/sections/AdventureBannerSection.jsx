import React from 'react';
import { Link } from 'react-router-dom';

const AdventureBannerSection = () => {
    return (
        <section className="adventure-banner-container">
            <div className="adventure-banner">
                {/* Wavy Background Elements */}
                <div className="adventure-clouds">
                    <span className="cloud c1">☁️</span>
                    <span className="cloud c2">☁️</span>
                    <span className="cloud c3">☁️</span>
                    <span className="sparkle s1">✨</span>
                    <span className="sparkle s2">✨</span>
                </div>

                <span className="adventure-tag gsap-reveal">Learning Is An Adventure!</span>
                <h2 className="adventure-title gsap-reveal">
                    Where Learning Is<br />
                    An Adventure!
                </h2>
                <div className="adventure-title-underline gsap-reveal" />

                <p className="adventure-text gsap-reveal">
                    Kindergarten is an early childhood educational environment<br className="hide-mobile" />
                    where most young children engage in foundational
                </p>

                <div className="adventure-btn-wrap gsap-reveal">
                    <Link to="/contact" className="btn btn-orange">Apply For Admission</Link>
                </div>

                <div className="adventure-bushes" />

                {/* Left Toys */}
                <div className="adventure-left-toys gsap-reveal">
                    <div style={{ position: 'relative' }}>
                        <div className="toy toy-horse">🎠</div>
                        <div className="toy toy-drum">🥁</div>
                        <div className="toy toy-rocket">🚀</div>
                    </div>
                </div>

                {/* Right Toys */}
                <div className="adventure-right-toys gsap-reveal">
                    <div style={{ position: 'relative' }}>
                        <div className="toy toy-train">🚂</div>
                        <div className="toy toy-duck">🦆</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdventureBannerSection;
