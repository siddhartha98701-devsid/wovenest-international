import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck, Globe2 } from 'lucide-react';
import { scrollTo } from '../hooks/useLenis';
import MagneticBrand from './MagneticBrand';

const NAV_LINKS = [
  { label: 'Textile Heritage', href: '#wovenest-heritage' },
  { label: 'The Brand Bridge', href: '#brand-bridge' },
  { label: 'LuxeLume Apparel', href: '#luxelume-collection' },
  { label: 'Global Export & Reach', href: '#craftsmanship' },
];

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200/90 py-3 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)]'
            : 'bg-[#faf9f6]/90 backdrop-blur-lg border-b border-stone-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Parent Logo Wordmark */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="group flex flex-col no-underline text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl text-stone-900 font-bold tracking-[0.18em] group-hover:text-amber-800 transition-colors">
                  WOVENEST
                </span>
              </div>
              <span className="text-[8px] tracking-[0.28em] uppercase text-stone-500 font-sans font-semibold mt-0.5">
                INTERNATIONAL TEXTILE HOUSE &bull; LUXELUME
              </span>
            </a>
          </div>

          {/* Center: Discrete Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-[11px] uppercase tracking-[0.16em] text-stone-600 hover:text-stone-900 transition-colors duration-200 py-1 font-sans font-semibold group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right: Private Access CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenInquiry?.('General Trade Inquiry')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-[11px] tracking-[0.18em] uppercase font-sans font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>Trade Access</span>
              <ArrowUpRight size={13} className="opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenInquiry?.('Mobile Trade Inquire')}
              className="px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-50 text-[10px] tracking-wider uppercase font-sans font-semibold"
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (White Frosted Glass) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-10 lg:hidden overflow-y-auto"
          >
            <div className="space-y-5 pt-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 block mb-4 font-sans font-bold">
                NAVIGATION DIRECTORY
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-2xl font-serif text-stone-900 hover:text-amber-800 tracking-wide py-2 font-medium"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-stone-200 pt-6 mt-8">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.('Mobile Trade Inquire');
                }}
                className="w-full py-3.5 rounded-full bg-stone-900 text-stone-50 text-center text-xs uppercase tracking-[0.2em] font-sans font-semibold shadow-md mb-4"
              >
                Trade Access / Inquire
              </button>
              <div className="text-[10px] text-stone-500 text-center font-sans tracking-widest uppercase">
                Wovenest International &bull; LuxeLume Clothing Label
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
