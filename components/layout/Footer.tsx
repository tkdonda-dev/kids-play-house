import React from 'react';
import { Globe, AtSign, Mail, Send, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 border-t border-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <img 
              alt="Logo" 
              className="w-10 h-10 rounded-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzpvpxTd_x-_7NshmgWTh0sOrfXhcjz1fiOstUwSiVJuWXpqAMGbJqHFb_FlOnbe-Ze4IyiecIhYo-jDKYDrftm92vFJrNeR76oSBL6ElcEJ942fvQDSk91VvEiFjhhEWVey6olOcv4HyEPqfSiE2zCjMSpeqW65-IkeGiBPr7hza0fR_132kv-ZnNYVvxMs8qv4SIG62W8qtidq-cSQi5Q4AUVOSL-zNi-9rzv0W5A34XAXPG30Ykrg0mLDsiDToO-2JaRADhnPw" 
            />
            <span className="text-2xl font-display font-bold text-slate-900">Kidden</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Kidden is an early childhood education school where all children, typically aged 4 to 6, begin their learning journey.
          </p>
          <div className="flex space-x-3">
            {[Globe, AtSign, Mail].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h4 className="text-lg font-display font-bold mb-6 text-slate-900">Information</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="hover:text-primary transition flex items-center">
                  <span className="mr-2">•</span> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-display font-bold mb-6 text-slate-900">Contact Us</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex items-start">
              <MapPin className="text-primary mr-2 mt-1 shrink-0" size={16} />
              <span><strong className="text-primary font-bold">Address:</strong> Germany — 785 15th Street, Office 478 Berlin, De 81566</span>
            </li>
            <li className="flex items-center">
              <Phone className="text-primary mr-2 shrink-0" size={16} />
              <span><strong className="text-primary font-bold">Phone:</strong> <a href="tel:+919924107219" className="hover:text-primary transition">+91 99241 07219</a></span>
            </li>
            <li className="flex items-center">
              <Mail className="text-primary mr-2 shrink-0" size={16} />
              <span><strong className="text-primary font-bold">Mail Us:</strong> kidden@example.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-display font-bold mb-6 text-slate-900">Newsletter Signup</h4>
          <p className="text-slate-500 text-sm mb-4">Get the latest updates and offers for business services yearly.</p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="bg-slate-50 border-none rounded-full px-4 py-2 flex-grow text-sm focus:ring-1 focus:ring-primary outline-none" 
              placeholder="Your Email" 
              type="email" 
            />
            <button className="bg-primary text-white p-2 rounded-full transition hover:bg-orange-600 shadow-md">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="w-full h-24 bg-accent/10 relative mt-12 flex items-end justify-center">
        <img 
          alt="Animals footer" 
          className="h-20 object-contain opacity-90" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHB-1J8ZlHxzQIt4gjonO58DE_YWj1RAZl3uAARpn-FxlZJTPiyLHMZ5SAXAoOwxMUwWgY0IsrqefdunWKuY49UK5jGqgutPdDBdJPlttyOboqcFrvp6sb-cDg-EwKKpemnc4Zp0vVYi5__vgMECUiDACz8-I1cfPIsJ6DQ7su2ecziXC_c5faYzGad87XfSrrQFqO5Bds_X9fDoDWd-JizHOv4pARs1_aTmuzsfNLc6R4KltcwdJaEn4NdPeRcNiJZrsfJDHUt7R" 
        />
      </div>
      <div className="bg-accent py-4 text-center text-white text-xs font-bold uppercase tracking-widest px-4">
        © 2024 Kids' Play House Nursery. All rights reserved. Designed with ❤️ for children.
      </div>
    </footer>
  );
};

export default Footer;