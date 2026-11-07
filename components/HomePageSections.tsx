import React from 'react';
import { ArrowRight, ShoppingBag, Briefcase, ExternalLink, User, HelpCircle } from 'lucide-react';
import { CASE_STUDY_APPS, PORTFOLIO_DISCLAIMER } from '../data/portfolioData';
import { SITE_INFO } from '../data/siteData';

const HomePageSections: React.FC = () => {
  return (
    <div className="space-y-0 text-left">
      {/* 1. WHO THIS IS FOR (Section 5) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest mb-3">
              Target Clients
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* For D2C and subscription brands */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0A1A2F] text-white border border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#14B8A6] flex items-center justify-center mb-5 border border-slate-700">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                  E-Commerce & Retail
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">
                  For D2C and subscription brands
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "Your customers already buy from you. An app gives them subscriptions, repeat ordering and new-product alerts in one place — instead of losing the sale to a browser tab."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14B8A6] hover:text-teal-300 transition-colors"
                >
                  <span>Build your customer app</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* For agencies */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white text-slate-900 border-2 border-slate-200 hover:border-[#14B8A6] flex flex-col justify-between shadow-sm transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center mb-5 border border-teal-100">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block mb-2">
                  White-Label Capacity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-display">
                  For agencies
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  "You sell websites, branding or marketing, and your clients keep asking for an app. I build it white-label under your brand — you keep the client relationship and the margin."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488] hover:text-[#0A1A2F] transition-colors"
                >
                  <span>Inquire about agency capacity</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT I DO (Short List from Section 5) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-3">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
              What I Do
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Verified skills: Flutter and Dart, Firebase, REST APIs, payment gateways, admin panels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">01 / Flagship</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Flutter Mobile Apps (Android & iOS)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Android and iOS apps from one clean codebase. Faster delivery, single test suite, consistent UI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">02 / Growth</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                E-Commerce & Subscriptions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Repeat ordering, recurring subscription flows, instant push notifications, and new-product drop alerts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">03 / Web</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Websites (100 in Portfolio)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Websites for e-commerce, food, corporate and healthcare businesses. 100 live links listed in portfolio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">04 / Integration</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                API & Backend Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Payment gateway integration, Firebase authentication and storage, REST APIs, and custom admin dashboards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">05 / Support</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Fixing & Modernising Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bug fixing, performance tuning, Flutter dependency upgrades, and modernising existing codebases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">06 / Intelligence</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                AI-Powered Tooling
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Practical AI tools where they genuinely help business workflows (e.g. WhatsApp CRM tooling).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION (Section 5) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1A2F] text-white border border-slate-800 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Founder Photo Placeholder */}
              <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-2 border-dashed border-[#14B8A6]/70 bg-slate-800/80 p-3 flex flex-col items-center justify-center text-center">
                <User className="w-8 h-8 text-[#14B8A6] mb-1.5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300 leading-tight">
                  [PLACEHOLDER: founder photo]
                </span>
              </div>

              <div className="space-y-3 flex-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14B8A6]">
                  Founder-Led Studio
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Ateeq Lateef
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "Novexa Solutions is run by its founder, Ateeq Lateef — a Flutter developer with 6 years of experience building mobile apps and websites. You talk to the person who builds your app. There is no handover to a team you never meet."
                </p>

                {/* Founder Photo & LinkedIn Link Placeholder */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/ateeq-lateef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-[#14B8A6]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>linkedin.com/in/ateeq-lateef</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-xs text-amber-300 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-md font-mono">
                    [PLACEHOLDER: founder photo + LinkedIn profile link here]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK TEASER (Real items only, with live links) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest mb-3">
                Selected Work Teaser
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                Real Projects. Live Links.
              </h2>
              <p className="text-xs text-slate-500 mt-2 max-w-2xl">
                {PORTFOLIO_DISCLAIMER} (No ratings or downloads shown — none is verified.)
              </p>
            </div>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0A1A2F] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>View Full Portfolio (12 Apps + 100 Sites)</span>
              <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDY_APPS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0D9488]">
                      {item.roleVerified ? 'LEAD DEVELOPER' : 'CLIENT PROJECT'}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.technology}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">{item.type}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.whatIsKnown}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={item.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Google Play Link</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#14B8A6]" />
                  </a>

                  {item.partnerPlayStoreUrl && (
                    <a
                      href={item.partnerPlayStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                    >
                      <span>Partner App (Google Play)</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}

                  {item.websiteUrl && (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW A PROJECT WORKS (Short: 8 steps summary) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-3">
            Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display mb-4">
            How a Project Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            "You see a working demo every week and you own the code and accounts from day one."
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1A2F] text-white border border-slate-800 text-left mb-6 shadow-sm">
            <p className="text-xs sm:text-sm font-mono text-[#14B8A6] leading-relaxed">
              Discovery → Requirements → Proposal → Development → Weekly demos → Testing → Delivery → Maintenance
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488] hover:underline"
          >
            <span>See detailed 8-step delivery process on Services page</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 6. CONTACT STRIP (Section 5) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-bold text-white font-display">
              Email: <a href="mailto:contact@novexasolutions.uk" className="text-[#14B8A6] hover:underline">contact@novexasolutions.uk</a> — I reply within 24 business hours.
            </p>
            <p className="text-xs text-amber-300 font-mono">
              [PLACEHOLDER: WhatsApp line — add only after I confirm the number.]
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 px-6 py-3 bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A1A2F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all font-display"
          >
            Start a project
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePageSections;
