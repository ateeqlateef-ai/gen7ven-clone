import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Navbar: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    const handleHash = () => {
      setCurrentHash(window.location.hash || '#/');
      setIsMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHash);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const isActive = (path: string) => {
    const h = currentHash.toLowerCase();
    if (path === '#/' && (h === '' || h === '#/' || h === '#')) return true;
    return h.startsWith(path.toLowerCase());
  };

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Services', href: '#/services' },
    { name: 'About', href: '#/about' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <header 
      id="main-navigation"
      aria-label="Site Header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/92 backdrop-blur-md border-b border-[#1e293b] py-3.5 shadow-xl shadow-black/40' 
          : 'bg-[#07090e]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
          
          {/* Brand Logo Presentation */}
          <div className="flex-shrink-0">
            <a 
              href="#/" 
              id="navbar-brand-logo"
              className="flex items-center gap-3 text-white group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
              aria-label="Novexa Solutions Homepage"
            >
              {/* Minimalist Architectural Symbol */}
              <div className="w-10 h-10 rounded-xl bg-[#111622] border border-[#1e293b] group-hover:border-blue-500/60 flex items-center justify-center transition-colors shadow-sm">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#brandGrad)" />
                  <circle cx="32" cy="11" r="2.5" fill="#0ea5e9" />
                  <defs>
                    <linearGradient id="brandGrad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="0.6" stopColor="#2563eb" />
                      <stop offset="1" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Precise Agency Wordmark */}
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-white group-hover:text-slate-100 transition-colors leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-400 mt-0.5">
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
                      ? 'text-white bg-[#111622] border border-[#1e293b]' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
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
              href="#/contact" 
              id="navbar-cta-button"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] tracking-wider uppercase"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2.5 rounded-xl bg-[#111622] border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#07090e]/98 backdrop-blur-2xl border-b border-[#1e293b] px-5 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fade-in"
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
                    ? 'bg-[#111622] text-white border border-[#1e293b]' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-3">
            <a
              href="#/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md"
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
