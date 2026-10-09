import React from 'react';
import {
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  Clock,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react';
import { CLIENT_SECTORS, CLIENT_GUARANTEES, BUSINESS_INFO } from '../data/content';

export const ClientsAndSectors: React.FC = () => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-orange-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/80 border-t border-slate-200/80">
      {/* Dynamic ambient color glows: blue, orange, green */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dedicated to Local Businesses & College Students</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Who We Build For & Our{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Quality Commitments
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From local shopkeepers and café owners to college students seeking final-year project websites and placement-ready portfolios — we deliver clean, reliable web solutions.
          </p>
        </div>

        {/* 6 Client Industries Grid with 3D Depth */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_SECTORS.map((sector, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white/95 p-7 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 card-3d-hover overflow-hidden"
            >
              {/* Dynamic corner gradient flare */}
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${sector.accent} opacity-15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-cyan-50 flex items-center justify-center transition-colors shadow-inner">
                  {getSectorIcon(sector.icon)}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-900 transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
                  <span>Customized layout & features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Collaboration & Quality Commitments (Highlighted Section) */}
        <div className="mt-20 rounded-3xl bg-slate-950 p-8 sm:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Ambient colorful lighting behind dark card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/20 via-emerald-600/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/80 inline-block">
              Our Non-Negotiable Standards
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              The Local Web Solutions Standard
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Every project comes with clear milestones, clean code, and zero unexpected charges.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_GUARANTEES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 hover:bg-slate-900 transition-all card-3d-hover"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 bg-slate-800 px-2 py-0.5 rounded-md inline-block">
                    {item.badge}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Guaranteed Included</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="relative z-10 mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-white">Ready to discuss your website or student project?</div>
              <div className="text-xs text-slate-400 mt-0.5">We provide upfront, student-friendly estimates with no pressure.</div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
