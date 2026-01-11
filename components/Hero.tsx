
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-ivory opacity-40 rounded-l-[100px] hidden md:block"></div>
      <div className="absolute -top-20 -left-20 -z-10 w-96 h-96 bg-ttdi-green opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-ivory">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-ttdi-green uppercase tracking-wider">2 Locations — Bangsar & Klang</span>
            </div>

            <h1 className="text-5xl md:text-7xl leading-tight font-serif text-[#1a1a1a]">
              Your Smile, <br />
              <span className="text-ttdi-green italic">Our Expertise.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans">
              Trusted dental care in Bangsar and Klang since 1983. Over 40 years of experience led by Dato' Dr. Balakrishnan.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-terracotta text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c96a51] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
              </a>
              <a
                href="tel:0322846153"
                className="bg-white text-[#333333] border-2 border-ivory px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.812 4.812l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call: 03-2284 6153</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 justify-center md:justify-start pt-4">
              <div className="text-center">
                <span className="block text-2xl font-bold text-ttdi-green">40+</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Years Experience</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-ttdi-green">15k+</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Happy Patients</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-ttdi-green">2</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Locations</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/assets/treatment-room.jpg"
                alt="Bala Dental Clinic - Modern Treatment Room"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-ttdi-green text-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Established</p>
              <p className="text-4xl font-serif">1983</p>
            </div>
            <div className="absolute top-1/2 -right-8 -z-10 w-64 h-64 bg-terracotta opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
