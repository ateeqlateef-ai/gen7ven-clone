import React from 'react';
import { ArrowRight, Check, Sparkles, Smartphone, Globe, Layers, Wrench, Shield, ExternalLink } from 'lucide-react';
import { DELIVERY_PROCESS_STEPS, CORE_TECH_STACK, SITE_INFO } from '../data/siteData';

const ServicesSection: React.FC = () => {
  return (
    <div className="text-left space-y-0">
      {/* Intro Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest">
            Founder-Led Studio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Flutter App Development & Web Development Services
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Novexa Solutions builds mobile apps and websites for two kinds of client: D2C and subscription brands that need an app their customers keep using, and agencies that need Flutter development capacity without hiring. Everything is built by the founder, Ateeq Lateef, and every project follows the same process — so you always know where it stands.
          </p>
        </div>
      </section>

      {/* Services List (5 Services from Section 5) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Service 1 — Flutter Mobile App Development (flagship) */}
          <article className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#0A1A2F] text-[#14B8A6] text-xs font-mono font-bold uppercase">
                Service 1 · Flagship
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Android & iOS from one codebase
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 font-display">
              Flutter Mobile App Development
            </h2>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              "One codebase. Android and iOS. Your app is built in Flutter, so Android and iOS share one codebase instead of two separate native apps. That means one build to test, one set of fixes, and faster delivery."
            </p>

            <div className="space-y-3 mb-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Covers:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>New apps from scratch (e-commerce, subscription, food delivery, on-demand services, business and POS apps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>Subscriptions, repeat ordering, push notifications, new-product alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>Firebase, REST APIs and backend integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>Admin panels and dashboards, customer and vendor apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>AI-powered features where they genuinely help (for example WhatsApp CRM tooling)</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Priced by custom quote after a short scoping call.
              </span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#14B8A6]" />
              </a>
            </div>
          </article>

          {/* Service 2 — Web Development */}
          <article className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase">
                Service 2
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                E-Commerce & Business Websites
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 font-display">
              Web Development
            </h2>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              "E-commerce and business websites. The portfolio lists 100 websites with live links, across fashion, beauty, supplements, perfumes, general e-commerce, food and restaurants, corporate, technology, healthcare, hospitality, home services and more."
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 mb-6">
              <span className="font-bold text-slate-900 block">Examples from the portfolio:</span>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://p448.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#14B8A6] text-blue-700 font-semibold text-xs"
                >
                  <span>P448 (p448.com)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://tejarahworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#14B8A6] text-blue-700 font-semibold text-xs"
                >
                  <span>Tejarah World (tejarahworld.com)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://www.paperandtea.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#14B8A6] text-blue-700 font-semibold text-xs"
                >
                  <span>Paper & Tea (paperandtea.com)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://www.callawaygolf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#14B8A6] text-blue-700 font-semibold text-xs"
                >
                  <span>Callaway Golf (callawaygolf.com)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Website packages start from $799 (fixed starting prices on Pricing page).
              </span>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488] hover:underline"
              >
                <span>View Website Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>

          {/* Service 3 — API & Backend Integration */}
          <article className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase">
                Service 3
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                System Connectivity
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 font-display">
              API & Backend Integration
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              REST API integration, Firebase, payment gateways, admin panels and dashboards, connecting an app to the systems a business already uses.
            </p>
          </article>

          {/* Service 4 — App Maintenance & Modernisation */}
          <article className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase">
                Service 4
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Codebase Longevity
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 font-display">
              App Maintenance & Modernisation
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Bug fixing, updates, performance work and modernising an existing app — including apps built by someone else.
            </p>
          </article>

          {/* Service 5 — White-label Development for Agencies (callout box) */}
          <article className="p-8 sm:p-10 rounded-3xl bg-[#0A1A2F] text-white border border-slate-800 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#14B8A6] text-[#0A1A2F] text-xs font-mono font-bold uppercase">
                Service 5 · Agency Callout
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 font-display">
              White-label Development for Agencies
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              "You keep the client. I build the app. If your agency sells websites, branding or marketing and a client asks for an app, I build it under your brand. Confidential, NDA on request, priced so your margin stays intact. Start with one small paid trial project."
            </p>

            <div className="p-4 rounded-xl bg-slate-800 border border-amber-900/50 text-xs font-mono text-amber-300">
              [PLACEHOLDER: white-label terms — NDA wording and trial-project size to be confirmed; do NOT state any revenue-share percentage.]
            </div>
          </article>
        </div>
      </section>

      {/* Delivery Process (8 Steps from Section 6) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
              Delivery Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
              8-Step Delivery Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              "You own the code and the store accounts from day one. I will sign your NDA on request."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DELIVERY_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#0A1A2F] text-[#14B8A6] font-mono font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {step.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            Verified Technology Stack
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CORE_TECH_STACK.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-xl max-w-xl mx-auto font-mono">
            [PLACEHOLDER: do NOT list native Kotlin/Swift until I confirm.]
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
