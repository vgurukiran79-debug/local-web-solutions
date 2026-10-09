import React, { useState } from 'react';
import {
  UtensilsCrossed,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  Briefcase,
  Rocket,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Smartphone,
  Laptop,
  Layers,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { WEBSITE_TYPES_WE_BUILD, WebsiteTypeItem, BUSINESS_INFO } from '../data/content';

interface WebsitesWeBuildProps {
  onSelectTypeForEnquiry: (typeName: string) => void;
}

export const WebsitesWeBuild: React.FC<WebsitesWeBuildProps> = ({
  onSelectTypeForEnquiry,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(WEBSITE_TYPES_WE_BUILD[0].id);

  const activeItem =
    WEBSITE_TYPES_WE_BUILD.find((item) => item.id === activeTabId) ||
    WEBSITE_TYPES_WE_BUILD[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'student-solutions':
        return <GraduationCap className="w-5 h-5" />;
      case 'restaurants-cafes':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'retail-stores':
        return <ShoppingBag className="w-5 h-5" />;
      case 'clinics-doctors':
        return <Stethoscope className="w-5 h-5" />;
      case 'gyms-fitness':
        return <Dumbbell className="w-5 h-5" />;
      case 'services-consultants':
        return <Briefcase className="w-5 h-5" />;
      case 'landing-pages':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="websites-we-build" className="py-24 relative overflow-hidden">
      {/* Dynamic ambient color meshes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-gentle" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 border border-slate-300/80 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Tailored Website Types</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Websites We Build For{' '}
            <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don’t use cookie-cutter templates. Select your industry below to explore the exact architecture, features, and conversion tools we craft for you.
          </p>
        </div>

        {/* 3D Tab Switcher Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {WEBSITE_TYPES_WE_BUILD.map((type) => {
            const isActive = activeTabId === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setActiveTabId(type.id)}
                className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 transform-gpu ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xl scale-105 ring-2 ring-cyan-400'
                    : 'bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <span
                  className={`p-1.5 rounded-xl transition-colors ${
                    isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {getCategoryIcon(type.id)}
                </span>
                <span>{type.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase with 3D Depth */}
        <div className="mt-12 rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: What We Build Details & Features */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${activeItem.colorScheme.badgeBg}`}>
                    {activeItem.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {activeItem.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {activeItem.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>

                {/* What We Include in this website type */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Key Features Built Into Your Website:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Pages & Conversion Tools */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Included Pages:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.includedPages.map((page, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg text-xs font-semibold">
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectTypeForEnquiry(activeItem.title)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all active:scale-95"
                >
                  <span>Build This Website For My Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hi%20Local%20Web%20Solutions!%20I'm%20interested%20in%20getting%20a%20${encodeURIComponent(
                    activeItem.title
                  )}%20for%20my%20business.%20Can%20we%20discuss?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Interactive Feature Mockup Stage */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
              {/* Background ambient ring */}
              <div
                className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: activeItem.colorScheme.primary }}
              />

              {/* 3D Browser Mockup Canvas */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-4 sm:p-5 space-y-4 transform-gpu transition-all duration-300 hover:scale-[1.02]">
                {/* Browser bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 bg-slate-950 px-3 py-0.5 rounded-full flex items-center gap-1 border border-slate-800">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>yourbusiness.in</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">SSL 256-Bit</span>
                </div>

                {/* Simulated Content Box */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60 inline-block">
                    {activeItem.interactivePreview.badge}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                    {activeItem.interactivePreview.headline}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeItem.interactivePreview.subheadline}
                  </p>
                </div>

                {/* Simulated Conversion CTA Inside Mockup */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectTypeForEnquiry(activeItem.title)}
                    className="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-xl shadow-sm text-center"
                  >
                    {activeItem.interactivePreview.primaryAction}
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 bg-slate-800 text-slate-200 text-xs font-medium rounded-xl text-center"
                  >
                    {activeItem.interactivePreview.secondaryAction}
                  </button>
                </div>

                {/* Metrics bar */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  {activeItem.interactivePreview.previewMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-950/80 p-2 rounded-xl border border-slate-800">
                      <div className="text-xs font-black text-cyan-300">{metric.value}</div>
                      <div className="text-[10px] text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom reassurance */}
              <div className="pt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tested on all screen sizes</span>
                </span>
                <span className="text-emerald-400 font-semibold">Ready in Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Industry Highlights Grid with 3D Hover Depth */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_TYPES_WE_BUILD.map((type) => (
            <div
              key={type.id}
              onClick={() => setActiveTabId(type.id)}
              className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 card-3d-hover ${
                activeTabId === type.id
                  ? 'bg-white border-cyan-500 shadow-xl ring-2 ring-cyan-200'
                  : 'bg-white/85 hover:bg-white border-slate-200/80 shadow-xs hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                  {getCategoryIcon(type.id)}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${type.colorScheme.badgeBg}`}>
                  {type.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-snug">{type.title}</h4>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">{type.tagline}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-700">
                <span>View Features & Preview</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
