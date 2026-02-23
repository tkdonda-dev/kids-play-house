import React from 'react';
import { PawPrint } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 w-full cloud-divider-top bg-white"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-16">
        <div className="relative">
          <img
            alt="Child with books"
            className="rounded-5xl w-full shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPwILcnL_e0B94CjGc4a0OIoc0i0uZwzKIXR5rWaH9UdVTfizp8MoZMg-lfUuieON-r1YLw5DBDR2f-d3M1VCC43zYKOblk8rz-FcE_EbFAQOEY_2qoLLiQYRqq8cJzzI3pB4bXxeqGE82G-TlEIpzXEHg-f-eVnmnFGBe4QFYT4MamCdm0TwMExrMlaVzY2vIzj2J5Pvq8ofXMVa52eIyB7XjkMflCz33t_ilvUg4WrhT4gwMrIU8ItVholMmAsAjIqj8cAPSb1RT"
          />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-30 text-accent animate-pulse">
            <PawPrint size={160} />
          </div>
        </div>

        <div className="space-y-8">
          <span className="text-primary font-bold tracking-wide">Why Parents Trust Us</span>
          <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight">
            A Campus Built On <br />Trust And <span className="text-slate-900 underline decoration-primary decoration-4 underline-offset-4">Excellence!</span>
          </h2>
          <p className="text-lg text-slate-600">
            We maintain high standards of safety, hygiene, and academic excellence, ensuring your child receives the best care and early education possible.
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-slate-800">Parent Satisfaction Rate</span>
                <span className="text-primary font-bold">98%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-slate-800">Phonics Success Rate</span>
                <span className="text-secondary font-bold">95%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-secondary h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919924107219?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20my%20kid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/30 transition"
          >
            Enroll Your Kid!
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full cloud-divider"></div>
    </section>
  );
};

export default StatsSection;