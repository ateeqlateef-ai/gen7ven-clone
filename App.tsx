import React, { Component, useState, useEffect } from 'react';
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
import { Shield, Sparkles, Code2, Globe, Cpu } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[Novexa Solutions] React render error:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
            <p className="text-slate-600 text-sm mb-6">
              We encountered an issue rendering this section. Please click below to return to the home page.
            </p>
            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.hash = '';
                window.location.href = '/';
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  useEffect(() => {
    const handleRoute = () => {
      const hash = (window.location.hash || '').toLowerCase();
      const pathname = (window.location.pathname || '').toLowerCase();

      if (hash.startsWith('#/services') || pathname.startsWith('/services')) {
        setCurrentPage('SERVICES');
      } else if (hash.startsWith('#/about') || pathname.startsWith('/about')) {
        setCurrentPage('ABOUT');
      } else if (hash.startsWith('#/contact') || pathname.startsWith('/contact')) {
        setCurrentPage('CONTACT');
      } else {
        setCurrentPage('HOME');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700 flex flex-col font-sans selection:bg-[#BFDBFE] selection:text-[#0F172A]">
      <Navbar />

      <ErrorBoundary>
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
          <div className="animate-fade-in pt-8">
            <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center py-12 md:py-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Novexa Solutions Capabilities</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Specialized Digital Services Engineered for Impact
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
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
          <div className="animate-fade-in pt-8">
            <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center py-12 md:py-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>About Novexa Solutions</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Architecting Modern Technology Without Compromise
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                Novexa Solutions is an independent digital technology agency based in the United Kingdom. We partner with ambitious enterprises and emerging ventures to engineer resilient software, elevate brand perception, and deploy purposeful artificial intelligence.
              </p>
            </header>

            {/* Philosophy and Ethos Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs transition-all">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-blue-600 flex items-center justify-center mb-6 shadow-2xs">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                    Engineering Integrity
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    We do not rely on fragile quick-fixes or bloated boilerplate. Every system is built on strict type safety, modular separation of concerns, and clean architectural patterns designed for longevity.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs transition-all">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 shadow-2xs">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                    Commercial Pragmatism
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    Technology succeeds only when it drives measurable enterprise outcomes. Whether optimizing conversion paths, cutting cloud operational costs, or automating workflows, business impact is our compass.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs transition-all">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-indigo-600 flex items-center justify-center mb-6 shadow-2xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                    Direct Partnership
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    Our clients work directly with senior software architects and design leads. We maintain transparent sprint backlogs, staging review links, and clear milestone progress without bureaucratic layers.
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
          <div className="animate-fade-in pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <header className="max-w-4xl mx-auto text-center py-10 md:py-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Direct Inquiries</span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Initiate Your Project Scoping
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                Tell us about your digital product requirements. Submissions are reviewed directly by our leadership team and delivered to <span className="text-blue-600 font-semibold">{SITE_INFO.email}</span>.
              </p>
            </header>

            <ContactForm />
          </div>
        )}
        </main>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default App;
