export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  pdfPath: string;
  totalPages: number;
  previewFolder: string;
  previewCount: number;
  problemStatement: string;
  methodology: string;
  solutionHighlights: string[];
  frameworks: string[];
  keyMetrics: { label: string; value: string; desc?: string }[];
  keyTakeaway: string;
  tableOfContents?: string[];
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  'nrb-bearings': {
    id: 'nrb-bearings',
    title: 'NRB Bearings Ltd. — Equity Research Report',
    subtitle: 'Comprehensive 25-Page Institutional Initiation Note & 10-Year Valuation Model',
    category: 'EQUITY RESEARCH & FINANCIAL MODELING',
    author: 'Mohit Sharma',
    date: '2025',
    pdfPath: '/case-studies/nrb-bearings-research.pdf',
    totalPages: 25,
    previewFolder: 'nrb',
    previewCount: 6,
    problemStatement:
      'Can NRB Bearings sustain revenue growth of 12–14% and expand EBITDA margins to 20%+ post-Waluj plant recovery, while navigating 60–70% raw material import dependence and EV transition disruption?',
    methodology:
      'Conducted exhaustive multi-year fundamental analysis including 10-year DCF valuation, Common-Size P&L and Balance Sheet decomposition, DuPont analysis, Cash Conversion Cycle (CCC) efficiency tracking, and comparative benchmarking across 5 industry peers (Timken India, SKF, Galaxy Bearings, SNL Bearings, Bimetal Bearings).',
    solutionHighlights: [
      'Deleveraged Balance Sheet: Debt/Equity dropped from 78.6% (FY20) to 20.4% (FY25) funded by Thane land monetisation (₹178 Cr gain).',
      'Market Dominance: #1 in India with 75% market share in needle roller bearings and 56% in cylindrical roller bearings; present in 90%+ vehicles on Indian roads.',
      'Capex & Growth Visibility: Confirmed ₹200 Cr capex plan to boost capacity beyond ₹110 Cr/month, backed by ₹400 Cr in secured new OEM nominations over 3–5 years.',
      'EV-Agnostic Pivot: Steering, chassis, and driveline programs insulate topline against pure electric powertrain disruption.',
      'Operating Leverage: Projected EBITDA margins to rebound toward 20%+ driven by solar energy initiatives, robotic automation, and European OEM platform ramps.',
    ],
    frameworks: [
      '10-Year Discounted Cash Flow (DCF)',
      'WACC Sensitivity Matrix',
      'Ratio & Dupont Analysis',
      'DuPont ROE Decomposition',
      'Cash Conversion Cycle (CCC)',
      'Porter’s Five Forces & SWOT Matrix',
      'Concall Analysis (Q4FY25)',
      'Peer Comps (Timken, SKF, SNL, Galaxy)',
    ],
    keyMetrics: [
      { label: 'Revenue (FY25)', value: '₹1,199 Cr', desc: '+9.6% YoY growth' },
      { label: 'EBITDA Margin', value: '17.0%', desc: '+100 bps expansion' },
      { label: 'Needle Share', value: '75%', desc: '#1 market position in India' },
      { label: 'Capex Plan', value: '₹200 Cr', desc: 'Backed by ₹400 Cr nominations' },
      { label: 'Global Footprint', value: '43 Countries', desc: '25% revenue from exports' },
      { label: 'Debt / Equity', value: '20.4%', desc: 'Deleveraged from 78.6%' },
    ],
    keyTakeaway:
      'Undertaken independently after being rejected from the college finance club in first year. The rigorous report and institutional model won 1st Place Nationwide at InvestoQuest across 500+ participants.',
    tableOfContents: [
      '1. Key Highlights (FY25 & Q4FY25)',
      '2. About Company & Manufacturing Facilities',
      '3. Global Bearing Industry ($226B by 2030)',
      '4. Indian Bearing Industry (10.2% CAGR)',
      '5. Concall Analysis & Management Commentary',
      '6. Quarterly Financial Analysis',
      '7. Financial Analysis (Common Size P&L & Balance Sheet)',
      '8. Ratio Analysis (Profitability, Leverage, Efficiency)',
      '9. Competitive Analysis (Timken, Galaxy, SNL, Bimetal)',
      '10. Management & Board Governance Analysis',
      '11. Shareholding Trends (FII/DII shifts)',
      '12. Growth Drivers & Risks (EV transition, raw materials)',
      '13. SWOT Analysis',
      '14. TTM Share Price & Peer Trend Comparison',
    ],
  },
  'ema-apm': {
    id: 'ema-apm',
    title: 'Ema APM Program — Aria: The Strategic Sourcing Analyst',
    subtitle: 'Solving Enterprise "Procurement Drag" with Autonomous Multi-Document Comparative RAG',
    category: 'AI PRODUCT MANAGEMENT & ENTERPRISE ARCHITECTURE',
    author: 'Mohit Sharma / Harshvardhan Kejriwal (BITS Pilani)',
    date: '2025',
    pdfPath: '/case-studies/ema-apm-aria.pdf',
    totalPages: 10,
    previewFolder: 'ema',
    previewCount: 6,
    problemStatement:
      'Enterprise sourcing managers spend 40–80 hours per RFP event manually evaluating 300+ page vendor proposals, causing systemic "Procurement Drag" that costs enterprises 1–2% of their annual spend ($20M on $2B spend).',
    methodology:
      'Designed "Aria", an autonomous AI employee persona trained in procurement best practices and contract law. Formulated an end-to-end Multi-Document Comparative RAG (MC-RAG) loop with conversational Slack-to-Canvas workflows, quantitative hypothesis validation (H1/H2/H3), and enterprise security guardrails.',
    solutionHighlights: [
      'MC-RAG Architecture: Ingests unstructured RFPs and multi-vendor proposals, chunks and embeds them in vector databases, and executes ad-hoc cross-document comparative reasoning.',
      'The Citations Mandate: Every score, risk flag, and summary is linked to an exact source snippet and page-level citation—mitigating the 17–33% hallucination rate seen in legal RAG systems.',
      'The Vault: Single-tenant VPC / on-premise deployment with strict contractual zero-training clauses guaranteeing IP confidentiality.',
      'Slack-First Orchestration: Allows sourcing managers to initiate reviews, query compliance differences, and generate audit-ready award justifications directly in Slack.',
      'Drastic Efficiency Gain: Cuts proposal review time from 40–80 hours down to <10 hours (40–70% productivity gain).',
    ],
    frameworks: [
      'Jobs-To-Be-Done (JTBD)',
      'Multi-Document Comparative RAG (MC-RAG)',
      'Enterprise Persona Mapping (Sourcing Manager vs InfoSec)',
      'Hypothesis-Driven Validation (H1/H2/H3)',
      'Wizard-of-Oz Testing Protocol',
      'Risk & Mitigation Matrix',
      'North Star Metric Architecture',
    ],
    keyMetrics: [
      { label: 'North Star', value: 'Time-to-Decision', desc: '% reduction in RFP to award cycle' },
      { label: 'Time Saved', value: '70%+', desc: '40-80 hrs down to <10 hrs per event' },
      { label: 'Risk Flagging', value: '<15 Mins', desc: 'Reduced from days of manual reading' },
      { label: 'Value Unlocked', value: '$20M / Yr', desc: '1% savings on $2B enterprise spend' },
    ],
    keyTakeaway:
      'Enterprise AI adoption depends on trust over novelty. By building Aria around a strict Citations Mandate and single-tenant privacy, sourcing teams transition from manual reading grunts to strategic negotiators.',
    tableOfContents: [
      '1. The Problem: Enterprise Procurement Drag',
      '2. Why Solve It Now? Market Shift to Autonomous Decisioning',
      '3. Solution: Aria Autonomous Sourcing Analyst',
      '4. User Personas: Strategic Sourcing Manager & IT InfoSec Reviewer',
      '5. Aria Autonomous MC-RAG Loop & User Journey',
      '6. Technical System Design & Slack Integration',
      '7. Validation Plan: Two-Phase Desirability & Feasibility Testing',
      '8. Product Metrics & North Star Hierarchy',
      '9. Enterprise Pitfalls & Trust Mitigations',
    ],
  },
  swiggy: {
    id: 'swiggy',
    title: 'Swiggy — Product GTM Strategy & Activation',
    subtitle: 'Converting Visitors, New & Dormant Users into High-Frequency Transacting Customers',
    category: 'CONSUMER PRODUCT MANAGEMENT & GTM STRATEGY',
    author: 'Mohit Sharma',
    date: '2023',
    pdfPath: '/case-studies/swiggy-gtm-strategy.pdf',
    totalPages: 30,
    previewFolder: 'swiggy',
    previewCount: 6,
    problemStatement:
      'High visitor cart abandonment and dormant user churn across Swiggy’s ecosystem (Food, Instamart, Dineout). Users encounter cognitive fatigue, high delivery charges, and fragmented multi-app options.',
    methodology:
      'Mapped end-to-end user journeys across 3 core verticals (Food Delivery, Instamart Quick Commerce, Dineout) against competing platforms (Zomato, Blinkit, Zepto, BigBasket). Synthesized pain points across 3 demographic personas to ideate 6 feature initiatives, prioritized via the RICE framework, and mapped a 5-phase rollout.',
    solutionHighlights: [
      'Swiggy Family: Household shared lists, grocery replenishment calendars based on shelf life, bulk ordering discounts, and split-the-bill capability.',
      'Revamp of Swiggy ONE (ONE Lite): Introduced low-barrier starter tier at ₹89/month with 5 free deliveries, auto-applied to post-login accounts to convert first-time transactors.',
      'Try What To Explore? (AI Recommendation Engine): Clustering model classifying users into Quality Seekers, Convenience Seekers, and Value Seekers to reduce menu decision friction.',
      'Swiggy Connect: 360° bridge between Food & Instamart—view restaurant dish ingredients and order the raw cooking ingredients directly from Instamart in one click.',
      'Swiggy Dineout Community: Social dining network with annual Great Indian Restaurant Festival (GIRF) tie-ins and app-only deals.',
    ],
    frameworks: [
      'RICE Scoring Prioritization Matrix',
      'End-to-End User Journey Mapping (Food, Groceries, Dineout)',
      'Cross-Platform Competitor Benchmarking (Zomato, Zepto, Blinkit)',
      'Behavioral User Personas (Aditya, Megha, Lakshay)',
      '5-Stage Rollout Plan (UAT, Metro Pilots, Tier 1 Expansion)',
      'Metrics Hierarchy (AOV, Churn Rate, Retention, LTV)',
    ],
    keyMetrics: [
      { label: 'RICE Top Rank', value: 'UI/UX Changes (1.62)', desc: 'Highest impact feature' },
      { label: 'Swiggy ONE Lite', value: '₹89 / Mo', desc: 'Accessible starter subscription' },
      { label: 'North Star', value: 'Churn & Retention', desc: 'Transacting user conversion rate' },
      { label: 'Pilots', value: '3 Metros', desc: 'Delhi, Mumbai, Bangalore' },
    ],
    keyTakeaway:
      'Product growth in hyper-competitive delivery ecosystems isn’t about adding isolated bells and whistles—it is about removing decision friction at checkout and creating cross-vertical stickiness across grocery, dining, and meals.',
    tableOfContents: [
      '1. Company Overview & Problem Statement',
      '2. Offerings Breakdown (Food, Instamart, Dineout, Genie, Minis)',
      '3. Competitive Analysis (BigBasket, Blinkit, Zomato, Zepto)',
      '4. Customer Journey Walkthrough (Food Ordering)',
      '5. Customer Journey Walkthrough (Instamart Groceries)',
      '6. Customer Journey Walkthrough (Dineout)',
      '7. Customer Journey Comparison & Benchmarks',
      '8. User Personas & Pain Points (Aditya, Megha, Lakshay)',
      '9. Feature Ideation: Swiggy Family, ONE Lite, What To Explore?',
      '10. Wireframes & UX Flows',
      '11. Feature Prioritization via RICE Framework',
      '12. 5-Step Phased Feature Rollout Strategy',
    ],
  },
  'bite-tribe': {
    id: 'bite-tribe',
    title: 'BiteTribe — Street Food Discovery & Hygiene Platform',
    subtitle: '0→1 Startup Pitch Deck & Product Case Study for India’s ₹2.88L Cr Street Food Sector',
    category: '0-TO-1 VENTURE DESIGN & PRODUCT ROADMAP',
    author: 'Mohit Sharma',
    date: '2024',
    pdfPath: '/case-studies/bitetribe-product-case.pdf',
    totalPages: 9,
    previewFolder: 'bitetribe',
    previewCount: 6,
    problemStatement:
      'India has 10M+ street food vendors driving a ₹2.88 Lakh Crore ($41B) unorganized market, yet discovery is completely fragmented and 68% of consumers express deep hygiene and safety anxiety.',
    methodology:
      'Conducted primary market survey of urban street food consumers and vendors. Formulated JTBD framework, designed wireframes for real-time mobile vendor location tracking, gamified user reviews, and hygiene certification scores, prioritized using RICE scoring.',
    solutionHighlights: [
      'Live Vendor Cart GPS: Dynamic location sharing allowing moving food carts and night vendors to broadcast real-time locations and operating status.',
      'Hygiene Certification Score: Trusted cleanliness ratings based on structured inspections and customer audit signals.',
      'Tribe Community & Tribe Coins: Social review feed where foodies share dishes and earn redeemable Tribe Coins for restaurant discounts and event tickets.',
      'Vendor Empowerment Portal: Low-friction vernacular onboarding for street vendors with zero tech overhead.',
      'Multi-Stream Monetization: Sponsored listings, street food festival ticketing, vendor subscriptions, and affiliate food delivery tie-ins.',
    ],
    frameworks: [
      'Jobs-To-Be-Done (JTBD)',
      'TAM / SAM / SOM Market Sizing ($41B Unorganized Sector)',
      'Primary Consumer Survey Analytics (74% frequency, 68% hygiene)',
      'RICE Framework Prioritization',
      'Mobile Wireframing & Interactive Prototyping',
      'Go-To-Market & Launch Phasing (Pre-Launch Buzz → City Launch)',
    ],
    keyMetrics: [
      { label: 'Market Size', value: '$41 Billion', desc: 'Unorganised food service in India' },
      { label: 'Monthly Turnover', value: '₹2.88L Cr', desc: 'Massive unserved street commerce' },
      { label: 'Vendors', value: '10 Million+', desc: 'Across Indian urban hubs' },
      { label: 'Consumer Survey', value: '74% Weekly', desc: 'High frequency consumption' },
      { label: 'Hygiene Concern', value: '68%', desc: 'Primary blocker to consumption' },
      { label: 'North Star', value: 'Weekly Active Users', desc: 'Engaged with street vendors' },
    ],
    keyTakeaway:
      'Unorganized markets cannot be transformed by imposing heavyweight software. Successful 0-to-1 platforms must solve the primary consumer trust blocker (hygiene) while keeping vendor onboarding frictionless.',
    tableOfContents: [
      '1. Market Landscape & JTBD Definition',
      '2. Competitive Research (Delivery Apps vs Search Engines)',
      '3. User Personas & Primary Survey Insights',
      '4. Core Problem Identification & Value Generation',
      '5. Proposed Solutions & RICE Prioritization',
      '6. Wireframing & Prototyping (Tribe Feed & Live Cart Tracking)',
      '7. Metrics, Risks, and Mitigations',
      '8. Go-to-Market Strategy & Monetization Streams',
    ],
  },
};

