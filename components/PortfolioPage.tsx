import React from 'react';
import { ExternalLink, ArrowRight, Shield, Smartphone, Globe, Check, AlertCircle } from 'lucide-react';
import {
  CASE_STUDY_APPS,
  REMAINING_APPS,
  WEBSITE_PORTFOLIO_CATEGORIES,
  PORTFOLIO_DISCLAIMER
} from '../data/portfolioData';
import { SITE_INFO } from '../data/siteData';

const PortfolioPage: React.FC = () => {
  return (
    <div className="text-left space-y-0">
      {/* 1. INTRO & DISCLAIMER (Section 6) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest">
            Proof of Work
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Selected Work — Real Projects with Live Links
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            "Selected work — real projects with live links, built by the founder."
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-slate-800">Portfolio Disclaimer:</strong> "{PORTFOLIO_DISCLAIMER}"
          </div>
        </div>
      </section>

      {/* 2, 3, 4. THREE CASE STUDIES (Tejarah World Marketplace, Ranchers Cafe, Khidmah360) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* CASE STUDY 1 — Tejarah World Marketplace */}
          <article id="case-study-tejarah" className="p-7 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase inline-block mb-2">
                  Role Verified: LEAD DEVELOPER
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  Tejarah World Marketplace
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  E-commerce marketplace app (Android)
                </p>
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://play.google.com/store/apps/details?id=zarin.tejarahworld.com.user"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-[#14B8A6]" />
                  <span>Google Play App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://tejarahworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <Globe className="w-4 h-4 text-slate-600" />
                  <span>Companion Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What is known
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  A marketplace app lets buyers browse, order and pay across multiple sellers in one place.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What I did
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Lead developer (this is the ONE project where my role is verified).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Technology
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  Flutter (Android). Per-project stack beyond Flutter is unconfirmed.
                </p>
              </div>
            </div>

            {/* Note on Outcome: OMITTED per section 9 rules */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-mono space-y-1">
              <p className="font-bold">[Outcome section: OMITTED — no unverified metrics]</p>
              <p>[PLACEHOLDER: 3–5 phone screenshots of the live app; App Store link if an iOS version exists; any real rating/downloads/client quote — only if verified]</p>
            </div>
          </article>

          {/* CASE STUDY 2 — Ranchers Cafe */}
          <article id="case-study-ranchers" className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase inline-block mb-2">
                  Client Project
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  Ranchers Cafe
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Food ordering app and website
                </p>
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ranchers.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-[#14B8A6]" />
                  <span>Google Play App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://rancherscafe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <Globe className="w-4 h-4 text-slate-600" />
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What is known
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Food ordering app and companion website for restaurant ordering, food delivery, and digital menu browsing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What I did
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Client project I worked on. (Not lead developer — role is unstated in records.)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Technology
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  Flutter. Per-project stack beyond Flutter is unconfirmed.
                </p>
              </div>
            </div>

            {/* Note on Outcome: OMITTED */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-mono space-y-1">
              <p className="font-bold">[Outcome section: OMITTED — no unverified metrics]</p>
              <p>[PLACEHOLDER: my actual role on this project (app, website, both, or part of a team); 3–5 app screenshots; 2–3 website screenshots; App Store link if it exists]</p>
            </div>
          </article>

          {/* CASE STUDY 3 — Khidmah360 */}
          <article id="case-study-khidmah360" className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase inline-block mb-2">
                  Client Project · 2 Apps System
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  Khidmah360
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  On-demand home services app — TWO Android apps, one system (Customer + Partner)
                </p>
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://play.google.com/store/apps/details?id=khidmah360user.zarin.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-[#14B8A6]" />
                  <span>Customer App (Play Store)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=khidmah360partner.zarin.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-slate-600" />
                  <span>Partner App (Play Store)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What is known
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Dual-application ecosystem for booking on-demand home services (customer app) and technician job dispatch (partner app).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What I did
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Client project I worked on across the customer and partner systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Technology
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  Flutter. Per-project stack beyond Flutter is unconfirmed.
                </p>
              </div>
            </div>

            {/* Note on Outcome: OMITTED */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-mono space-y-1">
              <p className="font-bold">[Outcome section: OMITTED — no unverified metrics]</p>
              <p>[PLACEHOLDER: website URL if one exists; my actual role (customer app, partner app, both, or part of a team); features built in each app; 3–5 screenshots per app; App Store links if they exist]</p>
            </div>
          </article>
        </div>
      </section>

      {/* 5. MORE WORK — REMAINING APPS (Link list only, no descriptions) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase mb-2">
              More Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Remaining Mobile Apps on Google Play (Link List Only)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Direct live Google Play store links. No unverified descriptions or metrics added.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REMAINING_APPS.map((app, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 font-display">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">{app.type}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Google Play</span>
                    <ExternalLink className="w-3 h-3 text-[#14B8A6]" />
                  </a>

                  {app.websiteUrl && (
                    <a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#14B8A6] text-slate-700 text-xs font-semibold transition-colors"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic">
            Substitutes note: Friday Charm (perfume e-commerce app + website fridaycharm.com) and P448 (fashion e-commerce website p448.com).
          </p>
        </div>
      </section>

      {/* WEBSITE PORTFOLIO — 100 WEBSITES WITH LIVE LINKS */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest mb-3">
              Web Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display">
              100 Websites Listed
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl">
              Categorized directory of 100 client websites with real, clickable links. (Name + link only — no invented descriptions.)
            </p>
          </div>

          <div className="space-y-8">
            {WEBSITE_PORTFOLIO_CATEGORIES.map((cat, cIdx) => (
              <div key={cIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {cat.items.length} sites
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((site, sIdx) => (
                    <a
                      key={sIdx}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-800 hover:text-teal-900 text-xs font-medium transition-colors"
                    >
                      <span>{site.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT I CAN BUILD FOR YOU (Short) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            What I Can Build for You
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Flutter e-commerce, subscription, food delivery, on-demand and business apps — the categories these case studies demonstrate.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A1A2F] font-bold text-xs uppercase tracking-wider transition-all font-display"
            >
              <span>Discuss Your App Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT STRIP */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <p className="text-base sm:text-lg font-bold text-white font-display">
              Email: <a href="mailto:contact@novexasolutions.uk" className="text-[#14B8A6] hover:underline">contact@novexasolutions.uk</a> — reply within 24 business hours.
            </p>
            <p className="text-xs text-amber-300 font-mono">
              [No WhatsApp number and no booking link until confirmed.]
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

export default PortfolioPage;
