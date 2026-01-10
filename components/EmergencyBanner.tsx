
import React from 'react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-ttdi-green text-white py-2 overflow-hidden whitespace-nowrap hidden md:block border-b border-blue-700/50">
      <div className="animate-[marquee_20s_linear_infinite] inline-block px-4">
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          Book Your Appointment: 03-2284 6153
        </span>
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          34 Years of Quality Dental Care
        </span>
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          2 Locations: Bangsar & Klang
        </span>
        {/* Repeat for continuous effect */}
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          Book Your Appointment: 03-2284 6153
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
