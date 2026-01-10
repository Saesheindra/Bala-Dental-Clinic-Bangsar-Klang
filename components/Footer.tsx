
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-2xl font-serif font-bold">
              Bala <span className="text-terracotta">Dental</span>
            </h4>
            <p className="text-gray-500 leading-relaxed font-sans">
              Serving families in Bangsar and Klang since 1991. Professional, gentle dental care with over 34 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BalaDentalClinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ttdi-green transition-colors">FB</a>
              <a href="https://www.instagram.com/bangsar_dental/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ttdi-green transition-colors">IG</a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Quick Links</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Our Dentists</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Services</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-white transition-colors">General Check-up</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Teeth Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Fillings & Restorations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Root Canal Treatment</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dentures & Crowns</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Get In Touch</h5>
            <ul className="space-y-6 text-gray-500">
              <li className="flex space-x-3">
                <span className="text-white">📍</span>
                <span>No. 20 A (First Floor), Jalan Telawi Lima, Bangsar Baru, 59100 KL</span>
              </li>
              <li className="flex space-x-3">
                <span className="text-white">📞</span>
                <span>03-2284 6153</span>
              </li>
              <li className="flex space-x-3">
                <span className="text-white">⏰</span>
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 Bala Dental Clinic. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
