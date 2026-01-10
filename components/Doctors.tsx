
import React from 'react';
import { DOCTORS } from '../constants';

export const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-24 bg-ivory bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">The Care Team</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Expert Doctors, <br /><span className="italic text-ttdi-green">Compassionate Hearts.</span></h3>
          <p className="text-gray-600 text-lg font-sans">Our team of dedicated physicians brings together decades of combined experience across various medical fields.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 right-4 bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  {doc.experience}
                </div>
              </div>
              
              <h4 className="text-2xl font-serif text-[#1a1a1a] mb-1">{doc.name}</h4>
              <p className="text-ttdi-green font-bold text-sm uppercase tracking-widest mb-4">{doc.role}</p>
              <p className="text-gray-500 italic mb-6 px-4">"{doc.quote}"</p>
              
              <div className="flex space-x-2">
                {doc.languages.map((lang) => (
                  <span key={lang} className="text-[10px] font-bold text-gray-400 bg-white px-2 py-1 rounded border border-gray-100 uppercase">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
