import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = ['All', 'Branding', 'Digital Design', 'Web Design', 'Marketing Design'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <>
      <SEO
        title="Portfolio — Selected Commissions & Design Studies"
        description="Explore Obsidian Design Agency's selected portfolio: brand identity systems, mobile software interfaces, web platforms, and investor collateral crafted in Nigeria."
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono text-[#d4af37] mb-6">
              <span>CURATED DESIGN ARCHIVE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f6f9] leading-[1.12] mb-6">
              Selected Work & Concept Explorations.
            </h1>

            <p className="text-lg sm:text-xl text-[#9ea4b4] leading-relaxed">
              A curated showcase of brand identities, responsive web platforms, and mobile products crafted for clients in Nigeria and across international markets.
            </p>
          </div>

        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9ea4b4]">
              <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Filter Discipline:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#d4af37] text-[#0a0c10] shadow-md font-semibold'
                      : 'bg-[#12151c] text-[#9ea4b4] border border-white/10 hover:border-white/20 hover:text-[#f5f6f9]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-[#12151c] rounded-2xl border border-white/10">
              <p className="text-base text-[#9ea4b4]">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom Commission Pitch */}
      <section className="py-20 bg-[#0e1117] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            tag="START A PROJECT"
            title="Have a Vision Ready for Execution?"
            subtitle="Let’s discuss your target launch timelines, scope requirements, and how Obsidian can partner with your team."
            align="center"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Commission Your Project
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              Learn About Our Process
            </Button>
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
