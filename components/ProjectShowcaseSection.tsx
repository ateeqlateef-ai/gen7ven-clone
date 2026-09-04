import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
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
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Systems & Case Architectures
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore exemplar production systems architected by Novexa Solutions, demonstrating our technical depth across real-time web platforms, mobile suites, and enterprise AI workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
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
              className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden shadow-xl"
            >
              {/* Background gradient motif */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.featuredImageGradient} opacity-20 blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400">
                    System Architecture
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Architectural Outcomes */}
                <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/60">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Architectural Milestones & Outcomes:
                  </span>
                  {project.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Scope:</span>
                  <span className="text-slate-300 font-medium">{project.servicesProvided.join(' • ')}</span>
                </div>

                <a
                  href="#/contact"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/btn"
                >
                  <span>Inquire on Similar Architecture</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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
