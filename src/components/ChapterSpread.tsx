import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ALL_ARTIFACTS } from '../data/artifacts';
import { ChapterMeta } from '../data/chapters';

interface ChapterSpreadProps {
  chapter: ChapterMeta;
  chapterIndex: number;
  totalChapters: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectChapter: (idx: number) => void;
  onOpenArtifacts: () => void;
  onOpenCaseStudy: (id: string) => void;
  flipDir: 'left' | 'right' | null;
  isTurning: boolean;
}

export const ChapterSpread: React.FC<ChapterSpreadProps> = ({
  chapter,
  chapterIndex,
  totalChapters,
  onNext,
  onPrev,
  onSelectChapter,
  onOpenArtifacts,
  onOpenCaseStudy,
  flipDir,
  isTurning,
}) => {
  const [showCraftDepth, setShowCraftDepth] = useState(false);

  // Filter contextual artifacts for current chapter
  const contextualArtifacts = ALL_ARTIFACTS.filter(a => {
    if (chapter.id === 'origin')
      return a.id === 'national-cricket' || a.id === 'youtube-creator' || a.id === 'nainital-roots';
    if (chapter.id === 'bits')
      return a.id === 'bits-blockchain' || a.id === 'pm-club';
    if (chapter.id === 'dream')
      return a.id === 'nda-air207' || a.id === 'rd-parade';
    if (chapter.id === 'break')
      return a.id === 'pectus-carinatum' || a.id === 'offgrid-recovery';
    if (chapter.id === 'reset')
      return a.id === 'spartans-society' || a.id === 'bits-topper';
    if (chapter.id === 'drdo')
      return a.id === 'drdo' || a.id === 'drdo-best-intern';
    if (chapter.id === 'yc-curiosity')
      return a.id === 'bite-tribe' || a.id === 'ema-apm';
    if (chapter.id === 'weekday')
      return a.id === 'weekday' || a.id === 'swiggy';
    if (chapter.id === 'finance')
      return (
        a.id === 'nrb-bearings' ||
        a.id === 'investoquest-champ' ||
        a.id === 'black-litterman' ||
        a.id === 'bits-topper'
      );
    if (chapter.id === 'rejections')
      return a.id === 'placement-unit' || a.id === 'da-strategies';
    if (chapter.id === 'jodo')
      return a.id === 'jodo' || a.id === 'openrtb';
    if (chapter.id === 'now')
      return a.id === 'financial-nlp' || a.id === 'bloom' || a.id === 'pharma-pipeline';
    return false;
  });

  // Reset expanded tabs when chapter changes
  useEffect(() => {
    setShowCraftDepth(false);
  }, [chapter.id]);

  // Derive chapter accent theme
  const accentColor =
    chapter.colorTone === 'mountain'
      ? '#234E3D'
      : chapter.colorTone === 'terracotta'
        ? '#A3482C'
        : chapter.colorTone === 'dark'
          ? '#3D3833'
          : '#7A622A';

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 relative select-none">

      {/* ── THE PHYSICAL OPEN BOOK CONTAINER (ANTIQUE JOURNAL CRAFT & FIXED GEOMETRY) ── */}
      <div
        className="relative bg-[#FAF6ED] border border-[#CBBDA0] rounded-2xl h-auto md:h-[min(710px,calc(100vh-140px))] md:min-h-[580px] flex flex-col justify-between book-stacked-edges overflow-visible"
      >
        {/* Subtle physical paper grain layer */}
        <div className="absolute inset-0 paper-grain-fine pointer-events-none opacity-45 z-0 rounded-2xl" />

        {/* ── PHYSICAL CHAPTER INDEX TABS ON RIGHT EDGE (ANTIQUE GILDED BRASS TABS) ── */}
        <div className="hidden lg:flex flex-col absolute -right-[34px] top-6 gap-1 z-30 pointer-events-auto">
          {Array.from({ length: totalChapters }).map((_, idx) => {
            const isActive = chapterIndex === idx;
            const tabNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectChapter(idx);
                }}
                disabled={isTurning}
                className={`w-[38px] py-1 text-[10.5px] font-mono font-bold rounded-r-md border border-l-0 transition-all text-center cursor-pointer ${isActive
                  ? 'bg-gradient-to-r from-[#F5E7C4] via-[#E8D49F] to-[#D4B56C] text-[#2C1805] border-[#BFA055] shadow-[0_2px_8px_rgba(150,110,35,0.32)] translate-x-2 ring-1 ring-[#F6E5B8] font-extrabold'
                  : 'bg-[#EDE4CD] text-[#6B573D] hover:text-[#171717] hover:bg-[#F6EED9] border-[#CFC0A0] hover:translate-x-0.5'
                  }`}
                title={`Jump to Folio ${tabNum}`}
              >
                {tabNum}
              </button>
            );
          })}
        </div>

        {/* ── CENTER BOOK SPINE CREASE & SHADOW (ANTIQUE WAXED STITCH BINDING) ── */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-20 pointer-events-none gutter-shadow">
          <div className="w-full h-full book-spine-crease opacity-45" />
          <div className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 border-l border-dashed border-[#5C4528]/25" />
        </div>

        {/* ── 3D TURNING LEAF OVERLAYS ── */}
        {isTurning && flipDir === 'right' && (
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 z-40 animate-turn-next rounded-r-2xl overflow-hidden bg-[#F1E9D7] border-l border-black/10 pointer-events-none">
            <div className="absolute inset-0 turning-shading-next" />
            <div className="absolute inset-0 paper-grain-fine opacity-70" />
            <div className="p-8 font-hand text-xl text-[#6B5E4D] opacity-40 rotate-[-1deg]">
              turning the page...
            </div>
          </div>
        )}

        {isTurning && flipDir === 'left' && (
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 z-40 animate-turn-prev rounded-l-2xl overflow-hidden bg-[#F1E9D7] border-r border-black/10 pointer-events-none">
            <div className="absolute inset-0 turning-shading-next" />
            <div className="absolute inset-0 paper-grain-fine opacity-70" />
            <div className="p-8 font-hand text-xl text-[#6B5E4D] opacity-40 rotate-[1deg]">
              turning back...
            </div>
          </div>
        )}

        {/* ── THE TWO-PAGE EDITORIAL SPREAD ── */}
        <div
          className={`relative z-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-black/[0.08] h-full overflow-hidden ${isTurning ? '' : 'page-settle'
            }`}
        >
          {/* ═══════════════ LEFT PAGE: THE HUMAN STORY (ANTIQUE TEA-STAINED PARCHMENT) ═══════════════ */}
          <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full overflow-hidden antique-paper-left">
            {/* Top Fixed Header Info */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-between mb-1">
                <div
                  className="font-mono text-[10.5px] uppercase tracking-[0.24em] font-bold"
                  style={{ color: accentColor }}
                >
                  CHAPTER {chapter.number} // {chapter.badge || 'FIELD LOG'}
                </div>
                <div className="font-mono text-[9.5px] text-[#7A6E5F] hidden sm:block">
                  {chapter.location}
                </div>
              </div>

              <h2
                className="font-serif text-2xl sm:text-3xl text-[#1C1814] font-normal leading-[1.12] mb-1 tracking-tight"
              >
                {chapter.title}
              </h2>

              <div className="font-serif text-xs sm:text-sm font-normal italic mb-2 text-[#5E5140]">
                "{chapter.subtitle}"
              </div>

              {/* ── BITS PILANI OFFICIAL BADGE & PORTAL LINK ── */}
              {chapter.id === 'bits' && (
                <div className="mb-2">
                  <a
                    href="https://www.bits-pilani.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#8C6D33]/40 bg-[#FAF7F0]/95 hover:bg-white hover:border-[#8C6D33] shadow-2xs transition-all group"
                    title="Visit BITS Pilani Official Portal (https://www.bits-pilani.ac.in/)"
                  >
                    <img
                      src="/logos/bits-pilani-logo.png"
                      alt="BITS Pilani Crest"
                      className="h-4 sm:h-[18px] w-auto object-contain"
                    />
                    <div className="h-3 w-px bg-black/15" />
                    <span className="font-mono text-[10px] text-[#5C4528] group-hover:text-[#171717] flex items-center gap-1 font-semibold">
                      <span>bits-pilani.ac.in</span>
                      <ArrowUpRight className="w-3 h-3 text-[#8C6D33] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              )}

              {/* ── JODO OFFICIAL BADGE & WEBSITE LINK ── */}
              {chapter.id === 'jodo' && (
                <div className="mb-2">
                  <a
                    href="https://www.jodo.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#D1C4A5] bg-[#FAF7F0]/90 hover:bg-white hover:border-[#C25E3E]/50 shadow-2xs transition-all group"
                    title="Visit Jodo Official Website (https://www.jodo.in/)"
                  >
                    <img
                      src="/logos/jodo-logo.png"
                      alt="Jodo Logo"
                      className="h-3.5 sm:h-4 w-auto object-contain"
                    />
                    <div className="h-3 w-px bg-black/15" />
                    <span className="font-mono text-[10px] text-[#5C5042] group-hover:text-[#171717] flex items-center gap-1 font-semibold">
                      <span>jodo.in</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C25E3E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              )}

              {/* ── DRDO OFFICIAL BADGE & PORTAL LINK ── */}
              {chapter.id === 'drdo' && (
                <div className="mb-2">
                  <a
                    href="https://drdo.gov.in/drdo/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#A7C8B3] bg-[#FAF7F0]/90 hover:bg-white hover:border-[#234E3D]/50 shadow-2xs transition-all group"
                    title="Visit DRDO Official Portal (https://drdo.gov.in/)"
                  >
                    <img
                      src="/logos/drdo-logo.png"
                      alt="DRDO Emblem"
                      className="h-4 sm:h-[18px] w-auto object-contain"
                    />
                    <div className="h-3 w-px bg-black/15" />
                    <span className="font-mono text-[10px] text-[#234E3D] group-hover:text-[#171717] flex items-center gap-1 font-semibold">
                      <span>drdo.gov.in</span>
                      <ArrowUpRight className="w-3 h-3 text-[#234E3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              )}

              {/* ── WEEKDAY (YC W21) OFFICIAL BADGE & WEBSITE LINK ── */}
              {chapter.id === 'weekday' && (
                <div className="mb-2">
                  <a
                    href="https://www.weekday.works/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-black/20 bg-[#1C1F1E] hover:bg-black shadow-2xs transition-all group"
                    title="Visit Weekday (YC W21) Official Website (https://www.weekday.works/)"
                  >
                    <img
                      src="/logos/weekday-logo.png"
                      alt="Weekday Logo"
                      className="h-3.5 sm:h-4 w-auto object-contain rounded-xs"
                    />
                    <div className="h-3 w-px bg-white/20" />
                    <span className="font-mono text-[10px] text-[#FAF7F0] group-hover:text-white flex items-center gap-1 font-semibold">
                      <span>weekday.works</span>
                      <ArrowUpRight className="w-3 h-3 text-[#E6C36A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              )}

              {/* ── D+A STRATEGIES & BITS PLACEMENT UNIT OFFICIAL BADGES ── */}
              {chapter.id === 'rejections' && (
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.da-strategies.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-black/20 bg-[#0F141C] hover:bg-black shadow-2xs transition-all group"
                    title="Visit D+A Strategies Official Website (https://www.da-strategies.com/)"
                  >
                    <img
                      src="/logos/da-strategies-logo.png"
                      alt="D+A Strategies Logo"
                      className="h-3.5 sm:h-4 w-auto object-contain"
                    />
                    <div className="h-3 w-px bg-white/20" />
                    <span className="font-mono text-[10px] text-[#EDE8DD] group-hover:text-white flex items-center gap-1 font-semibold">
                      <span>da-strategies.com</span>
                      <ArrowUpRight className="w-3 h-3 text-[#E6C36A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/placement-unit-bits-pilani-pilani-campus/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#0A66C2]/30 bg-[#FAF7F0]/95 hover:bg-white hover:border-[#0A66C2] shadow-2xs transition-all group"
                    title="Visit BITS Pilani Placement Unit on LinkedIn"
                  >
                    <img
                      src="/logos/bits-pilani-logo.png"
                      alt="BITS Pilani Placement Unit"
                      className="h-3.5 sm:h-4 w-auto object-contain"
                    />
                    <div className="h-3 w-px bg-black/15" />
                    <span className="font-mono text-[10px] text-[#0A66C2] group-hover:text-[#004182] flex items-center gap-1 font-semibold">
                      <span>Placement Unit LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Middle Scrollable/Fitted Story Body */}
            <div className="flex-1 overflow-y-auto pr-1 custom-parchment-scrollbar space-y-3 my-1">
              {/* CHAPTER 01: ORIGIN */}
              {chapter.id === 'origin' && (
                <div className="space-y-3">
                  <div className="relative inline-block w-full">
                    <div className="absolute -left-2 top-2 handwritten-note text-xs text-[#5C5042] -rotate-12 hidden lg:block">
                      <span>Same mountains,</span>
                      <br />
                      <span className="text-[#234E3D] font-semibold">different views.</span>
                    </div>

                    <div className="polaroid-frame p-2 rounded-lg rotate-[-1deg] transition-all hover:rotate-0 duration-300 relative shadow-2xs">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 washi-tape rotate-[1deg] z-20" />
                      <div className="overflow-hidden rounded-sm bg-[#EFECE6] border border-black/10">
                        <img
                          src="/photos/mohit-nainital-landscape.jpg"
                          alt="Mohit above Nainital lake"
                          className="w-full h-36 sm:h-40 object-cover object-[center_38%] rounded-sm"
                        />
                      </div>
                      <div className="pt-1.5 px-1 flex items-center justify-between text-[#5C5042]">
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-black/40">
                          Himalayan Foothills · 2,084 m
                        </span>
                        <span className="handwritten-note text-sm text-[#234E3D]">
                          Above Naini Lake 2024
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 font-sans text-xs text-[#352D24] leading-relaxed">
                    <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                      I grew up in Nainital, where the mountains were both the ceiling and the sanctuary.
                    </p>
                    <p>
                      Life in the hills gave me room to breathe and observe. In school, ambition started to take
                      shape through discipline and small wins—captaining our cricket squad into the national finals,
                      and editing videos on pacing and storytelling.
                    </p>
                  </div>

                  <div
                    className="p-2 rounded-lg border border-[#B6D4C0]/60 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 245, 238, 0.70)', color: '#234E3D' }}
                  >
                    "Small town. Big mountains. An appetite for difficult things."
                  </div>
                </div>
              )}

              {/* CHAPTER 02: BITS */}
              {chapter.id === 'bits' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  {/* Credential Badge with BITS Pilani Crest */}
                  <div className="polaroid-frame p-2 rounded-lg rotate-[-0.5deg]">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-sm bg-white border border-black/10 flex items-center justify-center p-1.5 shadow-2xs flex-shrink-0">
                        <img
                          src="/logos/bits-pilani-logo.png"
                          alt="BITS Pilani Crest"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-0.5 font-mono text-[10px]">
                        <div className="font-bold text-[#171717] tracking-wider uppercase">
                          BITS PILANI // PILANI CAMPUS
                        </div>
                        <div className="text-[10px] text-[#7A622A] font-bold">
                          INSTITUTE OF EMINENCE
                        </div>
                        <div className="text-[9px] text-[#5C5042]">
                          Engineering &amp; Finance Minor · Class of 2027
                        </div>
                        <div className="handwritten-note text-xs text-[#7A622A]">
                          "Stepping into an unfamiliar universe."
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    I thought I was arriving in Rajasthan. I had no idea I was stepping into another universe.
                  </p>
                  <p>
                    I walked into BITS Pilani straight from a quiet mountain town. Everywhere I looked, people were
                    building things I didn't even have names for: neural network architectures, quant trading models,
                    YC applications, open-source compilers.
                  </p>
                  <p>
                    Everyone seemed to already have their domain carved out. I wasn't sure what mine was yet. The gap
                    felt enormous. Instead of retreating, that initial disorientation forced me to ask honest questions:
                    <em> What do I actually care about when the noise is stripped away?</em>
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#DDD3BF] handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(245, 238, 226, 0.70)', color: '#A3482C' }}
                  >
                    "Uncertainty isn't an obstacle; it's an empty notebook waiting for ink."
                  </div>
                </div>
              )}

              {/* CHAPTER 03: DREAM */}
              {chapter.id === 'dream' && (
                <div className="space-y-3">
                  <div className="polaroid-frame p-2 rounded-lg rotate-[1deg]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/photos/mohit-formal.png"
                        alt="Mohit formal portrait"
                        className="w-16 h-24 object-cover rounded-sm border border-black/10"
                      />
                      <div className="space-y-1 font-mono text-[11px]">
                        <div className="font-bold text-[#171717] tracking-wider uppercase text-[10px]">
                          RECOMMENDATION FILE // IAF
                        </div>
                        <div className="text-[10.5px] text-[#7A622A] font-semibold">
                          UPSC NDA EXAM — AIR 207
                        </div>
                        <div className="text-[9.5px] text-[#5C5042]">
                          CPSS Pilot Spatial Test: CLEARED
                        </div>
                        <div className="handwritten-note text-xs text-[#A3482C]">
                          "Fighter-pilot stream recommendation."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 font-sans text-xs text-[#352D24] leading-relaxed">
                    <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                      I had one dream that burned brighter than everything else.
                    </p>
                    <p>
                      I wanted to become an officer in the Armed Forces and fly supersonic fighter aircraft.
                      I cleared the 5-day SSB, passed the Computerised Pilot Selection System (CPSS), and
                      secured <strong>AIR 207 in UPSC NDA</strong> out of over 600,000 candidates nationwide.
                    </p>
                  </div>
                  <div className="p-2 rounded-lg border border-black/10 bg-white/70 font-mono text-[10px] text-[#5C5042]">
                    <span className="font-bold text-[#171717]">CLEARANCE STATUS:</span> RECOMMENDED FOR FLYING BRANCH · PILOT APTITUDE 100%
                  </div>
                </div>
              )}

              {/* CHAPTER 04: BREAK */}
              {chapter.id === 'break' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    Then came the final medical board at the Air Force Central Medical Establishment.
                  </p>
                  <p>
                    I was diagnosed with <em>pectus carinatum</em>—a minor chest wall variation that poses no day-to-day
                    limitation, but generates disqualifying structural risks under sustained high-G supersonic maneuvers.
                  </p>
                  <p>
                    In an instant, the singular dream I had poured every waking hour of high school into was gone. No
                    appeal, no re-examination. Sitting under the quiet night sky in Pilani, I had to confront who I was
                    when the uniform was taken off the table.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-black/15 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 230, 225, 0.70)', color: '#44403C' }}
                  >
                    "When the sky closes, you discover how deep your roots can grow."
                  </div>
                </div>
              )}

              {/* CHAPTER 05: RESET */}
              {chapter.id === 'reset' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    You don't rebuild a life with grand declarations. You rebuild it course by course.
                  </p>
                  <p>
                    My first-year grades had suffered under the emotional fallout. I made a pact with myself:
                    no excuses, no self-pity. I engineered strict daily study rituals, rebuilt my GPA into merit
                    scholarship standing, and founded <strong>Spartans Society</strong> to coach peers preparing for
                    defense selections and high-pressure interviews.
                  </p>
                  <p>
                    Helping 100+ students find clarity taught me something foundational: true agency is not what
                    happens to you, but how quickly you can turn a setback into structured service.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#D8CEBA] handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(247, 243, 232, 0.80)', color: '#7A622A' }}
                  >
                    "Discipline is the quiet bridge between heartbreak and mastery."
                  </div>
                </div>
              )}

              {/* CHAPTER 06: DRDO (WITH OFFICIAL DRDO CREDENTIALS BADGE) */}
              {chapter.id === 'drdo' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  {/* Credential Badge with DRDO Logo */}
                  <div className="polaroid-frame p-2 rounded-lg rotate-[0.5deg]">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-16 rounded-sm bg-white border border-black/10 flex items-center justify-center p-1 shadow-2xs flex-shrink-0">
                        <img
                          src="/logos/drdo-logo.png"
                          alt="DRDO Official Emblem"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-0.5 font-mono text-[10px]">
                        <div className="font-bold text-[#171717] tracking-wider uppercase">
                          DEFENSE R&amp;D ORGANISATION // NEW DELHI
                        </div>
                        <div className="text-[10px] text-[#234E3D] font-bold">
                          AWARDED: BEST INTERN
                        </div>
                        <div className="text-[9px] text-[#5C5042]">
                          Flight Telemetry &amp; Bio-Risk Research
                        </div>
                        <div className="handwritten-note text-xs text-[#234E3D]">
                          "Reduced telemetry ingestion latency -40%."
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    If I couldn't sit inside the cockpit, I would engineer the telemetry that keeps pilots alive.
                  </p>
                  <p>
                    At the Defense Research &amp; Development Organisation in New Delhi, I analyzed 10,000+ records of
                    physiological stress data and flight telemetry. I engineered predictive classification pipelines to
                    detect spatial disorientation before cognitive threshold failure occurred.
                  </p>
                  <p>
                    Out of all research interns across the establishment, I was awarded <strong>"Best Intern"</strong> for
                    reducing telemetry ingestion latency by 40% and increasing predictive system reliability.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#B6D4C0]/60 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 245, 238, 0.70)', color: '#234E3D' }}
                  >
                    "In defense systems, edge cases are not bugs—they are mission-critical lives."
                  </div>
                </div>
              )}

              {/* CHAPTER 07: YC CURIOSITY */}
              {chapter.id === 'yc-curiosity' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    My real education was happening at 2:00 AM outside the lecture halls.
                  </p>
                  <p>
                    I became obsessed with early Y Combinator essays, founder post-mortems, and the mechanics of 0-to-1
                    product discovery. Why do tiny, resource-constrained teams out-execute massive corporate incumbents?
                  </p>
                  <p>
                    I didn't just read about it—I started prototyping. I designed <strong>BiteTribe</strong>, a late-night
                    campus food ordering network, and drafted comprehensive product teardowns for AI agents at <strong>Ema APM</strong>.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#E8C5AF]/70 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(250, 238, 230, 0.75)', color: '#A3482C' }}
                  >
                    "Speed is not about rushing; speed is about eliminating the friction of hesitation."
                  </div>
                </div>
              )}

              {/* CHAPTER 08: WEEKDAY (WITH OFFICIAL WEEKDAY CREDENTIALS BADGE) */}
              {chapter.id === 'weekday' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  {/* Credential Badge with Weekday Logo */}
                  <div className="polaroid-frame p-2 rounded-lg rotate-[-0.5deg]">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-sm bg-[#1C1F1E] border border-black/10 flex items-center justify-center p-2 shadow-2xs flex-shrink-0">
                        <img
                          src="/logos/weekday-logo.png"
                          alt="Weekday Logo"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="space-y-0.5 font-mono text-[10px]">
                        <div className="font-bold text-[#171717] tracking-wider uppercase">
                          WEEKDAY // YC W21 BATCH
                        </div>
                        <div className="text-[10px] text-[#A3482C] font-bold">
                          FOUNDER'S OFFICE · BANGALORE
                        </div>
                        <div className="text-[9px] text-[#5C5042]">
                          GTM Outbound &amp; Growth Automations
                        </div>
                        <div className="handwritten-note text-xs text-[#A3482C]">
                          "+18% QoQ Revenue Growth · INR 85L+ MRR"
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    Sitting directly at the Founder's Desk in Bangalore.
                  </p>
                  <p>
                    At Weekday (YC W21 AI Recruiting Platform), there were no corporate layers. I worked side-by-side with
                    the founders, writing automation scripts, monitoring candidate conversion funnels, and building cohort
                    retention dashboards.
                  </p>
                  <p>
                    I helped drive an <strong>18% QoQ top-line revenue leap</strong> past INR 85L+ MRR, learning how fast-paced
                    startups test hypotheses in hours rather than weeks and connect code directly to business outcomes.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#E8C5AF]/70 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(250, 238, 230, 0.75)', color: '#A3482C' }}
                  >
                    "Startups don't reward perfection; they reward relentless iteration."
                  </div>
                </div>
              )}

              {/* CHAPTER 09: FINANCE */}
              {chapter.id === 'finance' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    The club that rejected me taught me more than anything else.
                  </p>
                  <p>
                    When I was rejected from the campus finance society in first year, I decided to master corporate finance
                    independently. I studied valuation frameworks, DCF modeling, and quantitative portfolio management.
                  </p>
                  <p>
                    The outcome? I won the <strong>InvestoQuest National Championship twice</strong> across India, ranked
                    <strong> #2 in Corporate Valuation</strong> and <strong>#5 in Portfolio Management</strong> across BITS Pilani,
                    and completed institutional equity initiation coverage for NRB Bearings.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#DDD3BF] handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(245, 238, 226, 0.75)', color: '#7A622A' }}
                  >
                    "The most constructive answer to rejection is undeniable competence."
                  </div>
                </div>
              )}

              {/* CHAPTER 10: REJECTIONS (WITH D+A STRATEGIES & BITS PLACEMENT CREDENTIALS) */}
              {chapter.id === 'rejections' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  {/* Credential Badges with D+A Strategies and BITS Placement Unit Logos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="polaroid-frame p-2 rounded-lg rotate-[0.5deg]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-sm bg-[#0E131A] border border-black/10 flex items-center justify-center p-1.5 shadow-2xs flex-shrink-0">
                          <img
                            src="/logos/da-strategies-logo.png"
                            alt="D+A Strategies Logo"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="space-y-0.5 font-mono text-[9px] min-w-0">
                          <div className="font-bold text-[#171717] tracking-wider uppercase truncate">
                            D+A STRATEGIES // DUBAI
                          </div>
                          <div className="text-[9.5px] text-[#7A622A] font-bold truncate">
                            CAPITAL MARKETS
                          </div>
                          <div className="text-[8.5px] text-[#5C5042] truncate">
                            Institutional Profiles
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="polaroid-frame p-2 rounded-lg rotate-[-0.5deg]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-sm bg-white border border-black/10 flex items-center justify-center p-1 shadow-2xs flex-shrink-0">
                          <img
                            src="/logos/bits-pilani-logo.png"
                            alt="BITS Pilani Placement Unit"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="space-y-0.5 font-mono text-[9px] min-w-0">
                          <div className="font-bold text-[#171717] tracking-wider uppercase truncate">
                            PLACEMENT CORE COMMITTEE
                          </div>
                          <div className="text-[9.5px] text-[#0A66C2] font-bold truncate">
                            BITS PILANI
                          </div>
                          <div className="text-[8.5px] text-[#5C5042] truncate">
                            Operations &amp; Outreach
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    When automated campus portals filter you out before a human sees your name.
                  </p>
                  <p>
                    During placement cycles, college database filters restricted candidate shortlists by rigid branch tags.
                    Dozens of high-impact engineering and finance roles closed automatically.
                  </p>
                  <p>
                    Instead of accepting automated gatekeeping, I built direct proof-of-work repositories, cold-emailed founders
                    with tailored problem teardowns, and served on the campus Placement Core Committee to assist hundreds of
                    peers navigating the same harsh hiring climate.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-black/15 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 230, 225, 0.75)', color: '#44403C' }}
                  >
                    "Standard portals are built for ordinary paths. For everything else, build direct proof."
                  </div>
                </div>
              )}

              {/* CHAPTER 11: JODO */}
              {chapter.id === 'jodo' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    When someone gives you an opportunity based on what you can build.
                  </p>
                  <p>
                    At Jodo (Tiger Global / Elevation / Matrix backed $19M fintech), I build backend &amp; product engineering
                    pipelines for the "Collect" B2B platform, powering automated recurring mandates for 5,000+ merchants.
                  </p>
                  <p>
                    Managing ₹30,000 Cr+ in processed transaction volume demands absolute architectural resilience. I architect
                    distributed Celery task pipelines, Redis state synchronizations, and secure REST endpoints where zero-failure
                    is the only acceptable standard.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#B8D1DE]/80 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 245, 250, 0.75)', color: '#1E4B5E' }}
                  >
                    "When transaction volume enters thousands of crores, precision is non-negotiable."
                  </div>
                </div>
              )}

              {/* CHAPTER 12: NOW */}
              {chapter.id === 'now' && (
                <div className="space-y-3 font-sans text-xs text-[#352D24] leading-relaxed">
                  <p className="font-serif text-xs sm:text-[13px] italic text-[#171717]">
                    Not a one-line resume summary. A human being driven by curiosity and craft.
                  </p>
                  <p>
                    From a quiet Himalayan town in Nainital to the flight line of Air Force selection, from self-taught
                    valuation models to scaling high-throughput fintech infrastructure at Jodo, every chapter has reinforced
                    the same conviction:
                  </p>
                  <p>
                    I thrive at the messy intersection of product strategy, rigorous engineering, and high-velocity execution.
                    Ready to build enduring systems with exceptional people.
                  </p>
                  <div
                    className="p-2.5 rounded-lg border border-[#B6D4C0]/60 handwritten-note text-sm sm:text-base text-center"
                    style={{ background: 'rgba(235, 245, 238, 0.70)', color: '#234E3D' }}
                  >
                    "The journal remains open. The map is still being drawn."
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Fixed Navigation Bar on Left Page */}
            <div className="pt-2 border-t border-black/[0.08] flex items-center justify-between font-mono text-[11px] text-[#5E5140] flex-shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                disabled={chapterIndex === 0 || isTurning}
                className={`flex items-center gap-1.5 transition-colors ${chapterIndex === 0
                  ? 'opacity-25 cursor-not-allowed'
                  : 'hover:text-[#171717] hover:underline cursor-pointer'
                  }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Chapter</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: i === 0 ? accentColor : 'rgba(0,0,0,0.15)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════ RIGHT PAGE: ARTIFACTS & EVIDENCE (ANTIQUE AGED PARCHMENT) ═══════════════ */}
          <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full overflow-hidden antique-paper-right">
            {/* Top Fixed Header on Right Page */}
            <div className="flex items-center justify-between mb-2 flex-shrink-0">
              <div
                className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-bold"
                style={{ color: accentColor }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>NOTES &amp; FIELD ARTIFACTS</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenArtifacts();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-b from-[#942C1B] to-[#781B0E] hover:from-[#A23321] hover:to-[#862011] text-[#FFF8ED] font-mono text-[10.5px] font-bold shadow-[0_2px_8px_rgba(133,35,23,0.30)] hover:shadow-[0_4px_12px_rgba(133,35,23,0.42)] transition-all cursor-pointer group border border-[#E28E78]/50 ring-1 ring-[#D8593A]/30"
                title="Open verified 40-item artifacts dossier"
              >
                <FileText className="w-3 h-3 text-[#FDE047]" />
                <span>Dossier [40]</span>
                <ArrowUpRight className="w-3 h-3 text-[#FDE047] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Middle Scrollable/Fitted Artifacts Container */}
            <div className="flex-1 overflow-y-auto pr-1 custom-parchment-scrollbar space-y-2.5 my-1">
              {/* CHAPTER 01 CARDS WITH THUMBNAILS */}
              {chapter.id === 'origin' ? (
                <div className="space-y-2.5">
                  {/* Card 1: Cricket */}
                  <div className="p-3 rounded-xl border border-black/[0.08] bg-white/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#234E3D]/10 text-[#234E3D] font-bold border border-[#234E3D]/20">
                        ATHLETIC DISCIPLINE
                      </span>
                      <h4 className="font-sans font-bold text-xs sm:text-[12.5px] text-[#171717] leading-snug">
                        National Cricket Championship — Runner-up
                      </h4>
                      <p className="text-[10.5px] text-[#5C5042] leading-relaxed">
                        Captained tactical field alignments and high-pressure run-chases across multi-state fixtures to secure 2nd nationwide.
                      </p>
                      <div className="grid grid-cols-3 gap-1 pt-1 border-t border-black/[0.05] font-mono text-[9.5px]">
                        <div>
                          <div className="text-[7px] uppercase text-black/40">POSITION</div>
                          <div className="font-bold text-[#171717]">2nd Nationwide</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">ROLE</div>
                          <div className="font-bold text-[#171717]">Captain</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">FORMAT</div>
                          <div className="font-bold text-[#171717]">Multi-State</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-14 h-18 rounded-md overflow-hidden border border-black/10 shadow-2xs flex-shrink-0 bg-stone-100">
                      <img
                        src="/photos/thumb-cricket.jpg"
                        alt="Cricket"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card 2: YouTube Creator */}
                  <div className="p-3 rounded-xl border border-black/[0.08] bg-white/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C25E3E]/10 text-[#C25E3E] font-bold border border-[#C25E3E]/20">
                        STORYTELLING &amp; MEDIA
                      </span>
                      <h4 className="font-sans font-bold text-xs sm:text-[12.5px] text-[#171717] leading-snug">
                        YouTube Creator — "The Mid Over"
                      </h4>
                      <p className="text-[10.5px] text-[#5C5042] leading-relaxed">
                        Built cricket storytelling channel to 1K+ subscribers and 300K+ top video views, editing in DaVinci Resolve.
                      </p>
                      <div className="grid grid-cols-3 gap-1 pt-1 border-t border-black/[0.05] font-mono text-[9.5px]">
                        <div>
                          <div className="text-[7px] uppercase text-black/40">VIEWS</div>
                          <div className="font-bold text-[#171717]">300,000+</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">SUBSCRIBERS</div>
                          <div className="font-bold text-[#171717]">1,000+</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">EDITING</div>
                          <div className="font-bold text-[#171717]">DaVinci</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-14 h-18 rounded-md overflow-hidden border border-black/10 shadow-2xs flex-shrink-0 bg-stone-100">
                      <img
                        src="/photos/thumb-youtube.jpg"
                        alt="YouTube Editing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card 3: Nainital Roots */}
                  <div className="p-3 rounded-xl border border-black/[0.08] bg-white/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#234E3D]/10 text-[#234E3D] font-bold border border-[#234E3D]/20">
                        ORIGINS &amp; PERSPECTIVE
                      </span>
                      <h4 className="font-sans font-bold text-xs sm:text-[12.5px] text-[#171717] leading-snug">
                        Nainital Roots — The Mountains
                      </h4>
                      <p className="text-[10.5px] text-[#5C5042] leading-relaxed">
                        Grew up in Nainital surrounded by the Himalayas. A quiet sanctuary that anchors curiosity and discipline.
                      </p>
                      <div className="grid grid-cols-3 gap-1 pt-1 border-t border-black/[0.05] font-mono text-[9.5px]">
                        <div>
                          <div className="text-[7px] uppercase text-black/40">ELEVATION</div>
                          <div className="font-bold text-[#171717]">2,084 m</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">ORIGIN</div>
                          <div className="font-bold text-[#171717]">Nainital, UK</div>
                        </div>
                        <div>
                          <div className="text-[7px] uppercase text-black/40">ANCHOR</div>
                          <div className="font-bold text-[#171717]">Nature</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-14 h-18 rounded-md overflow-hidden border border-black/10 shadow-2xs flex-shrink-0 bg-stone-100">
                      <img
                        src="/photos/thumb-lake.jpg"
                        alt="Nainital Lake"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Dynamic Curated Artifacts for All Other Chapters */
                <div className="space-y-2.5">
                  {contextualArtifacts.length === 0 ? (
                    <div className="p-5 rounded-xl border border-dashed border-black/15 bg-white/60 text-center space-y-2">
                      <p className="font-serif italic text-xs sm:text-sm text-[#5C5042]">
                        This chapter is an internal reflection and strategic turning point.
                      </p>
                      <p className="font-sans text-xs text-[#7A6E5F]">
                        The quiet decisions made here laid the groundwork for every engineering challenge that followed.
                      </p>
                    </div>
                  ) : (
                    contextualArtifacts.map((art) => (
                      <div
                        key={art.id}
                        className="p-3 rounded-xl border border-black/[0.08] bg-white/90 shadow-2xs space-y-1.5 transition-all hover:border-black/20"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold"
                            style={{
                              background: 'rgba(0,0,0,0.05)',
                              color: accentColor,
                              border: `1px solid ${accentColor}30`,
                            }}
                          >
                            {art.tag}
                          </span>

                          {/* Official Company Logo & Website Link (If Present) */}
                          {art.link && art.logo ? (
                            <a
                              href={art.link}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FAF7F0] hover:bg-white border border-black/10 hover:border-[#C25E3E]/40 text-[#5C5042] hover:text-[#171717] transition-all group"
                              title={`Visit ${art.title}`}
                            >
                              <img
                                src={art.logo}
                                alt={art.title}
                                className="h-3.5 w-auto max-w-[70px] object-contain"
                              />
                              <ArrowUpRight className="w-3 h-3 text-[#C25E3E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            art.status && (
                              <span className="font-mono text-[9px] text-[#7A6E5F]">
                                {art.status.split('/')[0]}
                              </span>
                            )
                          )}
                        </div>
                        <h4 className="font-sans font-bold text-xs sm:text-[12.5px] text-[#171717] leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-[10.5px] text-[#524639] leading-relaxed">
                          {art.hook}
                        </p>
                        <div className="grid grid-cols-3 gap-1 py-1 border-y border-black/[0.05] font-mono text-[9.5px]">
                          {art.metrics.map((m, idx) => (
                            <div key={idx}>
                              <div className="text-[7px] uppercase text-black/40">{m.label}</div>
                              <div className="font-bold text-[#171717]">{m.value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Case Study Launcher Button */}
                        {art.caseStudyId && (
                          <div className="pt-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenCaseStudy(art.caseStudyId!);
                              }}
                              className="w-full py-1.5 px-2.5 rounded-lg bg-[#1C2621] hover:bg-[#2C3B34] text-[#FFFDF8] font-mono text-[10px] font-semibold flex items-center justify-between shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
                              title="Click to view interactive case study deck, data, and slides"
                            >
                              <div className="flex items-center gap-1.5">
                                <FileText className="w-3 h-3 text-[#E6C36A]" />
                                <span className="truncate">{art.caseStudyBadge || 'Click to View Case Study Deck'}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[#E6C36A] group-hover:translate-x-0.5 transition-transform text-[9.5px] flex-shrink-0">
                                <span>Inspect Deck</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </div>
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Bottom Fixed Navigation & Notes on Right Page */}
            <div className="pt-2 border-t border-black/[0.08] space-y-2 flex-shrink-0">
              {/* Problem notes toggle & Elevation annotation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCraftDepth(!showCraftDepth);
                  }}
                  className="flex items-center gap-1 font-mono text-[10.5px] text-[#234E3D] hover:underline cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-[#234E3D]" />
                  <span>{showCraftDepth ? 'Close Field Notes' : '✦ Open Technical & Problem Notes →'}</span>
                </button>

                <span className="handwritten-note text-xs text-[#7A6E5F]">
                  ^ Nainital 2,084 m
                </span>
              </div>

              {/* Craft notes drawer */}
              {showCraftDepth && (
                <div className="p-2.5 rounded-lg bg-[#1D2420] text-[#FAF7F0] font-sans text-xs leading-relaxed animate-in fade-in duration-200">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#E6C36A] font-bold mb-1">
                    Problem &amp; Approach
                  </div>
                  <p className="text-[#DDD3C1] text-[11px]">
                    {chapter.id === 'drdo' &&
                      'Analyzed 10K+ pilot physiological telemetry time-series records to predict high-G stress before failure.'}
                    {chapter.id === 'jodo' &&
                      'Scaled Django REST, Celery workers, and Redis pipelines for 5,000+ merchants and ₹30K Cr+ transaction volume.'}
                    {chapter.id === 'weekday' &&
                      'Engineered outbound candidate funnels and cohort retention workflows driving 18% QoQ revenue growth.'}
                    {chapter.id === 'finance' &&
                      'Constructed 10-year DCF valuation models, WACC sensitivity matrices, and Black-Litterman portfolios.'}
                    {chapter.id !== 'drdo' &&
                      chapter.id !== 'jodo' &&
                      chapter.id !== 'weekday' &&
                      chapter.id !== 'finance' &&
                      'Every milestone developed the discipline of building resilient solutions under uncertainty.'}
                  </p>
                </div>
              )}

              {/* Turn the page button & Folio numbering */}
              <div className="flex items-center justify-between pt-0.5 font-mono text-[10.5px] text-[#5E5140]">
                <span>Folio {chapter.number}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  disabled={chapterIndex === totalChapters - 1 || isTurning}
                  className={`group flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-mono text-[11px] font-semibold shadow-2xs transition-all cursor-pointer ${chapterIndex === totalChapters - 1
                    ? 'opacity-25 cursor-not-allowed bg-black/10 text-black/40'
                    : 'bg-[#1C2621] hover:bg-[#2A3A32] text-[#FFFDF8] hover:gap-2.5 hover:shadow-xs'
                    }`}
                >
                  <span>Turn the Page</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#E6C36A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterSpread;
