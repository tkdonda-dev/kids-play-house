import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            alt="Logo"
            className="w-10 h-10 rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI8Ow9rgE0-xRl4JSgcK_u69i2YDqk2m93IWuxqU-jlb2t9RW2_QUn-4kQNblr2NxhMgs39YYfvm3jOUGVD0utY2tJjVSeSGbZBA7i6y7A7hAu3LlsYrHe1Rma_XRwjRwHO7ncbzjqFANL2YXRAPD4ePfj90BY7cLe4j2yYJmP63jxVUTMc8do0-ZZMfq5-QNzriouajckzZ8a62QOh0I4ooNDBxz4ZVCII_4m9sauiS5XMQmsr57ck3UZIzIiVUUbg7d4y9_vmGXi"
          />
          <span className="text-2xl font-display font-bold text-slate-900">Kids Play House</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:text-primary transition ${location.pathname === link.href ? 'text-primary' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/919924107219?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20my%20kid"
            target="_blank"
            className="hidden lg:inline-block bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-display font-bold transition whitespace-nowrap shadow-lg hover:shadow-primary/30"
          >
            Online Admission
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-semibold text-lg hover:text-primary ${location.pathname === link.href ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919924107219?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20my%20kid"
            target="_blank"
            className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-display font-bold text-center transition shadow-md"
          >
            Online Admission
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;