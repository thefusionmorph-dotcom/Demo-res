
import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-amber-500 tracking-[0.3em] font-medium mb-4">RESERVATIONS</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-white mb-8">Book Your Experience</h3>
          <p className="text-white/60 mb-12 text-lg">
            Whether it's a romantic dinner, a business gathering, or a celebration with friends, we ensure every moment is memorable.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-white/50">123 Culinary Way, Gastronomy District, NYC</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Opening Hours</h4>
                <p className="text-white/50">Tue - Sun: 5:30 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          {success ? (
            <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h4 className="font-serif text-3xl text-white mb-2">Reservation Received!</h4>
              <p className="text-white/60">We'll contact you shortly to confirm your table.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50" />
              </div>
              <div className="md:col-span-2">
                <input type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50" />
              </div>
              <div>
                <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50" />
              </div>
              <div>
                <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 appearance-none">
                  <option value="" className="bg-neutral-900">Time</option>
                  <option className="bg-neutral-900">5:30 PM</option>
                  <option className="bg-neutral-900">7:00 PM</option>
                  <option className="bg-neutral-900">8:30 PM</option>
                  <option className="bg-neutral-900">10:00 PM</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 appearance-none">
                  <option value="" className="bg-neutral-900">Number of Guests</option>
                  <option className="bg-neutral-900">1 Person</option>
                  <option className="bg-neutral-900">2 People</option>
                  <option className="bg-neutral-900">4 People</option>
                  <option className="bg-neutral-900">6+ People</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-600/20">
                  BOOK TABLE
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
