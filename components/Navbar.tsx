import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const cp = currentPath.toLowerCase();
    // Normalize root paths to index.html for active state detection
    if (path === 'index.html' && (cp === '/' || cp === '/index.html' || cp === '')) return true;
    return cp.endsWith(path.toLowerCase());
  };

  const links = [
    { name: 'Home', href: 'index.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'About Us', href: 'about.html' },
    { name: 'Contact Us', href: 'contact.html' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 py-3 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-[101]">
            <a href="index.html" className="text-2xl md:text-3xl font-black tracking-tighter text-white group flex items-center">
              GEN<span className="text-blue-500 group-hover:rotate-12 transition-transform duration-300">7</span>VEN
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-black transition-all duration-300 tracking-[0.15em] uppercase relative group ${
                  isActive(link.href) 
                    ? 'text-blue-500' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-500 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
            <a 
              href="contact.html" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black rounded-full transition-all shadow-xl shadow-blue-600/20 active:scale-95 hover:scale-105 uppercase tracking-widest"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center relative z-[101]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-blue-500 transition-all p-2 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-[100] transition-all duration-500 flex flex-col items-center justify-center p-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="flex flex-col space-y-10 items-center text-center">
          {links.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-4xl font-black transition-all tracking-tighter ${isActive(link.href) ? 'text-blue-500' : 'text-slate-500 hover:text-white'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="contact.html" 
            className="w-full max-w-xs py-5 bg-blue-600 text-white font-black rounded-2xl text-center text-xl shadow-2xl shadow-blue-600/30 active:scale-95 mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Project
          </a>
        </div>
        
        <div className="absolute bottom-12 flex space-x-10">
            <a href="#" className="text-slate-600 text-2xl hover:text-white transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="text-slate-600 text-2xl hover:text-white transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-slate-600 text-2xl hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;