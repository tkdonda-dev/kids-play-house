// Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Brand */}
                <div>
                    <div className="footer-brand-name">Kid&apos;s <span>Play</span>.House</div>
                    <div className="footer-tagline">Building Confident Learners in Surat</div>
                    <p className="footer-desc">
                        A trusted, safe, and nurturing preschool in Mota Varachha. We focus on holistic development, emotional well-being, and activity-based early childhood education to give your child the best foundation.
                    </p>
                    <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                        {['📘', '📸', '🐦', '🎵'].map((icon, i) => (
                            <a key={i} href="#" style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: 'rgba(255,255,255,0.1)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                                color: '#fff', transition: 'background 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--orange)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            >{icon}</a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">🏠 Home</Link></li>
                        <li><Link to="/about">📖 About Us</Link></li>
                        <li><Link to="/contact">📞 Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="footer-heading">Contact Info</h4>
                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">📍</div>
                        <span>Mota Varachha, Surat, Gujarat-394101, India</span>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">📞</div>
                        <span>+91 9924107219</span>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">✉️</div>
                        <span>kidsplayhouse@gmail.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">🕐</div>
                        <span>Mon – Sat: 8:00am – 4:00pm</span>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="footer-heading">Newsletter</h4>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: 14, lineHeight: 1.7 }}>
                        Subscribe to get the latest news, events and updates from Kid&apos;s Play House.
                    </p>
                    <div className="footer-newsletter">
                        <input type="email" placeholder="Your email address" />
                        <button type="button">Subscribe Now ✨</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-deco">
                    {['🌟', '🎈', '🎨', '🌈', '🏫', '❤️'].map((e, i) => <span key={i}>{e}</span>)}
                </div>
                <p>© 2026 Kid&apos;s Play House. Made with <span>❤️</span> for little ones.</p>
            </div>
        </footer>
    );
};

export default Footer;
