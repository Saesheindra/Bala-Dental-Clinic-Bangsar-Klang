
import React from 'react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-ttdi-green text-white py-2 overflow-hidden whitespace-nowrap hidden md:block border-b border-green-700/50">
      <div className="animate-[marquee_20s_linear_infinite] inline-block px-4">
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Emergency? Call us directly: 03-7727 6671
        </span>
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          24-Hour Patient Care Since 1988
        </span>
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Located Near TTDI Pasar & MRT
        </span>
        {/* Repeat for continuous effect */}
        <span className="mx-8 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Emergency? Call us directly: 03-7727 6671
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
