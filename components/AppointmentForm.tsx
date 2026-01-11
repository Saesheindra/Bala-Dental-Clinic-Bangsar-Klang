import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emergency_contact: '',
    date: '',
    time: '',
    service: 'General Check-up',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('appointments')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          emergency_contact: formData.emergency_contact || null,
          date: formData.date,
          time: formData.time || 'Any time',
          service: formData.service,
          notes: formData.notes || null
        });

      if (insertError) {
        throw insertError;
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        emergency_contact: '',
        date: '',
        time: '',
        service: 'General Check-up',
        notes: ''
      });
    } catch (err) {
      console.error('Error submitting appointment:', err);
      setError('Failed to submit appointment. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-ivory bg-opacity-30 rounded-[60px] p-8 md:p-16 shadow-inner relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ttdi-green opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta opacity-5 rounded-full -ml-16 -mb-16"></div>

          {/* Admin Access Link */}
          <Link
            to="/admin"
            className="absolute top-6 right-6 z-20 bg-white/80 hover:bg-ttdi-green hover:text-white text-gray-500 text-xs px-3 py-1.5 rounded-full shadow-sm border border-gray-200 transition-all"
            title="Admin Access"
          >
            Admin
          </Link>

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                    <p className="font-bold">03-2284 6153</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-ttdi-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="font-bold">info@baladental.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 p-12 bg-white rounded-[40px] shadow-sm">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
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
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 md:p-10 rounded-[40px] shadow-lg">
                  {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name *</label>
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
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="012-3456789"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Emergency Contact</label>
                      <input
                        type="tel"
                        placeholder="012-3456789"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.emergency_contact}
                        onChange={(e) => setFormData({...formData, emergency_contact: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Select Service *</label>
                    <select
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>General Check-up</option>
                      <option>Teeth Cleaning</option>
                      <option>Fillings & Restorations</option>
                      <option>Tooth Extraction</option>
                      <option>Root Canal Treatment</option>
                      <option>Dentures & Crowns</option>
                      <option>Teeth Whitening</option>
                      <option>Other Dental Services</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Date *</label>
                      <input
                        required
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Time</label>
                      <select
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none appearance-none"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      >
                        <option value="">Any time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Additional Notes (Optional)</label>
                    <textarea
                      placeholder="Any specific symptoms or requests?"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-ttdi-green outline-none min-h-[100px]"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ttdi-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1a3d28] transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
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
