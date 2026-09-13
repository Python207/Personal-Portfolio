import { Check, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react';

interface FieldFooterProps {
  currentChapter: number;
  totalChapters: number;
  chapterTitle: string;
  chapterLocation: string;
}

export const FieldFooter: React.FC<FieldFooterProps> = ({
  currentChapter,
  totalChapters,
  chapterTitle,
  chapterLocation,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'f20231207@pilani.bits-pilani.ac.in';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="w-full max-w-5xl mx-auto px-3 sm:px-6 pb-2.5 pt-1 z-30 select-none">
      <div
        className="bg-[#121714]/88 backdrop-blur-xl border border-white/[0.12] rounded-full px-4 sm:px-6 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.55)] flex flex-wrap items-center justify-between gap-3 text-xs transition-all"
      >
        {/* ── LEFT: IDENTITY & ARCHIVAL EMBLEM ── */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C25E3E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C25E3E]" />
          </span>
          <span className="font-serif tracking-[0.14em] font-bold text-[#F2EDE4] text-xs">
            MOHIT SHARMA
          </span>
          <span className="text-white/40 font-mono text-[10px]">© 2025</span>
          <span className="hidden md:inline-block text-white/20">/</span>
          <span className="hidden md:flex items-center gap-1 text-white/50 font-mono text-[10.5px]">
            <MapPin className="w-3 h-3 text-[#C25E3E]/80" />
            <span>{chapterLocation}</span>
          </span>
        </div>

        {/* ── CENTER: ACTIVE CHAPTER LOG BREADCRUMB ── */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-[10.5px]">
          <span className="text-[#C25E3E] font-bold">
            LOG {String(currentChapter + 1).padStart(2, '0')}/{totalChapters}
          </span>
          <span className="text-white/30">·</span>
          <span className="truncate max-w-[200px] text-[#E8E2D5]/90 font-medium">
            {chapterTitle}
          </span>
        </div>

        {/* ── RIGHT: INDEPENDENT TACTILE SYMBOL CAPSULES ── */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Email Capsule (with Copy-on-Click & Mailto fallback) */}
          <div className="relative group">
            <a
              href={`mailto:${email}`}
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] hover:bg-[#C25E3E]/20 border border-white/[0.12] hover:border-[#C25E3E]/50 text-[#EDE7DB] transition-all cursor-pointer"
              title="Click to copy email address"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Mail className="w-3.5 h-3.5 text-[#E6C36A] group-hover:scale-110 transition-transform" />
              )}
              <span className="font-mono text-[11px] hidden sm:inline">
                {copied ? 'Copied!' : 'Email'}
              </span>
            </a>
          </div>

          {/* LinkedIn Capsule */}
          <a
            href="https://www.linkedin.com/in/mohitsharma207/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] hover:bg-[#0A66C2]/20 border border-white/[0.12] hover:border-[#0A66C2]/50 text-[#EDE7DB] transition-all group"
            title="Open LinkedIn Profile (mohitsharma207)"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
            <span className="font-mono text-[11px] hidden sm:inline">LinkedIn</span>
          </a>

          {/* GitHub Capsule */}
          <a
            href="https://github.com/Python207"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.12] hover:border-white/40 text-[#EDE7DB] transition-all group"
            title="Open GitHub Profile (Python207)"
          >
            <Github className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
            <span className="font-mono text-[11px] hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
