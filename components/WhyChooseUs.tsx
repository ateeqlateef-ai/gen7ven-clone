import React from 'react';
import { ShieldCheck, Target, Cpu, Users, Award, ArrowRight } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  Target: <Target className="w-6 h-6 text-sky-600" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
  Users: <Users className="w-6 h-6 text-emerald-600" />
};

const WhyChooseUs: React.FC = () => {
  return (
    <section 
      id="why-choose-us-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Why Novexa Solutions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Engineering Precision Grounded in Commercial Reality
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We operate as an agile, high-caliber technology partner, blending deep engineering discipline with product strategy to build durable enterprise assets.
          </p>
        </div>

        {/* 4 Core Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:bg-[#F5FAFF]/50 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-xs hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                  {iconMap[prop.iconName]}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors font-display">
                  {prop.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-normal">
                {prop.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Direct Collaboration Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5FAFF] border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Direct Technical Leadership
            </span>
            <h4 className="text-xl font-bold text-slate-900 font-display">
              Zero Hand-Off Friction. Direct Architect Access.
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Collaborate directly with senior software architects and design leads who take total ownership of technical deliverables and milestone sprints.
            </p>
          </div>

          <a
            href="/contact"
            className="shrink-0 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-blue-600/20 uppercase tracking-wider flex items-center gap-2"
          >
            <span>Schedule Scoping Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
