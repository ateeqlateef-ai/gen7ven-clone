import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import ProjectShowcaseSection from './components/ProjectShowcaseSection';
import TechCapabilitiesSection from './components/TechCapabilitiesSection';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import { SITE_INFO } from './data/siteData';
import { PageType } from './types';
import { Shield, Sparkles, Code2, Globe, Cpu, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/services')) {
        setCurrentPage('SERVICES');
      } else if (hash.startsWith('#/about')) {
        setCurrentPage('ABOUT');
      } else if (hash.startsWith('#/contact')) {
        setCurrentPage('CONTACT');
      } else {
        setCurrentPage('HOME');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-16">
        {currentPage === 'HOME' && (
          <div className="animate-fade-in">
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <ProcessSection />
            <ProjectShowcaseSection />
            <TechCapabilitiesSection />
            <CTASection />
          </div>
        )}

        {currentPage === 'SERVICES' && (
          <div className="animate-fade-in pt-12">
            <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center py-12 md:py-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Novexa Solutions Capabilities</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Specialized Digital Services Engineered for Impact
              </h1>
              <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                Explore our six core disciplines. From high-fidelity UI/UX design and scalable web infrastructure to native mobile apps, brand identities, technical SEO, and custom AI solutions.
              </p>
            </header>

            <ServicesSection isFullPage={true} />
            <ProcessSection />
            <TechCapabilitiesSection />
            <CTASection />
          </div>
        )}

        {currentPage === 'ABOUT' && (
          <div className="animate-fade-in pt-12">
            <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center py-12 md:py-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>About Novexa Solutions</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Architecting Modern Technology Without Compromise
              </h1>
              <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                Novexa Solutions is an independent digital technology agency based in the United Kingdom. We partner with ambitious enterprises and emerging ventures to engineer resilient software, elevate brand perception, and deploy purposeful artificial intelligence.
              </p>
            </header>

            {/* Philosophy and Ethos Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    Engineering Integrity
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We do not rely on fragile quick-fixes or bloated boilerplate. Every system is built on strict type safety, modular separation of concerns, and clean architectural patterns designed for longevity.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    Commercial Pragmatism
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Technology succeeds only when it drives measurable enterprise outcomes. Whether optimizing conversion paths, cutting AWS operational bills, or automating manual workflows, business impact is our north star.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    Direct Partnership
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our clients work directly with senior software architects and design leads. We maintain transparent sprint backlogs, staging review links, and clear milestone progress.
                  </p>
                </div>
              </div>
            </section>

            <WhyChooseUs />
            <ProjectShowcaseSection />
            <TechCapabilitiesSection />
            <CTASection />
          </div>
        )}

        {currentPage === 'CONTACT' && (
          <div className="animate-fade-in pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <header className="max-w-4xl mx-auto text-center py-10 md:py-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Direct Inquiries</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Initiate Your Project Scoping
              </h1>
              <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                Tell us about your digital product requirements. Submissions are reviewed directly by our leadership team and delivered to <span className="text-blue-400 font-semibold">{SITE_INFO.email}</span>.
              </p>
            </header>

            <ContactForm />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
