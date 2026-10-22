import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projects';

export interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative bg-[#12151c] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Thumbnail Aspect Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#181c26]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0a0c10]/80 backdrop-blur-md text-[#f5f6f9] border border-white/10">
            {project.category}
          </span>
          <span className="px-2 py-1 rounded-full text-[10px] font-mono text-[#d4af37] bg-[#0a0c10]/80 backdrop-blur-md border border-[#d4af37]/20">
            {project.year}
          </span>
        </div>

        {/* Hover View Prompt */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0c10] text-xs font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200 shadow-lg">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs font-mono text-[#9ea4b4] mb-2">
          <span>{project.client}</span>
          <span className="text-[10px] text-[#9ea4b4]/70">{project.location}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#f5f6f9] group-hover:text-[#d4af37] transition-colors mb-2.5 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#9ea4b4] leading-relaxed line-clamp-2 mb-4">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.deliverables.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#9ea4b4] border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.deliverables.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#9ea4b4]/60">
              +{project.deliverables.length - 3} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
