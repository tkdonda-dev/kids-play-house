// DreamsSection.jsx
const DreamsSection = () => {
    const features = [
        { icon: '🎨', color: 'var(--orange-light)', title: 'Creative Arts', desc: 'Painting, crafts & self-expression' },
        { icon: '📚', color: 'var(--blue-light)', title: 'Early Literacy', desc: 'Stories, phonics & reading readiness' },
        { icon: '🌱', color: 'var(--green-light)', title: 'Nature Exploration', desc: 'Gardening & outdoor discovery' },
    ];

    return (
        <section className="dreams-section">
            <div className="dreams-inner">
                {/* Left: Image */}
                <div className="dreams-image-wrap gsap-reveal">
                    <div>
                        <img src="/img/about-girl.png" alt="Happy child" className="dreams-image-transparent" />
                    </div>
                    <div className="dreams-badge">
                        <div className="dreams-badge-num">15+</div>
                        <div className="dreams-badge-label">Yrs Experience</div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="gsap-reveal">
                    <span className="section-tag">✨ Our Story</span>
                    <h2 className="section-title">
                        Where Little Hands<br />Create Big Dreams!
                    </h2>
                    <p className="section-subtitle">
                        At Kid&apos;s Play House, we believe a child's early years form the bedrock of their future. Established in Surat, our experienced educators guide children through a nurturing world of discovery, structured play, and joyous learning — building the confidence and curiosity required for formal schooling.
                    </p>

                    <div className="dreams-features gsap-stagger">
                        {features.map((f, i) => (
                            <div key={i} className="dreams-feature">
                                <div className="dreams-feature-icon" style={{ background: f.color }}>
                                    {f.icon}
                                </div>
                                <div className="dreams-feature-text">
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="dreams-contact">
                        <div className="dreams-contact-item">
                            <div className="dreams-contact-icon">📞</div>
                            <div>
                                <strong>Call Us Anytime:</strong> +91 9924107219
                            </div>
                        </div>
                        <div className="dreams-contact-item">
                            <div className="dreams-contact-icon">📍</div>
                            <div>
                                <strong>Visit Us:</strong> Mota Varachha, Surat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DreamsSection;
