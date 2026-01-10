
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">Comprehensive Care</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Modern Medical Services <br /><span className="italic text-ttdi-green">with a Personal Touch</span></h3>
          <p className="text-gray-600 text-lg font-sans">We offer a wide range of primary care and diagnostic services under one roof, specifically curated for the TTDI community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-10 rounded-[32px] border border-ivory shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-ivory opacity-20 rounded-bl-[100px] group-hover:bg-ttdi-green group-hover:opacity-10 transition-all"></div>
              
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-ttdi-green transition-colors">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed font-sans mb-6">{service.description}</p>
              
              <a href="#contact" className="inline-flex items-center text-ttdi-green font-bold text-sm uppercase tracking-widest hover:text-terracotta transition-colors">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-ttdi-green rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="z-10 text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-3xl font-serif mb-2">Need immediate attention?</h4>
            <p className="text-green-100 text-lg">Our 24-hour emergency team is always on standby.</p>
          </div>
          <div className="z-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:0377276671" className="bg-white text-ttdi-green px-8 py-4 rounded-full font-bold text-center hover:bg-green-50 transition-colors shadow-lg">Call Clinic Now</a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-terracotta text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#c96a51] transition-colors shadow-lg">Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
};
