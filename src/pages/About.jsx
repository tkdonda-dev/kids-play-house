// About.jsx — About Us page
import TeachersSection from '../components/sections/TeachersSection';
import PromoBannerSection from '../components/sections/PromoBannerSection';
import useScrollAnimations from '../hooks/useScrollAnimations';
import useSmoothScroll from '../hooks/useSmoothScroll';

const values = [
    { emoji: '❤️', bg: 'var(--orange-light)', color: 'var(--orange)', title: 'Compassion', desc: 'We treat every child with warmth, empathy, and unconditional care.' },
    { emoji: '✨', bg: 'var(--blue-light)', color: 'var(--blue-dark)', title: 'Creativity', desc: 'We celebrate imagination and encourage children to express themselves freely.' },
    { emoji: '🤝', bg: 'var(--green-light)', color: 'var(--green-dark)', title: 'Community', desc: 'We build lasting partnerships with families to support every child\'s journey.' },
    { emoji: '🌱', bg: 'var(--yellow-light)', color: 'var(--yellow-dark)', title: 'Growth', desc: 'We believe in continuous development for both our children and our team.' },
];

const whyItems = [
    { emoji: '🏆', title: 'Activity-Based Curriculum', desc: 'Hands-on learning approach tailored to early childhood development.' },
    { emoji: '👩‍🏫', title: 'Qualified Teachers', desc: 'All staff hold professional B.Ed or ECCEd qualifications.' },
    { emoji: '🔒', title: '100% CCTV Surveillance', desc: 'Continuous monitoring and robust entry protocols for maximum safety.' },
    { emoji: '🌈', title: 'Holistic Development', desc: 'Focusing equally on cognitive, emotional, physical, and social growth.' },
    { emoji: '✨', title: 'Hygienic Environment', desc: 'Strict sanitization measures ensuring a clean, healthy space daily.' },
    { emoji: '📊', title: 'Parent-Teacher Partnership', desc: 'Regular transparent progress tracking and involvement in your child\'s journey.' },
];

const About = () => {
    useSmoothScroll();
    useScrollAnimations();

    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <div style={{ position: 'absolute', fontSize: '6rem', opacity: 0.08, top: 20, right: 40, fontFamily: 'serif' }}>🏫</div>
                <h1 className="gsap-reveal">About Kid&apos;s Play House</h1>
                <p className="page-header-breadcrumb">
                    Home / <span>About Us</span>
                </p>
            </div>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="mission-inner container">
                    <div className="mission-visual gsap-reveal">🌟</div>
                    <div className="gsap-reveal">
                        <span className="section-tag">🎯 Our Mission</span>
                        <h2 className="section-title">Nurturing Young Minds<br />Since 2009</h2>
                        <p className="section-subtitle" style={{ marginBottom: 20 }}>
                            Kid&apos;s Play House was founded on a simple but powerful belief: that play is the
                            highest form of learning. We have spent over 15 years building an environment where
                            children feel safe, celebrated, and genuinely excited to explore the world around them.
                        </p>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
                            Our play-based curriculum is grounded in the latest child development research and
                            implemented by a passionate team of dedicated educators who truly love what they do.
                            Every activity, every space, and every interaction is thoughtfully designed to help
                            children thrive — academically, emotionally, and socially.
                        </p>
                        <div style={{ marginTop: 24, display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                            {[['500+', 'Happy Families'], ['25+', 'Expert Staff'], ['15+', 'Years in Surat']].map(([num, label], i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--orange)' }}>{num}</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <div className="text-center gsap-reveal">
                        <span className="section-tag">💎 Core Values</span>
                        <h2 className="section-title">What We Stand For</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            The principles that guide everything we do at Kid&apos;s Play House.
                        </p>
                    </div>
                </div>
                <div className="values-grid gsap-stagger">
                    {values.map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="value-icon" style={{ background: v.bg }}>
                                <span style={{ fontSize: '1.6rem' }}>{v.emoji}</span>
                            </div>
                            <h3 style={{ color: v.color }}>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Teachers */}
            <TeachersSection variant="white" />

            {/* Why Choose Us */}
            <section className="why-section">
                <div className="container">
                    <div className="gsap-reveal">
                        <span className="section-tag">🌟 Why Choose Us</span>
                        <h2 className="section-title">The Kid&apos;s Play House Difference</h2>
                        <p className="section-subtitle">
                            What sets us apart and why thousands of families trust us with their little ones.
                        </p>
                    </div>

                    <div className="why-grid gsap-stagger" style={{ marginTop: 40 }}>
                        {whyItems.map((w, i) => (
                            <div key={i} className="why-item">
                                <div className="why-icon">{w.emoji}</div>
                                <div className="why-text">
                                    <h4>{w.title}</h4>
                                    <p>{w.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <PromoBannerSection />
        </>
    );
};

export default About;
