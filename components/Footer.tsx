
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-2xl font-serif font-bold">
              Klinik Famili <span className="text-terracotta">TTDI</span>
            </h4>
            <p className="text-gray-500 leading-relaxed font-sans">
              Serving the families of Taman Tun Dr Ismail and beyond since 1988. Professional, compassionate healthcare available 24 hours a day, 7 days a week.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ttdi-green transition-colors">FB</a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ttdi-green transition-colors">IG</a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ttdi-green transition-colors">TW</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Quick Links</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">The Care Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Services</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-white transition-colors">General Consultation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Health Screening</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vaccinations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cardiac Health</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-8">Get In Touch</h5>
            <ul className="space-y-6 text-gray-500">
              <li className="flex space-x-3">
                <span className="text-white">📍</span>
                <span>Lot 21, Ground Floor, Jalan Wan Kadir, TTDI, 60000 KL</span>
              </li>
              <li className="flex space-x-3">
                <span className="text-white">📞</span>
                <span>03-7727 6671 / 03-7725 9969</span>
              </li>
              <li className="flex space-x-3">
                <span className="text-white">⏰</span>
                <span>Open 24 Hours, 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Klinik Famili TTDI Sdn. Bhd. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
