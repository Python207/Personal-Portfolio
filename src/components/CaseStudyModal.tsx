import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  FileText,
  CheckCircle2,
  Layers,
  BarChart3,
  BookOpen,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { CASE_STUDIES, CaseStudyData } from '../data/caseStudies';

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudyId, onClose }) => {
  const [activeTab, setActiveTab] = useState<'slides' | 'summary' | 'toc'>('slides');
  const [activeSlide, setActiveSlide] = useState(1);

  const study: CaseStudyData | undefined = caseStudyId ? CASE_STUDIES[caseStudyId] : undefined;

  // Reset state when case study changes
  useEffect(() => {
    setActiveSlide(1);
    setActiveTab('slides');
  }, [caseStudyId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!study) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => Math.min(study.previewCount, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => Math.max(1, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative bg-[#FAF7F0] border border-[#DDD3BF] rounded-2xl shadow-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden text-[#1E2521] select-none"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 65px -10px rgba(0, 0, 0, 0.60), 0 0 0 1px rgba(0,0,0,0.08)',
        }}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-grain-fine pointer-events-none opacity-30 z-0" />

        {/* ── 1. MODAL HEADER ── */}
        <div className="px-5 sm:px-7 py-4 border-b border-black/[0.08] bg-[#F4EFE3] flex items-center justify-between gap-4 z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C25E3E]/10 text-[#C25E3E] font-bold border border-[#C25E3E]/20">
                {study.category}
              </span>
              <span className="font-mono text-[10px] text-[#7A6E5F]">
                {study.totalPages} Pages · {study.author}
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#171717] leading-snug">
              {study.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Open Full PDF Button */}
            <a
              href={study.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C2621] hover:bg-[#2C3B34] text-[#FFFDF8] font-mono text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
              title="Open full document in a new tab"
            >
              <FileText className="w-3.5 h-3.5 text-[#E6C36A]" />
              <span className="hidden sm:inline">Full Document PDF</span>
              <span className="sm:hidden">PDF</span>
              <ArrowUpRight className="w-3 h-3 text-[#E6C36A]" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/5 text-[#5C5042] hover:text-[#171717] transition-colors"
              title="Close viewer (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── 2. TAB CONTROLS ── */}
        <div className="px-5 sm:px-7 pt-2.5 pb-2 bg-[#F7F3EA] border-b border-black/[0.06] flex items-center justify-between gap-3 z-10 font-mono text-xs">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('slides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                activeTab === 'slides'
                  ? 'bg-white text-[#171717] shadow-xs border border-black/10'
                  : 'text-[#6B5E4D] hover:text-[#171717] hover:bg-black/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#C25E3E]" />
              <span>Interactive Slide Deck</span>
            </button>

            <button
              onClick={() => setActiveTab('summary')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                activeTab === 'summary'
                  ? 'bg-white text-[#171717] shadow-xs border border-black/10'
                  : 'text-[#6B5E4D] hover:text-[#171717] hover:bg-black/5'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#234E3D]" />
              <span>Executive Analysis</span>
            </button>

            {study.tableOfContents && (
              <button
                onClick={() => setActiveTab('toc')}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                  activeTab === 'toc'
                    ? 'bg-white text-[#171717] shadow-xs border border-black/10'
                    : 'text-[#6B5E4D] hover:text-[#171717] hover:bg-black/5'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#855B28]" />
                <span>Contents [{study.tableOfContents.length}]</span>
              </button>
            )}
          </div>

          <div className="text-[11px] text-[#7A6E5F] hidden md:block">
            Use <kbd className="px-1.5 py-0.5 rounded bg-black/5 border border-black/10">←</kbd>{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-black/5 border border-black/10">→</kbd> to navigate slides
          </div>
        </div>

        {/* ── 3. TAB CONTENT BODY ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 z-10">
          {/* TAB 1: SLIDE DECK VIEWER */}
          {activeTab === 'slides' && (
            <div className="space-y-4">
              {/* Main Slide Presentation Stage */}
              <div className="relative rounded-xl overflow-hidden bg-[#111613] border border-black/15 shadow-md flex items-center justify-center min-h-[320px] sm:min-h-[460px]">
                <img
                  src={`/case-studies/previews/${study.previewFolder}/page-${activeSlide}.jpg`}
                  alt={`${study.title} Slide ${activeSlide}`}
                  className="w-full h-auto max-h-[520px] object-contain"
                />

                {/* Left navigation overlay button */}
                <button
                  onClick={() => setActiveSlide((prev) => Math.max(1, prev - 1))}
                  disabled={activeSlide === 1}
                  className={`absolute left-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-xs transition-all hover:bg-black/85 ${
                    activeSlide === 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-85 hover:scale-110'
                  }`}
                  title="Previous Slide (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation overlay button */}
                <button
                  onClick={() => setActiveSlide((prev) => Math.min(study.previewCount, prev + 1))}
                  disabled={activeSlide === study.previewCount}
                  className={`absolute right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-xs transition-all hover:bg-black/85 ${
                    activeSlide === study.previewCount
                      ? 'opacity-20 cursor-not-allowed'
                      : 'opacity-85 hover:scale-110'
                  }`}
                  title="Next Slide (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide Number Watermark */}
                <div className="absolute bottom-3 right-3 font-mono text-[10px] px-2.5 py-1 rounded-md bg-black/70 text-white/90 backdrop-blur-xs">
                  Slide {activeSlide} of {study.previewCount} · Full Deck: {study.totalPages} Pages
                </div>
              </div>

              {/* Slide Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {Array.from({ length: study.previewCount }).map((_, idx) => {
                  const slideNum = idx + 1;
                  const isSelected = activeSlide === slideNum;
                  return (
                    <button
                      key={slideNum}
                      onClick={() => setActiveSlide(slideNum)}
                      className={`relative flex-shrink-0 w-24 sm:w-28 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#C25E3E] shadow-sm scale-105 ring-2 ring-[#C25E3E]/20'
                          : 'border-black/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={`/case-studies/previews/${study.previewFolder}/page-${slideNum}.jpg`}
                        alt={`Thumbnail ${slideNum}`}
                        className="w-full h-14 sm:h-16 object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white font-mono text-[8.5px] text-center py-0.5">
                        p. {slideNum}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Callout bar to open complete PDF */}
              <div className="p-3.5 rounded-xl border border-[#D5CCA8] bg-[#FAF3E0] flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="font-sans font-bold text-[#171717] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
                    <span>Viewing curated highlights (6 of {study.totalPages} slides)</span>
                  </div>
                  <p className="text-[11px] text-[#6B5E4D]">
                    The complete {study.totalPages}-page study includes all detailed data tables, financial exhibits, and appendix models.
                  </p>
                </div>
                <a
                  href={study.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-[#C25E3E]/40 text-[#C25E3E] font-mono text-[11px] font-bold hover:bg-[#C25E3E] hover:text-white transition-all shadow-xs"
                >
                  <span>Open Full PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: EXECUTIVE ANALYSIS & FRAMEWORKS */}
          {activeTab === 'summary' && (
            <div className="space-y-6">
              {/* Problem Statement Block */}
              <div className="p-4 sm:p-5 rounded-xl border border-black/10 bg-white/80 space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#C25E3E] font-bold">
                  Core Problem Statement
                </div>
                <p className="font-serif italic text-sm sm:text-base text-[#171717] leading-relaxed">
                  "{study.problemStatement}"
                </p>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#7A6E5F] font-bold mb-2.5">
                  Key Quantitative Metrics &amp; Benchmarks
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {study.keyMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-black/8 bg-white/90 shadow-xs space-y-1"
                    >
                      <div className="font-mono text-[9px] uppercase tracking-wider text-black/40">
                        {m.label}
                      </div>
                      <div className="font-mono font-bold text-base sm:text-lg text-[#171717]">
                        {m.value}
                      </div>
                      {m.desc && <div className="text-[10.5px] text-[#6B5E4D]">{m.desc}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Highlights Checklist */}
              <div className="p-4 sm:p-5 rounded-xl border border-black/10 bg-white/80 space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#234E3D] font-bold">
                  Key Findings &amp; Strategic Solutions
                </div>
                <div className="space-y-2.5">
                  {study.solutionHighlights.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#3D352C] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#234E3D] flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Methodologies */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#7A6E5F] font-bold mb-2">
                  Applied Frameworks &amp; Tooling
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.frameworks.map((f, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-[#EBE4D5] text-[#4A4035] border border-[#D5CCA8]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strategic Takeaway Banner */}
              <div className="p-4 rounded-xl border border-[#234E3D]/30 bg-[#E8F2EC] text-xs sm:text-[13px] text-[#234E3D] space-y-1">
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider">
                  Personal Takeaway &amp; Learning
                </div>
                <p className="leading-relaxed font-sans">{study.keyTakeaway}</p>
              </div>
            </div>
          )}

          {/* TAB 3: TABLE OF CONTENTS */}
          {activeTab === 'toc' && study.tableOfContents && (
            <div className="p-5 rounded-xl border border-black/10 bg-white/80 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#7A6E5F] font-bold mb-2">
                Document Index ({study.totalPages} Pages)
              </div>
              <div className="divide-y divide-black/5 font-mono text-xs">
                {study.tableOfContents.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-[#3D352C] hover:text-[#171717]">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black/25" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── 4. MODAL FOOTER ── */}
        <div className="px-5 sm:px-7 py-3 border-t border-black/[0.08] bg-[#F4EFE3] flex flex-wrap items-center justify-between gap-3 z-10 font-mono text-xs">
          <div className="text-[#6B5E4D] text-[11px]">
            Original Document: <span className="font-bold text-[#171717]">{study.totalPages} Pages</span> ({study.date})
          </div>

          <div className="flex items-center gap-2">
            <a
              href={study.pdfPath}
              download
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/15 bg-white hover:bg-[#FAF7F0] text-[#171717] text-xs font-semibold shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#5C5042]" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#1C2621] text-[#FFFDF8] text-xs font-semibold hover:bg-[#2E3C34] transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

