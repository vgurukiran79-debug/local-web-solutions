import React, { useState, useRef } from 'react';
import {
  Globe,
  Smartphone,
  Laptop,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Zap,
} from 'lucide-react';

export const Hero3DMockup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(5);
  const [rotateY, setRotateY] = useState(-8);
  const [activeTab, setActiveTab] = useState<'bistro' | 'fitness'>('bistro');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rY = ((x - centerX) / centerX) * 10;
    const rX = -((y - centerY) / centerY) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(5);
    setRotateY(-8);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto py-6 select-none perspective-[1200px]"
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic 3D ambient glows in blue, orange, green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-cyan-500/30 via-orange-500/20 to-emerald-500/25 blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-glow" />

      {/* Floating 3D Rig */}
      <div
        className="transition-transform duration-300 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main Desktop Browser Mockup */}
        <div
          className="relative rounded-3xl bg-slate-900 border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_35px_rgba(6,182,212,0.2)] overflow-hidden transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Top Browser Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/95 border-b border-slate-700 backdrop-blur-md">
            {/* Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-sm" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-3.5 py-1 bg-slate-950/90 border border-slate-700/80 rounded-full text-xs text-slate-300 font-mono max-w-xs w-full justify-center shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">
                https://{activeTab === 'bistro' ? 'artisan-cafemenu.in' : 'apex-fitnesshub.in'}
              </span>
            </div>

            {/* Quick Industry Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-xl border border-slate-700 text-slate-300">
              <button
                type="button"
                onClick={() => setActiveTab('bistro')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                  activeTab === 'bistro' ? 'bg-orange-600 text-white shadow-sm' : 'hover:text-white'
                }`}
              >
                Food
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fitness')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                  activeTab === 'fitness' ? 'bg-blue-600 text-white shadow-sm' : 'hover:text-white'
                }`}
              >
                Gym
              </button>
            </div>
          </div>

          {/* Browser Content Canvas */}
          <div className="bg-slate-950 p-4 sm:p-6 text-white">
            {activeTab === 'bistro' ? (
              <div className="space-y-4">
                {/* Website Header inside mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-sm shadow-md">
                      ☕
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-100">The Artisan Bistro & Café</div>
                      <div className="text-[10px] text-amber-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Open Today · 7:30 AM - 10:30 PM
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918660921597?text=Hi%20Local%20Web%20Solutions!%20I'm%20interested%20in%20a%20restaurant%20website%20with%20WhatsApp%20ordering."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-full shadow-md transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>

                {/* Simulated Website Hero inside mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-gradient-to-r from-slate-900 via-slate-850 to-orange-950/40 p-4 rounded-2xl border border-slate-800">
                  <div className="sm:col-span-8 space-y-1.5">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-orange-400">
                      Food & Hospitality
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                      Specialty Espresso, Sourdough Bakes & Outdoor Dining
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      Full digital menu with instant ordering, dietary flags, and WhatsApp table bookings.
                    </p>
                  </div>
                  <div className="sm:col-span-4 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700/80 text-center">
                    <div className="text-[10px] text-slate-400">Featured Dish</div>
                    <div className="text-xs font-bold text-amber-300">Caramel Cortado</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">⭐ Fresh Batch</div>
                  </div>
                </div>

                {/* Mini Menu Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                    <div className="text-[10px] text-slate-400">Breakfast</div>
                    <div className="text-[11px] font-bold text-white truncate">Avocado Toast</div>
                    <div className="text-[10px] text-amber-400">Fresh Daily</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                    <div className="text-[10px] text-slate-400">Coffee Bar</div>
                    <div className="text-[11px] font-bold text-white truncate">Single Origin</div>
                    <div className="text-[10px] text-amber-400">Arabica Brew</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                    <div className="text-[10px] text-slate-400">Visit Us</div>
                    <div className="text-[11px] font-bold text-white truncate flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-rose-400" /> Main Road
                    </div>
                    <div className="text-[10px] text-cyan-400 font-semibold">Map Pin →</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Fitness Website Mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-sm shadow-md">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-100">Apex Fitness & Crossfit</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Certified Personal Training
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918660921597?text=Hi%20Local%20Web%20Solutions!%20I'm%20interested%20in%20a%20fitness%20website%20with%20class%20schedules."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-full shadow-md transition-transform active:scale-95"
                  >
                    <span>Claim Free Pass</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-950/80 to-slate-900 rounded-2xl border border-blue-900/60 space-y-1.5">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-cyan-300">
                    Gym & Fitness Studio
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                    Transform Your Health with Personalized Coaching
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    High-energy strength classes, mobility sessions, and transparent memberships without lock-ins.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left">
                    <div className="text-[10px] text-cyan-400 font-semibold">Morning HIIT</div>
                    <div className="text-[11px] font-bold text-white">6:00 AM & 7:30 AM</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left">
                    <div className="text-[10px] text-cyan-400 font-semibold">Evening Strength</div>
                    <div className="text-[11px] font-bold text-white">5:30 PM & 7:00 PM</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left">
                    <div className="text-[10px] text-emerald-400 font-semibold">1-Day Pass</div>
                    <div className="text-[11px] font-bold text-white">Instant WhatsApp</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Browser Bottom Status Footer */}
          <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tailored For Your Business</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span>Interactive Architecture Preview</span>
            </div>
          </div>
        </div>

        {/* Floating Mobile Phone Preview (Positioned overlapping right) */}
        <div
          className="hidden sm:block absolute -bottom-6 -right-6 w-52 rounded-[32px] bg-slate-950 p-2.5 border-2 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105"
          style={{ transform: 'translateZ(75px)' }}
        >
          {/* Phone Speaker Notch */}
          <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-slate-700 block" />
          </div>

          {/* Mobile Screen Content */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 text-white space-y-2 text-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-bold text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>Mobile Ready</span>
              </div>
              <span className="text-[9px] text-slate-400">9:41 AM</span>
            </div>

            <div className="bg-slate-800/95 p-2 rounded-xl border border-slate-700 text-left">
              <div className="text-[9px] text-slate-400">Fast Local Search</div>
              <div className="font-bold text-cyan-300 text-[11px]">100% Mobile Ready</div>
              <div className="text-[9px] text-slate-300 mt-0.5">Instant tap-to-call & map directions</div>
            </div>

            <a
              href="https://wa.me/918660921597?text=Hi%20Local%20Web%20Solutions!%20Can%20we%20discuss%20a%20mobile-friendly%20website%20for%20my%20business?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-[10px] shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tap to WhatsApp</span>
            </a>
          </div>

          <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Floating Badge 1: Top Left */}
        <div
          className="absolute -top-4 -left-3 sm:-left-6 bg-slate-900 text-white px-4 py-2.5 rounded-2xl border border-cyan-500/50 shadow-2xl backdrop-blur-md flex items-center gap-3 transition-transform duration-300"
          style={{ transform: 'translateZ(90px)' }}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-inner">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <div className="text-xs font-black text-white flex items-center gap-1">
              Google PageSpeed <span className="text-emerald-400">99+</span>
            </div>
            <div className="text-[10px] text-slate-400">Ultra-Fast Loading</div>
          </div>
        </div>

        {/* Floating Badge 2: Bottom Left */}
        <div
          className="hidden sm:flex absolute -bottom-5 left-6 bg-slate-900 text-white px-3.5 py-2 rounded-2xl border border-orange-500/40 shadow-2xl backdrop-blur-md items-center gap-2"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-[11px] font-bold text-slate-200">
            One-Tap WhatsApp & Call Included
          </div>
        </div>
      </div>
    </div>
  );
};
