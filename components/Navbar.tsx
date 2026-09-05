import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? (window.location.pathname || '/') : '/'
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    const handleLocation = () => {
      setCurrentPath(window.location.pathname || '/');
      setIsMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const isActive = (path: string) => {
    const p = currentPath.toLowerCase().replace(/\/+$/, '') || '/';
    if (path === '/') return p === '/';
    return p.startsWith(path.toLowerCase());
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      id="main-navigation"
      aria-label="Site Header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
          
          {/* Brand Logo Presentation (Clean Light Theme) */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              id="navbar-brand-logo"
              className="flex items-center gap-3 text-slate-900 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
              aria-label="Novexa Solutions Homepage"
            >
              {/* Minimalist Architectural Symbol on Light Canvas */}
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 group-hover:border-blue-300 flex items-center justify-center transition-colors shadow-xs">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#brandGradLight)" />
                  <circle cx="32" cy="11" r="2.5" fill="#0ea5e9" />
                  <defs>
                    <linearGradient id="brandGradLight" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0ea5e9" />
                      <stop offset="0.6" stopColor="#2563eb" />
                      <stop offset="1" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Precise Agency Wordmark */}
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600 mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Desktop Menu">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                    active 
                      ? 'text-blue-600 bg-sky-50 border border-sky-100 shadow-xs' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/contact" 
              id="navbar-cta-button"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] tracking-wider uppercase"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 mt-3 space-y-2 shadow-lg animate-fade-in"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                  active 
                    ? 'bg-sky-50 text-blue-600 border border-sky-100 font-bold' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-3">
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
