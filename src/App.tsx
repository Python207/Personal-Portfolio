import { useCallback, useEffect, useRef, useState } from 'react';
import { ArtifactDrawer } from './components/ArtifactDrawer';
import { BookmarkNav } from './components/BookmarkNav';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ChapterSpread } from './components/ChapterSpread';
import { CinematicIntro } from './components/CinematicIntro';
import { FieldFooter } from './components/FieldFooter';
import { OpeningCover } from './components/OpeningCover';
import { RecruiterView } from './components/RecruiterView';
import { ALL_ARTIFACTS } from './data/artifacts';
import { CHAPTERS } from './data/chapters';

// 12 Bespoke photographic environments matching each chapter's narrative theme
const CHAPTER_BACKGROUNDS: Record<string, string> = {
  origin: '/backgrounds/bg-01-mountains.jpg',
  bits: '/backgrounds/bg-02-bits.jpg',
  dream: '/backgrounds/bg-03-dream.jpg',
  break: '/backgrounds/bg-04-break.jpg',
  reset: '/backgrounds/bg-05-reset.jpg',
  drdo: '/backgrounds/bg-06-drdo.jpg',
  'yc-curiosity': '/backgrounds/bg-07-yc.jpg',
  weekday: '/backgrounds/bg-08-weekday.jpg',
  finance: '/backgrounds/bg-09-finance.jpg',
  rejections: '/backgrounds/bg-10-rejections.jpg',
  jodo: '/backgrounds/bg-11-jodo.jpg',
  now: '/backgrounds/bg-12-now.jpg',
};

export function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [isArtifactsOpen, setIsArtifactsOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [flipDir, setFlipDir] = useState<'left' | 'right' | null>(null);
  const [isTurning, setIsTurning] = useState(false);

  const isTurningRef = useRef(false);
  const flipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    isTurningRef.current = isTurning;
  }, [isTurning]);

  const triggerFlip = useCallback(
    (dir: 'left' | 'right', targetIndex: number) => {
      if (isTurningRef.current) return; // Prevent turning twice
      if (targetIndex < 0 || targetIndex >= CHAPTERS.length) return;

      isTurningRef.current = true;
      setIsTurning(true);
      setFlipDir(dir);

      // Mid-flip: swap content smoothly once at 380ms
      const midTimer = setTimeout(() => {
        setCurrentChapter(targetIndex);
      }, 380);

      // Settle animation at 780ms
      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
      flipTimerRef.current = setTimeout(() => {
        setIsTurning(false);
        isTurningRef.current = false;
        setFlipDir(null);
      }, 780);

      return () => clearTimeout(midTimer);
    },
    []
  );

  const handleNext = useCallback(() => {
    if (currentChapter < CHAPTERS.length - 1 && !isTurningRef.current) {
      triggerFlip('right', currentChapter + 1);
    }
  }, [currentChapter, triggerFlip]);

  const handlePrev = useCallback(() => {
    if (currentChapter > 0 && !isTurningRef.current) {
      triggerFlip('left', currentChapter - 1);
    }
  }, [currentChapter, triggerFlip]);

  const handleJumpChapter = useCallback(
    (idx: number) => {
      if (idx === currentChapter || isTurningRef.current) return;
      triggerFlip(idx > currentChapter ? 'right' : 'left', idx);
    },
    [currentChapter, triggerFlip]
  );

  // Keyboard navigation (Arrow keys, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // While intro animation is playing, let CinematicIntro handle skipping
      if (!isIntroComplete) return;

      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      if (isRecruiterOpen || isArtifactsOpen) {
        if (e.key === 'Escape') {
          setIsRecruiterOpen(false);
          setIsArtifactsOpen(false);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsRecruiterOpen(false);
        setIsArtifactsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isIntroComplete, isRecruiterOpen, isArtifactsOpen, handleNext, handlePrev]);

  const chapter = CHAPTERS[currentChapter];

  return (
    <div
      className="min-h-screen text-[#171717] flex flex-col justify-between selection:bg-[#C25E3E]/20 selection:text-ink relative overflow-hidden"
      style={{ background: '#141815' }}
    >
      {/* ── 0. Cinematic Intro Animation Sequence ── */}
      {!isIntroComplete && (
        <CinematicIntro onComplete={() => setIsIntroComplete(true)} />
      )}

      {/* ── 1. Full Opening Cover Experience ── */}
      <OpeningCover
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        canOpen={isIntroComplete}
      />

      {/* ── 2. Main Open Notebook View ── */}
      {isOpen && (
        <div className="flex-1 flex flex-col justify-between relative z-10">

          {/* ── BESPOKE CHAPTER ATMOSPHERIC BACKGROUNDS (DYNAMIC PER CHAPTER, NO BAKED-IN TEXT) ── */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0c100d]">
            {CHAPTERS.map((ch, idx) => {
              const isCurrent = currentChapter === idx;
              const bgSrc = CHAPTER_BACKGROUNDS[ch.id] || '/backgrounds/bg-01-mountains.jpg';
              return (
                <img
                  key={ch.id}
                  src={bgSrc}
                  alt={ch.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${isCurrent ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  style={{
                    filter: 'brightness(0.80) contrast(1.08) saturate(1.05)',
                  }}
                />
              );
            })}
            {/* Soft atmospheric vignette for high contrast and focus on the notebook */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(10, 14, 12, 0.40) 0%, rgba(6, 9, 7, 0.85) 100%)',
              }}
            />
          </div>

          {/* Floating Bookmark Navigation Bar */}
          <BookmarkNav
            currentChapter={currentChapter}
            onSelectChapter={handleJumpChapter}
            onOpenRecruiter={() => setIsRecruiterOpen(true)}
            onOpenArtifacts={() => setIsArtifactsOpen(true)}
            totalArtifactsCount={ALL_ARTIFACTS.length}
          />

          {/* Center Main Book Spread (Turns only when clicking buttons/tabs) */}
          <main className="flex-1 flex items-center justify-center py-1 sm:py-3">
            <ChapterSpread
              chapter={chapter}
              chapterIndex={currentChapter}
              totalChapters={CHAPTERS.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onSelectChapter={handleJumpChapter}
              onOpenArtifacts={() => setIsArtifactsOpen(true)}
              onOpenCaseStudy={setActiveCaseStudy}
              flipDir={flipDir}
              isTurning={isTurning}
            />
          </main>

          {/* ── BRAND NEW FLOATING DOCK FOOTER (DISTINCT SYMBOLS, ZERO OVERWRITING) ── */}
          <FieldFooter
            currentChapter={currentChapter}
            totalChapters={CHAPTERS.length}
            chapterTitle={chapter.title}
            chapterLocation={chapter.location}
          />
        </div>
      )}

      {/* ── 4. Recruiter Mode Dossier ── */}
      <RecruiterView
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
        onJumpToChapter={idx => {
          handleJumpChapter(idx);
          setIsOpen(true);
        }}
        onOpenCaseStudy={setActiveCaseStudy}
      />

      {/* ── 5. Full 40-Artifact Dossier ── */}
      <ArtifactDrawer
        isOpen={isArtifactsOpen}
        onClose={() => setIsArtifactsOpen(false)}
        onOpenCaseStudy={setActiveCaseStudy}
      />

      {/* ── 6. Full Interactive Case Study Reader / Slide Deck Viewer ── */}
      <CaseStudyModal
        caseStudyId={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </div>
  );
}

export default App;
