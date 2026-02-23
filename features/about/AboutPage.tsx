import React from 'react';
import AboutSection from '../home/components/AboutSection';
import TeachersSection from '../home/components/TeachersSection';
import StatsSection from '../home/components/StatsSection';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-soft-blue py-16 text-center">
        <h1 className="text-5xl font-display font-bold text-slate-900">About Us</h1>
        <p className="text-slate-600 mt-4 text-lg">Learn more about our mission and team</p>
      </div>
      <AboutSection />
      <StatsSection />
      <TeachersSection />
    </div>
  );
};

export default AboutPage;
