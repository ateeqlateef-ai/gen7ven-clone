import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Code2, Cpu, Shield, Zap } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'delivery' | 'ai'>('architecture');

  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 blur-[140px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold backdrop-blur-md shadow-xl animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide text-slate-200">{SITE_INFO.name}</span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-400 font-medium">Digital Technology Agency</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
          Engineering the <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
            Next Generation
          </span>{' '}
          of Digital Realities
        </h1>

        {/* Subtitle Statement */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          We architect mission-critical web applications, high-performance mobile products, bespoke brand systems, and intelligent AI workflows for forward-looking businesses.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#/contact"
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm md:text-base rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95 group"
          >
            <span>Start a Project Discussion</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#/services"
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-sm md:text-base rounded-full transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore 6 Core Services</span>
          </a>
        </div>

        {/* Interactive Technical Capabilities Showcase Bar */}
        <div className="pt-10 max-w-4xl mx-auto text-left">
          <div className="p-4 sm:p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl md:rounded-3xl backdrop-blur-md shadow-2xl shadow-black/40">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Novexa Engineering Standards</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('delivery')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'delivery'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  Performance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'ai'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  AI Solutions
                </button>
              </div>
            </div>

            {activeTab === 'architecture' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Strict Type Safety</span>
                    <span className="text-slate-400 text-[11px]">End-to-end TypeScript interfaces with zero runtime ambiguity.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Decoupled Systems</span>
                    <span className="text-slate-400 text-[11px]">Modular, API-driven services built for effortless vertical scale.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Production Readiness</span>
                    <span className="text-slate-400 text-[11px]">Automated CI/CD pipelines, containerization, and logging hooks.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Sub-Second Load Times</span>
                    <span className="text-slate-400 text-[11px]">Optimized Core Web Vitals, tree-shaken bundles, and edge caching.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">100% Responsive Design</span>
                    <span className="text-slate-400 text-[11px]">Pixel-perfect ergonomics across mobile, tablet, and widescreen.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Security & Compliance</span>
                    <span className="text-slate-400 text-[11px]">OWASP-aligned data encryption, sanitization, and session safety.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Enterprise LLM Integration</span>
                    <span className="text-slate-400 text-[11px]">Custom prompt orchestration, RAG pipelines, and model evaluation.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Intelligent Automation</span>
                    <span className="text-slate-400 text-[11px]">Replacing repetitive manual operations with intelligent pipelines.</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-3">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Secure AI Governance</span>
                    <span className="text-slate-400 text-[11px]">Data privacy sandboxing, zero training leakage, and verified citations.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
