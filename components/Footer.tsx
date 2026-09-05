import React from 'react';
import { Mail, Globe, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_INFO, CORE_SERVICES } from '../data/siteData';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a 
              href="#/" 
              id="footer-brand-logo"
              className="inline-flex items-center gap-3 text-slate-900 group focus:outline-none"
              aria-label="Novexa Solutions"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 group-hover:border-blue-300 flex items-center justify-center transition-colors shadow-2xs">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#footerBrandGradLight)" />
                  <circle cx="32" cy="11" r="2.5" fill="#0ea5e9" />
                  <defs>
                    <linearGradient id="footerBrandGradLight" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0ea5e9" />
                      <stop offset="0.6" stopColor="#2563eb" />
                      <stop offset="1" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-slate-900 leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600 mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </a>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              Novexa Solutions is an international digital technology agency. We architect high-performance web systems, intuitive mobile products, distinctive brand identities, and production-ready AI workflows.
            </p>

            <div className="pt-1 flex flex-col space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>UK-Registered Digital Technology Agency</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Direct Technical Leadership & Milestone Delivery</span>
              </div>
            </div>
          </div>

          {/* 6 Core Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider font-display">
              Core Services
            </h3>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <a 
                    href={`#/services`} 
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group py-0.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider font-display">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#/services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              </li>
              <li>
                <a href="#/about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact / Inquiries Box */}
          <div className="lg:col-span-3">
            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs">
              <div className="text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Official Contact
                </div>
                
                <h4 className="text-slate-900 font-bold text-sm font-display">
                  Start a Project Discussion
                </h4>
                
                <p className="text-slate-500 text-xs leading-relaxed">
                  Have a new digital project or enterprise software requirement? Contact our team directly.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <a 
                    href={`mailto:${SITE_INFO.email}`} 
                    className="flex items-center gap-2.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-blue-600" />
                    <span>{SITE_INFO.email}</span>
                  </a>

                  <a 
                    href={SITE_INFO.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-blue-600 transition-colors group"
                  >
                    <Globe className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span>{SITE_INFO.domain}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Disclaimers */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p className="text-center md:text-left">
            © 2026 {SITE_INFO.name}. All rights reserved. Registered in the United Kingdom.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-slate-500">
            <a href="#/services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#/about" className="hover:text-blue-600 transition-colors">About</a>
            <a href={`mailto:${SITE_INFO.email}`} className="hover:text-blue-600 transition-colors">Inquiries</a>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise Standards</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
