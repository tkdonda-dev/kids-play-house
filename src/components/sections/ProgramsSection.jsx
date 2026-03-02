// ProgramsSection.jsx
const programs = [
    {
        icon: '🍼',
        title: 'Playgroup',
        desc: 'Ages 2–3 years. Sensory play, motor skill development, and gentle social interaction in a warm setting.',
        color: 'program-card-orange',
        age: 'Ages 2–3',
    },
    {
        icon: '🎨',
        title: 'Nursery',
        desc: 'Ages 3–4 years. Introduction to literacy, creative arts, and foundational cognitive concepts.',
        color: 'program-card-blue',
        age: 'Ages 3–4',
    },
    {
        icon: '📚',
        title: 'Junior KG',
        desc: 'Ages 4–5 years. Phonics, early math, vocabulary building, and comprehensive social development.',
        color: 'program-card-green',
        age: 'Ages 4–5',
    },
    {
        icon: '🎓',
        title: 'Senior KG',
        desc: 'Ages 5–6 years. School readiness, advanced numbers, reading fluency, and independent learning.',
        color: 'program-card-orange', // Reusing orange for the 4th card
        age: 'Ages 5–6',
    },
];

const ProgramsSection = () => {
    return (
        <section className="programs-section">
            <div className="programs-inner">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">🎓 Our Programs</span>
                    <h2 className="section-title">Admissions Open 2025–26</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Structured activity-based curriculums for every stage of early childhood development.
                    </p>
                </div>

                <div className="programs-grid gsap-stagger">
                    {programs.map((p, i) => (
                        <div key={i} className={`program-card ${p.color}`}>
                            <div className="program-card-blob" />
                            <span className="program-card-icon">{p.icon}</span>
                            <div style={{
                                display: 'inline-block',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                background: 'rgba(0,0,0,0.08)',
                                borderRadius: '99px',
                                padding: '3px 12px',
                                marginBottom: '10px',
                            }}>
                                {p.age}
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <a href="#" className="learn-more">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
