import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Check,
  MessageCircle,
  Copy,
  CheckCheck,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ScopePlannerProps {
  onApplyToContactForm: (scopeText: string) => void;
}

export const ScopePlanner: React.FC<ScopePlannerProps> = ({ onApplyToContactForm }) => {
  const [businessType, setBusinessType] = useState('Student Project / Web Portfolio');
  const [selectedPages, setSelectedPages] = useState<string[]>([
    'Project Live Demo & Features',
    'Personal Portfolio & Skills',
    'Interactive Resume / CV',
    'Contact & WhatsApp Link',
  ]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'GitHub Repository Linking',
    '1-Click PDF Resume Download',
    'Fast Mobile Speed',
  ]);
  const [copied, setCopied] = useState(false);

  const businessTypes = [
    'Student Project / Web Portfolio',
    'Interactive Web Resume / CV',
    'Local Retail / Shop',
    'Restaurant / Café / Food',
    'Gym / Fitness Studio',
    'Clinic / Doctor / Health',
    'Personal Portfolio / Freelancer',
    'Service Provider / Office',
  ];

  const availablePages = [
    'Project Live Demo & Features',
    'Personal Portfolio & Skills',
    'Interactive Resume / CV',
    'GitHub & Project Case Studies',
    'Products / Services Showcase',
    'Digital Menu / Price List',
    'Contact & Location Map',
    'Customer FAQs',
  ];

  const availableFeatures = [
    'Direct WhatsApp Chat Button',
    'GitHub Repository Linking',
    '1-Click PDF Resume Download',
    'Recruiter / Client Direct Contact',
    'Fast Mobile Speed',
    'Clean Documented Code',
    'Google Maps Location Pin',
    'Working Contact Enquiry Form',
  ];

  const togglePage = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const getScopeSummary = () => {
    return `Hi Local Web Solutions! Here is what I need:
• Category: ${businessType}
• Selected Sections/Pages: ${selectedPages.join(', ')}
• Key Features: ${selectedFeatures.join(', ')}

Can we discuss how we can build this?`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getScopeSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    getScopeSummary()
  )}`;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-emerald-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Feature & Scope Planner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              Plan Your Website, Portfolio or Project in 60 Seconds
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Select what you need — whether it's a student capstone project, placement portfolio, web resume, or business website.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Selection Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Category */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                  1. What are you looking to build?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBusinessType(type)}
                      className={`px-3.5 py-2.5 text-xs font-bold rounded-xl border text-left transition-all ${
                        businessType === type
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-cyan-400'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Desired Pages / Sections */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                  2. Select pages or sections you need:
                </label>
                <div className="flex flex-wrap gap-2">
                  {availablePages.map((page) => {
                    const isSelected = selectedPages.includes(page);
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => togglePage(page)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                            isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </span>
                        <span>{page}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Key Features */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                  3. Key features & conveniences:
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableFeatures.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleFeature(feat)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                            isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </span>
                        <span>{feat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Generated Brief Column */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 text-white shadow-2xl space-y-4 border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Your Structured Brief
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  {selectedPages.length} Sections · {selectedFeatures.length} Features
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Category</span>
                  <div className="text-sm font-bold text-white mt-0.5">{businessType}</div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Sections Chosen</span>
                  <div className="text-slate-200 mt-1 flex flex-wrap gap-1">
                    {selectedPages.map((p, idx) => (
                      <span key={idx} className="bg-slate-800 px-2.5 py-0.5 rounded text-[11px]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Functions & Integrations</span>
                  <div className="text-slate-200 mt-1 flex flex-wrap gap-1">
                    {selectedFeatures.map((f, idx) => (
                      <span key={idx} className="bg-slate-800 px-2.5 py-0.5 rounded text-[11px] text-cyan-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send This Brief on WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors"
                  >
                    {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onApplyToContactForm(getScopeSummary())}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 rounded-xl text-xs font-medium transition-colors"
                  >
                    <span>Paste into Form ↓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
