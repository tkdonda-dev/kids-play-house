import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 bg-secondary/10 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-repeat"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-zUYRql84FZ1DCNHa_zsceugNQjnZKy69-VdZ_Y3ikIucfcAfc-H9nXB4DnriHLl7C6XkiTYteRnrHFR87eVis-rzPmGEwimxsXodjHL_Mon3rosGXAKHue7zqgjvihGmYWq0AOcsoLWD6aXGz429-HWudnY8EBl3PL6_v-XdgzjsW5IgqAbkSGghgP0reNrAJ5PXx94yCG8Tbn5m9GjZ4vKJvAZLQ-JfF8_9xHSfORRaRUndSbnHJp8RGGNz5cjOwwX5K5NO0Pb1')" }}
      ></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white text-primary font-bold rounded-full text-sm shadow-sm">
            Welcome to Kid's Play House!
          </span>
          <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight text-slate-900">
            Building A Strong Foundation <br />
            <span className="text-primary">For Your Child's Future</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Give your child the perfect start in our warm, home-like environment. We focus on phonics, school readiness, and discipline through joyful, guided play.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919924107219?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20my%20kid"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-display font-bold text-lg transition shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 flex items-center space-x-2"
            >
              <span>Schedule A Campus Visit!</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-full h-full bg-secondary rounded-full opacity-20 -z-10 scale-110 blur-xl"></div>
          <img
            alt="Happy kids"
            className="rounded-[4rem] relative z-10 w-full object-cover shadow-2xl hover:scale-[1.02] transition duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXwAK9zkDOuFRG6DpexZY-HngqrbIGjd8xNX1hVK1wEjN5PtiLSbCsatbmJlm89WK91Zv84zlOZIPpTir432oAbuRjtoKFaxR9ivDIUNypaq8qVPqTimNns49MO1HFKCT8pfzmCxk-vGmH9eMA16GStJkIeee92oty7GYDZtHNRfX2V_BW4e75CuKdq1PA4XPAuMkOt7m0DDQAoJTV44YKxF48_YFlSUxAVcXyIeDh2eGFB1hF2ki8ZtMTR0atqvNSZa9XHRRbwemw"
          />
        </div>
      </div>

      {/* Cloud Divider Bottom */}
      <div className="absolute bottom-0 w-full cloud-divider"></div>
    </section>
  );
};

export default HeroSection;