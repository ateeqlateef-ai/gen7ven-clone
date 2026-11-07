import React from 'react';
import { ShieldCheck, Cpu, Code2, Users, Layers, Award, ArrowRight } from 'lucide-react';

const ClientTrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Technical Precision',
      subtitle: 'Engineered for Stability & Performance',
      description: 'We adhere to uncompromising standards in clean, typed architectures. Every line of code is structured to be performant, accessible, and maintainable as your digital footprint scales.',
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      features: ['100% Typed Safety (TypeScript)', 'Strict Accessibility Standards (WCAG)', 'Zero Bloat Architecture', 'Continuous CI/CD Automated Benchmarking']
    },
    {
      title: 'Professional Execution',
      subtitle: 'Commercial Focus & Measurable Value',
      description: 'Businesses need websites that are fast, responsive, secure, and easy to use. We build modern web experiences designed to perform across devices and support long-term growth.',
      icon: <Cpu className="w-6 h-6 text-sky-600" />,
      features: ['Measurable Commercial ROI', 'Sub-Second First Contentful Paint', 'Conversion-Optimized User Flows', 'Enterprise Risk & Security Auditing']
    },
    {
      title: 'Transparent Collaboration',
      subtitle: 'Direct Technical Access & Milestones',
      description: 'No middle layers or bureaucratic delays. You collaborate directly with senior technical architects and product designers with live sprint demos, regular check-ins, and clear delivery roadmaps.',
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      features: ['Direct Senior Architect Access', 'Bi-Weekly Sprint Progress Reviews', 'Total Code & Asset Ownership', 'Comprehensive NDA & Data Security']
    }
  ];

  return (
    <section 
      id="client-trust-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Built on Trust & Precision</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Why High-Growth Companies Choose Novexa Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We operate with the discipline of an elite software laboratory and the agility of a focused studio, ensuring your digital investment delivers lasting competitive advantage.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[#F5FAFF]/60 border border-slate-200/90 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 shadow-2xs hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-2xs">
                  {pillar.icon}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {pillar.subtitle}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70">
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Capability & Governance Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 text-left shadow-lg">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Governance & Integrity
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Enterprise Rigor. Agile Pace. Zero Compromise.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every project is governed by strict version control, milestone transparency, and automated performance checkpoints.
            </p>
          </div>

          <a 
            href="/contact" 
            className="shrink-0 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-blue-600/30 flex items-center gap-2"
          >
            <span>Initiate Scoping Session</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ClientTrustSection;
