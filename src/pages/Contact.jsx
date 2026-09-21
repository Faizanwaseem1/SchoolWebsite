import React from 'react';

export default function Contact() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-green-400 font-bold uppercase text-xs tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Apex Academy</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            We are here to answer your questions regarding admissions, curriculum, and campus visits.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Reach Out Directly</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you want to schedule a campus tour or learn more about our scholarship programs, feel free to drop us a message or visit our campus.
            </p>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-green-600"></i> 1000 Innovation Parkway, Education City, CA 94016</li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-phone text-green-600"></i> +1 (555) 382-9000</li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-envelope text-green-600"></i> admissions@apexacademy.edu</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name</label>
                <input type="text" required className="w-full bg-white border border-slate-300 px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-green-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address</label>
                <input type="email" required className="w-full bg-white border border-slate-300 px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-green-600" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full bg-white border border-slate-300 px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-green-600" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}