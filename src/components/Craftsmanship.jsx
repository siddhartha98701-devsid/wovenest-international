import React from 'react';
import { ShieldCheck, Globe, Truck, Award, Layers } from 'lucide-react';
import Counter from './Counter';
import AnimatedText from './AnimatedText';
import { EXPORT_METRICS, CRAFTSMANSHIP_PILLARS } from '../data/wovenest-data';

export default function Craftsmanship({ onOpenInquiry }) {
  return (
    <section
      id="craftsmanship"
      className="relative min-h-screen w-full max-w-full bg-[#faf9f6] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-stone-200/80"
    >
      {/* ── Section Title & Global Metrics Bar ── */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[10px] tracking-[0.25em] uppercase font-sans mb-4 font-bold shadow-2xs">
            <Globe size={13} className="text-amber-800" strokeWidth={1.7} />
            <span>GLOBAL TEXTILE EXPORT EXCELLENCE</span>
          </div>

          <AnimatedText
            text="Craftsmanship & International Reach"
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal mb-4 tracking-tight"
          />

          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-normal">
            From the hereditary weaving clusters of Varanasi, Surat, and Coimbatore to leading luxury fashion labels in Milan, Paris, London, Tokyo, and New York—Wovenest International delivers verified textile export integrity.
          </p>
        </div>

        {/* ── 4 Stat Cards with Rolling Counters ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EXPORT_METRICS.map((metric, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-2xl p-7 flex flex-col items-center sm:items-start text-center sm:text-left shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="num-metric text-4xl sm:text-5xl lg:text-6xl text-amber-900 font-light leading-none mb-3">
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={2}
                />
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-stone-900 font-sans font-bold mb-1.5 leading-snug">
                {metric.label}
              </div>
              <p className="text-xs text-stone-500 font-sans leading-relaxed font-normal">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Two-Column Layout: Sticky Left Text + Right Image Stack ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Sticky Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="border-l-2 border-amber-800 pl-5">
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-800 font-mono block mb-1 font-bold">
                THE EXPORT PROTOCOL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                Vertical Weaving Mastery Calibrated for Global Trade
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-normal">
              Every Wovenest fabric batch and LuxeLume apparel order undergoes an exhaustive export verification protocol: raw fiber testing, double-mercerization, shade-matching spectroscopy, and export container staging.
            </p>

            {/* Trade Accreditations Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-200/80">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <ShieldCheck size={16} className="text-amber-800 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-800 font-sans font-bold">OEKO-TEX 100</div>
                  <div className="text-[9px] text-stone-500 font-sans">Tested non-toxic</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <Truck size={16} className="text-amber-800 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-800 font-sans font-bold">CIF / FOB Export</div>
                  <div className="text-[9px] text-stone-500 font-sans">Worldwide shipping</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <Award size={16} className="text-amber-800 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-800 font-sans font-bold">GOTS Certified</div>
                  <div className="text-[9px] text-stone-500 font-sans">Organic cotton yarns</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <Layers size={16} className="text-amber-800 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-800 font-sans font-bold">ISO 9001:2015</div>
                  <div className="text-[9px] text-stone-500 font-sans">Export QA audited</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenInquiry?.('Export Director Consultation')}
                className="w-full py-4 px-6 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-[0.18em] font-sans transition-all duration-300 text-center font-bold shadow-md hover:shadow-lg cursor-pointer"
              >
                Consult an Export Director
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Pillars */}
        <div className="lg:col-span-7 space-y-6">
          {CRAFTSMANSHIP_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/70">
                <span className="font-serif text-2xl text-amber-900 font-normal">
                  {pillar.number}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono font-bold">
                  {pillar.tag}
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/60">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase tracking-[0.18em] text-amber-800 font-sans block font-bold">
                  {pillar.subtitle}
                </span>
                <h4 className="font-serif text-2xl text-stone-900 font-normal leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-normal">
                  {pillar.description}
                </p>
                <div className="pt-1 text-[11px] text-stone-500 italic font-serif">
                  &bull; {pillar.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
