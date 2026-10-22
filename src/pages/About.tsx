import React from 'react';
import { ArrowRight, CheckCircle2, Target, Eye, Gem, Users, Globe2, Lightbulb } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us — Strategic Design Practice in Nigeria"
        description="Learn about Obsidian Design Agency, our mission, core values, and approach to crafting distinctive brands and digital products from Lagos, Nigeria."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono text-[#d4af37] mb-6">
              <span>ABOUT OBSIDIAN DESIGN AGENCY</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f6f9] leading-[1.12] mb-6">
              We Craft Brands and Digital Products That Demand Attention.
            </h1>

            <p className="text-lg sm:text-xl text-[#9ea4b4] leading-relaxed">
              Founded in Lagos, Nigeria, Obsidian Design Agency emerged from a conviction that strategic creative thinking and rigorous design engineering can elevate African businesses into world-class market leaders.
            </p>
          </div>

        </div>
      </section>

      {/* Agency Background & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-3">Our Genesis</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f6f9] mb-6 leading-snug">
                Where African Ingenuity Meets Global Design Rigor.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#9ea4b4] leading-relaxed">
                <p>
                  Obsidian was established to bridge a critical gap: businesses in Nigeria and across the African continent were building revolutionary software, financial infrastructure, and consumer products, yet were often hindered by fragmented branding and generic templates.
                </p>
                <p>
                  We operate as a high-conviction creative practice. We combine deep local empathy for the African consumer landscape with international aesthetic benchmarks. Whether designing an offline-capable mobile app for Nigerian traders or an institutional investor pitch deck for Silicon Valley and London venture capitalists, our work stands out for its clarity and craft.
                </p>
                <p>
                  We believe that great design is not a luxury decoration—it is an essential operational catalyst that drives client acquisition, brand valuation, and enduring trust.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="p-4 rounded-xl bg-[#12151c] border border-white/10 text-left min-w-[140px]">
                  <div className="text-2xl font-bold font-display text-[#d4af37]">Lagos</div>
                  <div className="text-xs font-mono text-[#9ea4b4]">HQ & Operational Hub</div>
                </div>
                <div className="p-4 rounded-xl bg-[#12151c] border border-white/10 text-left min-w-[140px]">
                  <div className="text-2xl font-bold font-display text-[#d4af37]">Global</div>
                  <div className="text-xs font-mono text-[#9ea4b4]">Client Footprint</div>
                </div>
                <div className="p-4 rounded-xl bg-[#12151c] border border-white/10 text-left min-w-[140px]">
                  <div className="text-2xl font-bold font-display text-[#d4af37]">Senior</div>
                  <div className="text-xs font-mono text-[#9ea4b4]">Dedicated Project Pods</div>
                </div>
              </div>
            </div>

            {/* Visual Image / Studio Culture */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#12151c] aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Obsidian Design Agency creative studio collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0c10]/80 backdrop-blur-md border border-white/10">
                <div className="text-xs font-mono text-[#d4af37] uppercase">The Studio Standard</div>
                <div className="text-sm font-semibold text-[#f5f6f9]">Every pixel and typographic cut serves a defined commercial outcome.</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="py-20 bg-[#0e1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Our Mission</span>
              <h3 className="text-2xl font-bold text-[#f5f6f9] mb-4 font-display">
                Empower Visionary Businesses with Strategic Design
              </h3>
              <p className="text-sm sm:text-base text-[#9ea4b4] leading-relaxed">
                To equip ambitious startups and category-defining enterprises across Nigeria and the world with memorable identities, tactile software interfaces, and robust design systems that drive tangible market growth and customer loyalty.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#12151c] border border-white/10 relative">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Our Vision</span>
              <h3 className="text-2xl font-bold text-[#f5f6f9] mb-4 font-display">
                Africa’s Benchmark for Creative Excellence
              </h3>
              <p className="text-sm sm:text-base text-[#9ea4b4] leading-relaxed">
                To stand as the continental standard-bearer for strategic design and creative engineering, proving that work originating from Lagos can shape global brand aesthetics and digital product ergonomics.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Creative Values & Design Philosophy */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            tag="CORE VALUES"
            title="The Principles That Govern Our Craft"
            subtitle="How we make decisions, critique work, and deliver value across every client partnership."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-5">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">Radical Intentionality</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We eliminate vanity decoration. Every layout spacing, typeface choice, and micro-motion is chosen to solve a concrete business or usability objective.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-5">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">Contextual Empathy</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We deeply appreciate the nuances of African infrastructure, digital habits, and cultural aesthetics while adhering to strict international accessibility standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">Craft as Advantage</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                Aesthetics build trust. When a product looks and feels world-class, customers perceive greater value, convert faster, and remain loyal longer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">True Partnership</h3>
              <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed">
                We don’t act as passive task-takers. We challenge assumptions, offer candid strategic counsel, and celebrate your business milestones as our own.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Team Structure & Leadership (Editable Placeholders per SRS 3.2) */}
      <section className="py-20 bg-[#0e1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            tag="TEAM STRUCTURE"
            title="Multidisciplinary Pods Led by Senior Talent"
            subtitle="We assemble tailored pods composed of verified specialists for every engagement."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#181c26] border-2 border-[#d4af37]/40 mb-4 flex items-center justify-center text-[#d4af37] font-display font-bold text-xl">
                BS
              </div>
              <h3 className="text-base font-bold text-[#f5f6f9]">Brand Strategy Lead</h3>
              <div className="text-xs font-mono text-[#d4af37] mt-0.5 mb-3">Positioning & Narrative Architecture</div>
              <p className="text-xs text-[#9ea4b4] leading-relaxed">
                Directs market differentiation, brand voice, and executive stakeholder alignment across West African and international markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#181c26] border-2 border-[#d4af37]/40 mb-4 flex items-center justify-center text-[#d4af37] font-display font-bold text-xl">
                CD
              </div>
              <h3 className="text-base font-bold text-[#f5f6f9]">Creative Director</h3>
              <div className="text-xs font-mono text-[#d4af37] mt-0.5 mb-3">Visual Systems & Typography</div>
              <p className="text-xs text-[#9ea4b4] leading-relaxed">
                Oversees identity development, custom logomarks, color physics, editorial art direction, and brand guidelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#181c26] border-2 border-[#d4af37]/40 mb-4 flex items-center justify-center text-[#d4af37] font-display font-bold text-xl">
                UX
              </div>
              <h3 className="text-base font-bold text-[#f5f6f9]">Product Design Director</h3>
              <div className="text-xs font-mono text-[#d4af37] mt-0.5 mb-3">UI/UX & Design Systems</div>
              <p className="text-xs text-[#9ea4b4] leading-relaxed">
                Architects complex web and mobile workflows, Figma design tokens, and user-tested software interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#181c26] border-2 border-[#d4af37]/40 mb-4 flex items-center justify-center text-[#d4af37] font-display font-bold text-xl">
                FE
              </div>
              <h3 className="text-base font-bold text-[#f5f6f9]">Creative Technologist</h3>
              <div className="text-xs font-mono text-[#d4af37] mt-0.5 mb-3">Frontend Architecture & Motion</div>
              <p className="text-xs text-[#9ea4b4] leading-relaxed">
                Bridges Figma with production code (React, TypeScript, Tailwind) to guarantee responsive, accessible deployment.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center text-xs font-mono text-[#9ea4b4]">
            *Our senior team structure is customized per engagement to match technical and brand scope.
          </div>

        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#12151c] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Collaboration Model</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f6f9] mb-4">
                  Transparent, Asynchronous & Sprint-Based
                </h3>
                <p className="text-sm sm:text-base text-[#9ea4b4] leading-relaxed mb-6">
                  We integrate directly with your executive and product teams via dedicated Slack channels, bi-weekly sprint demos, recorded video walkthroughs, and live Figma access. Whether you are based in Lagos, London, or San Francisco, you always have complete visibility into progress.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#f5f6f9]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Weekly Milestones & Live Previews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>100% Unconditional IP Handover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Fixed Scope or Dedicated Retainers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Post-Launch Design Guild Support</span>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start a Project
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
