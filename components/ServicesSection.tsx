import React, { useState } from 'react';
import { 
  Layout, 
  Code, 
  Smartphone, 
  Sparkles, 
  TrendingUp, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CORE_SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />
};

interface ServicesSectionProps {
  isFullPage?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isFullPage = false }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(CORE_SERVICES[0]);

  return (
    <section 
      id="services-section"
      className={`relative px-4 sm:px-6 lg:px-8 ${isFullPage ? 'py-16 md:py-24' : 'py-24 md:py-32'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Six Specialized Pillars of Digital Excellence
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Novexa Solutions provides end-to-end technical craftsmanship across modern design, engineering, and artificial intelligence.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CORE_SERVICES.map((service, index) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
                  isSelected 
                    ? 'bg-slate-900/90 border-blue-500/60 shadow-2xl shadow-blue-500/10' 
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                        : 'bg-slate-800/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      {iconMap[service.iconName] || <Code className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-600 group-hover:text-slate-400 uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Commercial Value Badge */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs">
                    <span className="font-semibold text-slate-300 block mb-1">Commercial Impact:</span>
                    <span className="text-slate-400">{service.businessValue}</span>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Core Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`#/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-semibold text-slate-400 hover:text-white inline-flex items-center gap-1 group/link"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Specification Modal / Detail Drawer for Selected Service */}
        <div className="p-6 md:p-10 bg-slate-900/70 border border-slate-800 rounded-3xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800/80 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                  {iconMap[selectedService.iconName]}
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-400">
                    Service Deep Dive
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`#/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-full transition-all shadow-md shadow-blue-600/30 inline-flex items-center gap-2"
                >
                  <span>Request {selectedService.title} Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Comprehensive Description */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Architecture & Scope
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>The Problem We Solve</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {selectedService.problemSolved}
                  </p>
                </div>
              </div>

              {/* Complete Deliverables */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Detailed Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                      <span className="leading-snug">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Tech Alignment */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technology Alignment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
                  <span className="text-xs font-bold text-blue-300 block mb-1">
                    Why Choose Novexa for {selectedService.title}
                  </span>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Direct technical access, transparent sprints, and solutions designed to directly advance your enterprise revenue and operational speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
