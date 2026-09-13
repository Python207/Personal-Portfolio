export interface ChapterMeta {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  badge?: string;
  colorTone: 'mountain' | 'terracotta' | 'neutral' | 'dark';
}

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 'origin',
    number: '01',
    title: 'THE MOUNTAINS',
    subtitle: 'Nainital, where curiosity had room to breathe.',
    location: 'Nainital, Uttarakhand',
    badge: 'ORIGIN',
    colorTone: 'mountain',
  },
  {
    id: 'bits',
    number: '02',
    title: 'THE FIRST SHOCK',
    subtitle: 'Arriving in Rajasthan. Entering an unfamiliar universe.',
    location: 'BITS Pilani',
    badge: 'DISORIENTATION',
    colorTone: 'terracotta',
  },
  {
    id: 'dream',
    number: '03',
    title: 'THE SINGULAR DREAM',
    subtitle: 'AIR 207. Fighter Pilot stream. One clear trajectory.',
    location: 'UPSC NDA / Air Force Selection',
    badge: 'AMBITION',
    colorTone: 'neutral',
  },
  {
    id: 'break',
    number: '04',
    title: 'THE SHATTERED PATH',
    subtitle: 'Pectus Carinatum. Some doors close before you are ready.',
    location: 'Medical Board',
    badge: 'TURNING POINT',
    colorTone: 'dark',
  },
  {
    id: 'reset',
    number: '05',
    title: 'THE RESET',
    subtitle: 'Recovering academics. Learning you cannot be everything at once.',
    location: 'BITS Pilani',
    badge: 'DISCIPLINE',
    colorTone: 'neutral',
  },
  {
    id: 'drdo',
    number: '06',
    title: 'DRDO — ANOTHER WAY IN',
    subtitle: 'If I couldn\'t sit in the cockpit, I\'d sit behind the systems.',
    location: 'New Delhi (Defense R&D)',
    badge: 'BEST INTERN',
    colorTone: 'mountain',
  },
  {
    id: 'yc-curiosity',
    number: '07',
    title: 'DISCOVERING YC',
    subtitle: 'How do tiny teams build empires from nothing?',
    location: 'Online / Y Combinator',
    badge: 'EXPLORATION',
    colorTone: 'terracotta',
  },
  {
    id: 'weekday',
    number: '08',
    title: 'WEEKDAY — THE FOUNDER\'S DESK',
    subtitle: 'Speed, ambiguity, and understanding WHY before HOW.',
    location: 'YC W21 / Bangalore',
    badge: 'FOUNDER\'S OFFICE',
    colorTone: 'terracotta',
  },
  {
    id: 'finance',
    number: '09',
    title: 'THE FINANCE DETOUR',
    subtitle: 'Rejected from the club. So I mastered the language anyway.',
    location: 'InvestoQuest / BITS',
    badge: '2X NATIONAL WINNER',
    colorTone: 'neutral',
  },
  {
    id: 'rejections',
    number: '10',
    title: 'THE DARK PAGE',
    subtitle: 'Branch restrictions, closed portals, and redrawing the map.',
    location: 'Internship Season',
    badge: 'GRIT',
    colorTone: 'dark',
  },
  {
    id: 'jodo',
    number: '11',
    title: 'JODO — BACKEND × PRODUCT',
    subtitle: 'When someone gives you a chance. ₹30,000 Cr+ at scale.',
    location: 'Tiger Global Fintech',
    badge: 'CURRENT CHAPTER',
    colorTone: 'terracotta',
  },
  {
    id: 'now',
    number: '12',
    title: 'SO... WHAT AM I?',
    subtitle: 'Still exploring. But building with conviction.',
    location: 'Everywhere Curiosity Leads',
    badge: 'HORIZON',
    colorTone: 'mountain',
  },
];

