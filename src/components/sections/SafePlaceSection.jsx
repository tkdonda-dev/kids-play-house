// SafePlaceSection.jsx
const progressBars = [
    { label: 'CCTV Surveillance Active', value: 100, color: 'progress-orange' },
    { label: 'Hygiene & Cleanliness', value: 98, color: 'progress-blue' },
    { label: 'Activity-Based Curriculum', value: 95, color: 'progress-green' },
    { label: 'Parent Satisfaction Point', value: 99, color: 'progress-pink' },
];

const SafePlaceSection = () => {
    return (
        <section className="safe-section">
            <div className="safe-inner">
                {/* Left: Image */}
                <div className="safe-image gsap-reveal" style={{ overflow: 'hidden', position: 'relative' }}>
                    <img src="/img/about-boy.png" alt="Happy boy" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom center',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: 16, right: 16,
                        background: '#fff', borderRadius: 12,
                        padding: '12px 18px', boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                        textAlign: 'center', fontSize: '0.82rem', fontWeight: 700,
                    }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--green-dark)' }}>100%</div>
                        <div style={{ color: 'var(--text-light)' }}>Certified Safe</div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="gsap-reveal">
                    <span className="section-tag">🏡 Our Environment</span>
                    <h2 className="section-title">Safe, Secure &<br />Hygienic Campus!</h2>
                    <p className="section-subtitle" style={{ marginBottom: 20 }}>
                        We maintain the highest standards of safety, cleanliness, and quality in Surat. Our 100% CCTV monitored premises give parents complete peace of mind while their children flourish in our care.
                    </p>

                    <div className="safe-progress-list">
                        {progressBars.map((bar, i) => (
                            <div key={i} className="safe-progress-item">
                                <label>
                                    <span>{bar.label}</span>
                                    <span style={{ color: 'var(--orange)' }}>{bar.value}%</span>
                                </label>
                                <div className="progress-track">
                                    <div
                                        className={`progress-fill ${bar.color}`}
                                        data-width={`${bar.value}%`}
                                        style={{ width: 0 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 28 }}>
                        <a href="/contact" className="btn btn-orange">Enquire For Admission 🌟</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafePlaceSection;
