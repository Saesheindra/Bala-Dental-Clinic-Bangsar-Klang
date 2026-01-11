import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Doctors } from './components/Doctors';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/EmergencyBanner';
import { AdminPage } from './components/AdminPage';
import { HealthAssistant } from './components/HealthAssistant';

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <EmergencyBanner />
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Location />
        <AppointmentForm />
      </main>

      <Footer />

      {/* AI Dental Assistant Chatbot */}
      <HealthAssistant />

      {/* Floating Action Button for Mobile */}
      <a
        href="tel:0377276671"
        className="fixed bottom-6 left-6 md:hidden z-50 bg-terracotta text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-pulse-custom"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
