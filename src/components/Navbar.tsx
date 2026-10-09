import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { LogoEmblem } from './LogoEmblem';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'services' },
    { label: 'Websites We Build', href: 'websites-we-build' },
    { label: 'Clients & Students', href: 'clients' },
    { label: 'Process', href: 'process' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl p-1"
            aria-label="Local Web Solutions Home"
          >
            <LogoEmblem size={44} variant="mark" />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-900 leading-tight">
                Local <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-black">Web</span>
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.26em] text-slate-500 uppercase leading-none">
                SOLUTIONS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all ${
                    isActive
                      ? 'text-white bg-slate-900 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/90'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Clean WhatsApp Icon Button & Get a Website CTA (No mobile number text) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dedicated WhatsApp Icon Button */}
            <a
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Chat with Local Web Solutions on WhatsApp"
              title="Chat on WhatsApp (+91 8660921597)"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              {/* Subtle animated green pulse indicator */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-300" />
            </a>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs xl:text-sm font-black text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Get a Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp Icon & Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-sm active:scale-95 transition-transform"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-left text-sm font-bold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 text-xs font-bold text-white bg-slate-900 rounded-xl text-center"
            >
              Send an Enquiry Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
