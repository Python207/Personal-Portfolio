import { ArrowUpRight, ChevronRight, FileText, Search, Tag, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { ALL_ARTIFACTS, Artifact } from '../data/artifacts';

interface ArtifactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy?: (id: string) => void;
}

export const ArtifactDrawer: React.FC<ArtifactDrawerProps> = ({ isOpen, onClose, onOpenCaseStudy }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts', count: ALL_ARTIFACTS.length },
    { id: 'work', label: 'Work Deployments', count: ALL_ARTIFACTS.filter(a => a.category === 'work').length },
    { id: 'systems', label: 'Systems & Code', count: ALL_ARTIFACTS.filter(a => a.category === 'systems').length },
    { id: 'decks', label: 'Product & Case Decks', count: ALL_ARTIFACTS.filter(a => a.category === 'decks').length },
    { id: 'quant', label: 'Quant & Valuation', count: ALL_ARTIFACTS.filter(a => a.category === 'quant').length },
    { id: 'leadership', label: 'Leadership & Ops', count: ALL_ARTIFACTS.filter(a => a.category === 'leadership').length },
    { id: 'milestones', label: 'Strategic Honors', count: ALL_ARTIFACTS.filter(a => a.category === 'milestones').length },
    { id: 'human', label: 'Human & Off-Grid', count: ALL_ARTIFACTS.filter(a => a.category === 'human').length },
  ];

  const filteredArtifacts = useMemo(() => {
    return ALL_ARTIFACTS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query) ||
        item.hook.toLowerCase().includes(query) ||
        item.stack?.some(s => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-ink/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-3xl bg-paper-light border-l border-ink/15 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">

        {/* Drawer Header */}
        <div className="p-6 bg-paper-warm border-b border-ink/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#8E2819] uppercase tracking-wider font-bold">
              <Tag className="w-3.5 h-3.5" />
              <span>The Complete Evidence Archive</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <h2 className="font-serif text-2xl font-bold text-ink">Artifact Dossier (40 Items)</h2>
              <span className="px-2 py-0.5 rounded-full bg-gradient-to-b from-[#942C1B] to-[#781B0E] text-[#FFF8ED] text-[10px] font-mono font-bold border border-[#E28E78]/50 shadow-xs">
                OFFICIAL
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-paper-dark text-ink transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 sm:p-6 border-b border-ink/10 bg-paper space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. Django, DCF, DRDO, Celery, Sharpe, YC)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-paper-light border border-ink/15 focus:border-[#8E2819] focus:outline-none text-xs font-mono text-ink placeholder:text-ink-light"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-ink-muted hover:text-ink cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer ${activeCategory === cat.id
                  ? 'bg-gradient-to-b from-[#942C1B] to-[#781B0E] text-[#FFF8ED] font-bold shadow-xs border border-[#E28E78]/50'
                  : 'bg-paper-warm border border-ink/10 text-ink-muted hover:text-ink hover:bg-paper-dark'
                  }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-75 text-[10px]">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Artifact List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-ink/5">
          {filteredArtifacts.length === 0 ? (
            <div className="text-center py-16 text-ink-muted font-mono text-xs">
              No artifacts match your current filter or query.
            </div>
          ) : (
            filteredArtifacts.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArtifact(selectedArtifact?.id === item.id ? null : item)}
                className="py-4 hover:bg-paper-warm/50 px-3 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-ink/5 text-ink-muted font-medium border border-ink/10">
                        {item.tag}
                      </span>
                      {item.caseStudyId && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C25E3E]/10 text-[#C25E3E] font-bold border border-[#C25E3E]/20 flex items-center gap-1">
                          <FileText className="w-2.5 h-2.5" />
                          <span>Case Study Deck</span>
                        </span>
                      )}
                      {item.status && (
                        <span className="font-mono text-[9px] text-mountain font-semibold">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans font-bold text-sm text-ink group-hover:text-mountain transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {item.hook}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-ink-light transition-transform mt-2 ${selectedArtifact?.id === item.id ? 'rotate-90 text-mountain' : 'group-hover:translate-x-1'}`} />
                </div>

                {/* Expanded Details when clicked */}
                {selectedArtifact?.id === item.id && (
                  <div className="mt-4 pt-3 border-t border-ink/10 bg-paper-warm p-4 rounded-md space-y-3 animate-in fade-in duration-200">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-paper p-2 rounded border border-ink/5">
                          <div className="text-[8px] text-ink-light uppercase tracking-wider">{m.label}</div>
                          <div className="font-bold text-ink">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Takeaway / Lesson */}
                    {item.takeaway && (
                      <div className="text-xs text-ink-muted italic border-l-2 border-terracotta pl-3 py-1 font-serif">
                        "{item.takeaway}"
                      </div>
                    )}

                    {/* Tech Stack */}
                    {item.stack && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.stack.map(st => (
                          <span key={st} className="px-2 py-0.5 rounded bg-paper text-[10px] font-mono text-ink-muted border border-ink/10">
                            {st}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Interactive Case Study Launcher Button */}
                    {item.caseStudyId && onOpenCaseStudy && (
                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenCaseStudy(item.caseStudyId!);
                          }}
                          className="w-full py-2.5 px-3.5 rounded-lg bg-[#1C2621] hover:bg-[#2C3B34] text-[#FFFDF8] font-mono text-xs font-semibold flex items-center justify-between shadow-xs hover:shadow-sm transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#E6C36A]" />
                            <span>{item.caseStudyBadge || 'View Complete Case Study Deck'}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#E6C36A] group-hover:translate-x-0.5 transition-transform text-xs">
                            <span>Interactive Viewer</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-paper-warm border-t border-ink/10 font-mono text-[11px] text-ink-muted flex items-center justify-between">
          <span>Showing {filteredArtifacts.length} of {ALL_ARTIFACTS.length} items</span>
          <button
            onClick={onClose}
            className="text-xs text-[#8E2819] font-bold hover:underline cursor-pointer"
          >
            Back to Journal →
          </button>
        </div>

      </div>
    </div>
  );
};
