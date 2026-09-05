import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { TECH_CAPABILITIES } from '../data/siteData';

const TechCapabilitiesSection: React.FC = () => {
  return (
    <section 
      id="tech-capabilities-section"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5FAFF] border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technology Stack</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Built with Industry-Standard Tooling
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We avoid volatile hype, selecting proven, battle-tested technologies that deliver enterprise reliability, low latency, and zero vendor lock-in.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left hover:border-blue-300 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <Terminal className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase font-display">
                  {cap.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cap.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechCapabilitiesSection;
