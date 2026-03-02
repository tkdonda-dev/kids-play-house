// FeaturesSection.jsx
const features = [
    {
        icon: '🛡️',
        title: 'Safe & Secure Campus',
        desc: '100% CCTV monitored premises, strict hygiene protocols, and secure entry systems for peace of mind.',
        color: 'feature-card-orange',
    },
    {
        icon: '👩‍🏫',
        title: 'Experienced Educators',
        desc: 'Our certified, caring teachers ensure a low student-teacher ratio for maximum personal attention.',
        color: 'feature-card-blue',
    },
    {
        icon: '🎨',
        title: 'Activity-Based Learning',
        desc: 'We emphasize hands-on experiences over rote memorization to foster true cognitive intelligence.',
        color: 'feature-card-green',
    },
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">⭐ Why Choose Us</span>
                    <h2 className="section-title">The Best Foundation For Your Child!</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        A premier preschool in Surat, designed thoughtfully for your child's joy, safety, and holistic growth.
                    </p>
                </div>
            </div>

            <div className="features-grid gsap-stagger">
                {features.map((f, i) => (
                    <div key={i} className={`feature-card ${f.color}`}>
                        <span className="feature-card-icon">{f.icon}</span>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
