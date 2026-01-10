
import React from 'react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em] mb-4">Our Locations</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Two Clinics, <span className="italic text-blue-400">One Standard of Care.</span></h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bangsar Branch */}
          <div className="bg-white/5 rounded-[40px] p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-ttdi-green p-4 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif text-blue-300">Bangsar Branch</h4>
            </div>

            <div className="space-y-4 text-gray-400">
              <p className="text-lg">
                No. 20 A (First Floor)<br />
                Jalan Telawi Lima<br />
                Bangsar Baru<br />
                59100 Kuala Lumpur
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:0322846153" className="text-white hover:text-terracotta">03-2284 6153</a>
              </p>
              <p className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </p>
            </div>

            <div className="h-[250px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9876!2d101.6697!3d3.1298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49!2sBangsar%20Baru!5e0!3m2!1sen!2smy"
                className="w-full h-full border-0 grayscale invert brightness-90 contrast-125"
                loading="lazy"
                title="Bala Dental Clinic Bangsar"
              ></iframe>
            </div>
          </div>

          {/* Klang Branch */}
          <div className="bg-white/5 rounded-[40px] p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-terracotta p-4 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif text-terracotta">Klang Branch</h4>
            </div>

            <div className="space-y-4 text-gray-400">
              <p className="text-lg">
                Klang Branch<br />
                Selangor<br />
                Malaysia
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:0322846153" className="text-white hover:text-terracotta">Contact Main Branch</a>
              </p>
              <p className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </p>
            </div>

            <div className="h-[250px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d101.4!3d3.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc!2sKlang!5e0!3m2!1sen!2smy"
                className="w-full h-full border-0 grayscale invert brightness-90 contrast-125"
                loading="lazy"
                title="Bala Dental Clinic Klang"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
