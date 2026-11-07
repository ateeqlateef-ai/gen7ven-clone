import React from 'react';
import { ArrowRight, Check, Sparkles, Smartphone, Code2, RefreshCw, Layers, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 bg-[#0A1A2F] text-white overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none -z-10" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[300px] bg-[#14B8A6]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-7 relative z-10">
        {/* Founder & Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#14B8A6]" aria-hidden="true"></span>
          <span className="text-white font-semibold">Founder-Led Flutter Studio</span>
          <span className="text-slate-500" aria-hidden="true">•</span>
          <span className="text-[#14B8A6]">Based in Lahore, Pakistan</span>
        </div>

        {/* Hero Headline from Section 5 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.18] font-display max-w-4xl mx-auto">
          Flutter apps for brands and agencies that need them shipped.
        </h1>

        {/* Hero Founder Pitch from Section 5 */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          I'm Ateeq Lateef, a Flutter developer based in Lahore, Pakistan. I build Android and iOS apps from a single Flutter codebase — for D2C and subscription brands that want repeat orders in their customers' pockets, and for agencies that need mobile development capacity without hiring.
        </p>

        {/* Action Buttons: Start a project (→ Contact) · See selected work (→ Portfolio) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="/contact"
            id="hero-start-project-btn"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#14B8A6] hover:bg-[#0D9488] active:bg-[#0F766E] text-[#0A1A2F] font-bold text-sm md:text-base rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:shadow-teal-500/20 active:scale-[0.98] font-display"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/portfolio"
            id="hero-see-work-btn"
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 text-white font-semibold text-sm md:text-base rounded-xl transition-all shadow-xs active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>See selected work</span>
            <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
          </a>
        </div>

        {/* Verified Count Metrics (Only real counted figures: 12 Android apps with live Play Store links, 100 websites listed) */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-black text-white font-display">12</span>
            <span className="text-xs text-slate-300 font-medium">Android Apps on Google Play</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-black text-[#14B8A6] font-display">100</span>
            <span className="text-xs text-slate-300 font-medium">Websites in Portfolio</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-black text-white font-display">6 Years</span>
            <span className="text-xs text-slate-300 font-medium">Mobile & Web Experience</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-black text-[#14B8A6] font-display">1</span>
            <span className="text-xs text-slate-300 font-medium">Flutter Codebase (iOS + Android)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
