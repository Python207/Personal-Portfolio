# Mohit Sharma // Field Notes 

> **An Unfinished Map of a Journey.**  
> An archival editorial field journal documenting an unconventional journey from Nainital to BITS Pilani, code, startups, finance, and engineering.

[![Live Website](https://img.shields.io/badge/Live_Site-mohitsharma--portfolio--207.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://mohitsharma-portfolio-207.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Python207%2FPersonal--Portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Python207/Personal-Portfolio)
[![Tech Stack](https://img.shields.io/badge/Stack-React_18_%7C_TypeScript_%7C_Tailwind_CSS_%7C_Vite-61DAFB?style=for-the-badge)](https://react.dev/)

---

## Live Production
Explore the live, interactive portfolio at:  
👉 **[https://mohitsharma-portfolio-207.vercel.app/](https://mohitsharma-portfolio-207.vercel.app/)**

---

## 🛠️ Complete Tech Stack

| Category | Technology | Purpose & Usage |
| :--- | :--- | :--- |
| **Core Framework** | [React 18.3](https://react.dev/) | Component architecture, state management, hooks (`useState`, `useEffect`, `useCallback`, `useRef`). |
| **Language** | [TypeScript 5.4](https://www.typescriptlang.org/) | Strict static type safety across chapters, artifacts, navigation, and modal states. |
| **Build Tooling** | [Vite 5.2](https://vitejs.dev/) | Instant HMR (Hot Module Replacement), optimized tree-shaking, and high-performance production bundling. |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling, responsive layouts, dynamic color palettes, micro-interactions, and custom darkroom filters. |
| **Post-Processing** | [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) | Automated vendor prefixing and browser compatibility optimization. |
| **Iconography** | [Lucide React](https://lucide.dev/) | Clean, feather-weight SVG icon system (Compass, ArrowUpRight, FileText, Sparkles, BookOpen, etc.). |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Curated 4-tier editorial font pairing: <br>• **Newsreader** (Editorial serif headers)<br>• **Caveat** (Handwritten field notes & marginalia)<br>• **JetBrains Mono** (Archival terminal metadata & coordinates)<br>• **Inter** (Clean narrative body copy) |
| **Class Utilities** | `clsx` & `tailwind-merge` | Conditional class composition and collision-free Tailwind class resolution. |
| **Deployment & CI/CD** | [Vercel](https://vercel.com/) | Continuous automatic deployments hooked to GitHub repository `main` branch with edge CDN delivery. |

---

## Architectural Highlights & Features

### 1. 4-Scene Cinematic Intro Sequence (`CinematicIntro.tsx`)
- **Scene 1 (Location):** GPS coordinate resolve (`29.3919° N, 79.4542° E`) with a rotating compass, serif title reveal (`NAINITAL`), and archival status tag `[ LOCATION FOUND ]`.
- **Scene 2 (The Journey):** Journal header with animated gradient self-drawing line (`NAINITAL ──→ PILANI`) and typography *"A curious mind, leaving the hills."*
- **Scene 3 (Archive & Identity):** `MOHIT SHARMA · BITS PILANI '27` accompanied by an archival field checklist.
- **Scene 4 (Darkroom Dissolve):** Smooth 700ms dissolve transition directly into the mountain hero cover.
- **Accessibility & Skip Controls:** Full keyboard support (`Enter`, `Space`, `Escape`), reduced-motion detection, and a visible `SKIP INTRO →` button.

### 2. Mountain Hero Cover (`OpeningCover.tsx`)
- 4K widescreen responsive landscape photography of Nainital with sunset horizon glow.
- Non-linear cubic gradient scrim transitions into deep mountain charcoal canvas.
- Interactive **"OPEN THE NOTEBOOK"** button and keyboard shortcut (`Enter`).

### 3. Interactive 12-Chapter Notebook Spreads (`ChapterSpread.tsx`)
- Bespoke photographic atmosphere for all 12 chapters (Nainital origin, BITS Pilani, DRDO, YC Founder's Office, Weekday, Fintech, Rejections, and future vision).
- Realistic 3D-inspired page-turn animations with content swaps and settle timers.
- Integrated chapter artifacts, footnotes, and external source references.

### 4. Recruiter Dossier Mode (`RecruiterView.tsx`)
- High-efficiency fast-read summary for founders, hiring managers, and recruiters.
- Categorized timeline, key projects, impact metrics, and direct chapter navigation.

### 5. Archival Dossier Drawer (`ArtifactDrawer.tsx`)
- Complete collection of 40 primary-source artifacts (code snippets, pitch decks, whitepapers, design sketches, system architectures).
- Interactive filterable grid with metadata badges.

### 6. Deep-Dive Case Study Reader (`CaseStudyModal.tsx`)
- Interactive reader for technical case studies, product decks, and problem-solving breakdowns.

---

## Local Development Setup

Clone the repository and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Python207/Personal-Portfolio.git

# 2. Navigate to project directory
cd Personal-Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

This compiles TypeScript (`tsc`) and outputs the production-ready assets to the `dist/` directory via Vite.

---

## Author

**Mohit Sharma**  
- **College:** BITS Pilani ('27)  
- **Origin:** Nainital, Uttarakhand  
- **Website:** [mohitsharma-portfolio-207.vercel.app](https://mohitsharma-portfolio-207.vercel.app/)  
- **GitHub:** [@Python207](https://github.com/Python207)
