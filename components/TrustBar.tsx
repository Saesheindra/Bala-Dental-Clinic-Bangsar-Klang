
import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-12 border-y border-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted Partners & Insurance Panels</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {/* Mock Logos */}
          <div className="text-center font-bold text-xl text-gray-600">AIA</div>
          <div className="text-center font-bold text-xl text-gray-600">Allianz</div>
          <div className="text-center font-bold text-xl text-gray-600">Great Eastern</div>
          <div className="text-center font-bold text-xl text-gray-600">Prudential</div>
          <div className="text-center font-bold text-xl text-gray-600">PMCare</div>
          <div className="text-center font-bold text-xl text-gray-600">HealthMetrics</div>
        </div>
      </div>
    </div>
  );
};
