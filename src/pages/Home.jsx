import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Dark Hero Section */}
      <section className="bg-[#0b1121] relative overflow-hidden border-b border-slate-900">
        
        {/* Subtle CSS Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-15" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-8">
              {/* Ranking Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/80 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                <i className="fa-solid fa-ribbon text-slate-300"></i> Ranked #1 Independent School
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Minds,
              </h1>
              
              {/* Description */}
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                At Apex Academy, we cultivate critical thinking, creative expression, and lifelong values through an immersive curriculum tailored for global citizenship.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  Apply For Admission <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="bg-[#1e293b] hover:bg-slate-700 border border-slate-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-3 transition-all">
                  <i className="fa-solid fa-circle-play"></i> Virtual Tour
                </button>
              </div>
              
              {/* Stats Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium pt-8">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-slate-500"></i> 100% College Acceptance
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-slate-500"></i> 12:1 Student-Teacher Ratio
                </span>
              </div>
            </div>

            {/* Right Content Column - Glowing Text Box */}
            <div className="relative w-full h-[400px] lg:h-[480px] bg-[#0f172a] rounded-3xl border border-slate-800 shadow-[0_0_80px_-15px_rgba(34,197,94,0.25)] flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Apex Academy Campus</h2>
            </div>

          </div>
        </div>
      </section>

      {/* The rest of your Home.jsx content goes here (Programs, Tabs, etc.) */}
      <div className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Scroll down for content...</h2>
      </div>
    </div>
  );
}