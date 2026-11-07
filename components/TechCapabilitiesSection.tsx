import React from 'react';
import { Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { TECH_CAPABILITIES } from '../data/siteData';

const TechCapabilitiesSection: React.FC = () => {
  return (
    <section 
      id="tech-capabilities-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5FAFF] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Modern Technology Matrix</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Engineered with Modern, Battle-Tested Technologies
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We build exclusively with contemporary, robust languages and cloud platforms that guarantee longevity, sub-second latency, and zero vendor lock-in.
          </p>
        </div>

        {/* 4 Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CAPABILITIES.map((group, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                {group.technologies.map((tech, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechCapabilitiesSection;
