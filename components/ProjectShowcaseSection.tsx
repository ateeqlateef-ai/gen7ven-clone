import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu } from 'lucide-react';
import { PROJECT_SHOWCASES } from '../data/siteData';

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section 
      id="project-showcase-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Featured Case Architectures</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Proven Systems Engineered for Scale
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Examine how Novexa Solutions combines technical architecture, human-centered UI/UX, and performance optimization to solve complex digital challenges.
          </p>
        </div>

        {/* 4 Showcase Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECT_SHOWCASES.map((project) => (
            <article 
              key={project.id}
              className="group p-8 sm:p-10 rounded-3xl bg-[#F5FAFF]/60 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between text-left hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Visual Header Representation */}
                <div className={`h-40 rounded-2xl bg-gradient-to-br ${project.featuredImageGradient} mb-8 p-6 flex flex-col justify-between border border-white/40 shadow-inner relative overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 uppercase tracking-wider shadow-xs">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-blue-600 shadow-xs">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight font-display">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.servicesProvided.map((service, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold">
                      {service}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Architectural Outcomes */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Verified Outcomes
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {project.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider"
                >
                  <span>Inquire Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
