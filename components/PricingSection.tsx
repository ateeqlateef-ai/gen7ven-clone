import React from 'react';
import { ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <div className="text-left space-y-0">
      {/* Intro Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Pricing & Packages
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            "Website packages have fixed starting prices below. Mobile apps are quoted individually — no two apps cost the same, so a fixed price would be dishonest. The audit is the low-risk way to start."
          </p>
          <div className="inline-block p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold">
            All prices in USD. Starting prices — the final quote depends on the agreed scope.
          </div>
        </div>
      </section>

      {/* Website Packages Grid (LAUNCH, BUSINESS, PROFESSIONAL) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Website Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              "All prices in USD. Starting prices — the final quote depends on the agreed scope."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* LAUNCH — $799/project */}
            <article className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Starter Tier
                </span>
                <h3 className="text-xl font-black text-slate-900 font-display mb-3">
                  LAUNCH
                </h3>
                <div className="flex items-baseline gap-1 py-3 border-y border-slate-100 mb-5">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                    $799
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ project</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>WhatsApp integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Basic SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>1 revision</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/contact?package=launch"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#0A1A2F] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Select Launch Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* BUSINESS — $1,799/project (most popular) */}
            <article className="p-7 rounded-2xl bg-white border-2 border-[#14B8A6] flex flex-col justify-between shadow-lg relative md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-0.5 rounded-full bg-[#14B8A6] text-[#0A1A2F] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  Most Popular
                </span>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider block mb-1">
                  Growth Tier
                </span>
                <h3 className="text-xl font-black text-slate-900 font-display mb-3">
                  BUSINESS
                </h3>
                <div className="flex items-baseline gap-1 py-3 border-y border-slate-100 mb-5">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                    $1,799
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ project</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Up to 10 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Blog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Google Analytics and Search Console</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>2–3 revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Post-launch support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/contact?package=business"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A1A2F] text-xs font-bold uppercase tracking-wider transition-colors font-display"
                >
                  <span>Select Business Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* PROFESSIONAL — $3,499/project */}
            <article className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Scale Tier
                </span>
                <h3 className="text-xl font-black text-slate-900 font-display mb-3">
                  PROFESSIONAL
                </h3>
                <div className="flex items-baseline gap-1 py-3 border-y border-slate-100 mb-5">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                    $3,499
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ project</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Up to 15 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Payment gateway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>API support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>3 revisions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/contact?package=professional"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#0A1A2F] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Select Professional Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 font-mono">
            [PLACEHOLDER: confirm these three prices are still current, and what "post-launch support" covers and for how long.]
          </div>
        </div>
      </section>

      {/* Mobile Apps — Custom Quote (Section 6) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
              Mobile App Development
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display">
              Mobile Apps — Custom Quote
            </h2>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl bg-[#0A1A2F] text-white border border-slate-800 space-y-5">
            <h3 className="text-xl font-bold text-white font-display">How quoting works:</h3>
            <ol className="space-y-2.5 text-sm sm:text-base text-slate-200 list-decimal list-inside">
              <li>A 15–30 minute call to agree what the app must do.</li>
              <li>A written, fixed-scope proposal with a quote and a timeline.</li>
              <li>A deposit to start, milestone payments as agreed, and final payment on delivery.</li>
            </ol>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-amber-900/50 text-xs text-amber-300 font-mono">
              [PLACEHOLDER: deposit/milestone structure to confirm.]
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#14B8A6] mb-2">
                What affects the price:
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                "What affects the price: number of screens, features (subscriptions, payments, chat, maps), integrations (payment gateway, existing backend, third-party services), and whether a backend or admin panel is needed. You get the quote before any work starts, and the scope is fixed in writing."
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <a
                href="/contact?service=Mobile+App+Development"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A1A2F] text-xs font-bold uppercase tracking-wider transition-all font-display"
              >
                <span>Request Mobile App Scoping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App & Website Audit — $499 (Section 6) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider block">
                  Low-Risk Assessment
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  App & Website Audit
                </h2>
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display block">
                  $499
                </span>
                <span className="text-xs font-bold text-[#0D9488]">
                  Credited against a full project if you proceed
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              "A short, written audit of your app or website — $499, credited against a full project if you proceed. I review the mobile experience (or subscription/checkout flow) and send back a one-page note: what is costing you users or orders, and what to fix first. You keep the note either way."
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 font-mono">
              [PLACEHOLDER: confirm the $499 price and what the one-page note covers.]
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Actionable one-page teardown delivered directly by founder Ateeq Lateef.
              </span>
              <a
                href="/contact?package=audit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1A2F] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book an Audit ($499)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#14B8A6]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
