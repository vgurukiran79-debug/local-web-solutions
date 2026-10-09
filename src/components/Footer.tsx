import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle, Heart, ShieldCheck } from 'lucide-react';
import { LogoEmblem } from './LogoEmblem';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 relative overflow-hidden">
      {/* Ambient footer glows */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoEmblem size={48} variant="mark" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-tight">
                  Local <span className="text-cyan-400 font-extrabold">Web</span> Solutions
                </span>
                <span className="text-[9px] font-extrabold tracking-[0.25em] text-slate-400 uppercase block">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {BUSINESS_INFO.supportingMessage} High-converting websites for retail stores, cafés, clinics, and ambitious local business owners.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 hover:text-white hover:bg-emerald-800 text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hero')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('websites-we-build')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Websites We Build
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('clients')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Clients & Guarantees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Our 4-Step Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us & FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-800 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span>Built with modern web standards</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">100% Mobile Ready</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
