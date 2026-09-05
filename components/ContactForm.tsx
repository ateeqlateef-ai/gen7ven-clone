import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw, Clock, Globe, ShieldCheck } from 'lucide-react';
import CustomDropdown from './CustomDropdown';
import { SITE_INFO } from '../data/siteData';
import { ContactFormData } from '../types';

const SERVICE_OPTIONS = [
  'UI/UX Design',
  'Web Development',
  'Mobile App Development',
  'Brand Identity',
  'SEO Marketing',
  'AI Solutions',
  'Full-Stack Architecture (Multiple Services)',
  'General Consultation'
];

const BUDGET_OPTIONS = [
  'Less than £5,000',
  '£5,000 – £15,000',
  '£15,000 – £30,000',
  '£30,000+',
  'Flexible / To be discussed'
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Pre-fill service from URL hash parameters if present (e.g., #/contact?service=UI/UX Design)
  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const queryParams = new URLSearchParams(hash.split('?')[1]);
        const serviceParam = queryParams.get('service');
        if (serviceParam) {
          const matched = SERVICE_OPTIONS.find(
            s => s.toLowerCase() === serviceParam.toLowerCase() || s.toLowerCase().includes(serviceParam.toLowerCase())
          );
          if (matched) {
            setFormData(prev => ({ ...prev, service: matched }));
          }
        }
      }
    } catch {
      // ignore parsing error
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    if (!formData.service || formData.service === 'Select an option') {
      newErrors.service = 'Please select the service of interest.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide an outline of your project or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Secure server-side email dispatch endpoint
      const apiResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await apiResponse.json().catch(() => null);

      if (apiResponse.ok && data?.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message ||
          `Thank you! Your inquiry has been dispatched to ${SITE_INFO.email}. Our team will review your requirements and follow up within 24 business hours.`
        );
      } else {
        const errorMsg = data?.error || 'Unable to submit your request at this time. Please email us directly at ' + SITE_INFO.email;
        setSubmitStatus('error');
        setStatusMessage(errorMsg);
      }
    } catch (error) {
      console.error('Contact submission network error:', error);
      setSubmitStatus('error');
      setStatusMessage(
        `A network connection error occurred while submitting. Please contact us directly at ${SITE_INFO.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
    setErrors({});
    setSubmitStatus('idle');
    setStatusMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
      
      {/* Contact Details & Agency Info Card */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
            Direct Technical Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight font-display">
            Let's Discuss Your Project Goals
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed font-normal">
            Fill in your project requirements below. Our technical leads and design directors will review your brief and respond with an actionable timeline and initial scope proposal.
          </p>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#111622] border border-[#1e293b] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-[#1e293b] text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Primary Inquiries
              </span>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="text-white font-semibold text-sm hover:text-blue-400 transition-colors break-all"
              >
                {SITE_INFO.email}
              </a>
              <p className="text-slate-400 text-xs mt-0.5">
                Target response: Within 24 business hours
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#111622] border border-[#1e293b] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-[#1e293b] text-cyan-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Digital Presence & Registered Agency
              </span>
              <p className="text-white font-semibold text-sm">
                {SITE_INFO.domain}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                Operating across the United Kingdom and globally
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#111622] border border-[#1e293b] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-[#1e293b] text-indigo-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Consultation Hours
              </span>
              <p className="text-white font-semibold text-sm">
                {SITE_INFO.operatingHours}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                {SITE_INFO.status}
              </p>
            </div>
          </div>
        </div>

        {/* Security & Confidentiality Guarantee */}
        <div className="p-4 rounded-xl bg-[#111622] border border-[#1e293b] text-xs text-slate-400 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
          <span>Non-Disclosure & Confidentiality: All inquiries and architecture briefs are kept strictly confidential under UK standard NDA protocols.</span>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#111622] border border-[#1e293b] shadow-2xl relative">
          
          {submitStatus === 'success' ? (
            <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-black text-white tracking-tight font-display">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {statusMessage}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b] text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                <p className="font-semibold text-slate-300">Recipient Verification:</p>
                <p className="text-blue-400 font-mono">{SITE_INFO.email}</p>
                <p className="text-slate-400 text-[11px] pt-1">
                  A technology architect from Novexa Solutions will examine your project brief and follow up with you directly.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#07090e] hover:bg-[#0d1117] border border-[#1e293b] text-white font-semibold text-xs rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send Another Inquiry</span>
                </button>
                <a
                  href="#/"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20"
                >
                  Return to Home
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="border-b border-[#1e293b] pb-4 mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight font-display">
                  Project Consultation Form
                </h3>
                <p className="text-slate-400 text-xs">
                  Fields marked with <span className="text-blue-400 font-bold">*</span> are required for scoping.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Notice:</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-400 mb-2">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full bg-[#07090e] border ${
                      errors.fullName ? 'border-rose-500 ring-1 ring-rose-500/20' : 'border-[#1e293b] hover:border-slate-600 focus:border-blue-500'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-2">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    className={`w-full bg-[#07090e] border ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500/20' : 'border-[#1e293b] hover:border-slate-600 focus:border-blue-500'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
                {/* Company Name (Optional) */}
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-400 mb-2">
                    Company / Organization <span className="text-slate-600 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Dynamics Ltd"
                    className="w-full bg-[#07090e] border border-[#1e293b] hover:border-slate-600 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Estimated Budget (Optional) */}
                <div>
                  <CustomDropdown
                    id="budget"
                    label="Estimated Budget (Optional)"
                    options={BUDGET_OPTIONS}
                    value={formData.budget}
                    onChange={(val) => setFormData({ ...formData, budget: val })}
                    placeholder="Select budget range"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="mb-2">
                <CustomDropdown
                  id="service"
                  label="Service of Interest *"
                  options={SERVICE_OPTIONS}
                  value={formData.service}
                  onChange={(val) => {
                    setFormData({ ...formData, service: val });
                    if (errors.service) setErrors({ ...errors, service: undefined });
                  }}
                  error={errors.service}
                  placeholder="Select one of the 6 core services"
                />
              </div>

              {/* Message / Project Outline */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-2">
                  Project Outline & Objectives <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Describe your project, desired deliverables, target timeline, or technical challenges..."
                  className={`w-full bg-[#07090e] border ${
                    errors.message ? 'border-rose-500 ring-1 ring-rose-500/20' : 'border-[#1e293b] hover:border-slate-600 focus:border-blue-500'
                  } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-form-submit-button"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                    <span>Transmitting Project Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Inquiry to Novexa Solutions</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-slate-400">
                  Prefer direct email? Reach us at{' '}
                  <a href={`mailto:${SITE_INFO.email}`} className="text-blue-400 hover:underline font-semibold">
                    {SITE_INFO.email}
                  </a>
                </p>
              </div>
            </form>
          )}

        </div>
      </div>

    </div>
  );
};

export default ContactForm;
