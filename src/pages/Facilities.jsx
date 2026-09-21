import React from 'react';

export default function Facilities() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">Campus Life</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">World-Class Facilities</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Designed to foster modern scientific research, creative arts, and elite athletic performance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop" alt="STEM Lab" className="w-full h-48 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Advanced STEM Labs</h3>
              <p className="text-slate-600 text-sm">Equipped with 3D printers, robotics kits, and biotech workstations.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop" alt="Arts Center" className="w-full h-48 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Performing Arts Center</h3>
              <p className="text-slate-600 text-sm">A 500-seat auditorium with professional acoustic and lighting systems.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" alt="Athletic Complex" className="w-full h-48 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Athletic Complex</h3>
              <p className="text-slate-600 text-sm">Includes an indoor heated pool, professional turf fields, and gymnasiums.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}