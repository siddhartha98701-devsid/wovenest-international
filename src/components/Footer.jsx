import React, { useState } from 'react';
import { ArrowRight, ArrowUp, Globe, Mail, Phone, Check, Loader2 } from 'lucide-react';
import { scrollTo } from '../hooks/useLenis';
import { subscribeNewsletter } from '../lib/firebase';

export default function Footer({ onOpenInquiry }) {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      await subscribeNewsletter(email);
    } catch (err) {
      console.warn('Newsletter firestore subscription error:', err);
    } finally {
      setIsSubscribing(false);
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 6000);
    }
  };

  return (
    <footer className="relative bg-[#f5f4ef] text-stone-800 border-t border-stone-200/90 pt-16 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden w-full max-w-full">
      {/* ── Top Newsletter Bar (Frosted Glass Card) ── */}
      <div className="max-w-7xl mx-auto pb-14 mb-14 border-b border-stone-200">
        <div className="bg-white/95 backdrop-blur-xl border border-stone-200/90 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-800 font-sans block font-bold">
                EXECUTIVE TEXTILE DISPATCH &bull; PRIVATE REGISTRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                Receive Curated Seasonal Fabric Swatches & LuxeLume Lookbooks
              </h3>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-sans font-medium">
                  <Check size={18} className="text-amber-800" />
                  <span>You have been registered for private export trade dispatches and seasonal swatch rolls.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your buying office or executive email..."
                    className="w-full bg-stone-50/90 border border-stone-300 rounded-full py-4 pr-14 pl-6 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:border-amber-800 focus:bg-white outline-none transition-colors font-sans shadow-2xs"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    aria-label="Subscribe to newsletter"
                    className="absolute right-2 p-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 transition-colors cursor-pointer disabled:bg-stone-700"
                  >
                    {isSubscribing ? (
                      <Loader2 size={16} className="animate-spin text-amber-300" />
                    ) : (
                      <ArrowRight size={16} strokeWidth={1.7} />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Multi-Column Footer Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-200">
        
        {/* Column 1: Parent Brand & Exporter Identity (Span 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex flex-col text-left">
            <span className="font-display text-2xl sm:text-3xl text-stone-900 font-bold tracking-[0.16em]">
              WOVENEST
            </span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-amber-900 font-sans mt-0.5 font-bold">
              INTERNATIONAL &bull; GLOBAL TEXTILE EXPORTERS
            </span>
          </div>

          <p className="text-xs text-stone-600 font-sans leading-relaxed max-w-sm font-normal">
            A premier international textile exporting firm specializing in organic cotton yarns, double-mercerized fabrics, and contract manufacturing for luxury labels worldwide.
          </p>

          <div className="pt-2">
            <div className="text-xs text-stone-700 font-sans">
              <span className="text-stone-900 font-bold">Flagship Clothing Label: </span>
              <span className="text-amber-900 font-display tracking-wider font-bold">LUXELUME</span>
            </div>
            <p className="text-[11px] text-stone-500 italic font-serif mt-1">
              LuxeLume is the registered quiet luxury apparel brand of Wovenest International.
            </p>
          </div>
        </div>

        {/* Column 2: Navigation Links (Span 2) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-sans font-bold">
            Directory
          </h4>
          <ul className="space-y-2.5 text-xs font-sans">
            <li>
              <a
                href="#wovenest-heritage"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#wovenest-heritage');
                }}
                className="text-stone-600 hover:text-stone-900 transition-colors font-medium"
              >
                Textile Heritage
              </a>
            </li>
            <li>
              <a
                href="#brand-bridge"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#brand-bridge');
                }}
                className="text-stone-600 hover:text-stone-900 transition-colors font-medium"
              >
                The Brand Bridge
              </a>
            </li>
            <li>
              <a
                href="#luxelume-collection"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#luxelume-collection');
                }}
                className="text-stone-600 hover:text-stone-900 transition-colors font-medium"
              >
                LuxeLume Apparel
              </a>
            </li>
            <li>
              <a
                href="#craftsmanship"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#craftsmanship');
                }}
                className="text-stone-600 hover:text-stone-900 transition-colors font-medium"
              >
                Global Supply & Reach
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Global Trade & Sourcing (Span 3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-sans font-bold">
            Export Ports & Transit
          </h4>
          <div className="text-xs text-stone-600 font-sans space-y-2.5 leading-relaxed">
            <div className="flex items-start gap-2">
              <Globe size={14} className="text-amber-800 mt-0.5 flex-shrink-0" />
              <span>Consignments shipped to 42+ sovereign ports across EU, UK, US, GCC & APAC.</span>
            </div>
            <div className="pt-1 text-[11px] text-stone-500">
              Primary Outlets: JNPT / Nhava Sheva &bull; Mundra Sea Cargo &bull; IGI Air Cargo Delhi
            </div>
          </div>
        </div>

        {/* Column 4: Private Consultation & Direct Contact (Span 3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-sans font-bold">
            Direct Trade Liaison
          </h4>
          <div className="space-y-3 text-xs font-sans">
            <a
              href="mailto:info@wovenestintl.com"
              className="flex items-center gap-2 text-stone-800 hover:text-amber-900 transition-colors font-medium"
            >
              <Mail size={14} className="text-amber-800 flex-shrink-0" />
              <span>info@wovenestintl.com</span>
            </a>
            <a
              href="tel:+919910945899"
              className="flex items-center gap-2 text-stone-800 hover:text-amber-900 transition-colors font-medium"
            >
              <Phone size={14} className="text-amber-800 flex-shrink-0" />
              <span>+91 9910945899</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenInquiry?.('Private Export Consultation')}
              className="mt-3 block text-left text-[11px] uppercase tracking-wider text-amber-900 underline underline-offset-4 hover:text-amber-950 font-sans font-bold cursor-pointer"
            >
              Schedule Private Consultation &rarr;
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom Bar: Copyright & Back-to-Top ── */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-sans">
        <div>
          &copy; {new Date().getFullYear()} Wovenest International. All rights reserved. Registered Export House &bull; LuxeLume Atelier.
        </div>

        <div className="flex items-center gap-6">
          <span className="hover:text-stone-900 cursor-pointer">Export Terms (CIF/FOB)</span>
          <span className="hover:text-stone-900 cursor-pointer">OEKO-TEX & GOTS Compliance</span>
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="flex items-center gap-1 text-stone-800 hover:text-amber-800 transition-colors ml-4 font-bold cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
