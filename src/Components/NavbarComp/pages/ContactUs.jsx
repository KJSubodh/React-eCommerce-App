import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden py-20 px-6 lg:px-20">

      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">conversation.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            Have a question or just want to say hi? We'd love to hear from you.
            Our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Information (4 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col shadow-2xl relative overflow-hidden">
            {/* Subtle card pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Call us</p>
                    <span className="text-xl font-semibold">+1 (555) 000-0000</span>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email us</p>
                    <span className="text-xl font-semibold">hello@brandname.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Visit us</p>
                    <span className="text-xl font-semibold">123 Design Street, <br />New York, NY 10001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-amber-500 transition-colors cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>

              {/* X (formerly Twitter) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-amber-500 transition-colors cursor-pointer"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>

              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-amber-500 transition-colors cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </div>
          </div>

          {/* Right Column: The Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-3xl bg-white border border-slate-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 text-slate-700 resize-none"
                ></textarea>
              </div>

              <button className="group w-full cursor-pointer bg-amber-500 text-white font-black py-5 rounded-2xl hover:bg-amber-600 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 active:scale-[0.98]">
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;