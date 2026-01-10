
import React, { useState } from 'react';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'General Consultation',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Booking Request:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-ivory bg-opacity-30 rounded-[60px] p-8 md:p-16 shadow-inner relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ttdi-green opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta opacity-5 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-terracotta uppercase tracking-[0.3em]">Stay Healthy</h2>
                <h3 className="text-4xl font-serif text-[#1a1a1a]">Book Your <br /><span className="italic text-ttdi-green">Visit Today.</span></h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-sans">
                Prefer to schedule ahead? Fill in the form and our team will confirm your slot within the hour. For emergencies, please call us directly.
              </p>
              
              <div className="pt-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-ttdi-green">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                    <p className="font-bold">03-7727 6671</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-ttdi-green">
                    📱
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-bold">+60 12-345 6789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 p-12 bg-white rounded-[40px] shadow-sm">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl">✓</div>
                  <h4 className="text-2xl font-serif text-ttdi-green">Thank You!</h4>
                  <p className="text-gray-600">Your appointment request has been received. Our team will contact you shortly to confirm.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-ttdi-green font-bold uppercase tracking-widest text-sm underline"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-[40px] shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Ali bin Abu" 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="012-3456789" 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Select Service</label>
                      <select 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option>General Consultation</option>
                        <option>Health Screening</option>
                        <option>Vaccination</option>
                        <option>Cardiac Test</option>
                        <option>Medical Checkup</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Additional Notes (Optional)</label>
                    <textarea 
                      placeholder="Any specific symptoms or requests?" 
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none min-h-[120px]"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-ttdi-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1a3d28] transition-all transform hover:scale-[1.02] shadow-xl"
                  >
                    Confirm Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
