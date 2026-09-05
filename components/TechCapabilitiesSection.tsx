import React from 'react';
import { Terminal } from 'lucide-react';
import { TECH_CAPABILITIES } from '../data/siteData';

const TechCapabilitiesSection: React.FC = () => {
  return (
    <section 
      id="technologies-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-[#1e293b] relative"
    >
      <div className="max-w-7xl mx-auto text-left">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technology Ecosystem</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display">
              Modern Tooling for Resilient Software
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
            We build with production-hardened frameworks and maintain strict architectural discipline across every layer of the technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CAPABILITIES.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111622] border border-[#1e293b] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#07090e] border border-[#1e293b] text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 border-t border-[#1e293b] pt-6">
          <span>Production Stack Assurance: Clean typing, zero critical vulnerabilities, automated CI testing.</span>
          <span className="font-mono text-blue-400">novexasolutions.uk/specs</span>
        </div>

      </div>
    </section>
  );
};

export default TechCapabilitiesSection;
