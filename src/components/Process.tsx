import React from 'react';
import { MessageSquare, LayoutTemplate, Code2, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-cyan-600" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Code2 className="w-5 h-5 text-purple-600" />;
      case 3:
        return <Rocket className="w-5 h-5 text-emerald-600" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            Clear & Predictable
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Online.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A simple, collaborative 4-step workflow that keeps you informed at every stage.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal connector line on desktop */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-0" />

            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Step Icon & Number Badge */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-md mb-5 group-hover:border-cyan-500 transition-colors">
                  {getStepIcon(idx)}
                </div>

                {/* Step indicator */}
                <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase mb-1">
                  Step {step.step}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                {/* Summary */}
                <p className="text-xs font-semibold text-slate-700 mt-1">
                  {step.summary}
                </p>

                {/* Details */}
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Timeline Commitment */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
          <span className="font-bold text-slate-800">Realistic Timelines: </span>
          We don't make exaggerated "build your website in 2 hours" claims. We agree on realistic milestones based on your project requirements and content availability, delivering thoroughly tested results.
        </div>
      </div>
    </section>
  );
};
