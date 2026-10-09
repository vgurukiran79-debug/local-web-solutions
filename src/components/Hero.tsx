import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Sparkles, GraduationCap, Laptop, Zap } from 'lucide-react';
import { Hero3DMockup } from './Hero3DMockup';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Dynamic 3D ambient colorful meshes: blue, orange, emerald */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float-gentle" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clear, High-Impact Typography with User's Official Tagline */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small Label with animated pulsing glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-300 shadow-xs text-slate-900 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>LOCAL WEB SOLUTIONS</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-600 font-bold flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Businesses & Students</span>
              </span>
            </div>

            {/* Main Headline: Exactly "Your Ideas, Our Solutions, Your Success." */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Ideas.{' '}
              <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
                Our Solutions.
              </span>
              <span className="block text-slate-900">
                Your Success.
              </span>
            </h1>

            {/* Supporting Description emphasizing both local businesses & student projects/portfolios */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We design and develop clean, high-performance websites for local businesses, as well as final-year project websites, developer portfolios, and interactive resumes for college students.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-black text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 rounded-full shadow-lg hover:shadow-2xl transition-all active:scale-95"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 hover:text-slate-950 bg-white/90 hover:bg-white border border-slate-300 rounded-full shadow-xs hover:shadow-md transition-all"
              >
                <span>Websites We Build</span>
              </button>
            </div>

            {/* Direct WhatsApp Quick Connect */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-700">
              <a
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-bold underline decoration-emerald-400 underline-offset-4"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Have an idea or student project? Chat with us on WhatsApp</span>
              </a>
            </div>

            {/* Trust Statement & Badges */}
            <div className="pt-4 border-t border-slate-200/90">
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Personalized solutions. Clean code. Built around your goals.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-200/80">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Business Websites</span>
                </span>
                <span className="flex items-center gap-1.5 bg-indigo-50/80 px-2.5 py-1 rounded-full border border-indigo-200/80">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Student Projects & Portfolios</span>
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/80">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Interactive Resumes</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Website Mockup Composition */}
          <div className="lg:col-span-6 flex justify-center">
            <Hero3DMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
