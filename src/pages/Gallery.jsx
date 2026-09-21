import React from 'react';

export default function Gallery() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">Campus Moments</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Photo Gallery</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            A visual window into daily student engagement, collaborative learning, and campus energy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-2xl shadow-sm h-64 group">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop" alt="Campus 1" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm h-64 group">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="Campus 2" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm h-64 group">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" alt="Campus 3" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm h-64 group">
            <img src="https://images.unsplash.com/photo-1564982752979-3f71a14d5f47?q=80&w=600&auto=format&fit=crop" alt="Campus 4" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>
      </section>
    </div>
  );
}