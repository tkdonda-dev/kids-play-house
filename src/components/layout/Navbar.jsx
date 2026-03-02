// Navbar.jsx
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-icon">🌟</div>
                    Kid&apos;s <span>Play</span>House
                </Link>

                <ul className="navbar-nav">
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>

                <div className="navbar-actions">
                    <Link to="/contact" className="btn btn-orange">Enroll Now</Link>
                </div>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                    <span style={menuOpen ? { opacity: 0 } : {}} />
                    <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
                <Link to="/contact" className="btn btn-orange" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
                    Enroll Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
