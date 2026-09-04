import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Navbar: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleHash = () => {
      setCurrentHash(window.location.hash || '#/');
      setIsMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
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

  const links = [
    { name: 'Home', href: '#/' },
    { name: 'Services', href: '#/services' },
    { name: 'About', href: '#/about' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav 
      id="main-navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/40' 
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5 md:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-[101]">
            <a 
              href="#/" 
              id="navbar-brand-logo"
              className="flex items-center gap-3 text-white group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl px-1 py-0.5"
              aria-label="Novexa Solutions Home"
            >
              {/* Emblem Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 text-lg tracking-tighter">
                    N
                  </span>
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400 blur-[1px]"></div>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  NOVEXA<span className="text-blue-500">.</span>
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-slate-400 -mt-1">
                  SOLUTIONS
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-xs font-bold transition-all duration-200 tracking-[0.12em] uppercase relative py-2 ${
                  isActive(link.href) 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                    isActive(link.href) ? 'w-full opacity-100' : 'w-0 opacity-0 hover:w-full'
                  }`}
                />
              </a>
            ))}
            
            <a 
              href="#/contact" 
              id="navbar-cta-button"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95 uppercase tracking-widest"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center relative z-[101]">
            <button 
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white transition-colors p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        id="mobile-navigation-drawer"
        className={`md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-[100] transition-all duration-300 flex flex-col justify-between p-8 pt-28 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 items-start text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">
            Navigation Menu
          </p>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-3xl font-black transition-colors tracking-tight ${
                isActive(link.href) 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300' 
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="w-full pt-4 border-t border-slate-800/80">
            <a 
              href="#/contact" 
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-center text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-slate-500 text-xs space-y-2">
          <p className="text-slate-400 font-medium">{SITE_INFO.email}</p>
          <p>{SITE_INFO.headquarters} • {SITE_INFO.domain}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
