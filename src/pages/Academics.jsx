import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('elementary');

  const tabContents = {
    elementary: {
      tag: "Foundational Years (Grades K-5)",
      title: "Igniting a lifelong love for learning through play and inquiry.",
      desc: "Our elementary curriculum focuses on foundational literacy, numerical fluency, social-emotional development, and bilingual introduction. Classrooms are designed as dynamic learning labs where kids explore through sensory and project-based assignments.",
      points: [
        "Small group reading & phonics workshops",
        "Daily outdoor play & motor skills development",
        "Introduction to basic coding and Spanish language"
      ],
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
    },
    middle: {
      tag: "Transitional Years (Grades 6-8)",
      title: "Building confidence, critical inquiry, and independence.",
      desc: "Middle school is a crucial bridge. We challenge pre-teens with advanced subject specialization, collaborative project work, leadership opportunities in student council, and extracurricular clubs ranging from chess to robotics.",
      points: [
        "Specialized mathematics & integrated sciences",
        "1:1 Laptop program for digital literacy",
        "Competitive middle school sports leagues"
      ],
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop"
    },
    high: {
      tag: "College Preparatory (Grades 9-12)",
      title: "Advanced rigorous academics geared toward elite university admission.",
      desc: "Our high school program offers over 24 Advanced Placement (AP) courses, dual-enrollment college credits, undergraduate research mentorship, and specialized career tracks in medicine, law, engineering, and finance.",
      points: [
        "24+ AP & Honors courses available",
        "Comprehensive university admissions counselling",
        "Community service & internship placements"
      ],
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
    },
    stem: {
      tag: "Excellence in Innovation",
      title: "Cutting-edge technological immersion and scientific experimentation.",
      desc: "Designed for future engineers, computer scientists, and researchers. Students have access to 3D printers, AI coding workshops, biotechnology testing kits, and regional science fairs.",
      points: [
        "Dedicated Robotics & AI Lab",
        "Annual hackathons and science olympiads",
        "Partnerships with tech institutes"
      ],
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop"
    },
    arts: {
      tag: "Creative & Athletic Vigor",
      title: "Cultivating expression on stage, canvas, and athletic fields.",
      desc: "We believe physical fitness and artistic expression are vital to mental well-being. Our students enjoy Olympic-sized swimming pools, professional turf fields, orchestra, choir, and dramatic arts.",
      points: [
        "Full symphonic orchestra & drama club",
        "State-of-the-art indoor gymnasium & pool",
        "15+ Varsity athletic teams"
      ],
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop"
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">Academic Excellence</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Curriculum & Programs</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Structured educational pathways tailored to foster curiosity, intellectual rigor, and holistic growth at every stage.
          </p>
        </div>
      </section>

      {/* Interactive Programs Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-green-600 font-bold uppercase text-xs tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Pathways</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Explore Our Academic Tiers</h2>
          </div>

          {/* Tab Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'elementary', label: 'Elementary (K-5)' },
              { id: 'middle', label: 'Middle School (6-8)' },
              { id: 'high', label: 'High School (9-12)' },
              { id: 'stem', label: 'STEM & Honors' },
              { id: 'arts', label: 'Fine Arts & Sports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition ${
                  activeTab === tab.id 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display Container */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-md uppercase">
                {tabContents[activeTab].tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {tabContents[activeTab].desc}
              </p>
              <ul className="space-y-2 text-sm font-medium text-slate-700">
                {tabContents[activeTab].points.map((pt, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i> {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <img 
                src={tabContents[activeTab].img} 
                alt="Program overview" 
                className="rounded-2xl shadow-md w-full h-[320px] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to enroll your child in our programs?</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Review our admissions checklist or schedule a tour of our classrooms and labs.</p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow transition text-sm">Apply Now</Link>
            <Link to="/contact" className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition text-sm">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}