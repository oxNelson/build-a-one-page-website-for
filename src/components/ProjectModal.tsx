import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

export interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#11141c] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#f5f6f9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-10 w-10 h-10 -mt-2 -mr-2 rounded-full bg-[#1c2230] border border-white/10 flex items-center justify-center text-[#9ea4b4] hover:text-white hover:bg-[#d4af37] hover:text-[#0a0c10] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#9ea4b4] px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
            {project.projectType}
          </span>
          <span className="text-xs font-mono text-[#9ea4b4]">
            {project.location} • {project.year}
          </span>
        </div>

        <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
          {project.title}
        </h2>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-8 border border-white/10 aspect-[16/9] bg-[#161b26]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Client & Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#161b26] border border-white/10 mb-8">
          <div>
            <div className="text-[11px] font-mono uppercase text-[#9ea4b4]">Client</div>
            <div className="text-sm font-semibold text-[#f5f6f9]">{project.client}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-[#9ea4b4]">Geography</div>
            <div className="text-sm font-semibold text-[#f5f6f9]">{project.location}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-[#9ea4b4]">Year</div>
            <div className="text-sm font-semibold text-[#f5f6f9]">{project.year}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-[#9ea4b4]">Deliverable Status</div>
            <div className="text-sm font-semibold text-[#10b981]">Complete & Shipped</div>
          </div>
        </div>

        {/* Challenge & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-5 rounded-xl bg-[#161b26]/60 border border-white/5">
            <h3 className="text-lg font-bold text-[#d4af37] mb-2 font-display">The Challenge</h3>
            <p className="text-sm text-[#9ea4b4] leading-relaxed">{project.challenge}</p>
          </div>
          <div className="p-5 rounded-xl bg-[#161b26]/60 border border-white/5">
            <h3 className="text-lg font-bold text-[#d4af37] mb-2 font-display">Strategic Approach</h3>
            <p className="text-sm text-[#9ea4b4] leading-relaxed">{project.approach}</p>
          </div>
        </div>

        {/* Outcome & Impact */}
        <div className="mb-8 p-5 rounded-xl bg-[#161b26] border border-white/10">
          <h3 className="text-lg font-bold text-[#f5f6f9] mb-2 font-display">The Outcome</h3>
          <p className="text-sm text-[#9ea4b4] leading-relaxed mb-6">{project.outcome}</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-[#d4af37]">{m.value}</div>
                <div className="text-[11px] font-mono text-[#9ea4b4] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase text-[#9ea4b4] tracking-wider mb-3">Key Deliverables Included</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#f5f6f9]">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Preview Images */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-8">
            <div className="text-xs font-mono uppercase text-[#9ea4b4] tracking-wider mb-3">Visual Study Gallery</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((imgUrl, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-white/10 aspect-[4/3] bg-[#161b26]">
                  <img src={imgUrl} alt={`${project.title} gallery asset ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to action footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#9ea4b4]">
            Inspired by this work? Let’s design a custom solution for your brand.
          </div>
          <Link
            to="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d4af37] text-[#0a0c10] text-sm font-semibold hover:bg-[#e6c148] transition-all shadow-md shrink-0"
          >
            <span>Commission Similar Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
