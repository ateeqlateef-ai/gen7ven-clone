import React, { useState } from 'react';
import { GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section 
      id="process-section"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Delivery Methodology</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            From Initial Discovery to Scalable Growth
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Our 6-stage delivery framework guarantees transparent progress, strict milestone control, and zero unexpected surprises from kickoff to deployment.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 border text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#151d2c] border-blue-500 shadow-xl shadow-black/30'
                    : 'bg-[#111622] border-[#1e293b] hover:border-slate-700 hover:bg-[#131926]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black font-mono ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#07090e] border border-[#1e293b] text-slate-400">
                      Phase {idx + 1} of 6
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight font-display">
                    {step.name}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e293b] text-xs text-slate-400 leading-relaxed">
                  {step.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sprint Assurance Bar */}
        <div className="p-6 rounded-2xl bg-[#111622] border border-[#1e293b] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Bi-Weekly Sprints • Regular Staging Reviews • Direct Code Ownership
            </span>
          </div>

          <a
            href="#/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
          >
            <span>Plan Your Project Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
