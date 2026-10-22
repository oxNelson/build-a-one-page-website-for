import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Layers, Compass, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { SERVICES_DATA } from '../data/services';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Take 3 featured projects for Home
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 3);
  // Take first 4 services for Home overview
  const featuredServices = SERVICES_DATA.slice(0, 4);

  return (
    <>
      <SEO
        title="Home — Strategic Brand & Digital Design"
        description="Obsidian Design Agency is a premier creative design agency in Lagos, Nigeria. Bold ideas, distinctive design, and strategic brand systems built to stand out."
      />

      {/* 1. Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono text-[#d4af37] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span>PREMIER CREATIVE DESIGN AGENCY • LAGOS, NIGERIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f6f9] leading-[1.08] max-w-5xl mb-6">
            Bold Ideas. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f6f9] via-[#e5c04b] to-[#d4af37]">Distinctive Design.</span> Brands Built to Stand Out.
          </h1>

          {/* Supporting Pitch */}
          <p className="text-lg sm:text-xl text-[#9ea4b4] max-w-3xl leading-relaxed mb-10">
            Obsidian Design Agency is a strategic creative partner based in Lagos, Nigeria. We collaborate with high-growth African startups, enterprise innovators, and international brands to sculpt iconic identities, high-converting web experiences, and scalable digital design systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start a Project
            </Button>
            <Button to="/portfolio" variant="secondary" size="lg" icon={<ArrowUpRight className="w-5 h-5" />}>
              Explore Our Work
            </Button>
          </div>

          {/* Metrics & Proof Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#12151c] border border-white/10">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-bold font-display text-[#d4af37]">40+</div>
              <div className="text-xs sm:text-sm text-[#9ea4b4] mt-1">Brand Systems & Products Crafted</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-bold font-display text-[#d4af37]">99%</div>
              <div className="text-xs sm:text-sm text-[#9ea4b4] mt-1">Client Retention & Satisfaction</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-bold font-display text-[#d4af37]">Global</div>
              <div className="text-xs sm:text-sm text-[#9ea4b4] mt-1">Clients in Nigeria, UK, US & Europe</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-bold font-display text-[#d4af37]">100%</div>
              <div className="text-xs sm:text-sm text-[#9ea4b4] mt-1">In-House Strategic Craft</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Selected Work Showcase */}
      <section className="py-20 bg-[#0e1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              tag="SELECTED WORK"
              title="Recent Commissions & Design Studies"
              subtitle="Explore how we combine strategic market insight with uncompromising craft to help brands lead their categories."
              className="mb-0 md:mb-0"
            />
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37] hover:text-[#e6c148] transition-colors self-start md:self-end"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Core Services Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              tag="WHAT WE DO"
              title="End-to-End Creative & Digital Capabilities"
              subtitle="From nascent positioning to production software design, we provide the full spectrum of strategic design services."
              className="mb-0 md:mb-0"
            />
            <Button to="/services" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Explore All 7 Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-[#12151c] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#d4af37] px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono text-[#9ea4b4]">{service.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f5f6f9] group-hover:text-[#d4af37] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#9ea4b4] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <div className="text-xs font-mono uppercase text-[#9ea4b4] tracking-wider mb-2">Core Deliverables</div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#f5f6f9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9ea4b4] italic">{service.scopeHighlight}</span>
                  <Link
                    to={`/contact?service=${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Strategic Approach & The Obsidian Advantage */}
      <section className="py-20 bg-[#0e1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            tag="OUR PHILOSOPHY"
            title="Design as a Lever for Commercial Growth"
            subtitle="We reject superficial aesthetics. Every identity, layout, and interaction we create is engineered to solve a concrete business objective."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Deep Market Context</h3>
              <p className="text-sm text-[#9ea4b4] leading-relaxed">
                Operating from Nigeria with global exposure, we understand the nuances of communicating with local African audiences while meeting the exacting standards of international investors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Systematic Rigor</h3>
              <p className="text-sm text-[#9ea4b4] leading-relaxed">
                We deliver living design tokens, atomic component libraries, and thorough documentation so that your internal engineers and marketers can build consistently without friction.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Radical Reliability</h3>
              <p className="text-sm text-[#9ea4b4] leading-relaxed">
                Direct partner communication, structured weekly sprint demos, transparent pricing, and zero agency theater. We do what we say, on schedule and within scope.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Process & Methodology Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            tag="HOW WE WORK"
            title="A Predictable, High-Velocity Delivery Model"
            subtitle="How we guide your project from initial discovery to flawless deployment."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="text-3xl font-mono font-bold text-[#d4af37]/30 mb-4">01</div>
              <h3 className="text-lg font-bold mb-2">Discovery & Audit</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We immerse ourselves in your market position, competitive landscape, and user requirements to establish clear success benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="text-3xl font-mono font-bold text-[#d4af37]/30 mb-4">02</div>
              <h3 className="text-lg font-bold mb-2">Strategy & Systems</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We author information architectures, brand positioning frameworks, and wireframe prototypes before committing to high-fidelity visuals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="text-3xl font-mono font-bold text-[#d4af37]/30 mb-4">03</div>
              <h3 className="text-lg font-bold mb-2">Artisanal Craft</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We render bespoke visual marks, responsive web code, micro-animations, and design tokens, testing thoroughly across devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="text-3xl font-mono font-bold text-[#d4af37]/30 mb-4">04</div>
              <h3 className="text-lg font-bold mb-2">Launch & Handoff</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                Complete asset package transfer, 100% IP ownership handover, staff training guides, and post-launch advisory support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Client Voices & Perspective */}
      <section className="py-20 bg-[#0e1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            tag="CLIENT PERSPECTIVE"
            title="Partners in Building Enduring Brands"
            subtitle="Feedback from leaders who have partnered with Obsidian to transform their digital presence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#d4af37] mb-4">★★★★★</div>
                <p className="text-sm text-[#f5f6f9] leading-relaxed italic mb-6">
                  "Obsidian brought an executive-level strategic mindset to our product rebrand. Their ability to distill complex fintech workflows into an intuitive mobile app made a massive impression on our users in Lagos."
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-[#f5f6f9]">Tunde Adeleke</div>
                <div className="text-xs text-[#9ea4b4]">Chief Product Officer, West African Fintech Labs</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#d4af37] mb-4">★★★★★</div>
                <p className="text-sm text-[#f5f6f9] leading-relaxed italic mb-6">
                  "Finding an agency in Nigeria that executes with the polish and speed of premier London agencies was a game changer for us. Our international partners constantly praise our brand collateral."
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-[#f5f6f9]">Amina Bello</div>
                <div className="text-xs text-[#9ea4b4]">Managing Director, AgTech Global Supply</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#12151c] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#d4af37] mb-4">★★★★★</div>
                <p className="text-sm text-[#f5f6f9] leading-relaxed italic mb-6">
                  "They don't just deliver mockups and disappear. The Obsidian team delivered robust design tokens, clean code specs, and stayed engaged throughout our engineering rollout."
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-[#f5f6f9]">Chidi Okafor</div>
                <div className="text-xs text-[#9ea4b4]">Founder & Principal Architect, Urban Lagos</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Strong Project Enquiry Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#161b26] to-[#11141c] border border-white/15 relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMISSIONS OPEN FOR NIGERIAN & INTERNATIONAL CLIENTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f6f9] mb-6">
              Ready to Build Something Extraordinary?
            </h2>

            <p className="text-base sm:text-lg text-[#9ea4b4] max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you are launching a new enterprise or repositioning an established brand, let’s explore how strategic design can accelerate your growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start a Conversation
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                View Our Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
