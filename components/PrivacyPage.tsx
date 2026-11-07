import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="text-left space-y-0">
      {/* Intro Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-widest">
            Privacy Policy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Privacy Notice
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Transparent policy on how inquiry data is collected, handled, and deleted.
          </p>
        </div>
      </section>

      {/* Main Privacy Notice Text from Section 8 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-slate-900 font-display">
            How your details are collected and used
          </h2>

          <p>
            When you contact Novexa Solutions via our consultation form or email, we collect only the information you voluntarily submit:
          </p>

          <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-2">
            <li><strong>Full Name:</strong> To address you professionally.</li>
            <li><strong>Work Email:</strong> To respond directly to your project inquiry.</li>
            <li><strong>Company / Organization (optional):</strong> To understand your business context.</li>
            <li><strong>Estimated Budget (optional) & Service of Interest:</strong> To assess initial project feasibility.</li>
            <li><strong>Project Outline & Objectives:</strong> To scope the required screens, features, and timeline.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 font-display pt-4">
            Zero Marketing & No Third-Party Sharing
          </h2>

          <p>
            The details you send here are used <strong>only to reply to your inquiry</strong>. They are never shared with anyone else, never sold, and never used for marketing, automated newsletters, or third-party advertising.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-display pt-4">
            Right to Deletion
          </h2>

          <p>
            You have the right to request the complete deletion of your message and contact information at any time. Simply send an email to <a href="mailto:contact@novexasolutions.uk" className="text-[#0D9488] font-bold hover:underline">contact@novexasolutions.uk</a> with your request, and your details will be promptly removed from our records.
          </p>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
            Last updated: November 2026 · Novexa Solutions (Lahore, Pakistan).
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
