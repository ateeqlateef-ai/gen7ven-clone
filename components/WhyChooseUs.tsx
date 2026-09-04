import React from 'react';
import { ShieldCheck, Target, Cpu, Users, Layers, Award } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
  Target: <Target className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
  Users: <Users className="w-6 h-6 text-emerald-400" />
};

const WhyChooseUs: React.FC = () => {
  return (
    <section 
      id="why-choose-us-section"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-900/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Why Novexa Solutions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Engineering Precision Grounded in Commercial Reality
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            We operate as a high-caliber technology partner, blending deep engineering discipline with product strategy to deliver durable digital assets.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {iconMap[prop.iconName]}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-400 leading-normal">
                {prop.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Direct Technical Leadership
            </span>
            <h4 className="text-xl font-black text-white">
              Zero Middlemen. Zero Hand-Off Friction.
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              You collaborate directly with senior product architects, design leads, and full-stack software engineers who take total ownership of technical milestones.
            </p>
          </div>

          <a
            href="#/contact"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-full transition-all shadow-lg shadow-blue-600/20 uppercase tracking-wider"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
