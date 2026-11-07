import React, { Component, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HomePageSections from './components/HomePageSections';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ContactForm from './components/ContactForm';
import PrivacyPage from './components/PrivacyPage';
import { PageType } from './types';
import { getPageFromPath, navigate } from './utils/navigation';
import { updatePageSEO } from './utils/seo';

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
    console.error('[Novexa Solutions] Render error:', error, errorInfo);
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
                window.location.href = '/';
              }}
              className="px-6 py-2.5 bg-[#14B8A6] text-[#0A1A2F] font-bold text-xs rounded-xl transition-all shadow-sm"
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
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash || '';
      if (hash.startsWith('#/')) {
        return getPageFromPath(hash.replace(/^#/, ''));
      }
      return getPageFromPath(window.location.pathname);
    }
    return 'HOME';
  });

  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash || '';
      if (hash.startsWith('#/')) {
        const cleanPath = hash.replace(/^#/, '');
        window.history.replaceState({}, '', cleanPath);
      }

      const pathname = window.location.pathname || '/';
      setCurrentPage(getPageFromPath(pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);

    // Global click interceptor for clean internal paths
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
        return;
      }
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('/api/') ||
        href.startsWith('//')
      ) {
        return;
      }

      if (href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Sync SEO metadata (title, meta descriptions, OpenGraph, Canonical) on route change
  useEffect(() => {
    updatePageSEO(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white text-slate-700 flex flex-col font-sans selection:bg-[#14B8A6]/20 selection:text-[#0A1A2F]">
      <Navbar />

      <ErrorBoundary>
        <main className="flex-grow pt-16">
          {/* 1. HOMEPAGE */}
          {currentPage === 'HOME' && (
            <div className="animate-fade-in">
              <Hero />
              <HomePageSections />
            </div>
          )}

          {/* 2. SERVICES PAGE */}
          {currentPage === 'SERVICES' && (
            <div className="animate-fade-in">
              <ServicesSection />
            </div>
          )}

          {/* 3. PRICING PAGE */}
          {currentPage === 'PRICING' && (
            <div className="animate-fade-in">
              <PricingSection />
            </div>
          )}

          {/* 4. PORTFOLIO PAGE (New) */}
          {currentPage === 'PORTFOLIO' && (
            <div className="animate-fade-in">
              <PortfolioPage />
            </div>
          )}

          {/* 5. ABOUT PAGE */}
          {currentPage === 'ABOUT' && (
            <div className="animate-fade-in">
              <AboutPage />
            </div>
          )}

          {/* 6. CONTACT PAGE */}
          {currentPage === 'CONTACT' && (
            <div className="animate-fade-in py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <ContactForm />
            </div>
          )}

          {/* 7. PRIVACY PAGE (New) */}
          {currentPage === 'PRIVACY' && (
            <div className="animate-fade-in">
              <PrivacyPage />
            </div>
          )}
        </main>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default App;
