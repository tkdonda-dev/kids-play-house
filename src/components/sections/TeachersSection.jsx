// TeachersSection.jsx
const teachers = [
    { name: 'Bhavna Desai', role: 'Center Head (B.Ed)', emoji: '👩‍🏫', bg: 'var(--orange-light)' },
    { name: 'Neha Sharma', role: 'Senior Educator (ECCEd)', emoji: '👩‍🎨', bg: 'var(--blue-light)' },
    { name: 'Khushi Patel', role: 'Activity Coordinator', emoji: '👩‍🎤', bg: 'var(--green-light)' },
    { name: 'Rahul Verma', role: 'Physical Instructor', emoji: '🧍‍♂️', bg: 'var(--yellow-light)' },
];

const TeachersSection = ({ variant = 'alt' }) => {
    return (
        <section className="teachers-section" style={variant === 'white' ? { background: 'var(--bg-section)' } : {}}>
            <div className="container">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">👩‍🏫 Meet The Team</span>
                    <h2 className="section-title">Certified & Caring Staff!</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Our passionate, qualified educators (B.Ed / ECCEd) are dedicated to nurturing every child&apos;s potential.
                    </p>
                </div>
            </div>

            <div className="teachers-grid gsap-stagger">
                {teachers.map((t, i) => (
                    <div key={i} className="teacher-card">
                        <div className="teacher-avatar" style={{ background: t.bg }}>
                            <span style={{ fontSize: '2.2rem' }}>{t.emoji}</span>
                        </div>
                        <div className="teacher-name">{t.name}</div>
                        <div className="teacher-role">{t.role}</div>
                        <div className="teacher-social">
                            {['📘', '📸', '💼'].map((icon, j) => (
                                <a key={j} href="#">{icon}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeachersSection;
