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
  X,
  ChevronRight,
  Zap,
  Check
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
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section 
      id="services-section"
      className={`relative px-4 sm:px-6 lg:px-8 bg-[#F5FAFF] border-y border-slate-200/80 ${
        isFullPage ? 'py-12 md:py-20' : 'py-20 md:py-28'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
            Six Specialized Pillars of Digital Excellence
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Novexa Solutions provides disciplined, full-cycle technical execution across modern UI/UX design, scalable software engineering, and applied artificial intelligence.
          </p>
        </div>

        {/* 6 Services Grid - Responsive 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_SERVICES.map((service, index) => {
            return (
              <article
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0EA5E9] hover:bg-gradient-to-b hover:from-white hover:to-sky-50/40 transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                onClick={() => setActiveModalService(service)}
              >
                <div>
                  {/* Top Bar: Icon Container + Number Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-blue-600 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center transition-all duration-300 shadow-2xs">
                      {iconMap[service.iconName] || <Code className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Commercial Impact Box */}
                  <div className="mb-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <span className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      <span>Commercial Value</span>
                    </span>
                    <span className="text-slate-600 leading-normal block">
                      {service.businessValue}
                    </span>
                  </div>

                  {/* Key Deliverables Preview */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
                    <span>Full Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>

                  <a
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors group/cta"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Detailed Modal Specifications Drawer (Clean Light Dialog) */}
        {activeModalService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
          >
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close service specification details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  {iconMap[activeModalService.iconName]}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                    Novexa Discipline Specification
                  </span>
                  <h3 id="modal-service-title" className="text-2xl font-bold text-slate-900 font-display">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 mb-6 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-1">Problem Solved:</span>
                <span className="text-slate-600 leading-relaxed">{activeModalService.problemSolved}</span>
              </div>

              {/* All Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Scope of Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 text-xs text-slate-700 border border-slate-200/70">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Tooling & Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`/contact?service=${encodeURIComponent(activeModalService.title)}`}
                  onClick={() => setActiveModalService(null)}
                  className="flex-1 py-3.5 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Scope This Project With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="py-3.5 px-5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;
