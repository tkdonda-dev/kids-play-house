// HeroSection.jsx
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="hero">
            {/* Decorative background blobs */}
            <div className="hero-blob-1" />
            <div className="hero-blob-2" />

            <div className="hero-inner">
                {/* Left: Text */}
                <div>
                    <div className="hero-tag hero-text-anim">
                        🌟 Welcome to Kid&apos;s Play House, Surat
                    </div>

                    <h1 className="hero-title hero-text-anim">
                        A Beautiful <br />
                        <span className="highlight">Foundation</span> For Life
                    </h1>

                    <p className="hero-desc hero-text-anim">
                        Give your child a safe, warm, and joyful start. We blend modern holistic activity-based learning with a deeply nurturing environment, ensuring they grow emotionally and cognitively every single day.
                    </p>

                    <div className="hero-actions hero-text-anim">
                        <Link to="/contact" className="btn btn-orange">
                            🎓 Admissions Open
                        </Link>
                        {/* <Link to="/about" className="btn btn-outline">
                            Discover Our Approach →
                        </Link> */}
                    </div>

                    <div className="hero-stats hero-text-anim">
                        <div className="hero-stat-item">
                            <div className="hero-stat-num">500+</div>
                            <div className="hero-stat-label">Happy Families</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-num">25+</div>
                            <div className="hero-stat-label">Expert Teachers</div>
                        </div>
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="hero-visual">
                    <div className="hero-visual-bg">
                        <img src="/img/hero-right.png" alt="Kid's Play House" className="hero-illustration" />
                    </div>

                    <div className="hero-badge hero-badge-1">
                        <span className="hero-badge-icon">🛡️</span>
                        <div className="hero-badge-text">
                            100% Safe Campus
                            <div className="hero-badge-sub">CCTV Monitored</div>
                        </div>
                    </div>

                    <div className="hero-badge hero-badge-2">
                        <span className="hero-badge-icon">⭐</span>
                        <div className="hero-badge-text">
                            Trusted by Parents
                            <div className="hero-badge-sub">Mota Varachha, Surat</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div className="wave-divider" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
