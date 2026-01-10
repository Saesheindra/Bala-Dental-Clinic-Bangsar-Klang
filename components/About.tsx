
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/ttdi1/500/600" alt="TTDI Park" className="rounded-3xl shadow-lg mt-12" />
              <img src="https://picsum.photos/seed/ttdi2/500/600" alt="Clinic Interior" className="rounded-3xl shadow-lg" />
            </div>
            {/* Neighborhood badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-2xl border-8 border-ivory text-center w-48 h-48 flex flex-col justify-center">
              <span className="text-terracotta font-bold text-4xl block">37+</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Years in TTDI</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">The Neighbourhood's <br /><span className="italic text-ttdi-green">Trusted Health Partner.</span></h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                In 1988, when TTDI was still maturing from its origins, Klinik Famili opened its doors with a simple promise: to be there for every family, at every hour.
              </p>
              <p>
                Three decades later, we've become more than just a clinic — we're part of TTDI's fabric. We've watched babies grow into parents, cared for three generations of residents, and been there through midnight fevers and morning check-ups alike.
              </p>
              <p>
                Our philosophy is simple: healthcare should feel like family. We combine years of medical expertise with the warmth and personal touch that only a neighborhood institution can provide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">1988</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Year Founded</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">24/7</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Care Available</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">3 Branches</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Growing Strong</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">100%</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
