import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'performance' | 'ai'>('architecture');

  return (
    <section 
      id="hero-section"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Architectural Grid Accent (Subtle, not noisy) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none -z-10" aria-hidden="true" />

      {/* Controlled Radial Light Source */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[750px] h-[300px] md:h-[420px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111622] border border-[#1e293b] text-xs font-semibold shadow-sm">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide text-slate-200">{SITE_INFO.name}</span>
          <span className="text-slate-600" aria-hidden="true">•</span>
          <span className="text-blue-400 font-medium">Digital Technology Agency</span>
        </div>

        {/* Primary Headline - High Contrast, Safe Line Height to prevent text selection overlap */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] sm:leading-[1.15]">
          Engineering the Next Generation of{' '}
          <span className="text-accent-gradient">Digital Realities</span>
        </h1>

        {/* Subtitle Statement */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          We partner with ambitious enterprises and emerging ventures to engineer resilient web systems, intuitive mobile products, distinctive brand identities, and production-grade AI solutions.
        </p>

        {/* Primary Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#/contact"
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm md:text-base rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25 active:scale-[0.98] group"
          >
            <span>Start a Project Discussion</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#/services"
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-4 bg-[#111622] hover:bg-[#151d2c] border border-[#1e293b] hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-sm md:text-base rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Explore 6 Core Disciplines</span>
          </a>
        </div>

        {/* Architectural Pillars Showcase */}
        <div className="pt-8 max-w-4xl mx-auto text-left">
          <div className="p-5 sm:p-6 bg-[#111622] border border-[#1e293b] rounded-2xl shadow-xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e293b] pb-4 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Novexa Engineering Standards</span>
              </div>
              
              <div className="flex gap-1.5 p-1 bg-[#07090e] rounded-lg border border-[#1e293b]">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('performance')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'performance'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Performance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'ai'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Solutions
                </button>
              </div>
            </div>

            {activeTab === 'architecture' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Strict Type Safety</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">End-to-end TypeScript interfaces with zero runtime ambiguity.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Modular Systems</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Decoupled, API-driven services built for effortless vertical scale.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Production Ready</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Automated CI/CD pipelines, containerization, and logging hooks.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Core Web Vitals</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Sub-second First Contentful Paint and 95+ Google PageSpeed benchmarks.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Edge Caching</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Global CDN edge routing with distributed static asset acceleration.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Bundle Optimization</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Tree-shaken dependencies and code-split chunks for microsecond boot.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Enterprise RAG</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Contextual vector retrieval pipelines anchored directly in your proprietary data.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Model Governance</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Strict prompt guardrails, hallucination filters, and data privacy safeguards.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#07090e] rounded-xl border border-[#1e293b] flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Autonomous Workflows</span>
                    <span className="text-slate-400 text-xs mt-0.5 block leading-relaxed">Task-specific agent execution integrating with external REST and GraphQL APIs.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Agency Trust & Focus Indicators */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#111622]/60 border border-[#1e293b] text-center">
            <span className="block text-2xl font-black text-white font-display">6</span>
            <span className="text-xs text-slate-400 font-medium">Core Disciplines</span>
          </div>
          <div className="p-4 rounded-xl bg-[#111622]/60 border border-[#1e293b] text-center">
            <span className="block text-2xl font-black text-white font-display">&lt;100ms</span>
            <span className="text-xs text-slate-400 font-medium">Latency Objective</span>
          </div>
          <div className="p-4 rounded-xl bg-[#111622]/60 border border-[#1e293b] text-center">
            <span className="block text-2xl font-black text-white font-display">100%</span>
            <span className="text-xs text-slate-400 font-medium">Typed Architecture</span>
          </div>
          <div className="p-4 rounded-xl bg-[#111622]/60 border border-[#1e293b] text-center">
            <span className="block text-2xl font-black text-white font-display">UK</span>
            <span className="text-xs text-slate-400 font-medium">Based Agency</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
