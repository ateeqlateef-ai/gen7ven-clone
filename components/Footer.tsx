import React from 'react';
import { Mail, Globe, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_INFO, CORE_SERVICES } from '../data/siteData';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#05070a] border-t border-[#1e293b] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#/" 
              id="footer-brand-logo"
              className="inline-flex items-center gap-3 text-white group focus:outline-none"
              aria-label="Novexa Solutions"
            >
              <div className="w-9 h-9 rounded-xl bg-[#111622] border border-[#1e293b] group-hover:border-blue-500/60 p-1 flex items-center justify-center transition-colors shadow-sm">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#footerBrandGrad)" />
                  <circle cx="32" cy="11" r="2.5" fill="#0ea5e9" />
                  <defs>
                    <linearGradient id="footerBrandGrad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="0.6" stopColor="#2563eb" />
                      <stop offset="1" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-white leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-400 mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Novexa Solutions is an international digital technology agency. We architect high-performance web systems, intuitive mobile products, distinctive brand identities, and production-ready AI workflows.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>UK-Registered Digital Technology Agency</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Technical Leadership & Milestone Delivery</span>
              </div>
            </div>
          </div>

          {/* 6 Core Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-wider font-display">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <a 
                    href="#/services" 
                    className="text-slate-400 hover:text-white transition-colors flex items-center group py-0.5"
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
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-wider font-display">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#/" className="text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#/services" className="text-slate-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#/about" className="text-slate-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact / Inquiries Box */}
          <div className="lg:col-span-3">
            <div className="p-6 bg-[#111622] border border-[#1e293b] rounded-2xl relative overflow-hidden">
              <div className="text-left space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Official Contact
                </div>
                
                <h4 className="text-white font-bold text-sm font-display">
                  Start a Project Discussion
                </h4>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  Have a new digital project or enterprise software requirement? Contact our team directly.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#1e293b]">
                  <a 
                    href={`mailto:${SITE_INFO.email}`} 
                    className="flex items-center gap-2.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-blue-400" />
                    <span>{SITE_INFO.email}</span>
                  </a>

                  <a 
                    href={SITE_INFO.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-slate-200 transition-colors group"
                  >
                    <Globe className="w-4 h-4 shrink-0 text-slate-500 group-hover:text-slate-300 transition-colors" />
                    <span>{SITE_INFO.domain}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Disclaimers */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <p className="text-center md:text-left">
            © 2026 {SITE_INFO.name}. All rights reserved. Registered in the United Kingdom.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <a href="#/services" className="hover:text-white transition-colors">Services</a>
            <a href="#/about" className="hover:text-white transition-colors">About</a>
            <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">Inquiries</a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Enterprise Standards</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
