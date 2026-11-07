import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
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

  // Exact navigation order requested: Home · Services · Pricing · Portfolio · About · Contact
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      id="main-navigation"
      aria-label="Site Header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1A2F]/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-md'
          : 'bg-[#0A1A2F] border-b border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
          {/* Brand Logo Presentation */}
          <div className="flex-shrink-0">
            <a
              href="/"
              id="navbar-brand-logo"
              className="flex items-center gap-3 text-white group focus:outline-none focus:ring-2 focus:ring-[#14B8A6] rounded-xl p-1"
              aria-label="Novexa Solutions Homepage"
            >
              {/* Monogram Symbol in Navy/Teal */}
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-[#14B8A6] flex items-center justify-center transition-colors shadow-xs">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Novexa Solutions Logomark"
                >
                  <title>Novexa Solutions Logomark</title>
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#navBrandGrad)" />
                  <circle cx="32" cy="11" r="2.5" fill="#14B8A6" />
                  <defs>
                    <linearGradient id="navBrandGrad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#14B8A6" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Founder Studio Wordmark */}
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-white leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#14B8A6] mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Home · Services · Pricing · Portfolio · About · Contact) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Desktop Menu">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                    active
                      ? 'text-[#14B8A6] bg-slate-800/80 border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0D9488] active:bg-[#0F766E] text-[#0A1A2F] text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-teal-500/20 active:scale-[0.98] tracking-wider uppercase font-display"
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
              className="text-slate-200 hover:text-white p-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#14B8A6]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0A1A2F] border-b border-slate-800 px-5 pt-4 pb-6 mt-3 space-y-2 shadow-xl animate-fade-in"
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
                    ? 'bg-slate-800 text-[#14B8A6] border border-slate-700 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A1A2F] text-xs font-bold uppercase tracking-wider shadow-sm font-display"
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
