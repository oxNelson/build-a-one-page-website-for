export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  scopeHighlight: string;
  idealFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Identity & Strategy',
    slug: 'brand-identity',
    category: 'Branding',
    tagline: 'Strategic positioning that establishes immediate category authority.',
    description: 'We distill your business vision into an unmistakable brand universe. Beyond surface styling, we define your core brand narrative, market differentiation, customer archetype profiling, and long-term brand equity architecture.',
    deliverables: [
      'Market & Competitive Landscape Audit',
      'Brand Mission, Vision & Core Values',
      'Value Proposition & Narrative Architecture',
      'Tone of Voice & Verbal Identity Guide',
      'Brand Architecture & Sub-brand Structure',
      'Implementation Roadmaps'
    ],
    scopeHighlight: 'Complete brand positioning blueprint and strategic compass',
    idealFor: 'Startups launching new verticals and established African enterprises rebranding for global expansion.'
  },
  {
    id: 'visual-identity',
    number: '02',
    title: 'Logo Design & Visual Systems',
    slug: 'logo-visual-systems',
    category: 'Branding',
    tagline: 'Iconic visual marks engineered for distinction across print and screens.',
    description: 'We author memorable logomarks, proprietary typography systems, nuanced color physics, and mathematical grid rules. Every visual asset is rigorously stress-tested across ultra-small mobile icons, billboard scale, and physical fabrication.',
    deliverables: [
      'Primary Logomark & Responsive Lockups',
      'Proprietary Color Palette with Contrast Specs',
      'Typography Hierarchy & Font Pairing System',
      'Iconography & Vector Illustration Library',
      'Comprehensive Brand Guidelines (PDF & Digital)',
      'Vector Asset Suites (SVG, EPS, PNG, PDF)'
    ],
    scopeHighlight: 'Durable, trademark-ready visual identity system',
    idealFor: 'Enterprises seeking a timeless, recognizable visual signature.'
  },
  {
    id: 'web-design-dev',
    number: '03',
    title: 'Website Design & Development',
    slug: 'website-development',
    category: 'Web Design',
    tagline: 'High-performance digital flagships that convert visitors into loyal clients.',
    description: 'We engineer blazingly fast, accessible, and responsive websites. From bespoke corporate platforms to interactive editorial portfolios, our sites are optimized for core web vitals, mobile usability across Nigerian bandwidth conditions, and search engine discoverability.',
    deliverables: [
      'Custom Responsive UI/UX Layouts (Mobile, Tablet, Desktop)',
      'Modern Frontend Architecture (React, Next.js, Vite)',
      'Headless CMS or Easy Content Update Workflow',
      'Technical SEO, Schema Markup & Social Graph',
      'Speed & Performance Optimization (sub-2s LCP)',
      'Cross-Browser & Hardware Ergonomics QA'
    ],
    scopeHighlight: 'Production-ready web flagships with zero framework bloat',
    idealFor: 'Businesses needing a high-credibility web presence that converts local and international traffic.'
  },
  {
    id: 'ui-ux-product',
    number: '04',
    title: 'UI/UX & Digital Product Design',
    slug: 'product-design',
    category: 'Digital Design',
    tagline: 'Intuitive software interfaces that turn complex tasks into effortless delight.',
    description: 'We design web applications, SaaS dashboards, and consumer mobile apps rooted in cognitive ergonomics and human-centered research. We author robust design tokens in Figma that your engineering team can seamlessly implement.',
    deliverables: [
      'User Journey & Wireframe Architecture',
      'Interactive Figma Prototypes for User Testing',
      'Scalable Design System & Component Token Library',
      'Mobile iOS & Android Screen Suites',
      'Web Dashboard & Data Visualization UI',
      'Developer Handoff Documentation & Specs'
    ],
    scopeHighlight: 'End-to-end UX/UI flows ready for engineering sprint execution',
    idealFor: 'Fintech, Healthtech, Logistics, and SaaS innovators building mission-critical software.'
  },
  {
    id: 'marketing-collateral',
    number: '05',
    title: 'Graphic Design & Marketing Collateral',
    slug: 'marketing-design',
    category: 'Marketing Design',
    tagline: 'Persuasive visual communication for high-stakes investor and customer pitches.',
    description: 'From venture capital pitch decks that close multi-million dollar funding rounds to editorial annual reports, marketing brochures, and billboard campaigns, we translate business data into captivating visual storytelling.',
    deliverables: [
      'Investor Pitch Decks & Keynote Presentations',
      'Corporate Profiles & Annual Reports',
      'Digital Whitepapers & E-Books',
      'Brochures, One-Pagers & Sales Enablement Sheets',
      'Out-of-Home (OOH) Billboard & Event Signage',
      'High-Resolution Print-Ready Artwork Files'
    ],
    scopeHighlight: 'Executive-level corporate communication materials',
    idealFor: 'Companies raising capital, launching marketing campaigns, or hosting industry summits.'
  },
  {
    id: 'social-media-design',
    number: '06',
    title: 'Social Media Creative & Campaigns',
    slug: 'social-media-creative',
    category: 'Marketing Design',
    tagline: 'Scroll-stopping creative content engineered to cultivate brand fandom.',
    description: 'We create cohesive social media design templates, carousel editorial systems, and motion graphics that help your brand stand out in crowded feeds on LinkedIn, X (Twitter), and Instagram.',
    deliverables: [
      'Cohesive Social Media Grid Design System',
      'Modular Figma Templates for In-House Teams',
      'High-Engagement Carousel & Infographic Layouts',
      'Short-Form Motion Assets & Micro-Animations',
      'Campaign Storyboards & Creative Direction',
      'Monthly Content Style Guides'
    ],
    scopeHighlight: 'Scalable creative content systems for continuous social presence',
    idealFor: 'Brands that want to maintain a distinct, polished voice across social channels.'
  },
  {
    id: 'packaging-print',
    number: '07',
    title: 'Packaging & Print Design',
    slug: 'packaging-print',
    category: 'Branding',
    tagline: 'Tactile, shelf-defining packaging that commands attention in physical spaces.',
    description: 'We design packaging experiences that consumers want to touch, unbox, and display. We collaborate directly with print vendors on dielines, foil stamping, embossing, sustainable substrates, and production finishing.',
    deliverables: [
      'Custom Structural Dieline Design & 3D Mockups',
      'Retail Box, Label & Pouch Artwork',
      'Unboxing Experience & Insert Materials',
      'Print Finishing Specifications (Foil, Emboss, UV)',
      'Substrate & Sustainable Material Advisory',
      'Vendor-Ready Pre-Press Production Files'
    ],
    scopeHighlight: 'Commercial-grade packaging ready for high-volume manufacturing',
    idealFor: 'FMCG, beauty, beverage, lifestyle, and consumer goods brands.'
  }
];
