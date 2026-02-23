import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 bg-white px-6">
      <div className="container mx-auto bg-secondary/10 rounded-[4rem] p-12 relative overflow-hidden flex flex-col items-center text-center">
        <span className="text-primary font-bold tracking-wide">A Great Start</span>
        <h2 className="text-5xl font-display font-bold mt-4 mb-6 text-slate-900">
          Admissions Open For <br />The <span className="text-primary">New Session!</span>
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl">
          Give your child the gift of a strong foundation. Limited seats available for Playgroup, Nursery, LKG, and UKG.
        </p>
        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/30 hover:bg-orange-600 transition hover:-translate-y-1">
          Enquire Now!
        </button>
        <img
          alt="Train illustration"
          className="w-full max-w-2xl mt-12 opacity-80 animate-fade-in"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgcr9S6Kn0V7YipHCRTWiEzTVPwKrAr2k2EB8qhdaW2g3dDQGLCe5sqfOME4BAkrPNNC8e2hOxGWAJRuKIX78cVtHqtrbPkTIMxFseVYs8Cx6wtJ4oyoYZ0MeYtZt7Yp4-4Ncr2NNBClQ2cL2j8qcPmHhvTn3IQtddOTjn2TMuh8-Ao8nAiH0PjG-sK3pE73dHtuL9Ud4Dlh6HOw-jLMDqqpJlbNAFfnn81r159zBQRHc-QT1f01nvsqY1FoEbN-FQkJGJb47kEFTd"
        />
      </div>
    </section>
  );
};

export default CtaSection;