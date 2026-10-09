import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
  initialDescription?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialService = '',
  initialDescription = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    contactMethod: '',
    websiteType: initialService || 'Retail Stores & Local Shops',
    description: initialDescription || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, websiteType: initialService }));
    }
    if (initialDescription) {
      setFormData((prev) => ({ ...prev, description: initialDescription }));
    }
  }, [initialService, initialDescription]);

  const websiteTypes = [
    'Student Project Website (Academic / Capstone)',
    'Student Portfolio (Developer / Designer / Creator)',
    'Interactive Web Resume & CV (Recruiter-Ready)',
    'Business Website (Retail / Local Shop)',
    'Restaurant & Café (Digital Menus & WhatsApp Ordering)',
    'Clinics, Doctors & Dental Practices',
    'Gyms, Fitness Studios & Salons',
    'Service Providers & Consultants',
    'High-Impact Promotional Landing Pages',
    'Website Redesign & Speed Optimization',
    'Digital & AI Automated Solutions',
    'Other / Custom Requirements',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.contactMethod.trim()) {
      newErrors.contactMethod = 'Please enter your phone number or email address.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please add a brief description of what you need.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateFormattedMessage = (): string => {
    return `Hi Local Web Solutions! Here are my project details:
• Name: ${formData.name.trim()}
• Business: ${formData.businessName.trim() || 'Not specified'}
• Contact: ${formData.contactMethod.trim()}
• Website Type: ${formData.websiteType}
• Project Notes: ${formData.description.trim()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(generateFormattedMessage());
    }, 350);
  };

  const handleCopy = () => {
    if (!submittedMessage) return;
    navigator.clipboard.writeText(submittedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappFormattedHref = submittedMessage
    ? `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(submittedMessage)}`
    : BUSINESS_INFO.whatsappBaseUrl;

  const mailtoFormattedHref = submittedMessage
    ? `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
        `Website Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(submittedMessage)}`
    : BUSINESS_INFO.emailHref;

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic 3D ambient glows in blue, orange, green */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-float-gentle" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/80 via-orange-900/60 to-emerald-900/80 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-lg">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>Connect Directly · Fast Response</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Great for Your Business
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have an idea or need a website for your store, clinic, café, or service? Tell us a little about your business, and let's discuss the next step.
          </p>
        </div>

        {/* Contact Grid with 3D Depth */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Instant Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 backdrop-blur-xl">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 block mb-1">
                  Immediate Reach
                </span>
                <h3 className="text-xl font-bold text-white">Direct Communication Channels</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Speak directly with the developer building your website:
                </p>
              </div>

              {/* Channel 1: WhatsApp */}
              <a
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-950/90 hover:bg-slate-950 border border-emerald-500/40 hover:border-emerald-400 transition-all card-3d-hover shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                    Recommended · Instant Chat
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">Chat on WhatsApp</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              {/* Channel 2: Phone */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-950/90 hover:bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 transition-all card-3d-hover shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    Direct Phone Line
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">Call Us</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              {/* Channel 3: Email */}
              <a
                href={BUSINESS_INFO.emailHref}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-950/90 hover:bg-slate-950 border border-orange-500/40 hover:border-orange-400 transition-all card-3d-hover shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                    Official Email
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">Send an Email</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5 truncate max-w-[210px] sm:max-w-none">
                    {BUSINESS_INFO.email}
                  </div>
                </div>
              </a>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Quick turnaround · We respond to all inquiries.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-9 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send Your Project Enquiry</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below. You can send it directly to WhatsApp or your email client.
                </p>
              </div>

              {submittedMessage ? (
                /* Submission Screen */
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Enquiry Prepared Successfully!</span>
                    </div>
                    <p className="text-xs text-emerald-200/90 leading-relaxed">
                      Choose below to transmit your enquiry to Local Web Solutions for an immediate reply:
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Message Preview</span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy Text'}</span>
                      </button>
                    </div>
                    <pre className="text-xs text-slate-200 whitespace-pre-wrap font-sans bg-slate-900 p-3 rounded-xl border border-slate-800">
                      {submittedMessage}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={whatsappFormattedHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={mailtoFormattedHref}
                      className="flex items-center justify-center gap-2 py-3.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email App</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedMessage(null)}
                      className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                    >
                      ← Edit Inquiry Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Name <span className="text-slate-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Kumar Bakery & Sweets"
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number or Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      placeholder="e.g. +91 98765 43210 or yourname@gmail.com"
                      className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        errors.contactMethod ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.contactMethod && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.contactMethod}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      What type of website do you need?
                    </label>
                    <select
                      value={formData.websiteType}
                      onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                    >
                      {websiteTypes.map((type, idx) => (
                        <option key={idx} value={type} className="bg-slate-950 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Brief Project Description <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about what you sell, desired features (e.g. WhatsApp ordering, Google Maps pin), or any special requirement..."
                      className={`w-full px-3.5 py-3 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        errors.description ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Enquiry...' : 'Send Enquiry'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Your details are completely confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
