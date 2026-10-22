import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SERVICES_DATA } from '../data/services';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Branding', 'Web Design', 'Digital Design', 'Marketing Design'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <>
      <SEO
        title="Services & Capabilities — Strategic Design Offerings"
        description="Explore the full spectrum of creative and digital design services offered by Obsidian Design Agency in Nigeria: Brand Identity, UI/UX, Web Design, and Marketing Collateral."
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono text-[#d4af37] mb-6">
              <span>AGENCY CAPABILITIES & DISCIPLINES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f6f9] leading-[1.12] mb-6">
              Strategic Design Services Engineered for Category Leaders.
            </h1>

            <p className="text-lg sm:text-xl text-[#9ea4b4] leading-relaxed">
              We provide comprehensive creative capabilities designed to build lasting brand equity, accelerate user adoption, and command premium market value.
            </p>
          </div>

        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9ea4b4]">
              <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Filter by Discipline:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#d4af37] text-[#0a0c10] shadow-sm'
                      : 'bg-[#12151c] text-[#9ea4b4] border border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-12">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#12151c] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono font-bold text-[#d4af37] px-3 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                        {service.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#9ea4b4]">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f6f9] mb-3 font-display">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#d4af37] font-medium leading-relaxed mb-4">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-[#9ea4b4] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="p-4 rounded-xl bg-[#161b26] border border-white/5 mb-6">
                      <div className="text-[11px] font-mono uppercase text-[#9ea4b4] mb-1">Ideal For</div>
                      <div className="text-xs text-[#f5f6f9] leading-relaxed">{service.idealFor}</div>
                    </div>

                    <Button
                      to={`/contact?service=${service.slug}`}
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Enquire for this Service
                    </Button>
                  </div>

                  {/* Right Column: Deliverables Checklist */}
                  <div className="lg:col-span-7 bg-[#161b26]/70 p-6 sm:p-8 rounded-2xl border border-white/5">
                    <div className="text-xs font-mono uppercase text-[#d4af37] tracking-wider mb-4 font-semibold flex items-center justify-between">
                      <span>Scope of Deliverables</span>
                      <span className="text-[11px] text-[#9ea4b4]">{service.deliverables.length} Key Outputs</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f5f6f9]">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9ea4b4]">
                      <span>Outcome Highlight:</span>
                      <span className="text-[#f5f6f9] font-medium text-right">{service.scopeHighlight}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Commission Callout */}
      <section className="py-20 bg-[#0e1117] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            tag="CUSTOM SCOPE"
            title="Need a Cross-Disciplinary Engagement?"
            subtitle="Many of our partners engage us for a combined scope—from initial brand identity to full web platform development and venture deck design."
            align="center"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Discuss Custom Engagement
            </Button>
            <Button to="/portfolio" variant="secondary" size="lg">
              Review Past Outcomes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
