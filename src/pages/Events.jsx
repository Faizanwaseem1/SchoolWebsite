import React from 'react';

export default function Events() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">News & Announcements</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Upcoming Events & Stories</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Stay updated with student achievements, championship wins, and campus gatherings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" alt="Robot Championship" className="h-48 w-full object-cover" />
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium"><i class="fa-regular fa-calendar mr-2"></i> May 14, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Regional Robotics Championship Win</h3>
                <p className="text-slate-600 text-sm mt-2">Our high school team secured first place with their autonomous drone design.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" alt="Spring Gala" className="h-48 w-full object-cover" />
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium"><i class="fa-regular fa-calendar mr-2"></i> May 02, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Annual Spring Charity Gala</h3>
                <p className="text-slate-600 text-sm mt-2">Raised over $50,000 for student fine arts and musical equipment.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop" alt="Open House" className="h-48 w-full object-cover" />
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium"><i class="fa-regular fa-calendar mr-2"></i> April 28, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Fall Open House & Campus Tours</h3>
                <p className="text-slate-600 text-sm mt-2">Register now for weekend guided tours and department overviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}