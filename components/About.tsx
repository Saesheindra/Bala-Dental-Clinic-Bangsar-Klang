
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/IMG_6732.JPG" alt="Bala Dental Clinic Treatment Room" className="rounded-3xl shadow-lg mt-12 object-cover h-[300px]" />
              <img src="/assets/OLC.webp" alt="Modern Dental Equipment" className="rounded-3xl shadow-lg object-cover h-[250px]" />
            </div>
            {/* Years badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-2xl border-8 border-ivory text-center w-48 h-48 flex flex-col justify-center">
              <span className="text-terracotta font-bold text-4xl block">40+</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Years of Excellence</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Quality Dental Care <br /><span className="italic text-ttdi-green">You Can Trust.</span></h3>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                In 1983, Dato' Dr. Balakrishnan opened Bala Dental Clinic with a simple mission: to provide quality, affordable dental care for families in the community.
              </p>
              <p>
                Over four decades later, we've grown to serve patients across two locations in Bangsar and Klang. Our commitment to excellence remains unchanged — combining years of expertise with modern dental techniques.
              </p>
              <p>
                We believe everyone deserves a healthy, confident smile. That's why we focus on comprehensive care, from routine check-ups to complex treatments, all delivered with a gentle touch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">1983</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Year Founded</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">2</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Clinic Locations</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">20,000+</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Patients Served</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif text-ttdi-green">100%</p>
                <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
