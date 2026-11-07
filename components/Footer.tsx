import React from 'react';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#0A1A2F] text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              id="footer-brand-logo"
              className="inline-flex items-center gap-3 text-white group focus:outline-none"
              aria-label="Novexa Solutions"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center transition-colors shadow-2xs">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Novexa Solutions Logomark"
                >
                  <title>Novexa Solutions Logomark</title>
                  <path d="M10 30V10L22 25V10H28V30L16 15V30H10Z" fill="url(#footerBrandGrad)" />
                  <circle cx="32" cy="11" r="2.5" fill="#14B8A6" />
                  <defs>
                    <linearGradient id="footerBrandGrad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#14B8A6" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-white leading-none font-display">
                  NOVEXA
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#14B8A6] mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              Novexa Solutions is a founder-led Flutter development studio based in Lahore, Pakistan — working with clients in the UK, USA and Europe.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <p>
                <strong className="text-white">Founder:</strong> {SITE_INFO.founder} (6 years mobile & web experience)
              </p>
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:${SITE_INFO.email}`} className="text-[#14B8A6] hover:underline">
                  {SITE_INFO.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Hours:</strong> {SITE_INFO.workingHours}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider font-display">
              Pages
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiry Contact Box */}
          <div className="lg:col-span-4">
            <div className="p-5 bg-slate-800/80 border border-slate-700 rounded-2xl shadow-sm text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[#14B8A6] text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                Direct Developer Contact
              </div>

              <h4 className="text-white font-bold text-sm font-display">
                Have a Flutter app or website project?
              </h4>

              <p className="text-slate-300 text-xs leading-relaxed">
                You talk directly to Ateeq Lateef, the person who builds your app. Replies within 24 business hours.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-700">
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-center gap-2.5 text-xs font-bold text-[#14B8A6] hover:text-teal-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#14B8A6]" />
                  <span>{SITE_INFO.email}</span>
                </a>

                <a
                  href={SITE_INFO.url}
                  className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 shrink-0 text-slate-400" />
                  <span>{SITE_INFO.domain}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright with correct spacing and Privacy link */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p className="text-center md:text-left">
            © 2026 Novexa Solutions. Novexa Solutions is a founder-led Flutter development studio based in Lahore, Pakistan — working with clients in the UK, USA and Europe. Email: <a href="mailto:contact@novexasolutions.uk" className="text-[#14B8A6] hover:underline">contact@novexasolutions.uk</a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>·</span>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>·</span>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <span>·</span>
            <a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <span>·</span>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <span>·</span>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-[#14B8A6] transition-colors font-medium">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
