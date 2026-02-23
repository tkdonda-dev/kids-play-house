import React from 'react';
import { Flower, Home, ShieldCheck, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative group">
          <img
            alt="Child with giraffe"
            className="rounded-5xl w-full shadow-lg transform group-hover:rotate-1 transition duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3Ir7phj5NdZw8efcKThgEL4iNwbADSssQlM60NJMXsl9z55VBFX0Og4WW7auCtac1AzbaNy7iBdW4_bdEMfP-8g4laMNXe-ZTF81r-64H6J9ZoAgg-I31onqqS3KguBpoHflCawPV9SJKUmisFxvHI-IjrARnp9bUizWe6Lm3b1vMmDJULliYPAQpJMWQCHbGxRKcdyoaBbLhziW5FAsFfPMcQRNhLhlDUPVS6E6_BX7LDMaIiYnzvnS3iMuDRikGqyv6syvfioJ"
          />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce-slow">
            <Flower className="text-secondary w-16 h-16" />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <span className="text-primary font-bold tracking-wide uppercase text-sm">Why Choose Us?</span>
          <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight">
            A Safe And Loving Campus <span className="text-primary">For Rapid Growth!</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            As fellow parents and educators, we understand the immense trust you place in us. Our campus offers a nurturing space where toddlers transition smoothly from Playgroup to UKG, developing essential habits, confidence, and foundational skills.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft-orange rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                <Home size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Warm Home-Like Atmosphere</h4>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft-orange rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Secure and Supervised Campus</h4>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-6">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-display font-bold transition hover:bg-orange-600 shadow-lg hover:shadow-primary/40">
              Meet Our Caring Team
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary">
                <Phone size={18} />
              </div>
              <a href="tel:+919924107219" className="font-bold text-slate-900 hover:text-primary transition">+91 99241 07219</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;