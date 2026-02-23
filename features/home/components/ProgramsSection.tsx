import React from 'react';
import { GraduationCap, Palette, Brain, ArrowRight } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Playgroup & Nursery",
      desc: "A gentle introduction to learning. We focus on sensory play, basic vocabulary, and healthy social interactions in a safe, loving space.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAspg2kuQIYnDBDqYPvrAzRy0stct0utUJA2DU-rr6xOldZOg91JRhfyjOPSDsqXjWQTaIk1AfzPTW5fAyRRbo-c_DQtQM00K834ZrvIzQGFZHPXZk2aKSeqzkJExGNMWj4Gm7zEoClIyh7A4Iuq20M_djWbqhioe9qEQgm_dr5cTJSjLmQKEBNuxasM-IvXb2E5whvyGanwu6Re9pxgS-_qPrUxg09HjBXaE885MoJ6VJS9fRsKTAmzuWuqWfskHOlcR8phjUqH9PE",
      icon: GraduationCap,
      color: "bg-primary",
      btnColor: "bg-primary hover:bg-orange-600",
    },
    {
      title: "LKG Curriculum",
      desc: "Building strong foundations. Your child learns letter formations, progressive phonics, early math concepts, and participates in group activities.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQIBZZEqAHC9cogY_65p8FEisQ_Zi3tgRbi1XMQ-VB26rfxCQzEFFDFPkw6d9OysiOnsbd8SosyRHqnfY_txFBqv8J-m0dR1eS-1E-C54Rld6win_vXh1AzW115q3xdciD8-E8SnNbrPR4A-yuIYlF_r5byZaQODBEkvBscC1b4mrrSU1FnsOTCMDnWnToWFVvPwR81SCm5lyB49xitv_tyi2lYVvhXpWEb-2e-X9DOVE0A8W05N2-qH40_AycmDqcJ5sldDHe_l33",
      icon: Palette,
      color: "bg-blue-400",
      btnColor: "bg-blue-400 hover:bg-blue-500",
    },
    {
      title: "UKG & School Readiness",
      desc: "Preparing for big school. We emphasize independent reading, critical thinking, behavioral discipline, and comprehensive school readiness.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeUZpP-2BlumKggYfKOm3PSC8XuQ5YiWa7J2JOVr5IQuA7iyshdWoKYqaH92RIC0VE2zEhdV0E3ZqX4J_1_aJlFKSVlXY-V1F4EQ6COYB-Capp7JTUxwyqBv0z98qSpEUv4_UeyS5fVXYoz7k9N_0n-e9nOgWomOGf9GyYA3xsMqfW2fTBgC6NduPI5RdA4HiOipiKqSlavbNoCu0_gKNbZCcxkU8G0ur8R254Ng2l844mibSdtuDLmL4c15ByfPy4U-VgUYDAAjnw",
      icon: Brain,
      color: "bg-accent",
      btnColor: "bg-accent hover:bg-green-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 w-full cloud-divider-top bg-white"></div>

      <div className="container mx-auto px-6 text-center mb-16 relative pt-12">
        <span className="text-primary font-bold tracking-wide">Our Curriculum Journey</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Structured Programs From <br />
          <span className="text-slate-900 underline decoration-secondary decoration-4 underline-offset-4">Early Playgroup To UKG!</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {programs.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-4xl text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative inline-block mb-6 w-full">
              <img
                alt={item.title}
                className="w-full h-48 object-cover rounded-3xl mb-4 shadow-sm"
                src={item.img}
              />
              <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-white`}>
                <item.icon size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 mt-8 text-slate-800">{item.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
            <button className={`${item.btnColor} text-white p-3 rounded-full transition shadow-md`}>
              <ArrowRight size={24} />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full cloud-divider"></div>
    </section>
  );
};

export default ProgramsSection;