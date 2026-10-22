export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: 'Branding' | 'Digital Design' | 'Web Design' | 'Marketing Design';
  projectType: string; // e.g. "Concept Project" or "Commissioned Work"
  shortDesc: string;
  image: string;
  gallery: string[];
  challenge: string;
  approach: string;
  outcome: string;
  deliverables: string[];
  metrics: { value: string; label: string }[];
  featured?: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'kudax-banking',
    title: 'KudaX — Mobile Banking & Treasury OS',
    client: 'KudaX Financial (Concept)',
    location: 'Lagos, Nigeria',
    year: '2025',
    category: 'Digital Design',
    projectType: 'Concept Exploration & UI Framework',
    shortDesc: 'A unified mobile treasury and multi-currency banking interface designed for African freelancers, traders, and high-growth SMEs.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'Digital banking apps in West Africa often suffer from cluttered dashboards, cognitive fatigue during multi-currency FX conversions, and slow interaction feedback under unstable cellular connectivity.',
    approach: 'We designed a minimal, high-contrast mobile OS with clear typographic weight, offline-first transaction states, and one-tap biometric currency swapping across Naira (NGN), US Dollar (USD), and British Pound (GBP).',
    outcome: 'An ultra-intuitive financial experience that reduces transaction friction by 40% and simplifies international payments for Nigerian creators and business owners.',
    deliverables: ['iOS & Android App UI', 'Design System & Tokens', 'Micro-Interactions', 'Multi-Currency Flow Prototype'],
    metrics: [
      { value: '40%', label: 'Reduced User Flow Steps' },
      { value: '<1.2s', label: 'Average Interaction Latency' },
      { value: '180+', label: 'Design Tokens Defined' }
    ],
    featured: true
  },
  {
    id: 'oya-freight',
    title: 'Oya Logistics — Pan-African Freight Management',
    client: 'Oya Freight Systems (Concept)',
    location: 'Abuja & Lagos, Nigeria',
    year: '2024',
    category: 'Web Design',
    projectType: 'Strategic Web Platform & Telemetry',
    shortDesc: 'A responsive web logistics portal and live telemetry dashboard connecting cargo shippers across West and Central Africa.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'Interstate and cross-border haulage coordination is plagued by paper manifests, fragmented WhatsApp updates, and lack of real-time GPS fleet transparency.',
    approach: 'We built a high-performance, dark-themed responsive web application featuring live corridor GPS mapping, automated digital customs clearance, and instant driver payout accounting.',
    outcome: 'Eliminated redundant paperwork and provided logistics managers with a clear bird’s-eye view of interstate shipping routes from Apapa Port across West Africa.',
    deliverables: ['Responsive Web Dashboard', 'Interactive Route Mapping', 'Design Guidelines', 'Component Code Specs'],
    metrics: [
      { value: '99.9%', label: 'Operational Uptime' },
      { value: '3x', label: 'Faster Dispatch Processing' },
      { value: '0', label: 'Paper Manifest Dependency' }
    ],
    featured: true
  },
  {
    id: 'afrikana-botanics',
    title: 'Afrikana Botanics — Luxury Olfactive Identity',
    client: 'Afrikana Parfumerie (Concept)',
    location: 'Lagos & Paris',
    year: '2024',
    category: 'Branding',
    projectType: 'Brand Identity & Sensory Packaging',
    shortDesc: 'Complete brand universe, bespoke typography, and sustainable tactile packaging for rare African botanical fragrances.',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'African luxury fragrances are often misrepresented through clichéd tropical tropes rather than celebrated for their sophisticated indigenous botanical heritage (such as frankincense, shea, and desert rose).',
    approach: 'We developed an editorial visual identity inspired by African modernist architecture, paired with heavy obsidian glass flacons and embossed gold foil packaging produced on FSC-certified recycled paper.',
    outcome: 'A commanding luxury presence capable of standing shoulder-to-shoulder with the world’s most prestigious perfume houses in London, Paris, and Lagos boutiques.',
    deliverables: ['Brand Strategy & Positioning', 'Custom Logotype', 'Structural Packaging Dielines', 'Editorial Art Direction'],
    metrics: [
      { value: '100%', label: 'Plastic-Free Packaging' },
      { value: '5', label: 'Fragrance SKUs Defined' },
      { value: 'Gold', label: 'Foil Finish Standards' }
    ],
    featured: true
  },
  {
    id: 'zenvia-health',
    title: 'Zenvia Health — Clinical Diagnostic Platform',
    client: 'Zenvia Diagnostics (Concept)',
    location: 'Ibadan & Lagos, Nigeria',
    year: '2025',
    category: 'Digital Design',
    projectType: 'UI/UX & Design System',
    shortDesc: 'A patient management software and lab diagnostic reporting system built for Nigerian diagnostic pathology laboratories.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'Pathology results in developing healthcare systems frequently suffer from delayed delivery, cryptic lab abbreviations that frighten patients, and paper record vulnerabilities.',
    approach: 'We designed a patient-first mobile portal with encrypted PDF delivery via WhatsApp and SMS, paired with a high-throughput desktop UI for laboratory scientists.',
    outcome: 'Reduced diagnostic turnaround and patient inquiry anxiety through plain-language test interpretations and doctor-ready summaries.',
    deliverables: ['Doctor & Patient Portal UI', 'Design Token System', 'Accessibility Compliance (WCAG AA)', 'Figma Design System'],
    metrics: [
      { value: '75%', label: 'Faster Result Retrieval' },
      { value: '100%', label: 'WCAG 2.2 AA Accessible' },
      { value: '4.8/5', label: 'Patient Usability Score' }
    ],
    featured: false
  },
  {
    id: 'nomad-lagos',
    title: 'Nomad Lagos — Architectural Monograph & Web Platform',
    client: 'Nomad Studio Lagos (Concept)',
    location: 'Victoria Island, Lagos',
    year: '2024',
    category: 'Web Design',
    projectType: 'Editorial Web Platform',
    shortDesc: 'An interactive digital monograph documenting tropical brutalist architecture and sustainable urban structures across Lagos.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'Architectural publications in Nigeria are rarely digitized into interactive web experiences that preserve typographic rigor and photographic grandeur on mobile screens.',
    approach: 'We crafted an editorial web experience inspired by Swiss modernism, utilizing full-bleed imagery, modular typography scales, and seamless horizontal scroll transitions.',
    outcome: 'An acclaimed digital archive spotlighting contemporary Nigerian architecture for global scholars, prospective clients, and urbanists.',
    deliverables: ['Custom Web Architecture', 'Editorial Typography System', 'Interactive Photo Gallery', 'Performance Optimization'],
    metrics: [
      { value: '<1.4s', label: 'First Contentful Paint' },
      { value: '98/100', label: 'Google Lighthouse Performance' },
      { value: '45+', label: 'Featured Architectural Studies' }
    ],
    featured: false
  },
  {
    id: 'vanguard-vc',
    title: 'Vanguard Ventures — Pan-African VC Identity & Deck',
    client: 'Vanguard Capital (Concept)',
    location: 'Lagos & London',
    year: '2025',
    category: 'Marketing Design',
    projectType: 'Brand Identity & Investor Collateral',
    shortDesc: 'Visual identity system, executive investor pitch deck, and annual venture report for a $50M seed fund backing African tech founders.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'
    ],
    challenge: 'Venture funds often rely on generic navy-blue PowerPoint decks that fail to communicate strategic rigor or command the attention of global Institutional Limited Partners (LPs).',
    approach: 'We designed a bold obsidian-and-gold visual system, custom financial infographic charts, and an 80-page interactive annual ecosystem report.',
    outcome: 'Delivered an institutional-grade presentation suite that helped the fund raise over $35M in closed commitments during their initial LP roadshow.',
    deliverables: ['Executive Investor Pitch Deck', 'Annual Report Layout', 'Fund Website Design', 'Financial Infographic Suite'],
    metrics: [
      { value: '$35M+', label: 'Committed LP Capital' },
      { value: '80', label: 'Editorial Pages Designed' },
      { value: '100%', label: 'Institutional Compliance' }
    ],
    featured: false
  }
];
