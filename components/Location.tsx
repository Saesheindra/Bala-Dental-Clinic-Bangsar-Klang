
import React from 'react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {/* Placeholder for map pattern */}
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif">In the Heart of <span className="italic text-green-400">TTDI.</span></h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-ttdi-green p-4 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-green-100 uppercase tracking-widest text-sm font-bold">Main Clinic</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Lot 21, Ground Floor<br />
                    2, Jalan Wan Kadir<br />
                    Taman Tun Dr Ismail<br />
                    60000 Kuala Lumpur
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-ttdi-green p-4 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-green-100 uppercase tracking-widest text-sm font-bold">Opening Hours</h4>
                  <p className="text-gray-400 text-lg">Open 24 Hours, 7 Days a Week<br />Including Public Holidays</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-ttdi-green p-4 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-green-100 uppercase tracking-widest text-sm font-bold">Contact Info</h4>
                  <p className="text-gray-400 text-lg">03-7727 6671 / 03-7725 9969</p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <span className="bg-white/10 px-3 py-1 rounded">🚇 TTDI MRT Station (5 min walk)</span>
                <span className="bg-white/10 px-3 py-1 rounded">🅿️ Street Parking</span>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-[#333]">
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8407425667175!2d101.6288647!3d3.1364585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491f24d29f5b%3A0xc3f7a6f236f6d2f7!2sKlinik%20Famili%20TTDI!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy" 
              className="w-full h-full border-0 grayscale invert brightness-90 contrast-125"
              loading="lazy"
              title="Klinik Famili TTDI Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
