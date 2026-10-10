import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Compass, Layers, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { scrollTo } from '../hooks/useLenis';

export default function Hero({ onOpenInquiry }) {
  return (
    <section
      id="wovenest-heritage"
      className="relative min-h-screen w-full max-w-full flex flex-col justify-center bg-[#faf9f6] pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* ── Soft Architectural Gradient Atmosphere ── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-amber-100/30 via-stone-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* ── Main Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Editorial Header Metadata Bar (Properly spaced from navbar) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mb-12 border-b border-stone-200/80 text-[11px] tracking-[0.22em] uppercase font-sans text-stone-600">
          <div className="flex items-center gap-2 font-medium">
            <Globe2 size={14} className="text-amber-800" strokeWidth={1.7} />
            <span>GLOBAL TEXTILE EXPORT HOUSE &bull; NEW DELHI</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-stone-500">
            <Compass size={14} className="text-amber-800" strokeWidth={1.7} />
            <span>EXPORTING TO 42+ SOVEREIGN NATIONS</span>
          </div>
        </div>

        {/* ── Main Hero Editorial Content ── */}
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow badge (Crisp Pill with Warm Border) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-stone-200/90 mb-8 shadow-xs backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
            <span className="text-[10px] tracking-[0.24em] uppercase text-stone-800 font-sans font-bold">
              GOVERNMENT-RECOGNIZED EXPORT FIRM &bull; HERITAGE WEAVING
            </span>
          </motion.div>

          {/* Brand Wordmark (Cinzel Display with Generous Letterspacing) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-center"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-stone-900 tracking-[0.22em] leading-none">
              WOVENEST
            </h1>
          </motion.div>

          {/* Sub-label under brand mark */}
          <div className="text-[11px] sm:text-xs tracking-[0.32em] uppercase text-amber-900 font-sans font-bold mb-8">
            INTERNATIONAL TEXTILE EXPORTS &bull; PARENT HOUSE OF LUXELUME APPAREL
          </div>

          {/* Clean Editorial Headline */}
          <div className="w-full max-w-3xl mb-6">
            <AnimatedText
              text="Crafting Global Heritage. Exporting Textile Excellence."
              as="h2"
              delay={0.2}
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.2] tracking-tight"
            />
          </div>

          {/* Subtext highlighting exporter status & clothing sub-brand */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-stone-600 text-sm sm:text-base font-sans leading-relaxed mb-10 font-normal"
          >
            Headquartered in New Delhi with vertical weaving clusters across India, <strong className="text-stone-900 font-semibold">Wovenest International</strong> is a premier export firm shipping certified organic cotton yarns, double-mercerized fabrics, and bespoke textiles across 42+ countries. Under our parent banner, we engineer <strong className="text-amber-900 font-semibold">LuxeLume</strong>—our flagship quiet luxury clothing label.
          </motion.p>

          {/* Action CTAs (Bold, Distinct, Beautifully Spaced) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              type="button"
              onClick={() => onOpenInquiry?.('B2B Textile Export Inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>B2B Export Catalogue</span>
              <ArrowRight size={14} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#luxelume-collection')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 hover:border-stone-800 text-xs uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 shadow-xs hover:shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore LuxeLume Clothing</span>
            </button>
          </motion.div>
        </div>

        {/* ── Glassmorphic Visual Showcase Panel (With Verified Local Imagery) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-5xl bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.07)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Panel 1: Royal Jewel Palette */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 group flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f4f2ec] flex items-center justify-center p-4">
                <img
                  src="/images/polo_navy.png"
                  alt="LuxeLume Royal Navy Sovereign Polo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white/95 border-t border-stone-200/60">
                <span className="text-[10px] uppercase tracking-[0.22em] text-amber-800 font-sans font-bold block mb-1">
                  01 &bull; ROYAL JEWEL PALETTE
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  Premium Mercerized Polos
                </h4>
                <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
                  220 GSM double-mercerized organic cotton with gold monogram embroidery, exported in bespoke atelier runs worldwide.
                </p>
              </div>
            </div>

            {/* Panel 2: Flagship Clothing (LuxeLume) */}
            <div className="relative rounded-2xl overflow-hidden bg-[#faf8f4] border-2 border-amber-300/80 group shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f7f5ef] flex items-center justify-center p-4 relative">
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] uppercase font-mono font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  FLAGSHIP
                </span>
                <img
                  src="/images/polo_white.png"
                  alt="LuxeLume Sovereign Polo in Royal White"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white border-t border-amber-200/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-amber-800 font-sans font-bold">
                    02 &bull; LUXELUME APPAREL
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-600 font-mono font-semibold">220 GSM</span>
                </div>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  The Sovereign Polo
                </h4>
                <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
                  Engineered with double-mercerized Egyptian cotton, 24K gold accents, and a permanent, flawless silken drape.
                </p>
              </div>
            </div>

            {/* Panel 3: Global Export Logistics */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 group flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f4f2ec] flex items-center justify-center p-4">
                <img
                  src="/images/portfolio.png"
                  alt="Global Air and Sea Cargo Export Logistics"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white/95 border-t border-stone-200/60">
                <span className="text-[10px] uppercase tracking-[0.22em] text-amber-800 font-sans font-bold block mb-1">
                  03 &bull; GLOBAL DISPATCH
                </span>
                <h4 className="font-serif text-xl text-stone-900 font-normal">
                  42+ Sovereign Nations
                </h4>
                <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
                  Universal CIF and FOB export container consignments dispatched directly through JNPT, Mundra, and IGI Air Cargo.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom assurance strip */}
          <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-800 flex-shrink-0" />
              <span className="font-medium">GOTS & OEKO-TEX Standard 100 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-amber-800 flex-shrink-0" />
              <span className="font-medium">Double-Mercerized Pre-Shrunk Finish</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber-800 flex-shrink-0" />
              <span className="font-medium">Universal CIF / FOB Export Documentation</span>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('#brand-bridge')}
              className="inline-flex items-center gap-1.5 text-stone-900 hover:text-amber-800 font-bold text-xs uppercase tracking-wider transition-colors ml-auto cursor-pointer"
            >
              <span>Explore The Brand Bridge</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
