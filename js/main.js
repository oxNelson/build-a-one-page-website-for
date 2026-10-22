/**
 * ATELIER LUMA — Design Agency Interactive Engine
 * Zero external libraries, ultra-smooth 60fps performance
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAmbientCanvas();
  initCustomCursor();
  initScrollHeader();
  initLiveClocks();
  initPortfolio();
  initCaseStudyModal();
  initEstimator();
  initServicesAccordion();
  initProcessTabs();
  initFaqAccordion();
  initContactForm();
  initSoundEffects();
  initMobileNav();
  initEmailCopy();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  
  // Check persisted preference or system preference
  const savedTheme = localStorage.getItem('luma_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      playSound('toggle');
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark Obsidian' : 'Editorial Light'} mode`);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('luma_theme', theme);
    if (themeIconSun && themeIconMoon) {
      if (theme === 'light') {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
      } else {
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
      }
    }
  }
}

/* ==========================================================================
   2. Interactive Ambient Canvas (Generative Fluid Gradients)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  // Floating gradient orbs
  const orbs = [
    { x: width * 0.3, y: height * 0.3, radius: 420, vx: 0.3, vy: 0.2, hue: 78, saturation: 90, lightness: 60, alpha: 0.28 },
    { x: width * 0.7, y: height * 0.4, radius: 460, vx: -0.25, vy: 0.35, hue: 255, saturation: 85, lightness: 62, alpha: 0.22 },
    { x: width * 0.5, y: height * 0.8, radius: 500, vx: 0.2, vy: -0.3, hue: 165, saturation: 80, lightness: 55, alpha: 0.16 },
  ];

  function render() {
    // Smooth lerp mouse
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    orbs.forEach((orb, i) => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      // Bounce gently on boundaries
      if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
      if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

      // Subtle interaction with mouse
      const dx = mouse.x - orb.x;
      const dy = mouse.y - orb.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 400) {
        orb.x += (dx / dist) * 0.8;
        orb.y += (dy / dist) * 0.8;
      }

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
      
      if (isLight) {
        grad.addColorStop(0, `hsla(${orb.hue}, 70%, 75%, ${orb.alpha * 0.7})`);
        grad.addColorStop(0.5, `hsla(${orb.hue}, 60%, 85%, ${orb.alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(246, 245, 241, 0)');
      } else {
        grad.addColorStop(0, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${orb.alpha})`);
        grad.addColorStop(0.6, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness - 10}%, ${orb.alpha * 0.35})`);
        grad.addColorStop(1, 'rgba(10, 11, 13, 0)');
      }

      ctx.save();
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   3. Custom Magnetic Cursor
   ========================================================================== */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';

  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    if (!isMoving) {
      document.body.classList.add('cursor-active');
      isMoving = true;
    }
  });

  window.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
    isMoving = false;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);

  // Attach hover triggers
  const interactiveSelector = 'a, button, .project-card, .option-card, .service-header, .faq-question, .filter-btn, input, textarea, select';
  
  document.querySelectorAll(interactiveSelector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      if (el.classList.contains('project-card')) {
        follower.style.borderColor = 'var(--accent)';
      }
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* ==========================================================================
   4. Header Scroll State & Progress Bar
   ========================================================================== */
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  const progressBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Header styling
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Progress bar
    if (progressBar && docHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      progressBar.style.width = `${progressPercent}%`;
    }
  }, { passive: true });
}

/* ==========================================================================
   5. Live Studio World Clocks
   ========================================================================== */
function initLiveClocks() {
  const hubs = [
    { id: 'clock-nyc', tz: 'America/New_York' },
    { id: 'clock-lon', tz: 'Europe/London' },
    { id: 'clock-zur', tz: 'Europe/Zurich' },
    { id: 'clock-tyo', tz: 'Asia/Tokyo' }
  ];

  function update() {
    const now = new Date();
    hubs.forEach(hub => {
      const el = document.getElementById(hub.id);
      if (el) {
        try {
          const timeStr = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          }).format(now);
          el.textContent = timeStr;
        } catch (e) {
          el.textContent = '--:--:--';
        }
      }
    });
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   6. Portfolio Projects & Filtering
   ========================================================================== */
const PROJECTS_DATA = [
  {
    id: 'polestar-kinetic',
    title: 'Polestar Kinetic — Autonomous Telemetry OS',
    client: 'Polestar Automotive',
    category: 'digital',
    year: '2025',
    categoryName: 'Digital Product & Spatial UI',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'An ultra-refined digital cockpit and spatial operating system for next-generation electric mobility, seamlessly blending haptic feedback with high-frequency telemetry.',
    challenge: 'Automotive interfaces are cluttered with driver distraction and fragmented touchscreens. Polestar required a unified design system operating under extreme cognitive load constraints with zero latency.',
    solution: 'We engineered an adaptive dynamic HUD and spatial instrument cluster using fluid typography, micro-motion physics, and real-time raytraced vehicle spatial awareness.',
    results: [
      { metric: '94.2%', label: 'Driver Focus Retention Score' },
      { metric: '<12ms', label: 'Screen Telemetry Latency' },
      { metric: 'Red Dot', label: 'Best of the Best 2025' }
    ],
    deliverables: ['Design System', 'Spatial UI Framework', 'Haptic Prototyping', 'Unreal Engine Integration', 'In-Cabin Ergonomics'],
    quote: {
      text: 'Atelier Luma elevated automotive software from a functional afterthought into a luxury tactile signature for our brand.',
      author: 'Henrik Vestergaard — VP Design & Experience, Polestar'
    }
  },
  {
    id: 'aether-sound',
    title: 'Aether Sound — Spatial Acoustic Hardware & App',
    client: 'Aether Audio Labs',
    category: 'brand',
    year: '2024',
    categoryName: 'Brand Identity & Digital Product',
    heroImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Complete brand universe, custom CNC milled typography, tactile packaging, and iOS companion experience for revolutionary binaural acoustic headphones.',
    challenge: 'Entering a crowded luxury audio market dominated by legacy monoliths required an unmistakable visual vocabulary and a companion app that felt physical, not software-like.',
    solution: 'We created an identity centered around cymatic wave forms and precision aluminum materiality. The companion app features custom audio visualizations rendered natively in Metal and WebGL.',
    results: [
      { metric: '$4.2M', label: 'First Batch Sold in 48 Hours' },
      { metric: '4.9★', label: 'App Store Rating (18k reviews)' },
      { metric: 'D&AD', label: 'Yellow Pencil 2024' }
    ],
    deliverables: ['Global Brand Identity', 'Custom Typographic Cut', 'iOS Application', 'Bespoke Packaging', 'WebGL Launch Site'],
    quote: {
      text: 'Their mastery of both physical product elegance and software micro-interactions is unmatched anywhere in the world.',
      author: 'Marcus Vance — Co-founder & CEO, Aether'
    }
  },
  {
    id: 'kanso-os',
    title: 'Kanso OS — Distraction-Free Mobile Interface',
    client: 'Kanso Hardware Inc.',
    category: 'digital',
    year: '2025',
    categoryName: 'Digital Products & Design Systems',
    heroImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A radical rethink of mobile computing based on monospaced typography, intentional friction, and e-ink spatial navigation for modern executives.',
    challenge: 'Smartphones are engineered as dopamine casino machines. Kanso wanted a flagship operating system that treats human attention as sacred while remaining blisteringly useful.',
    solution: 'An operating system stripped to pure typography, high-contrast monochrome layouts, and context-aware natural language widgets that silence unnecessary algorithmic noise.',
    results: [
      { metric: '-68%', label: 'Average Screen Time Reduction' },
      { metric: '180,000+', label: 'Pre-order Waitlist in 3 Weeks' },
      { metric: 'Awwwards', label: 'Site of the Year Nominee' }
    ],
    deliverables: ['Operating System UI', 'Iconography System', 'Design Tokens Engine', 'Hardware Colorway Studies', 'Micro-Interactions'],
    quote: {
      text: 'Luma stripped away every superfluous decoration until only pure intention and serene beauty remained.',
      author: 'Elena Rostova — Chief Product Officer, Kanso'
    }
  },
  {
    id: 'norden-fragrance',
    title: 'Norden Artisanal — Sensory E-Commerce Experience',
    client: 'Norden Parfumerie (Copenhagen)',
    category: 'brand',
    year: '2024',
    categoryName: 'Brand Identity & WebGL 3D',
    heroImage: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Translating invisible olfactory notes into real-time interactive 3D physics shaders and a sensory digital boutique for rare Nordic botanicals.',
    challenge: 'Perfume is notoriously difficult to sell online without sensory testing. Norden needed an experiential medium that allows clients to "feel" notes of pine, petrichor, and smoke.',
    solution: 'We built a bespoke WebGL volumetric fluid simulator where visitors explore scent profiles through reactive particle clouds, backed by a frictionless headless Shopify checkout.',
    results: [
      { metric: '+240%', label: 'Conversion Rate vs Old Site' },
      { metric: '4m 12s', label: 'Average Session Duration' },
      { metric: 'FWA', label: 'FWA of the Day Winner' }
    ],
    deliverables: ['Creative Direction', 'WebGL 3D Visualizer', 'Custom Packaging System', 'Headless Commerce', 'Editorial Photography Direction'],
    quote: {
      text: 'They transformed what seemed impossible — feeling a fragrance through glass screens — into our biggest commercial triumph.',
      author: 'Soren Lindqvist — Creative Director, Norden'
    }
  },
  {
    id: 'verve-genomics',
    title: 'Verve Longevity — Biotech Visual System & Clinical App',
    client: 'Verve Therapeutics',
    category: 'tech',
    year: '2025',
    categoryName: 'Creative Engineering & UI/UX',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Transforming petabytes of genomic sequence data into elegant, actionable longevity biomarkers through high-dimensional data visualization.',
    challenge: 'Clinical genetics is notoriously impenetrable to patients and medical practitioners alike, mired in arcane tables and archaic clinical portals.',
    solution: 'A visual language based on chromatic gene mapping and an ultra-fast web application capable of rendering 100,000+ data nodes in real-time on low-powered tablets.',
    results: [
      { metric: '100k+', label: 'Real-time Genomic Nodes Rendered' },
      { metric: '$65M', label: 'Series B Funding Closed Post-Launch' },
      { metric: 'Fast Co', label: 'Innovation by Design Finalist' }
    ],
    deliverables: ['Clinical Design System', 'Data Visualization Suite', 'Mobile & Desktop App', 'Interactive Investor Pitch', 'Security Compliance UI'],
    quote: {
      text: 'Luma made our complex science understandable to investors and delightful to clinicians.',
      author: 'Dr. Aris Thorne — Founder & Chief Medical Officer, Verve'
    }
  },
  {
    id: 'monolith-pavilion',
    title: 'Monolith Pavilion — Kinetic Spatial Architecture',
    client: 'Venice Architecture Biennale',
    category: 'spatial',
    year: '2024',
    categoryName: 'Spatial Design & Creative Tech',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A 40-meter responsive pavilion constructed from carbon composites and motorized acoustic louvers that breathe in synchrony with ambient visitor biometric rhythms.',
    challenge: 'Fusing physical brutalist materials with digital sensing algorithms without visible wires, sensors, or mechanical awkwardness.',
    solution: 'Sub-surface LiDAR sensors coupled with custom embedded micro-controllers driving silent linear actuators, producing an architectural organ that mimics human respiration.',
    results: [
      { metric: '420,000+', label: 'Biennale Exhibition Visitors' },
      { metric: 'Golden Lion', label: 'Special Mention by Jury' },
      { metric: '100%', label: 'Solar & Kinetic Self-Powered' }
    ],
    deliverables: ['Kinetic Architectural Engineering', 'Spatial Sound Design', 'Embedded Micro-controller Software', 'Interactive Lighting Design'],
    quote: {
      text: 'One of the most transcendent marriages of physical space and algorithmic poetry ever constructed.',
      author: 'Curatorial Board — 18th International Architecture Exhibition'
    }
  }
];

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      playSound('click');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   7. Case Study Modal System
   ========================================================================== */
function initCaseStudyModal() {
  const backdrop = document.getElementById('case-modal');
  const closeBtn = document.getElementById('modal-close');
  const projectCards = document.querySelectorAll('.project-card');

  if (!backdrop) return;

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = PROJECTS_DATA.find(p => p.id === projectId);
      if (data) {
        populateAndOpenModal(data);
        playSound('open');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });

  function populateAndOpenModal(p) {
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-client').textContent = p.client;
    document.getElementById('modal-category').textContent = p.categoryName;
    document.getElementById('modal-year').textContent = p.year;
    document.getElementById('modal-hero-img').src = p.heroImage;
    document.getElementById('modal-hero-img').alt = p.title;

    document.getElementById('modal-desc').textContent = p.description;
    document.getElementById('modal-challenge').textContent = p.challenge;
    document.getElementById('modal-solution').textContent = p.solution;

    // Gallery images
    const galleryContainer = document.getElementById('modal-gallery');
    if (galleryContainer && p.gallery) {
      galleryContainer.innerHTML = p.gallery.map(url => `
        <img src="${url}" class="modal-gallery-img" alt="${p.title} detail" loading="lazy">
      `).join('');
    }

    // Results / Metrics
    const resultsContainer = document.getElementById('modal-results');
    if (resultsContainer && p.results) {
      resultsContainer.innerHTML = p.results.map(r => `
        <div class="metric-card">
          <div class="metric-val">${r.metric}</div>
          <div class="metric-label">${r.label}</div>
        </div>
      `).join('');
    }

    // Deliverables
    const delivContainer = document.getElementById('modal-deliverables');
    if (delivContainer && p.deliverables) {
      delivContainer.innerHTML = p.deliverables.map(item => `
        <span class="deliverable-tag">${item}</span>
      `).join('');
    }

    // Quote
    const quoteContainer = document.getElementById('modal-quote-wrap');
    if (quoteContainer && p.quote) {
      quoteContainer.innerHTML = `
        <div class="modal-quote-box">
          <div class="modal-quote-text">"${p.quote.text}"</div>
          <div class="modal-quote-author">— ${p.quote.author}</div>
        </div>
      `;
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    playSound('close');
  }
}

/* ==========================================================================
   8. Interactive Scope & Investment Estimator
   ========================================================================== */
function initEstimator() {
  const serviceOptions = document.querySelectorAll('[data-step="service"] .option-card');
  const horizonOptions = document.querySelectorAll('[data-step="horizon"] .option-card');
  const scopeOptions = document.querySelectorAll('[data-step="scope"] .option-card');

  const priceEl = document.getElementById('estimate-price');
  const timeEl = document.getElementById('estimate-time');
  const teamEl = document.getElementById('estimate-team');
  const sprintEl = document.getElementById('estimate-sprint');
  const applyBtn = document.getElementById('apply-estimate-btn');

  let state = {
    service: 'full-product',
    horizon: 'standard',
    scope: 'hybrid'
  };

  const pricingMatrix = {
    'brand-identity': { base: 35000, label: 'Brand Identity Architecture' },
    'full-product': { base: 65000, label: 'Digital Product Design System' },
    'rebrand-build': { base: 95000, label: 'Complete Rebrand & Web Platform' },
    'spatial-tech': { base: 120000, label: 'Spatial Computing & Creative Tech' }
  };

  const horizonMultiplier = {
    'express': { mult: 1.25, time: '4 — 6 Weeks (Accelerated Sprint)', sprints: '3 Intensive Sprints' },
    'standard': { mult: 1.0, time: '8 — 12 Weeks (Standard Lifecycle)', sprints: '5 Bi-weekly Cycles' },
    'enterprise': { mult: 1.5, time: '16 — 24 Weeks (Global Transformation)', sprints: '8 Evolutionary Cycles' }
  };

  const scopeMultiplier = {
    'design-only': { mult: 0.85, team: 'Lead Partner, Sr. Product Designer, Art Director' },
    'hybrid': { mult: 1.2, team: 'Lead Partner, 2x Product Designers, Creative Technologist, QA' },
    'full-craft': { mult: 1.6, team: 'Full Dedicated Pod: Partner, 2x Designers, 2x Creative Devs, 3D Artist' }
  };

  function setupGroup(nodes, key) {
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        nodes.forEach(n => n.classList.remove('selected'));
        node.classList.add('selected');
        state[key] = node.getAttribute('data-val');
        playSound('select');
        recalculate();
      });
    });
  }

  setupGroup(serviceOptions, 'service');
  setupGroup(horizonOptions, 'horizon');
  setupGroup(scopeOptions, 'scope');

  function recalculate() {
    const srv = pricingMatrix[state.service] || pricingMatrix['full-product'];
    const hrz = horizonMultiplier[state.horizon] || horizonMultiplier['standard'];
    const scp = scopeMultiplier[state.scope] || scopeMultiplier['hybrid'];

    const rawMin = Math.round(srv.base * hrz.mult * scp.mult);
    const rawMax = Math.round(rawMin * 1.35);

    const formattedMin = '$' + rawMin.toLocaleString();
    const formattedMax = '$' + rawMax.toLocaleString();

    if (priceEl) priceEl.textContent = `${formattedMin} — ${formattedMax}`;
    if (timeEl) timeEl.textContent = hrz.time;
    if (teamEl) teamEl.textContent = scp.team;
    if (sprintEl) sprintEl.textContent = hrz.sprints;
  }

  recalculate();

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const serviceName = pricingMatrix[state.service].label;
      const budgetBracket = priceEl.textContent;
      const timeline = horizonMultiplier[state.horizon].time;

      // Pre-fill contact form
      const budgetSelect = document.getElementById('contact-budget');
      if (budgetSelect) {
        budgetSelect.value = state.service === 'spatial-tech' || state.scope === 'full-craft' ? '100k+' : '50k-100k';
      }

      const messageInput = document.getElementById('contact-message');
      if (messageInput) {
        messageInput.value = `[Inquiry via Project Estimator]\nService: ${serviceName}\nEstimated Scope: ${timeline}\nTarget Range: ${budgetBracket}\n\nProject Overview:\n`;
      }

      playSound('apply');
      showToast('Estimator specifications copied to Project Brief!');

      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        messageInput && messageInput.focus();
      }
    });
  }
}

/* ==========================================================================
   9. Capabilities / Services Accordion
   ========================================================================== */
function initServicesAccordion() {
  const items = document.querySelectorAll('.service-item');
  items.forEach(item => {
    const header = item.querySelector('.service-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
        playSound('toggle');
      }
    });
  });
}

/* ==========================================================================
   10. Process Timeline Tabs
   ========================================================================== */
function initProcessTabs() {
  const tabs = document.querySelectorAll('.process-tab-btn');
  const panels = document.querySelectorAll('.process-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-panel');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
      playSound('click');
    });
  });
}

/* ==========================================================================
   11. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
        playSound('click');
      }
    });
  });
}

/* ==========================================================================
   12. Contact Form & Toast Notifications
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('project-brief-form');
  const successCard = document.getElementById('form-success-card');
  const refCodeEl = document.getElementById('inquiry-ref-code');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();

    if (!name || !email) {
      showToast('Please provide your name and email address.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Encrypting & Dispatching...</span>`;

    playSound('submit');

    setTimeout(() => {
      form.style.display = 'none';
      if (successCard) {
        const randomRef = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
        if (refCodeEl) refCodeEl.textContent = randomRef;
        successCard.style.display = 'block';
      }
      playSound('success');
      showToast('Commission inquiry dispatched to our Partners inbox.');
    }, 1200);
  });
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${type === 'error' ? '#ef4444' : '#d4ff32'}" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   13. Copy Email to Clipboard
   ========================================================================== */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'hello@atelierluma.design';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
          playSound('click');
        });
      } else {
        showToast(`Studio email: ${email}`);
      }
    });
  });
}

/* ==========================================================================
   14. Subtle Web Audio Synthesizer Micro-interactions
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initSoundEffects() {
  const soundBtn = document.getElementById('sound-toggle');
  const soundIconOn = document.getElementById('sound-icon-on');
  const soundIconOff = document.getElementById('sound-icon-off');

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        if (soundIconOn) soundIconOn.style.display = 'block';
        if (soundIconOff) soundIconOff.style.display = 'none';
        showToast('Haptic audio feedback enabled');
        playSound('toggle');
      } else {
        if (soundIconOn) soundIconOn.style.display = 'none';
        if (soundIconOff) soundIconOff.style.display = 'block';
        showToast('Haptic audio muted');
      }
    });
  }
}

function playSound(type) {
  if (!soundEnabled) return;

  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click' || type === 'select') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'toggle') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'open') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'close') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'success') {
      // Gentle arpeggio chord
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const chordOsc = audioCtx.createOscillator();
        const chordGain = audioCtx.createGain();
        chordOsc.type = 'sine';
        chordOsc.frequency.setValueAtTime(freq, now + i * 0.06);
        chordGain.gain.setValueAtTime(0.035, now + i * 0.06);
        chordGain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.35);
        chordOsc.connect(chordGain);
        chordGain.connect(audioCtx.destination);
        chordOsc.start(now + i * 0.06);
        chordOsc.stop(now + i * 0.06 + 0.35);
      });
    }
  } catch (e) {
    // Audio context may be restricted by browser policy before first user gesture
  }
}

/* ==========================================================================
   15. Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const links = document.querySelectorAll('.mobile-nav-links a');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      drawer.classList.remove('active');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('active');
      toggle.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    playSound('toggle');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
