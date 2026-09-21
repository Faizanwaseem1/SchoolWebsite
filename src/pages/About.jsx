import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">About Apex Academy</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Legacy & Leadership</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            For over three decades, we have remained committed to providing a dynamic learning environment where students grow into compassionate global leaders.
          </p>
        </div>
      </section>

      {/* Principal Welcome Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Principal Dr. Eleanor Vance" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl text-white">
                  <h4 className="font-bold text-base">Dr. Eleanor Vance</h4>
                  <p className="text-xs text-green-400">Head of Academy & Superintendent</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-green-600 font-bold uppercase text-xs tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Welcome Message</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Nurturing curiosity, character, and academic excellence every single day.</h2>
              <p className="text-slate-600 leading-relaxed">
                "Welcome to Apex Academy. For over three decades, we have remained committed to providing a dynamic learning environment where students feel safe to take intellectual risks, discover their authentic passions, and grow into compassionate leaders of tomorrow."
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our world-class faculty blends traditional rigorous scholarship with modern experiential methodologies, ensuring every graduate is prepared to excel in top-tier universities and beyond.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="block text-2xl font-extrabold text-slate-900">30+ Years</span>
                  <span className="text-xs text-slate-500">Of Educational Leadership</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <span className="text-xs font-semibold text-slate-700 italic block mt-1">- Dr. Eleanor Vance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-green-600 font-bold uppercase text-xs tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Our Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Mission, Vision, & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-lg font-bold">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To inspire a passion for lifelong learning, rigorous inquiry, and moral integrity in a supportive, diverse community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-lg font-bold">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be a globally recognized independent academy that pioneers innovative approaches to holistic student development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-lg font-bold">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Core Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrity, respect, resilience, collaboration, and relentless curiosity form the bedrock of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Want to experience our campus firsthand?</h2>
          <p className="text-green-100 max-w-xl mx-auto text-sm">Schedule a guided tour with our admissions team or check out our academic programs.</p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl shadow hover:bg-green-50 transition text-sm">Schedule a Visit</Link>
            <Link to="/academics" className="px-6 py-3 bg-green-800 text-white font-bold rounded-xl border border-green-600 hover:bg-green-900 transition text-sm">Explore Academics</Link>
          </div>
        </div>
      </section>
    </div>
  );
}