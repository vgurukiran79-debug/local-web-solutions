import React from 'react';
import { Target, Smartphone, MessageSquareText, Wrench, CheckCircle, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-600" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-purple-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-wider">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built With Your Business in Mind.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on honest quality, clear human communication, and practical value for your daily business.
          </p>
        </div>

        {/* 4 Concise Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                <span>Zero bloated templates</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Business Difference Card */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Direct & Accessible
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Work directly with the person who designs and codes your website.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No endless corporate support tickets, no hidden fees, and no confusing technical mumbo-jumbo. If you need an update or have a question, you can reach out directly on WhatsApp or phone.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/918660921597?text=Hi%20Local%20Web%20Solutions!%20Can%20we%20have%20a%20quick%20introductory%20chat%20about%20my%20website?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
