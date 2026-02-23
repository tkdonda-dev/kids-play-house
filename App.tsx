import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/home/LandingPage';
import AboutPage from './features/about/AboutPage';
import ContactPage from './features/contact/ContactPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-800 font-body antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;