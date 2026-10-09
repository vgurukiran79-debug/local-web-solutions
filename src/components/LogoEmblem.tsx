import React from 'react';

interface LogoEmblemProps {
  className?: string;
  size?: number;
  variant?: 'badge' | 'mark' | 'full';
  showSubtext?: boolean;
}

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  className = '',
  size = 56,
  variant = 'mark',
  showSubtext = true,
}) => {
  // SVG Icon Representation of the uploaded Local Web Solutions Emblem
  const renderIconMark = (s: number) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Local Web Solutions Emblem"
    >
      <defs>
        {/* Outer Ring Gradients */}
        <linearGradient id="ringGlowGrad" x1="10" y1="10" x2="190" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="45%" stopColor="#3B82F6" />
          <stop offset="70%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        <linearGradient id="ringStrokeGrad" x1="0" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="30%" stopColor="#2563EB" />
          <stop offset="70%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>

        {/* Ribbon Left: Cyan to Blue */}
        <linearGradient id="ribbonLeftGrad" x1="50" y1="35" x2="80" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="35%" stopColor="#00D2FF" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>

        {/* Ribbon Center: Blue through Gold/Orange */}
        <linearGradient id="ribbonCenterGrad" x1="60" y1="105" x2="135" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="25%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>

        {/* Ribbon Right: Magenta/Purple */}
        <linearGradient id="ribbonRightGrad" x1="115" y1="65" x2="155" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="40%" stopColor="#D946EF" />
          <stop offset="80%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Floating Sphere Dot */}
        <radialGradient id="sphereDotGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="40%" stopColor="#0284C7" />
          <stop offset="85%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>

        {/* Dark Disk Radial Glow */}
        <radialGradient id="diskGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1A2238" />
          <stop offset="70%" stopColor="#0B0F19" />
          <stop offset="100%" stopColor="#05070D" />
        </radialGradient>

        {/* Filters */}
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="ribbonShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Dark Outer Disk */}
      <circle cx="100" cy="100" r="95" fill="url(#diskGlow)" />

      {/* Neon Glow Outer Rings */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#ringStrokeGrad)"
        strokeWidth="3.5"
        filter="url(#softGlow)"
        opacity="0.95"
      />
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#ringGlowGrad)"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Ribbon Group with 3D Depth */}
      <g filter="url(#ribbonShadow)">
        {/* Left 'L' Stem */}
        <path
          d="M 60 38 
             C 69 38 76 45 76 54 
             L 76 82 
             C 76 96 66 106 52 106 
             C 42 106 38 98 42 90 
             C 45 84 50 82 56 75
             L 56 54 
             C 56 45 52 38 60 38 Z"
          fill="url(#ribbonLeftGrad)"
          opacity="0.96"
        />

        {/* Main 3D Ribbon Twist Wave ('W' ribbon loop) */}
        {/* Bottom fold shadow */}
        <path
          d="M 44 86 
             C 40 96 48 108 64 108 
             C 82 108 94 92 104 80 
             L 118 64 
             C 126 55 136 60 140 70 
             C 146 84 136 104 122 108 
             C 108 112 96 102 90 94"
          stroke="#050811"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Fold: Cyan-to-Blue lower sweep */}
        <path
          d="M 52 48
             L 52 82
             C 52 98 64 108 78 108
             C 92 108 104 96 114 84
             L 124 72"
          stroke="url(#ribbonLeftGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fold: Gold to Orange arched mid loop */}
        <path
          d="M 76 104
             C 86 106 98 98 108 84
             L 122 66
             C 130 55 142 56 148 66
             C 152 74 150 84 144 94
             L 136 104"
          stroke="url(#ribbonCenterGrad)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Fold: Magenta to Purple right rise */}
        <path
          d="M 122 70
             C 130 58 142 60 148 70
             C 154 80 152 94 144 104
             L 134 112
             C 126 118 118 114 118 106
             C 118 98 126 90 134 82"
          stroke="url(#ribbonRightGrad)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Upper 3D Glossy Floating Sphere */}
        <circle cx="152" cy="46" r="9.5" fill="url(#sphereDotGrad)" />
        {/* Specular Highlight on Sphere */}
        <circle cx="149" cy="43" r="3.2" fill="#FFFFFF" opacity="0.85" />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIconMark(size)}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center p-3 rounded-full bg-[#080C16] border border-cyan-500/30 shadow-[0_12px_40px_rgba(0,210,255,0.15)] group ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 blur-md pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {renderIconMark(Math.round(size * 0.62))}
          <div className="mt-1">
            <span className="text-white font-extrabold tracking-tight text-xs block leading-none">
              Local <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Web</span>
            </span>
            <span className="text-[7px] font-bold tracking-[0.25em] text-slate-300 block uppercase mt-0.5">
              SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    );
  }

  // variant === 'full' (Mark + Clean Horizontal Brand Lockup)
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className="relative">
        {renderIconMark(size)}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors flex items-center gap-1 leading-tight">
          Local <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">Web</span>
        </span>
        <span className="text-[9px] md:text-[10px] font-extrabold tracking-[0.22em] text-slate-500 uppercase leading-none mt-0.5">
          SOLUTIONS
        </span>
        {showSubtext && (
          <span className="hidden sm:inline-block text-[10px] text-slate-400 tracking-normal mt-0.5 font-medium">
            Websites <span className="text-cyan-500 font-bold">•</span> Digital Solutions <span className="text-cyan-500 font-bold">•</span> AI
          </span>
        )}
      </div>
    </div>
  );
};
