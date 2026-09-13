import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface OpeningCoverProps {
  onOpen: () => void;
  isOpen: boolean;
  canOpen?: boolean;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ onOpen, isOpen, canOpen = true }) => {
  const [phase, setPhase] = useState<'quiet' | 'ink' | 'ready'>('quiet');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('ink'), 200);
    const t2 = setTimeout(() => setPhase('ready'), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Direct keyboard listener on OpeningCover to guarantee Enter and Space always open the notebook
  useEffect(() => {
    if (isOpen || !canOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, canOpen, onOpen]);

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0B0F0C] flex flex-col justify-between selection:bg-[#C25E3E]/30 selection:text-white">

      {/* ── 1. 4K HD WIDESCREEN PHOTOGRAPHIC CANVAS ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Responsive Widescreen Composition */}
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/photos/nainital-widescreen-hd.jpg"
          />
          <img
            src="/photos/mohit-nainital-hd.jpg"
            alt="Mohit above Nainital with sunset, lake, and mountains"
            className="w-full h-full object-cover object-[center_30%] md:object-cover transition-transform duration-1000 ease-out"
          />
        </picture>

        {/* ── SOPHISTICATED MULTI-STOP SCRIM TRANSITION ── */}
        {/* Smooth, non-linear cubic easing from deep mountain charcoal into the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(11, 15, 12, 0.94) 0%, rgba(11, 15, 12, 0.88) 22%, rgba(11, 15, 12, 0.62) 40%, rgba(11, 15, 12, 0.22) 58%, rgba(11, 15, 12, 0.05) 75%, transparent 90%)',
          }}
        />

        {/* Ambient warm sunset radial glow over the horizon */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 86% 22%, rgba(245, 199, 103, 0.16) 0%, transparent 60%)',
          }}
        />

        {/* Subtle top & bottom edge atmospheric vignetting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11, 15, 12, 0.55) 0%, transparent 18%, transparent 82%, rgba(11, 15, 12, 0.65) 100%)',
          }}
        />
      </div>

      {/* ── 2. TOP AMBIENT BAR ── */}
      <header
        className={`relative z-20 w-full px-6 sm:px-12 pt-6 sm:pt-8 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-[0.22em] transition-all duration-700 ${phase === 'quiet' ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        style={{ color: 'rgba(255, 250, 238, 0.95)' }}
      >
        <div className="flex items-center gap-2.5">
          <Compass className="w-4 h-4 text-[#F5C767] animate-spin-slow" />
          <span className="font-medium drop-shadow-md">29.3919° N, 79.4542° E — NAINITAL</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C767] animate-pulse" />
          <span className="hidden sm:inline drop-shadow-md opacity-90">FIELD JOURNAL // VOL. 01</span>
        </div>
      </header>

      {/* ── 3. LOWER-LEFT EDITORIAL BLOCK (BALANCED & PROPORTIONED) ── */}
      <main
        className={`relative z-30 pointer-events-auto px-6 sm:px-12 lg:px-16 pb-6 sm:pb-10 max-w-xl lg:max-w-2xl transition-all duration-700 ${phase !== 'ready' ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'
          }`}
      >
        {/* Label row with glowing BITS Pilani badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3.5 font-mono text-[11px] uppercase tracking-wider">
          <span className="font-bold text-[#F5C767] tracking-[0.25em] drop-shadow-md">
            MOHIT SHARMA
          </span>
          <span className="text-white/40">·</span>
          <span className="text-[#E8DFC8] tracking-[0.16em] drop-shadow-md">
            A curious mind from the hills
          </span>
          <span className="text-white/40">·</span>

          {/* BITS Pilani '27 glowing embossed badge */}
          <a
            href="https://www.bits-pilani.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] font-bold tracking-[0.20em] shadow-md transition-all hover:scale-105 group cursor-pointer pointer-events-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 199, 103, 0.25) 0%, rgba(212, 160, 40, 0.35) 100%)',
              color: '#FFE8A3',
              border: '1px solid rgba(245, 199, 103, 0.70)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 0 16px rgba(245, 199, 103, 0.30)',
            }}
            title="Visit BITS Pilani Official Website (https://www.bits-pilani.ac.in/)"
          >
            <img
              src="/logos/bits-pilani-logo.png"
              alt="BITS Pilani Crest"
              className="w-3.5 h-3.5 object-contain"
            />
            <span>BITS PILANI '27</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#F5C767] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Editorial Title */}
        <h1
          className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.08] text-[#FFFDF8] mb-2.5 drop-shadow-lg"
          style={{ letterSpacing: '-0.02em' }}
        >
          Field Notes<br />
          <span className="italic font-normal text-[#E8DFC8]">from a Journey.</span>
        </h1>

        {/* Handwritten subtitle in rich mountain green */}
        <div
          className="handwritten-note text-xl sm:text-2xl text-[#72C589] mb-4 font-semibold drop-shadow-md"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)' }}
        >
          Nainital → Pilani → wherever curiosity takes me.
        </div>

        {/* Human Narrative Descriptor */}
        <p className="font-sans text-xs sm:text-[14px] text-[#DDD3BF] leading-relaxed mb-6 max-w-md drop-shadow-md">
          A boy from the mountains stepped into an unfamiliar universe. One dream closed in a medical
          board room. A hundred other doors opened through code, finance, and startups.
        </p>

        {/* ── 4. REFINED EDITORIAL ENTRY BUTTON ── */}
        <div className="flex flex-wrap items-center gap-4 relative z-30 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpen();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpen();
            }}
            className="group relative z-30 flex items-center gap-3 px-6 py-3.5 rounded-[6px] font-mono text-xs tracking-[0.16em] font-bold transition-all duration-300 hover:shadow-2xl active:scale-[0.98] cursor-pointer pointer-events-auto touch-manipulation hover:bg-white border border-white/60 hover:border-[#C25E3E] text-[#131A15]"
            style={{
              background: '#FAF7F0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.45)',
            }}
            title="Enter Mohit Sharma's Field Notes Journal"
          >
            {/* Subtle decorative left page-edge line */}
            <span className="w-1.5 h-3.5 rounded-full bg-[#C25E3E] group-hover:bg-[#C25E3E] transition-colors" />

            <span className="tracking-[0.16em]">OPEN THE NOTEBOOK</span>

            {/* Restrained arrow with page flip glyph */}
            <span className="flex items-center gap-1 text-[#C25E3E]">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </button>

          {/* Keyboard shortcut hint that is also clickable */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpen();
            }}
            className="font-mono text-[11px] text-[#D4CBB5]/90 hover:text-white flex items-center gap-1.5 drop-shadow-md cursor-pointer pointer-events-auto transition-colors group"
            title="Press Enter to Open"
          >
            <span>or press</span>
            <kbd className="px-2 py-0.5 rounded-[4px] bg-black/50 border border-white/25 text-[#FFFDF8] font-semibold text-[10px] backdrop-blur-sm shadow-xs group-hover:border-[#F5C767] group-hover:text-[#F5C767] transition-colors">
              Enter
            </kbd>
          </button>
        </div>
      </main>

      {/* ── 5. BOTTOM SIGNATURE ── */}
      <footer
        className={`relative z-10 pointer-events-none w-full px-6 sm:px-12 pb-4 sm:pb-6 flex items-center justify-between font-mono text-[10.5px] text-[#D4CBB5]/60 tracking-wider transition-all duration-700 ${phase === 'quiet' ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
      >
        <span>MOHIT SHARMA // PERSONAL PORTFOLIO</span>
        <span className="hidden sm:inline">BITS PILANI · GRADUATING 2027</span>
      </footer>

    </div>
  );
};

export default OpeningCover;
