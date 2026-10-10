import React, { useState } from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBridge from './components/BrandBridge';
import LuxeLumeSpotlight from './components/LuxeLumeSpotlight';
import Craftsmanship from './components/Craftsmanship';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // State for Private Trade & Specification Inquiry Modal
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  const handleOpenInquiry = (subject = 'Bespoke Textile & Apparel Inquiry') => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-amber-100 selection:text-stone-900 relative overflow-x-hidden font-body w-full max-w-full">
      {/* ── Fixed Minimalist Glassmorphism Navigation Bar ── */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* ── Master Page Sections ── */}
      <main className="relative z-10 w-full max-w-full">
        {/* Section B: Hero Section — Wovenest International (Textile Exporter) */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Section C: The Brand Bridge & Synergy to LuxeLume */}
        <BrandBridge />

        {/* Section D: LuxeLume Flagship Apparel Collection */}
        <LuxeLumeSpotlight onOpenInquiry={handleOpenInquiry} />

        {/* Section E: Craftsmanship & Global Export Reach */}
        <Craftsmanship onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Section F: Minimalist White Royal Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* ── Private Trade & Architectural Specification Modal ── */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultSubject={inquirySubject}
      />
    </div>
  );
}
