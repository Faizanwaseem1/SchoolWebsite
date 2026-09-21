import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">Admissions Open</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Join the Apex Family</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Applications for Fall 2026/2027 are now live. Follow our straightforward admissions process to secure your spot.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-green-600 font-bold uppercase text-xs tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Step-by-Step</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">The Admissions Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">1</div>
              <h3 className="font-bold text-slate-900 text-lg">Submit Application</h3>
              <p className="text-slate-600 text-sm">Fill out our online inquiry form and submit previous academic records.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">2</div>
              <h3 className="font-bold text-slate-900 text-lg">Campus Tour</h3>
              <p className="text-slate-600 text-sm">Schedule a guided tour to explore our state-of-the-art facilities and labs.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">3</div>
              <h3 className="font-bold text-slate-900 text-lg">Assessment</h3>
              <p className="text-slate-600 text-sm">Student interview and grade-appropriate placement evaluation.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">4</div>
              <h3 className="font-bold text-slate-900 text-lg">Enrollment</h3>
              <p className="text-slate-600 text-sm">Receive your acceptance letter and finalize registration paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Application Form Banner */}
      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black">Ready to Take the First Step?</h2>
          <p className="text-green-100 text-base">Contact our admissions office or book your virtual tour today.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow hover:bg-green-50 transition">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}