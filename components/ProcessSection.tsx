import React, { useState } from 'react';
import { GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section 
      id="process-section"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Delivery Methodology</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            From Initial Discovery to Scalable Growth
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Our 6-stage delivery framework ensures transparent execution, strict milestone control, and zero surprises from kickoff to deployment.
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
                className={`p-7 rounded-3xl cursor-pointer transition-all duration-300 border text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900/90 border-blue-500/70 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black ${isActive ? 'text-blue-400' : 'text-slate-600'}`}>
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400">
                      Phase {idx + 1} of 6
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {step.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-400 leading-normal">
                  {step.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* Linear Stepper Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Predictable Sprints • Weekly Staging Demos • Transparent Code Access
            </span>
          </div>

          <a
            href="#/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Discuss your project roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
