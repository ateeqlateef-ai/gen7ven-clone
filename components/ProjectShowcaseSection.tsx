import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECT_SHOWCASES } from '../data/siteData';

const ProjectShowcaseSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web Engineering', 'Mobile App', 'AI Solutions', 'Brand & Headless'];

  const filteredProjects = PROJECT_SHOWCASES.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Web Engineering') return p.servicesProvided.includes('Web Development');
    if (filter === 'Mobile App') return p.servicesProvided.includes('Mobile App Development');
    if (filter === 'AI Solutions') return p.servicesProvided.includes('AI Solutions');
    if (filter === 'Brand & Headless') return p.servicesProvided.includes('Brand Identity');
    return true;
  });

  return (
    <section 
      id="portfolio-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
              Featured Systems & Case Architectures
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Explore exemplar production architectures designed by Novexa Solutions across real-time web platforms, cross-platform mobile apps, and enterprise AI pipelines.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden shadow-2xs"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-sky-50 border border-sky-100 text-sky-700">
                    Architecture
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors font-display">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Architectural Outcomes */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#F5FAFF] border border-sky-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Architectural Milestones & Outcomes:
                  </span>
                  {project.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.servicesProvided.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-medium text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href={`/contact?service=${encodeURIComponent(project.servicesProvided[0] || 'Web Development')}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group/cta"
                >
                  <span>Inquire Similar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
