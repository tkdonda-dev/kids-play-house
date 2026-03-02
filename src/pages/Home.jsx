// Home.jsx — Main home page
import HeroSection from '../components/sections/HeroSection';
import DreamsSection from '../components/sections/DreamsSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SafePlaceSection from '../components/sections/SafePlaceSection';
import GallerySection from '../components/sections/GallerySection';
import EventsSection from '../components/sections/EventsSection';
import TeachersSection from '../components/sections/TeachersSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AdventureBannerSection from '../components/sections/AdventureBannerSection';
import PromoBannerSection from '../components/sections/PromoBannerSection';
import BlogSection from '../components/sections/BlogSection';
import SideDecorations from '../components/sections/SideDecorations';
import useScrollAnimations from '../hooks/useScrollAnimations';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Home = () => {
    useSmoothScroll();
    useScrollAnimations();

    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
            <SideDecorations />
            <HeroSection />
            <DreamsSection />
            <ProgramsSection />
            <FeaturesSection />
            <SafePlaceSection />
            <GallerySection />
            <EventsSection />
            <TeachersSection />
            <TestimonialsSection />
            <AdventureBannerSection />
            <BlogSection />
        </div>
    );
};

export default Home;
