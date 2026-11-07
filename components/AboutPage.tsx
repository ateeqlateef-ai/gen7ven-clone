import React from 'react';
import { User, ExternalLink, Check, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const AboutPage: React.FC = () => {
  return (
    <div className="text-left space-y-0">
      {/* Intro Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-widest">
            Founder Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            About Novexa Solutions & Founder Ateeq Lateef
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A founder-led Flutter development studio based in Lahore, Pakistan, working with clients in the UK, USA, Europe and Australia.
          </p>
        </div>
      </section>

      {/* Founder Profile (Section 7) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-slate-100">
              {/* Founder Photo Placeholder */}
              <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-2 border-dashed border-[#14B8A6] bg-slate-50 flex flex-col items-center justify-center text-center p-3">
                <User className="w-8 h-8 text-[#0D9488] mb-1" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 leading-tight">
                  [PLACEHOLDER: founder photo]
                </span>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider block mb-1">
                  Founder Profile
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  Ateeq Lateef
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                  Founder, Novexa Solutions · Flutter Developer based in Lahore, Pakistan
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/in/ateeq-lateef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1A2F] text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-[#14B8A6]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>LinkedIn: linkedin.com/in/ateeq-lateef</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-xs text-amber-800 bg-amber-50 border border-amber-200 px-2 py-1 rounded-md font-mono">
                    [PLACEHOLDER: confirm the working-hours overlap wording]
                  </span>
                </div>
              </div>
            </div>

            {/* Exact Founder Quote from Section 7 */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                "Ateeq Lateef — Founder, Novexa Solutions. I'm a Flutter developer based in Lahore, Pakistan. I have a BSc in Computer Engineering from Bahauddin Zakariya University, Multan (2020), and 6 years of experience building mobile apps and websites. I lead development on Tejarah World Marketplace, an e-commerce marketplace app on Google Play, and my work includes food ordering, on-demand services, delivery and logistics, business and POS apps, and AI-powered tools such as a WhatsApp CRM. My website work spans e-commerce, food, corporate, healthcare and hospitality, with 100 websites listed in my portfolio."
              </p>
              <p>
                "Novexa Solutions is founder-led: I am the person you talk to, and the person who builds your app. There is no handover to a team you never meet, and no account manager between us. I work with clients in the UK, USA and Europe — and in Australia. My working hours overlap with UK business hours, and every project includes a weekly demo, so distance never means silence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Founder-Led Means (Section 7) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              What Founder-Led Means
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Direct technical accountability on every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                You talk to the developer, not a salesperson
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                One person is responsible for the whole build
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Weekly demos, so you see progress every week
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                You own the code and the store accounts from day one
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3 sm:col-span-2">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                NDA welcome on request
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Verification & Truth Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white font-display">
              Ready to discuss an app or website?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Email contact@novexasolutions.uk — Ateeq replies within 24 business hours.
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

export default AboutPage;
