import React, { useState } from 'react';
import { ShieldCheck, Users, ChevronDown, CheckCircle2, MessageCircle, HeartHandshake, Phone } from 'lucide-react';
import { LogoEmblem } from './LogoEmblem';
import { FAQS, BUSINESS_INFO } from '../data/content';

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Story & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl text-center max-w-sm w-full group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent pointer-events-none" />

              {/* Render the uploaded emblem prominently */}
              <div className="relative flex justify-center py-4">
                <LogoEmblem size={160} variant="mark" />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-black text-white tracking-tight">
                  Local <span className="text-cyan-400">Web</span> Solutions
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                  {BUSINESS_INFO.tagline}
                </p>
                <p className="text-[11px] text-slate-400 pt-1">
                  Businesses · Student Projects · Portfolios · Resumes
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-center gap-3">
                <a
                  href={BUSINESS_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold transition-transform active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directly</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full text-xs font-semibold"
                >
                  <Phone className="w-3 h-3 text-cyan-400" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              About Local Web Solutions
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Small Team of Ideas, Technology, and Ambition.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Local Web Solutions helps businesses establish a strong online presence through thoughtful website design and practical digital solutions. Our focus is simple: understand your needs, create a professional experience, and make it easier for your customers to connect with you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <HeartHandshake className="w-4 h-4 text-cyan-600" />
                  <span>Genuine Care for Local Retail</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We believe neighbourhood shops, cafés, and professionals deserve websites just as polished and effective as national tech brands.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Direct Accountability</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No middlemen or third-party call centers. You work directly with the developers building your digital identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Questions & FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear, straightforward answers without sales spin.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-cyan-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
