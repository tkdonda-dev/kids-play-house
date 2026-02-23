import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import DetailedPrograms from './components/DetailedPrograms';
import StatsSection from './components/StatsSection';
import EventsSection from './components/EventsSection';
import TeachersSection from './components/TeachersSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import BlogSection from './components/BlogSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <DetailedPrograms />
      <StatsSection />
      <EventsSection />
      <TeachersSection />
      <TestimonialsSection />
      <CtaSection />
      <BlogSection />
    </>
  );
};

export default LandingPage;