// TestimonialsSection.jsx
const testimonials = [
    {
        text: "Kid's Play House has been an absolutely wonderful experience for our daughter Ananya. She comes home every day excited about what she learned! The teachers are so caring and professional.",
        stars: 5,
        name: 'Sneha Joshi',
        role: 'Parent of Ananya, Jr KG',
        emoji: '👩',
        color: 'testimonial-card-orange',
    },
    {
        text: "We were nervous about sending our son to nursery, but the warm, welcoming environment at Kid's Play House immediately put us at ease. The progress he's made in just 3 months is incredible!",
        stars: 5,
        name: 'Rohan Mehta',
        role: 'Parent of Aarav, Nursery',
        emoji: '👨',
        color: 'testimonial-card-blue',
    },
    {
        text: "The holistic approach to learning here is outstanding. My son not only learned to read early but also developed amazing social skills and confidence. Highly recommend!",
        stars: 5,
        name: 'Amit Agarwal',
        role: 'Parent of Vivaan, Sr KG',
        emoji: '👨🏽',
        color: 'testimonial-card-yellow',
    },
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">💬 Reviews</span>
                    <h2 className="section-title">What Do Parents Say About Us!</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Real stories from the families who trust us with their most precious ones.
                    </p>
                </div>
            </div>

            <div className="testimonials-grid gsap-stagger">
                {testimonials.map((t, i) => (
                    <div key={i} className={`testimonial-card ${t.color}`}>
                        <span className="testimonial-quote">&ldquo;</span>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-stars">
                            {'⭐'.repeat(t.stars)}
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <span style={{ fontSize: '1.8rem' }}>{t.emoji}</span>
                            </div>
                            <div>
                                <div className="testimonial-author-name">{t.name}</div>
                                <div className="testimonial-author-role">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
