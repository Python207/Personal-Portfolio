import { Compass } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  // Current active scene: 1 = Location, 2 = Journey, 3 = Archive, 4 = Opening/Dissolve
  const [scene, setScene] = useState<1 | 2 | 3 | 4>(1);
  const [scene1Sub, setScene1Sub] = useState<number>(0); // 0=coords, 1=nainital, 2=found
  const [isDissolving, setIsDissolving] = useState(false);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsDissolving(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        handleFinish();
        return;
      }
    }

    // Timeline for complete cinematic intro:
    // 0ms - Scene 1 starts (Coordinates)
    const t1 = setTimeout(() => setScene1Sub(1), 380); // NAINITAL appears
    const t2 = setTimeout(() => setScene1Sub(2), 750); // LOCATION FOUND appears

    // 1150ms - Scene 2: The Journey
    const t3 = setTimeout(() => setScene(2), 1150);

    // 2250ms - Scene 3: Identity & Archival record
    const t4 = setTimeout(() => setScene(3), 2250);

    // 3450ms - Scene 4: Opening Field Notes -> Darkroom Dissolve into Hero
    const t5 = setTimeout(() => {
      setScene(4);
    }, 3450);

    const t6 = setTimeout(() => {
      handleFinish();
    }, 4300);

    // Keyboard listener: Enter or Escape or Space to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0A0E0B] flex flex-col justify-between p-7 sm:p-14 select-none transition-opacity duration-700 ease-out ${
        isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Micro film grain overlay */}
      <div className="absolute inset-0 paper-grain-fine pointer-events-none opacity-25" />

      {/* ── TOP CORNER METADATA ── */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10.5px] sm:text-xs text-white/40 tracking-[0.24em]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C767] animate-pulse" />
          <span>FIELD JOURNAL // ENTRY 001</span>
        </div>
        <div className="hidden sm:block text-white/30">HIMALAYAN EXPEDITION LOG</div>
      </div>

      {/* ── CENTER SCENE CONTAINER ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-2xl mx-auto w-full">
        {/* ═══════════════ SCENE 1: LOCATION ═══════════════ */}
        {scene === 1 && (
          <div className="w-full space-y-6 text-left animate-in fade-in duration-500">
            {/* Coordinates */}
            <div className="space-y-1.5 font-mono text-sm sm:text-base text-[#F5C767] tracking-[0.24em]">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F5C767] animate-spin-slow opacity-80" />
                <span>29.3919° N</span>
              </div>
              <div className="pl-6">79.4542° E</div>
            </div>

            {/* City Name */}
            <div
              className={`transition-all duration-500 ${
                scene1Sub >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FFFDF8] font-normal tracking-[0.14em] uppercase">
                Nainital
              </h2>
            </div>

            {/* Archival Status */}
            <div
              className={`transition-all duration-500 font-mono text-[10.5px] tracking-[0.26em] flex items-center gap-2 ${
                scene1Sub >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: '#72C589' }}
            >
              <span className="w-2 h-0.5 bg-[#72C589]" />
              <span>[ LOCATION FOUND ]</span>
            </div>
          </div>
        )}

        {/* ═══════════════ SCENE 2: THE JOURNEY ═══════════════ */}
        {scene === 2 && (
          <div className="w-full space-y-8 text-left animate-in fade-in duration-500">
            {/* Journal Entry Header */}
            <div className="font-mono text-xs uppercase tracking-[0.26em] text-[#F5C767]">
              FIELD JOURNAL // VOL. 01 — ENTRY 001
            </div>

            {/* Self-drawing journey line: NAINITAL ───────────────→ PILANI */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs sm:text-sm tracking-[0.22em] text-[#FFFDF8]">
                <span>NAINITAL</span>
                <span className="text-[#C25E3E] font-bold">PILANI</span>
              </div>

              {/* Animated drawing line */}
              <div className="relative w-full h-px bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#72C589] via-[#F5C767] to-[#C25E3E] transition-all duration-1000 ease-out"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            {/* Editorial Poetic Note */}
            <div className="font-serif italic text-2xl sm:text-3xl text-[#E8DFC8] leading-snug">
              A curious mind,
              <br />
              leaving the hills.
            </div>
          </div>
        )}

        {/* ═══════════════ SCENE 3: ARCHIVE & IDENTITY ═══════════════ */}
        {scene === 3 && (
          <div className="w-full space-y-6 text-left animate-in fade-in duration-500">
            {/* Header: Mohit Sharma & BITS Pilani '27 */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-bold text-[#F5C767] tracking-[0.25em]">
                MOHIT SHARMA
              </span>
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold tracking-[0.20em] bg-[#F5C767]/15 border border-[#F5C767]/40 text-[#FFE8A3]">
                BITS PILANI '27
              </span>
            </div>

            {/* Archival Field Checklist */}
            <div className="p-4 sm:p-5 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-[11px] sm:text-xs text-[#DDD4BF] space-y-2 max-w-md">
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ ORIGIN</span>
                <span className="text-white/20">.....................</span>
                <span className="text-[#FFFDF8]">NAINITAL</span>
              </div>
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ EDUCATION</span>
                <span className="text-white/20">..................</span>
                <span className="text-[#FFFDF8]">BITS PILANI</span>
              </div>
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ CURIOSITY</span>
                <span className="text-white/20">..................</span>
                <span className="text-[#72C589] font-semibold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ CODE</span>
                <span className="text-white/20">.......................</span>
                <span className="text-[#72C589] font-semibold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ FINANCE</span>
                <span className="text-white/20">....................</span>
                <span className="text-[#72C589] font-semibold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between tracking-wider">
                <span className="text-[#72C589]">✓ BUILDING</span>
                <span className="text-white/20">...................</span>
                <span className="text-[#72C589] font-semibold">ACTIVE</span>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════ SCENE 4: OPENING FIELD NOTES ═══════════════ */}
        {scene === 4 && (
          <div className="w-full text-center space-y-3 animate-in fade-in duration-300">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#E8DFC8]">
              OPENING FIELD NOTES...
            </div>
            <div className="font-serif italic text-sm text-[#F5C767]/70">
              "An unfinished map of a journey."
            </div>
          </div>
        )}
      </div>

      {/* ── BOTTOM BAR: SKIP CONTROL & KEYBOARD HINT ── */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10.5px] sm:text-xs text-white/40">
        <span className="hidden sm:inline tracking-wider">
          PRESS <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">ENTER</kbd> TO SKIP
        </span>

        {/* Discoverable skip button */}
        <button
          type="button"
          onClick={handleFinish}
          className="ml-auto flex items-center gap-1.5 text-white/60 hover:text-[#F5C767] tracking-[0.22em] uppercase transition-colors px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
        >
          <span>SKIP INTRO</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CinematicIntro;
