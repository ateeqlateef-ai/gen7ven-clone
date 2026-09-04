import React from 'react';
import { Mail, Globe, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { SITE_INFO, CORE_SERVICES } from '../data/siteData';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-900/80 pt-20 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#/" 
              id="footer-brand-logo"
              className="inline-flex items-center gap-3 text-white group focus:outline-none"
              aria-label="Novexa Solutions"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg">
                    N
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black tracking-tight text-white">
                  NOVEXA<span className="text-blue-500">.</span>
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-slate-400 -mt-1">
                  SOLUTIONS
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Novexa Solutions is an international digital technology agency. We architect high-performance web systems, intuitive mobile products, distinctive brand identities, and production-ready AI workflows.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>UK-Registered Digital Technology Agency</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Direct Technical Leadership & Full-Cycle Execution</span>
              </div>
            </div>
          </div>

          {/* 6 Core Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black mb-6 uppercase text-[11px] tracking-[0.2em] text-left">
              Core Services
            </h3>
            <ul className="space-y-3 text-sm text-left">
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

          {/* Company & Agency Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-6 uppercase text-[11px] tracking-[0.2em] text-left">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-left">
              <li>
                <a href="#/" className="text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#/services" className="text-slate-400 hover:text-white transition-colors">Our Solutions</a>
              </li>
              <li>
                <a href="#/about" className="text-slate-400 hover:text-white transition-colors">About Novexa</a>
              </li>
              <li>
                <a href="#/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact / Inquiries Box */}
          <div className="lg:col-span-3">
            <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  Official Contact
                </div>
                
                <h4 className="text-white font-bold text-sm">
                  Start a Project Discussion
                </h4>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  Have a new digital project or enterprise system requirement? Reach our engineering team directly.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <a 
                    href={`mailto:${SITE_INFO.email}`} 
                    className="flex items-center gap-2.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
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
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <p className="text-center md:text-left">
            © 2026 {SITE_INFO.name}. All rights reserved. Registered in the United Kingdom.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <a href="#/services" className="hover:text-white transition-colors">Services</a>
            <a href="#/about" className="hover:text-white transition-colors">Philosophy</a>
            <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">Inquiries</a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enterprise Standards</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
