import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Feather, Check, Scissors, Layers } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { LUXELUME_COLLECTION } from '../data/wovenest-data';

function LuxeLumeApparelCard({ product, onSelect }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="group flex flex-col bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-300/80 hover:-translate-y-1">
      {/* ── Product Photography Container ── */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7f6f2] flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={`${product.name} - ${product.colorway}`}
          className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.2em] text-stone-700 font-sans px-3 py-1 rounded-full bg-white/95 border border-stone-200/80 font-bold shadow-2xs">
            {product.category}
          </span>
        </div>

        {/* LuxeLume Royal Monogram Seal Badge */}
        <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-lg overflow-hidden border border-amber-300/90 shadow-xs bg-stone-950 p-0.5 group-hover:scale-105 transition-transform">
          <img
            src="/images/luxelume_logo.jpg"
            alt="LuxeLume Monogram Seal"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Colorway Pill */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-stone-200/80 shadow-2xs">
          <span
            className="w-2.5 h-2.5 rounded-full border border-stone-300 shadow-2xs"
            style={{ backgroundColor: product.accentColor }}
          />
          <span className="text-[10px] uppercase tracking-wider text-stone-800 font-sans font-semibold">
            {product.colorway}
          </span>
        </div>
      </div>

      {/* ── Card Content Information ── */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white border-t border-stone-100">
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal group-hover:text-amber-900 transition-colors">
              {product.name}
            </h4>
            <span className="text-[10px] uppercase tracking-wider text-amber-900 font-mono font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
              {product.priceText.includes('Reserve') ? 'RESERVE' : 'BESPOKE'}
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-sans mb-3 font-semibold">
            {product.fabric}
          </p>

          <p className="text-xs text-stone-600 line-clamp-2 font-sans leading-relaxed mb-4 font-normal">
            {product.description}
          </p>

          {/* Interactive Size Selector */}
          <div className="mb-5 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans font-bold">
                Select Sizing Matrix:
              </span>
              <span className="text-[10px] font-mono text-amber-800 font-semibold">
                Size {selectedSize} Selected
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`w-8 h-8 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer flex items-center justify-center ${
                    selectedSize === sz
                      ? 'bg-stone-900 text-stone-50 shadow-xs scale-105'
                      : 'bg-stone-50 text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights & Inquire action */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-stone-600 font-sans">
            <Feather size={13} className="text-amber-800 flex-shrink-0" />
            <span className="truncate max-w-[150px]">{product.silhouette}</span>
          </div>
          <button
            type="button"
            onClick={() => onSelect(product, selectedSize)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-[10px] uppercase tracking-[0.18em] transition-all font-sans font-bold shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LuxeLumeSpotlight({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'Complete Atelier Collection' },
    { id: 'JEWEL', label: 'Royal Jewel Palette' },
    { id: 'HERITAGE', label: 'Heritage Classics' },
  ];

  const filteredCollection = LUXELUME_COLLECTION.filter((item) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'JEWEL') return item.category.includes('JEWEL');
    if (activeFilter === 'HERITAGE') return item.category.includes('HERITAGE');
    return true;
  });

  const handleCardClick = (product, size = 'M') => {
    onOpenInquiry?.(`LuxeLume Order: ${product.name} in ${product.colorway} (Size: ${size})`);
  };

  return (
    <section
      id="luxelume-collection"
      className="relative min-h-screen w-full max-w-full bg-[#faf9f6] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-stone-200/80"
    >
      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200/80">
          <div className="flex items-start gap-5">
            {/* Official LuxeLume Logo Emblem */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl overflow-hidden shadow-md border border-amber-300/80 bg-stone-950 flex-shrink-0 p-1">
              <img
                src="/images/luxelume_logo.jpg"
                alt="LuxeLume Royal Monogram Emblem"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              {/* Sub-brand Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 mb-2 shadow-2xs">
                <Sparkles size={11} className="text-amber-800" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-bold">
                  FLAGSHIP CLOTHING LABEL BY WOVENEST &bull; QUIET ROYALTY
                </span>
              </div>

              {/* Sub-Brand Title (Cinzel) */}
              <h3 className="font-display text-4xl sm:text-6xl font-normal text-stone-900 tracking-[0.16em] mb-1">
                LUXELUME
              </h3>

              {/* Sub-headline */}
              <AnimatedText
                text="Bespoke Menswear & Double-Mercerized Organic Cotton"
                as="h4"
                className="font-serif text-2xl sm:text-3xl text-stone-700 font-normal tracking-tight"
              />
            </div>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4 font-normal">
              Engineered with 220 GSM double-mercerized organic cotton, mother-of-pearl hardware, and bespoke architectural drape. Crafted in limited atelier runs and exported to luxury clients worldwide.
            </p>
            <button
              type="button"
              onClick={() => onOpenInquiry?.('LuxeLume Wholesale Lookbook & Private Client Matrix')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-[11px] tracking-[0.18em] uppercase font-sans font-bold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Request Lookbook & Sizing Matrix</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* ── Interactive Category Filter Tabs ── */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-stone-900 text-stone-50 font-bold shadow-sm'
                  : 'bg-white text-stone-700 border border-stone-200/90 hover:border-stone-400 font-medium'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="text-[11px] text-stone-500 font-mono ml-auto">
            Showing {filteredCollection.length} bespoke pieces
          </span>
        </div>
      </div>

      {/* ── Lookbook Grid (Responsive 3-Column with Clean Spacing) ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCollection.map((product) => (
          <LuxeLumeApparelCard
            key={product.id}
            product={product}
            onSelect={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}
