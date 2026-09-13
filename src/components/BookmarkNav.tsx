import { Briefcase, FileText } from 'lucide-react';
import React from 'react';
import { CHAPTERS } from '../data/chapters';

interface BookmarkNavProps {
  currentChapter: number;
  onSelectChapter: (index: number) => void;
  onOpenRecruiter: () => void;
  onOpenArtifacts: () => void;
  totalArtifactsCount: number;
}

export const BookmarkNav: React.FC<BookmarkNavProps> = ({
  currentChapter,
  onSelectChapter,
  onOpenRecruiter,
  onOpenArtifacts,
  totalArtifactsCount,
}) => {
  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.children[currentChapter] as HTMLElement | undefined;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  }, [currentChapter]);

  return (
    <header className="w-full max-w-6xl mx-auto px-3 sm:px-6 pt-3 pb-2 z-40 relative">
      <div
        className="bg-[#FAF7F0]/95 backdrop-blur-md border border-[#DDD5C0] rounded-2xl px-3 sm:px-6 py-2 sm:py-2.5 shadow-md flex items-center justify-between gap-2 sm:gap-3 transition-all"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* ── LEFT: NAME & SUBTITLE ── */}
        <div className="flex flex-col text-left flex-shrink-0 min-w-fit">
          <div className="flex items-center gap-1.5 font-sans font-bold text-xs tracking-[0.20em] text-[#171717] whitespace-nowrap">
            <span>MOHIT SHARMA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
          </div>
          <div className="font-mono text-[9.5px] text-[#7A6E5F] tracking-wider hidden lg:block whitespace-nowrap">
            Field Notes · Nainital → Pilani → ?
          </div>
        </div>

        {/* ── CENTER: NUMBERED CHAPTER BUTTONS (01 to 12) ── */}
        <nav
          ref={navRef}
          className="flex items-center gap-0.5 sm:gap-1 font-mono overflow-x-auto no-scrollbar py-0.5 px-0.5"
        >
          {CHAPTERS.map((ch, idx) => {
            const isActive = currentChapter === idx;
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(idx)}
                className={`relative px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10.5px] sm:text-[11px] font-mono transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${isActive
                  ? 'bg-gradient-to-b from-[#FFFDF7] via-[#F5E8CC] to-[#E9D5A6] text-[#2C1805] font-black border border-[#C5A558] shadow-[0_1px_4px_rgba(150,110,35,0.25)] ring-1 ring-[#ECCB82]/70'
                  : 'text-[#7A6A55] hover:text-[#1F170E] hover:bg-[#ECE1CA]/80 font-medium'
                  }`}
                title={`Chapter ${ch.number}: ${ch.title}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#942C1B] shadow-[0_0_4px_rgba(148,44,27,0.6)] animate-pulse" />
                  )}
                  <span>{ch.number}</span>
                </span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-[#C5A558] rounded-full shadow-xs" />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── RIGHT: DOSSIER, RECRUITER VIEW, STILL EXPLORING ── */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Distinct Premium Archival Dossier Button */}
          <button
            onClick={onOpenArtifacts}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-b from-[#942C1B] via-[#852415] to-[#6E1A0C] hover:from-[#A23321] hover:via-[#922818] hover:to-[#7A1D0E] text-[#FFF9ED] font-mono text-xs font-bold tracking-wide shadow-[0_2px_10px_rgba(133,35,23,0.35)] hover:shadow-[0_4px_16px_rgba(133,35,23,0.48)] border border-[#E28E78]/60 ring-1 ring-[#D8593A]/30 transition-all cursor-pointer group scale-100 hover:scale-[1.02]"
            title="Open verified 40-item artifacts dossier"
          >
            <FileText className="w-3.5 h-3.5 text-[#FDE047] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline tracking-wider font-bold">Dossier</span>
            <span className="text-[10px] bg-[#4F1208] text-[#FDE68A] px-1.5 py-0.5 rounded font-mono font-black border border-[#FDE68A]/40 shadow-inner">
              [{totalArtifactsCount}]
            </span>
          </button>

          {/* Recruiter View button */}
          <button
            onClick={onOpenRecruiter}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-md bg-[#1C2621] text-[#FFFDF8] hover:bg-[#2A3A32] font-mono text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
            title="Switch to Recruiter View"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#E6C36A]" />
            <span className="hidden sm:inline">Recruiter View</span>
          </button>

          {/* Handwritten touch */}
          <span className="hidden xl:inline handwritten-note text-lg text-[#6B5E4D] italic pl-1 select-none">
            Still exploring...
          </span>
        </div>
      </div>
    </header>
  );
};

export default BookmarkNav;
