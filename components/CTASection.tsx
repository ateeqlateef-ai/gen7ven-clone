import React from 'react';
import { ArrowRight, Mail, ShieldCheck, Zap } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const CTASection: React.FC = () => {
  return (
    <section id="cta-section" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Card Container */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#111622] border border-[#1e293b] shadow-2xl relative overflow-hidden text-center md:text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Ready for Execution</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Let's Architect Your Next Digital Breakthrough.
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Whether you require an enterprise web system, an intuitive mobile app, a market-defining brand identity, or custom AI automation — our specialists are ready to collaborate.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Structured Milestone Engagements</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{SITE_INFO.email}</span>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col items-center justify-center gap-3">
              <a
                href="#/contact"
                id="cta-start-project-btn"
                className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="w-full py-3.5 px-6 bg-[#07090e] hover:bg-[#0d1117] border border-[#1e293b] text-slate-300 hover:text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
