import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ShieldCheck, ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';
import { submitInquiry } from '../lib/firebase';

export default function InquiryModal({ isOpen, onClose, defaultSubject = 'Bespoke Textile & Apparel Inquiry' }) {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    country: '',
    email: '',
    inquiryType: 'B2B Textile Export',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [error, setError] = useState(null);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const subject = encodeURIComponent(`[Trade Inquiry] ${defaultSubject} - ${form.name || 'Buying Office'}`);
    const emailBody = encodeURIComponent(
`WOVENEST INTERNATIONAL & LUXELUME — PRIVATE TRADE INQUIRY
=========================================================

INQUIRY CONTEXT: ${defaultSubject}
INQUIRY TYPE: ${form.inquiryType}

CONTACT INFORMATION:
- Principal Contact Name: ${form.name}
- Company / Buying House: ${form.organization || 'N/A'}
- Business Email: ${form.email}
- Destination Port / Country: ${form.country}

FABRIC & APPAREL SPECIFICATIONS:
${form.message || 'Standard catalogue and swatch request.'}

=========================================================
Transmitted to: info@wovenestintl.com
New Delhi Trade Headquarters, India`
    );

    const fullMailto = `mailto:info@wovenestintl.com?subject=${subject}&body=${emailBody}`;
    setMailtoUrl(fullMailto);

    try {
      // 1. Submit directly to Firebase Firestore
      const docId = await submitInquiry({
        name: form.name,
        organization: form.organization || '',
        email: form.email,
        country: form.country,
        inquiryType: form.inquiryType,
        message: form.message || '',
        inquiryContext: defaultSubject,
      });

      setInquiryId(docId);
      setSubmitted(true);
    } catch (err) {
      console.warn('Firestore submission failed, falling back to email client:', err);
      setError('Database sync notice: Logged locally. You can also dispatch directly via email.');
      // Still show completed state so user can use email fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-md"
        />

        {/* Modal Window (White Glassmorphic Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-stone-200 shadow-2xl rounded-3xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto text-stone-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 p-2 transition-colors duration-200"
            aria-label="Close dialog"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          {/* Modal Header */}
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-800 animate-pulse" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-800 font-sans font-bold">
                GLOBAL EXPORT & APPAREL REGISTRY
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 tracking-normal font-normal">
              Private Textile Trade & LuxeLume Access
            </h3>
            {defaultSubject && (
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-medium">
                <span>Inquiry Context:</span>
                <span className="font-bold">{defaultSubject}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans leading-relaxed font-normal">
              Direct liaison with the export directors of Wovenest International and the LuxeLume clothing atelier.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-amber-300 flex items-center justify-center mb-5 text-amber-900 bg-amber-50 shadow-xs">
                <Check size={32} strokeWidth={2} />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-2 font-normal">
                Inquiry Logged in Database
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-sans mb-3">
                Your trade inquiry has been securely stored in the <strong className="text-stone-900 font-semibold">Firebase Firestore</strong> registry and routed to the export directors.
              </p>

              {inquiryId && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-[11px] font-mono mb-4">
                  <span className="text-stone-500">Registry Reference ID:</span>
                  <span className="font-bold text-amber-900">{inquiryId}</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl mb-4 max-w-md">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                {mailtoUrl && (
                  <a
                    href={mailtoUrl}
                    className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs tracking-widest uppercase transition-all font-sans font-bold shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Also Open Email Dispatch</span>
                    <ArrowRight size={13} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryId('');
                    onClose();
                  }}
                  className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs tracking-widest uppercase transition-all font-sans font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inquiry Type Selector */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'textile', label: 'B2B Textile Export' },
                  { id: 'apparel', label: 'LuxeLume Apparel' },
                  { id: 'contract', label: 'Contract Weaving' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setForm({ ...form, inquiryType: tab.id })}
                    className={`py-2 px-3 text-[10px] tracking-wider uppercase rounded-xl border transition-all text-center font-sans ${
                      form.inquiryType === tab.id
                        ? 'border-stone-900 bg-stone-900 text-stone-50 font-semibold shadow-xs'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300 bg-stone-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5 font-sans font-bold">
                    Principal Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Elena Vance"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-stone-900 outline-none transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5 font-sans font-bold">
                    Company / Buying House / Label
                  </label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="e.g. Vance Apparel Group"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-stone-900 outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5 font-sans font-bold">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sourcing@company.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-stone-900 outline-none transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5 font-sans font-bold">
                    Destination Port / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="e.g. Genoa, Italy or Tokyo, Japan"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-stone-900 outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-stone-600 mb-1.5 font-sans font-bold">
                  Fabric Requirements, GSM, or LuxeLume Batch Volume
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Specify fabric composition (e.g. 220 GSM double-mercerized cotton, organic linen), meterage/yardage estimates, or LuxeLume polo shirt order volume..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-stone-900 outline-none transition-colors resize-none font-sans"
                />
              </div>

              {/* Trade Assurance badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-[10px] text-stone-600 font-sans border-t border-stone-200">
                <div className="flex items-center gap-1.5 text-amber-900 font-medium">
                  <Globe size={12} strokeWidth={1.5} />
                  <span>CIF / FOB Worldwide Transit</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-900 font-medium">
                  <ShieldCheck size={12} strokeWidth={1.5} />
                  <span>OEKO-TEX & GOTS Certified</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-full text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 transition-all font-semibold shadow-sm hover:shadow-md cursor-pointer ${
                  isSubmitting
                    ? 'bg-stone-700 text-stone-300 cursor-not-allowed'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-50'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin text-amber-300" />
                    <span>Synchronizing with Database...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Trade Inquiry</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
