import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full font-sans">
      {/* Dark Top Announcement Bar */}
      <div className="bg-[#0b1120] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full">Admissions Open</span>
            <span className="text-slate-200">Applications for Fall 2026/2027 are now live! Secure your spot today.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <Link to="/contact" className="hover:text-white transition">Schedule a Visit</Link>
            <span className="w-px h-3 bg-slate-700"></span>
            <Link to="/portal" className="hover:text-white transition">Parent Portal</Link>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Custom Logo Block */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center shadow-sm">
              <i className="fa-solid fa-graduation-cap text-white text-xl"></i>
            </div>
            <div className="flex flex-col justify-center">
              <span className="block font-black text-[#0f172a] text-2xl leading-none tracking-tight">APEX</span>
              <span className="block font-bold text-green-500 text-[11px] tracking-[0.2em] leading-tight mt-0.5">ACADEMY</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link to="/" className="text-green-500">Home</Link>
            <Link to="/about" className="hover:text-green-500 transition">About Us</Link>
            <Link to="/academics" className="hover:text-green-500 transition">Academics</Link>
            <Link to="/about" className="hover:text-green-500 transition">Why Us</Link>
            <Link to="/events" className="hover:text-green-500 transition">News & Events</Link>
            <Link to="/gallery" className="hover:text-green-500 transition">Gallery</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-5 py-2.5 rounded-lg transition">
              Virtual Tour
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition">
              Apply Now
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}