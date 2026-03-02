// PromoBannerSection.jsx
import { Link } from 'react-router-dom';

const PromoBannerSection = () => {
    return (
        <section className="promo-banner">
            <div className="promo-blob promo-blob-1" />
            <div className="promo-blob promo-blob-2" />

            <div className="promo-inner">
                <div className="promo-text gsap-reveal">
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: '99px',
                        padding: '4px 16px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        marginBottom: 12,
                        letterSpacing: '0.05em',
                    }}>
                        🎉 ADMISSIONS OPEN 2025–26
                    </span>
                    <h2>Secure Your Child's<br />Future Today!</h2>
                    <p>
                        Give your child the gift of joyful, activity-based learning at Surat's most loved preschool.
                    </p>
                    <Link to="/contact" className="btn btn-white">
                        Book A Campus Tour 🚀
                    </Link>
                </div>

                <div className="promo-visual gsap-reveal">🧒🏻</div>
            </div>
        </section>
    );
};

export default PromoBannerSection;
