import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Award, PackageCheck, ArrowDown, Factory, CheckCircle2 } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { scrollTo } from '../hooks/useLenis';

export default function BrandBridge() {
  return (
    <section
      id="brand-bridge"
      className="relative w-full max-w-full bg-[#faf9f6] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-stone-200/80"
    >
      {/* ── Frosted Glass Architectural Box ── */}
      <div className="relative w-full max-w-7xl mx-auto bg-white/90 backdrop-blur-2xl border border-stone-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Subtle decorative label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-10 border-b border-stone-200 text-[11px] font-mono tracking-[0.22em] text-stone-500 uppercase">
          <span>THE BRAND BRIDGE &bull; PARENT TEXTILE HOUSE TO APPAREL LABEL</span>
          <span className="font-sans text-amber-900 font-bold">100% VERTICALLY INTEGRATED PRODUCTION</span>
        </div>

        {/* Center Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/90 text-amber-900 border border-amber-200/80 text-[10px] tracking-[0.25em] uppercase font-sans mb-6 font-bold shadow-xs">
            <Sparkles size={13} className="text-amber-800" strokeWidth={1.8} />
            <span>THE ATELIER SYNTHESIS</span>
          </div>

          <div className="mb-6 w-full">
            <AnimatedText
              text="From the looms of Wovenest, luxury clothing takes form."
              as="h2"
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.2] tracking-tight"
            />
          </div>

          <p className="max-w-2xl text-stone-600 text-sm sm:text-base font-sans leading-relaxed mb-12 font-normal">
            Unlike standard fashion labels that depend on third-party fabric middlemen, <strong className="text-stone-900 font-semibold">LuxeLume</strong> is vertically integrated with <strong className="text-stone-900 font-semibold">Wovenest International</strong>. Our master tailors have first-tier access to India's finest export-grade double-mercerized Egyptian cotton, organic linen, and custom jacquards.
          </p>

          {/* ── 2 Symmetrical Frosted Glass Cards (Parent vs Sub-Brand) ── */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left mb-14">
            
            {/* Card 1: Wovenest International */}
            <div className="bg-stone-50/80 border border-stone-200/90 rounded-2xl p-8 space-y-4 hover:border-stone-400 transition-all shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-amber-900 font-sans font-bold">
                  PARENT ENTITY
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-stone-800 border border-stone-200 text-[10px] font-mono font-semibold">
                  B2B EXPORT HOUSE
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                Wovenest International
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-normal">
                Global textile exporter supplying bulk rolls of double-mercerized cotton, organic flax, and heritage jacquard weaves directly to luxury fashion ateliers across 42+ sovereign countries.
              </p>
              <div className="pt-3 flex flex-col gap-2.5 text-xs font-sans text-stone-700 border-t border-stone-200/80">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-amber-800 flex-shrink-0" />
                  <span>GOTS & OEKO-TEX Standard 100 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageCheck size={14} className="text-amber-800 flex-shrink-0" />
                  <span>Universal Sea & Air Export Dispatch (CIF/FOB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Factory size={14} className="text-amber-800 flex-shrink-0" />
                  <span>3 Generations of Indian Weaving Mastery</span>
                </div>
              </div>
            </div>

            {/* Card 2: LuxeLume */}
            <div className="bg-white border-2 border-amber-300/80 rounded-2xl p-8 space-y-4 hover:border-amber-400 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-amber-900 font-sans font-bold">
                  FLAGSHIP SUB-BRAND
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100/80 text-amber-950 text-[10px] font-mono font-bold">
                  QUIET LUXURY APPAREL
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                LuxeLume
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-normal">
                The pinnacle of menswear leisure. Tailored exclusively from Wovenest's proprietary 220 GSM double-mercerized cotton, accented with genuine mother-of-pearl buttons and 24K gold tipping.
              </p>
              <div className="pt-3 flex flex-col gap-2.5 text-xs font-sans text-stone-700 border-t border-stone-200/80">
                <div className="flex items-center gap-2">
                  <Scissors size={14} className="text-amber-800 flex-shrink-0" />
                  <span>220 GSM Double-Mercerized Egyptian Cotton</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-800 flex-shrink-0" />
                  <span>Mother-of-Pearl & 24K Gold Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-800 flex-shrink-0" />
                  <span>Bespoke Pre-Shrunk Silken Drape</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── 4-Step Vertical Integration Roadmap ── */}
          <div className="w-full bg-[#f8f7f3] border border-stone-200/90 rounded-2xl p-6 sm:p-8 text-left mb-10">
            <span className="text-[10px] uppercase tracking-[0.24em] text-amber-900 font-sans font-bold block mb-4">
              VERTICAL INTEGRATION JOURNEY: FROM LOOM TO LUXURY LABEL
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <span className="text-[11px] font-mono text-amber-800 font-bold block mb-1">01 / PROVENANCE</span>
                <h5 className="font-serif text-lg text-stone-900 font-normal mb-1">Organic Fiber Selection</h5>
                <p className="text-[11px] text-stone-600 font-sans leading-normal">
                  Sourced from certified organic cotton farms in Gujarat and Varanasi with full traceability.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <span className="text-[11px] font-mono text-amber-800 font-bold block mb-1">02 / SCIENCE</span>
                <h5 className="font-serif text-lg text-stone-900 font-normal mb-1">Double-Mercerization</h5>
                <p className="text-[11px] text-stone-600 font-sans leading-normal">
                  Yarns undergo controlled tension alkali baths to permanently lock in silk luster and form.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <span className="text-[11px] font-mono text-amber-800 font-bold block mb-1">03 / ATELIER</span>
                <h5 className="font-serif text-lg text-stone-900 font-normal mb-1">LuxeLume Tailoring</h5>
                <p className="text-[11px] text-stone-600 font-sans leading-normal">
                  Cut and finished in small atelier batches with hand-stitched collars and custom hardware.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <span className="text-[11px] font-mono text-amber-800 font-bold block mb-1">04 / DISPATCH</span>
                <h5 className="font-serif text-lg text-stone-900 font-normal mb-1">Worldwide Export</h5>
                <p className="text-[11px] text-stone-600 font-sans leading-normal">
                  Dispatched in climate-controlled white-glove containers to luxury boutiques and clients worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Transition indicator */}
          <div
            onClick={() => scrollTo('#luxelume-collection')}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-[11px] uppercase tracking-[0.24em] text-stone-500 group-hover:text-stone-900 transition-colors font-sans font-bold">
              EXPLORE LUXELUME CLOTHING COLLECTION
            </span>
            <div className="w-[1px] h-8 bg-stone-300 relative overflow-hidden">
              <div
                className="w-full h-1/2 bg-stone-900"
                style={{
                  animation: 'pulse-line 1.8s ease-in-out infinite',
                }}
              />
            </div>
            <ArrowDown size={14} className="text-stone-600 group-hover:translate-y-1 transition-transform" />
          </div>

        </div>
      </div>
    </section>
  );
}
