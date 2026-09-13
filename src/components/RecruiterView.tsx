import {
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code,
  FileText,
  Github,
  Linkedin,
  Mail,
  X,
} from 'lucide-react';
import React from 'react';
import { ALL_ARTIFACTS } from '../data/artifacts';

interface RecruiterViewProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToChapter: (chapterIndex: number) => void;
  onOpenCaseStudy?: (caseStudyId: string) => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({
  isOpen,
  onClose,
  onJumpToChapter,
  onOpenCaseStudy,
}) => {
  if (!isOpen) return null;

  const workItems = ALL_ARTIFACTS.filter(a => a.category === 'work');
  const systemsItems = ALL_ARTIFACTS.filter(a => a.category === 'systems' || a.category === 'quant');
  const decksItems = ALL_ARTIFACTS.filter(a => a.category === 'decks');
  // Curated Milestone Order: NDA first, InvestoQuest second, then all others
  const milestoneOrder = ['nda-air207', 'investoquest-champ', 'rd-parade', 'bits-topper', 'drdo-best-intern'];
  const milestoneItems = ALL_ARTIFACTS.filter(a => a.category === 'milestones').sort((a, b) => {
    const idxA = milestoneOrder.indexOf(a.id);
    const idxB = milestoneOrder.indexOf(b.id);
    return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0E0C]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-500 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#F7F4EC] border border-[#DDD3BF] rounded-2xl dossier-paper-shadow overflow-hidden flex flex-col max-h-[92vh] my-auto relative animate-in zoom-in-95 fade-in duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── TOP ARCHIVAL METADATA & CONTROLS BAR ── */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#F2EDE0] border-b border-[#DDD3BF] flex items-center justify-between sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#234E3D] animate-pulse" />
            <div>
              <div className="font-mono text-[10px] text-[#234E3D] font-bold tracking-[0.20em] uppercase">
                FIELD NOTES // PROFESSIONAL EDITION · DOSSIER #MS-2025-EXEC
              </div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#171717] tracking-tight">
                Mohit Sharma · Fast-Track Dossier &amp; Verified Records
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:f20231207@pilani.bits-pilani.ac.in"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1C2621] hover:bg-[#2A3A32] text-[#FFFDF8] text-xs font-mono font-semibold transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#E6C36A]" />
              <span>Get in Touch</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/5 text-[#5C5042] hover:text-[#171717] transition-colors cursor-pointer"
              aria-label="Close recruiter dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── DOSSIER SCROLLABLE CONTENT ── */}
        <div className="p-5 sm:p-7 overflow-y-auto custom-parchment-scrollbar space-y-7 text-[#171717]">

          {/* Executive Header Box (Clean Layout, No Overlap) */}
          <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl border border-[#DDD3BF] shadow-2xs relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
                  Mohit Sharma
                </h1>
                {/* Clean Subtitle With Official BITS Pilani Crest Link */}
                <a
                  href="https://www.bits-pilani.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#6B5E4D] hover:text-[#171717] mt-1 transition-colors group"
                  title="Visit BITS Pilani Official Website (https://www.bits-pilani.ac.in/)"
                >
                  <img
                    src="/logos/bits-pilani-logo.png"
                    alt="BITS Pilani Crest"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="font-semibold text-[#3D352C] group-hover:underline">BITS Pilani '27</span>
                  <span>· Engineering &amp; Finance Minor</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8C6D33] opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Key Honors & Clearances Badges */}
                <div className="flex flex-wrap gap-2 mt-3 font-mono text-[10.5px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#234E3D]/10 text-[#234E3D] font-semibold border border-[#234E3D]/25">
                    AIR 207 UPSC NDA (Fighter Pilot Selection)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#A3482C]/10 text-[#A3482C] font-semibold border border-[#A3482C]/25">
                    2x InvestoQuest National Winner
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7A622A]/10 text-[#7A622A] font-semibold border border-[#7A622A]/25">
                    Rank #2 Valuation &amp; #5 Portfolio
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/5 text-[#3D352C] font-medium border border-black/10">
                    Republic Day Parade Contingent (Rajpath)
                  </span>
                </div>
              </div>

              {/* Action Quick Links & Archival Stamp (Stacked Cleanly, Zero Collision) */}
              <div className="flex flex-col items-start md:items-end gap-2.5 flex-shrink-0">
                <span className="archival-stamp px-2.5 py-1 rounded text-[9px] font-mono font-bold whitespace-nowrap">
                  OFFICIAL VERIFIED DOSSIER · BITS PILANI
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/mohitsharma207/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D5CCB7] bg-white hover:bg-[#FAF7F0] text-xs font-mono font-medium text-[#171717] transition-colors shadow-2xs"
                    title="LinkedIn Profile: mohitsharma207"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Python207"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D5CCB7] bg-white hover:bg-[#FAF7F0] text-xs font-mono font-medium text-[#171717] transition-colors shadow-2xs"
                    title="GitHub Profile: Python207"
                  >
                    <Github className="w-3.5 h-3.5 text-[#171717]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Target Role Tags */}
            <div className="mt-4 pt-3.5 border-t border-black/[0.08]">
              <div className="font-mono text-[9.5px] text-[#7A6E5F] uppercase tracking-wider mb-2 font-bold">
                TARGET ROLES &amp; OPERATIONAL DOMAINS:
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {[
                  "Founder's Office",
                  'Product Management',
                  'Product Engineering',
                  'Fintech & Payments',
                  'High-Growth Ventures',
                  'Quantitative Finance',
                  'Strategy & Operations',
                ].map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD3BF] text-[#3D352C] text-[11px] font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section § 01: Professional Deployments (With Logos & Links for DRDO, Weekday, Jodo, D+A) */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#234E3D] font-bold tracking-widest uppercase mb-3.5">
              <Briefcase className="w-4 h-4 text-[#234E3D]" />
              <span>§ 01 / VERIFIED PROFESSIONAL DEPLOYMENTS &amp; EXPERIENCE</span>
            </div>

            <div className="space-y-3.5">
              {workItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-xl border border-[#DDD3BF] bg-[#FAF7F0] hover:border-black/25 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans font-bold text-sm sm:text-base text-[#171717]">
                        {item.title}
                      </h3>

                      {/* Official Company Logo & Website Link Badges */}
                      {item.id === 'jodo' && (
                        <a
                          href="https://www.jodo.in/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-[#DDD3BF] hover:border-[#C25E3E] text-[10.5px] font-mono text-[#5C5042] hover:text-[#171717] transition-all shadow-2xs group"
                          title="Visit Jodo Official Website (jodo.in)"
                        >
                          <img src="/logos/jodo-logo.png" alt="Jodo" className="h-3.5 w-auto object-contain" />
                          <span className="font-semibold">jodo.in</span>
                          <ArrowUpRight className="w-3 h-3 text-[#C25E3E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {item.id === 'weekday' && (
                        <a
                          href="https://www.weekday.works/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#1C1F1E] border border-black/20 hover:border-[#C25E3E] text-[10.5px] font-mono text-[#FFFDF8] hover:text-white transition-all shadow-2xs group"
                          title="Visit Weekday (YC W21) Official Website (weekday.works)"
                        >
                          <img src="/logos/weekday-logo.png" alt="Weekday" className="h-3 w-auto object-contain rounded-xs" />
                          <span className="font-semibold">weekday.works</span>
                          <ArrowUpRight className="w-3 h-3 text-[#E6C36A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {item.id === 'drdo' && (
                        <a
                          href="https://drdo.gov.in/drdo/en/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-[#DDD3BF] hover:border-[#234E3D] text-[10.5px] font-mono text-[#5C5042] hover:text-[#171717] transition-all shadow-2xs group"
                          title="Visit DRDO Official Portal (drdo.gov.in)"
                        >
                          <img src="/logos/drdo-logo.png" alt="DRDO" className="h-4 w-auto object-contain" />
                          <span className="font-semibold">drdo.gov.in</span>
                          <ArrowUpRight className="w-3 h-3 text-[#234E3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {item.id === 'da-strategies' && (
                        <a
                          href="https://www.da-strategies.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0F141C] border border-black/20 hover:border-[#7A622A] text-[10.5px] font-mono text-[#EDE8DD] hover:text-white transition-all shadow-2xs group"
                          title="Visit D+A Strategies (da-strategies.com)"
                        >
                          <img src="/logos/da-strategies-logo.png" alt="D+A Strategies" className="h-3 w-auto object-contain" />
                          <span className="font-semibold">da-strategies.com</span>
                          <ArrowUpRight className="w-3 h-3 text-[#E6C36A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {item.id === 'placement-unit' && (
                        <a
                          href="https://www.linkedin.com/company/placement-unit-bits-pilani-pilani-campus/posts/?feedView=all"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF7F0] border border-[#DDD3BF] hover:border-[#0A66C2] text-[10.5px] font-mono text-[#0A66C2] hover:text-[#004182] transition-all shadow-2xs group"
                          title="Visit BITS Pilani Placement Unit on LinkedIn"
                        >
                          <img src="/logos/bits-pilani-logo.png" alt="BITS Pilani Placement Unit" className="h-4 w-auto object-contain" />
                          <span className="font-semibold">Placement Unit LinkedIn</span>
                          <ArrowUpRight className="w-3 h-3 text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[10.5px] text-[#234E3D] font-bold whitespace-nowrap">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#524639] leading-relaxed mb-3">
                    {item.hook}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-black/[0.06] my-2.5 font-mono text-[10.5px]">
                    {item.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-[8px] text-black/40 uppercase tracking-wider">{m.label}</div>
                        <div className="font-bold text-[#171717]">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stack pills */}
                  {item.stack && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.stack.map((st) => (
                        <span
                          key={st}
                          className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-[#6B5E4D] border border-black/10"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section § 02: Flagship Systems & Product Case Studies */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A3482C] font-bold tracking-widest uppercase">
                <Code className="w-4 h-4 text-[#A3482C]" />
                <span>§ 02 / FLAGSHIP SYSTEMS, QUANT BUILDS &amp; CASE STUDIES</span>
              </div>
              <span className="font-mono text-[10px] text-[#7A6E5F] hidden sm:inline">
                Interactive Decks Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[...decksItems, ...systemsItems.slice(0, 4)].map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl border border-[#DDD3BF] bg-[#FAF7F0] flex flex-col justify-between shadow-2xs hover:border-black/20 transition-all space-y-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[8.5px] text-[#A3482C] uppercase tracking-wider font-bold">
                        {proj.tag}
                      </span>
                      {proj.caseStudyId && (
                        <span className="font-mono text-[8.5px] bg-[#234E3D]/10 text-[#234E3D] px-1.5 py-0.5 rounded font-bold">
                          FULL DECK
                        </span>
                      )}
                    </div>
                    <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#171717] leading-snug">
                      {proj.title}
                    </h4>
                    <p className="text-[11px] text-[#5C5042] leading-relaxed line-clamp-2 mt-1">
                      {proj.hook}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/[0.06] space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="text-black/40">
                        {proj.metrics[0]?.label}:{' '}
                        <strong className="text-[#171717]">{proj.metrics[0]?.value}</strong>
                      </span>
                      {proj.stack && (
                        <span className="text-[#7A6E5F] truncate max-w-[120px]">
                          {proj.stack[0]}
                        </span>
                      )}
                    </div>

                    {/* Direct Launch Case Study Deck Button */}
                    {proj.caseStudyId && onOpenCaseStudy && (
                      <button
                        onClick={() => onOpenCaseStudy(proj.caseStudyId!)}
                        className="w-full py-1.5 px-2.5 rounded-lg bg-[#1C2621] hover:bg-[#2C3B34] text-[#FFFDF8] font-mono text-[10px] font-semibold flex items-center justify-between transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-[#E6C36A]" />
                          <span>{proj.caseStudyBadge || 'Inspect Slide Deck'}</span>
                        </div>
                        <ArrowUpRight className="w-3 h-3 text-[#E6C36A] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section § 03: Honors & Strategic Milestones (With Dedicated Valuation & Portfolio Citation) */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#7A622A] font-bold tracking-widest uppercase mb-3.5">
              <Award className="w-4 h-4 text-[#7A622A]" />
              <span>§ 03 / NATIONAL HONORS, ACADEMIC TOPPER &amp; CITATIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {milestoneItems.map((m) => (
                <div
                  key={m.id}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF7F0] border border-[#DDD3BF] shadow-2xs hover:border-black/20 transition-all"
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${m.id === 'nda-air207'
                      ? 'text-[#234E3D]'
                      : m.id === 'investoquest-champ'
                        ? 'text-[#C25E3E]'
                        : m.id === 'bits-topper'
                          ? 'text-[#7A622A]'
                          : 'text-[#234E3D]'
                      }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-semibold text-xs sm:text-[13px] text-[#171717]">
                        {m.title}
                      </span>
                      {m.id === 'nda-air207' && (
                        <span className="px-1.5 py-0.5 rounded bg-[#234E3D]/15 text-[#234E3D] font-mono text-[9px] font-bold">
                          AIR 207
                        </span>
                      )}
                      {m.id === 'investoquest-champ' && (
                        <span className="px-1.5 py-0.5 rounded bg-[#C25E3E]/15 text-[#C25E3E] font-mono text-[9px] font-bold">
                          2x Champion
                        </span>
                      )}
                      {m.id === 'bits-topper' && (
                        <div className="flex items-center gap-1">
                          <span className="px-1.5 py-0.5 rounded bg-[#7A622A]/15 text-[#7A622A] font-mono text-[9px] font-bold">
                            #2 &amp; #5
                          </span>
                          <a
                            href="https://www.bits-pilani.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-[#DDD3BF] hover:border-[#7A622A] text-[9px] font-mono text-[#7A622A] hover:text-[#171717] transition-all shadow-2xs group"
                            title="Visit BITS Pilani Official Website"
                          >
                            <img src="/logos/bits-pilani-logo.png" alt="BITS" className="h-3 w-auto object-contain" />
                            <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6B5E4D] mt-0.5 leading-relaxed">
                      {m.hook}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── DOSSIER FOOTER ACTIONS ── */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#F2EDE0] border-t border-[#DDD3BF] flex items-center justify-between sticky bottom-0 z-20 flex-shrink-0">
          <button
            onClick={() => {
              onClose();
              onJumpToChapter(0);
            }}
            className="flex items-center gap-1.5 font-mono text-xs text-[#234E3D] hover:underline font-semibold cursor-pointer"
          >
            <span>← Return to Field Story Journal</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#1C2621] text-[#FFFDF8] hover:bg-[#2A3A32] text-xs font-mono font-semibold tracking-wider transition-colors cursor-pointer shadow-2xs"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};

export default RecruiterView;
