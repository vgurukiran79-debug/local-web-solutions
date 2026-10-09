import React from 'react';
import {
  Building2,
  Utensils,
  UserCheck,
  Rocket,
  RefreshCw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Zap,
  GraduationCap,
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-orange-600" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-amber-600" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-teal-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-600" />;
    }
  };

  const getCardTheme = (idx: number) => {
    // Dynamic color variations: blues, oranges, greens
    switch (idx % 6) {
      case 0:
        return {
          bg: 'bg-white/95',
          border: 'border-blue-200/90 hover:border-blue-400',
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          iconBg: 'bg-blue-50 text-blue-600',
          accent: 'from-blue-600 to-cyan-500',
        };
      case 1:
        return {
          bg: 'bg-white/95',
          border: 'border-orange-200/90 hover:border-orange-400',
          badge: 'bg-orange-100 text-orange-800 border-orange-200',
          iconBg: 'bg-orange-50 text-orange-600',
          accent: 'from-orange-600 to-amber-500',
        };
      case 2:
        return {
          bg: 'bg-white/95',
          border: 'border-emerald-200/90 hover:border-emerald-400',
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          iconBg: 'bg-emerald-50 text-emerald-600',
          accent: 'from-emerald-600 to-teal-500',
        };
      case 3:
        return {
          bg: 'bg-white/95',
          border: 'border-amber-200/90 hover:border-amber-400',
          badge: 'bg-amber-100 text-amber-800 border-amber-200',
          iconBg: 'bg-amber-50 text-amber-600',
          accent: 'from-amber-600 to-orange-500',
        };
      case 4:
        return {
          bg: 'bg-white/95',
          border: 'border-teal-200/90 hover:border-teal-400',
          badge: 'bg-teal-100 text-teal-800 border-teal-200',
          iconBg: 'bg-teal-50 text-teal-600',
          accent: 'from-teal-600 to-green-500',
        };
      case 5:
        return {
          bg: 'bg-white/95',
          border: 'border-indigo-200/90 hover:border-indigo-400',
          badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
          iconBg: 'bg-indigo-50 text-indigo-600',
          accent: 'from-indigo-600 to-blue-500',
        };
      default:
        return {
          bg: 'bg-white/95',
          border: 'border-blue-200/90 hover:border-blue-400',
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          iconBg: 'bg-blue-50 text-blue-600',
          accent: 'from-blue-600 to-cyan-500',
        };
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-100/60 via-slate-50 to-slate-100/70 border-t border-slate-200/80">
      {/* Background colorful glow spots */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-float-gentle" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-100 via-orange-100 to-emerald-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
            <span>Core Digital Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Can We{' '}
            <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
              Build for You?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical digital solutions designed around your business and your customers. High-impact design, zero clutter.
          </p>
        </div>

        {/* Services Grid with 3D Card Physics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, idx) => {
            const theme = getCardTheme(idx);
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between ${theme.bg} rounded-3xl p-7 border ${theme.border} shadow-md hover:shadow-2xl transition-all duration-300 card-3d-hover`}
              >
                <div>
                  {/* Header with icon & badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                    {service.subtitle}
                  </p>

                  {/* Honest description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-bold text-slate-700">Ideal For: </span>
                    {service.idealFor}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-2xl transition-all shadow-xs active:scale-95"
                  >
                    <span>Enquire This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hi%20Local%20Web%20Solutions!%20I'm%20interested%20in%20your%20${encodeURIComponent(
                      service.title
                    )}%20service.%20Can%20we%20discuss?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-emerald-600 hover:bg-emerald-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors"
                    title="WhatsApp enquiry for this service"
                    aria-label={`Ask on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-950 p-7 sm:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Have a Unique Business Requirement?
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              We customize layouts, ordering workflows, and booking links for your business.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Talk directly with us to discuss what best serves your local audience.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-sm rounded-full shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
