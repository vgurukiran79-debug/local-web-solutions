import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WebsitesWeBuild } from './components/WebsitesWeBuild';
import { ClientsAndSectors } from './components/ClientsAndSectors';
import { ScopePlanner } from './components/ScopePlanner';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');
  const [initialDescriptionForContact, setInitialDescriptionForContact] = useState('');

  // Scrollspy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'services',
        'websites-we-build',
        'clients',
        'process',
        'about',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForContact(service.title);
    setInitialDescriptionForContact(
      `I am interested in having a website built for my business under your ${service.title} offering.`
    );
    scrollToSection('contact');
  };

  const handleSelectWebsiteTypeForEnquiry = (typeName: string) => {
    setSelectedServiceForContact(typeName);
    setInitialDescriptionForContact(
      `I would like to get a ${typeName} built for my business. Can we discuss requirements and timelines?`
    );
    scrollToSection('contact');
  };

  const handleApplyScope = (scopeText: string) => {
    setInitialDescriptionForContact(scopeText);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen text-slate-900 selection:bg-cyan-500 selection:text-white flex flex-col font-sans antialiased">
      {/* 1. Slim, subtle scroll progress bar at top of screen */}
      <ScrollProgressBar />

      {/* 2. Sticky Header Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* 3. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D Mockups */}
        <Hero
          onExploreWork={() => scrollToSection('websites-we-build')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Highlighted Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Websites We Build (Replaces sample/dummy works with concrete types we craft) */}
        <WebsitesWeBuild onSelectTypeForEnquiry={handleSelectWebsiteTypeForEnquiry} />

        {/* Highlighted Client Sectors & Client Guarantees */}
        <ClientsAndSectors />

        {/* Interactive Website Scope & Feature Planner */}
        <ScopePlanner onApplyToContactForm={handleApplyScope} />

        {/* Why Choose Us */}
        <WhyUs />

        {/* Simple 4-Step Process */}
        <Process />

        {/* About Us & FAQs */}
        <About />

        {/* Highlighted Contact Section */}
        <Contact
          initialService={selectedServiceForContact}
          initialDescription={initialDescriptionForContact}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Mobile Sticky Quick Contact Action Bar */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-slate-950/95 backdrop-blur-md rounded-2xl p-2 border border-slate-800 shadow-2xl flex items-center gap-2">
        <a
          href={BUSINESS_INFO.whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 active:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-cyan-600 active:bg-cyan-500 text-white rounded-xl text-xs font-bold shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
