import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw, Clock, Globe } from 'lucide-react';
import CustomDropdown from './CustomDropdown';
import { SITE_INFO } from '../data/siteData';
import { ContactFormData } from '../types';

const SERVICE_OPTIONS = [
  'Flutter Mobile App Development',
  'Web Development',
  'API & Backend Integration',
  'App Maintenance & Modernisation',
  'White-label Agency Development',
  'App & Website Audit ($499)'
];

const BUDGET_OPTIONS = [
  'Under $1,000 (Small fix/audit)',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
  'Custom / To be scoped'
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
  const [selectedPackage, setSelectedPackage] = useState<{
    id: string;
    name: string;
    price: string;
    scope: string;
  } | null>(null);

  const handleSelectPackage = (key: string) => {
    const pKey = key.toLowerCase();
    if (pKey === 'audit' || pKey === 'website-app-audit') {
      setSelectedPackage({
        id: 'audit',
        name: 'Website/App Audit',
        price: '$499',
        scope: 'Performance, SEO & UX Audit'
      });
      setFormData(prev => ({
        ...prev,
        service: 'App & Website Audit ($499)',
        budget: prev.budget || 'Under $1,000 (Small fix/audit)',
        message: prev.message || 'I am interested in booking an App & Website Audit ($499). Fee credited against a full project if I proceed.'
      }));
    } else if (pKey === 'launch') {
      setSelectedPackage({
        id: 'launch',
        name: 'Launch Package',
        price: '$799',
        scope: 'Up to 5 Pages'
      });
      setFormData(prev => ({
        ...prev,
        service: 'Web Development',
        budget: prev.budget || 'Under $1,000 (Small fix/audit)',
        message: prev.message || 'I am interested in getting started with the Launch Package ($799, Up to 5 pages).'
      }));
    } else if (pKey === 'business') {
      setSelectedPackage({
        id: 'business',
        name: 'Business Package',
        price: '$1,799 (Most Popular)',
        scope: 'Up to 10 Pages'
      });
      setFormData(prev => ({
        ...prev,
        service: 'Web Development',
        budget: prev.budget || '$1,000 – $3,000',
        message: prev.message || 'I would like to inquire about the Business Package ($1,799, Most Popular, Up to 10 pages).'
      }));
    } else if (pKey === 'professional') {
      setSelectedPackage({
        id: 'professional',
        name: 'Professional Package',
        price: '$3,499',
        scope: 'Up to 15 Pages'
      });
      setFormData(prev => ({
        ...prev,
        service: 'Web Development',
        budget: prev.budget || '$3,000 – $7,000',
        message: prev.message || 'I would like to inquire about the Professional Package ($3,499, Up to 15 pages).'
      }));
    }
  };

  useEffect(() => {
    const parseUrlParams = () => {
      try {
        const hash = window.location.hash || '';
        const search = window.location.search || '';
        let serviceParam: string | null = null;
        let packageParam: string | null = null;

        if (hash.includes('?')) {
          const queryParams = new URLSearchParams(hash.split('?')[1]);
          serviceParam = queryParams.get('service');
          packageParam = queryParams.get('package');
        } else if (search) {
          const queryParams = new URLSearchParams(search);
          serviceParam = queryParams.get('service');
          packageParam = queryParams.get('package');
        }

        if (packageParam) {
          handleSelectPackage(packageParam);
        }

        if (serviceParam) {
          const matched = SERVICE_OPTIONS.find(
            s => s.toLowerCase() === serviceParam!.toLowerCase() || s.toLowerCase().includes(serviceParam!.toLowerCase())
          );
          if (matched) {
            setFormData(prev => ({ ...prev, service: matched }));
          }
        }
      } catch {
        // Ignore URL parsing errors
      }
    };

    parseUrlParams();
    window.addEventListener('popstate', parseUrlParams);
    return () => window.removeEventListener('popstate', parseUrlParams);
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
      newErrors.email = 'Please provide a valid work email address.';
    }

    if (!formData.service || formData.service === 'Select an option') {
      newErrors.service = 'Please select a service of interest.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide an outline of your project or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project outline must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const apiResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          company: formData.company?.trim() || '',
          service: formData.service.trim(),
          budget: formData.budget?.trim() || '',
          message: formData.message.trim()
        })
      });

      const data = await apiResponse.json().catch(() => null);

      if (apiResponse.ok && data?.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message || "Message sent successfully. I'll get back to you within 24 business hours."
        );
        setFormData({
          fullName: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
        setErrors({});
      } else {
        const errorMsg =
          data?.error ||
          `Unable to transmit your message via SMTP at this moment. Please reach out directly to Ateeq at ${SITE_INFO.email}.`;
        setSubmitStatus('error');
        setStatusMessage(errorMsg);
      }
    } catch (error) {
      console.error('[Novexa Contact Form] Network error:', error);
      setSubmitStatus('error');
      setStatusMessage(
        `Network error encountered. Please email Ateeq directly at ${SITE_INFO.email}.`
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-mono font-bold uppercase mb-3">
            Founder-Led Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            Start a project.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tell me what you want to build — an app, a website, or an app for your agency's client. I reply within 24 business hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Direct Email
              </span>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="text-slate-900 font-bold text-sm hover:text-[#0D9488] transition-colors break-all"
              >
                {SITE_INFO.email}
              </a>
              <p className="text-slate-500 text-xs mt-0.5">Replies within 24 business hours</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Hours
              </span>
              <p className="text-slate-900 font-bold text-sm">
                Monday–Friday, 09:00–18:00 UK time
              </p>
              <p className="text-amber-700 text-xs font-mono mt-0.5">
                [PLACEHOLDER: confirm consultation hours.]
              </p>
            </div>
          </div>

          {/* Placeholders for WhatsApp and Booking Account */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-mono space-y-1">
            <p>[PLACEHOLDER: WhatsApp — add only after I confirm the business number.]</p>
            <p>[PLACEHOLDER: Book a call — add only after I confirm a booking account.]</p>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm relative">
          {submitStatus === 'success' ? (
            <div className="py-8 px-4 text-center space-y-5 animate-fade-in" id="contact-success-container">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-black text-slate-900 font-display">
                  Enquiry Dispatched
                </h3>
                <p className="text-emerald-700 font-semibold text-xs sm:text-sm bg-emerald-50 py-2 px-3 rounded-lg border border-emerald-200 inline-block">
                  {statusMessage}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  Your project specifications were delivered to <span className="text-[#0D9488] font-semibold">{SITE_INFO.email}</span>. Founder Ateeq Lateef will reply directly.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  id="send-another-inquiry-button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#0A1A2F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send another enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            <form
              action="javascript:void(0);"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSubmit(e);
              }}
              noValidate
              id="project-consultation-form"
            >
              <div className="border-b border-slate-100 pb-3 mb-5">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Start a Project
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  Fields marked with <span className="text-[#0D9488] font-bold">*</span> are required.
                </p>
              </div>

              {selectedPackage && (
                <div
                  id="selected-package-badge"
                  className="mb-5 p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-slate-800 text-xs flex items-center justify-between gap-3 animate-fade-in"
                >
                  <div>
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] block">
                      Selected Package
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{selectedPackage.name}</span>
                    <span className="text-[#0D9488] font-bold ml-2">({selectedPackage.price})</span>
                    <span className="text-slate-500 text-xs ml-2">• {selectedPackage.scope}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold px-2 py-1 rounded bg-white border border-slate-200"
                  >
                    Clear
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  id="contact-error-alert"
                  className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Submission Error:</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {/* Form Fields from Section 8 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name <span className="text-[#0D9488]">*</span>
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
                    className={`w-full bg-white border ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-200 focus:border-[#14B8A6]'
                    } rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Work Email <span className="text-[#0D9488]">*</span>
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
                    className={`w-full bg-white border ${
                      errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-[#14B8A6]'
                    } rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Company / Organization (optional) */}
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Company / Organization <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Dynamics Ltd"
                    className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                  />
                </div>

                {/* Estimated Budget (optional) */}
                <div>
                  <CustomDropdown
                    id="budget"
                    label="Estimated Budget (optional)"
                    options={BUDGET_OPTIONS}
                    value={formData.budget}
                    onChange={(val) => setFormData({ ...formData, budget: val })}
                    placeholder="Select budget range"
                  />
                </div>
              </div>

              {/* Service of Interest */}
              <div className="mb-4">
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
                  placeholder="Select service"
                />
              </div>

              {/* Project Outline & Objectives */}
              <div className="mb-5">
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Project Outline & Objectives <span className="text-[#0D9488]">*</span>
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
                  placeholder="Tell me what you want to build — an app, a website, or an app for your agency's client..."
                  className={`w-full bg-white border ${
                    errors.message ? 'border-rose-500' : 'border-slate-200 focus:border-[#14B8A6]'
                  } rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                )}
              </div>

              {/* Privacy Notice (Placed directly under the contact form, BEFORE the submit button as required by Section 7) */}
              <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-0.5">How your details are used:</strong>
                "The details you send here (name, work email, company and project outline) are used only to reply to your enquiry. They are not shared with anyone else and are not used for marketing. You can ask for your details to be deleted at any time by emailing <a href="mailto:contact@novexasolutions.uk" className="text-[#0D9488] font-bold hover:underline">contact@novexasolutions.uk</a>."
              </div>

              {/* Submit Button: "Send my enquiry" (exact requested wording from Section 8) */}
              <button
                type="button"
                id="contact-form-submit-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSubmit(e);
                }}
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#14B8A6] hover:bg-[#0D9488] active:bg-[#0F766E] disabled:bg-slate-300 disabled:cursor-not-allowed text-[#0A1A2F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send my enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
