import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Agency', path: '/about' },
    { label: 'Capabilities & Services', path: '/services' },
    { label: 'Selected Portfolio', path: '/portfolio' },
    { label: 'Project Enquiry', path: '/contact' }
  ];

  const serviceLinks = [
    { label: 'Brand Identity & Strategy', path: '/services#brand-strategy' },
    { label: 'Logo Design & Visual Systems', path: '/services#visual-identity' },
    { label: 'Website Design & Development', path: '/services#web-design-dev' },
    { label: 'UI/UX & Product Design', path: '/services#ui-ux-product' },
    { label: 'Graphic Design & Marketing Collateral', path: '/services#marketing-collateral' }
  ];

  return (
    <footer className="bg-[#0b0d12] border-t border-white/10 pt-16 md:pt-20 pb-12 text-[#9ea4b4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-16">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-[#161b26] border border-white/10 flex items-center justify-center p-1 group-hover:border-[#d4af37]/50 transition-colors">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,6 92,26 92,74 50,94 8,74 8,26" fill="#1e2433" stroke="#d4af37" strokeWidth="6" />
                  <circle cx="50" cy="50" r="14" fill="#d4af37" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-[#f5f6f9]">
                OBSIDIAN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] font-semibold uppercase px-2 py-0.5 rounded bg-[#161b26] border border-[#d4af37]/30">
                Lagos
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#9ea4b4] max-w-sm mb-6">
              A premier creative design agency in Nigeria. We engineer distinct brand identities, tactile digital products, and high-impact visual systems for visionary enterprises across Africa and worldwide.
            </p>

            <div className="flex flex-col gap-2.5 text-xs font-mono text-[#9ea4b4]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Victoria Island, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Serving Nigerian & International Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href="mailto:contact@obsidiandesign.ng" className="text-[#f5f6f9] hover:text-[#d4af37] transition-colors">
                  contact@obsidiandesign.ng
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-4 font-semibold">
              Explore
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#f5f6f9] transition-colors focus-visible:outline-none focus-visible:text-[#d4af37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-4 font-semibold">
              Services
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="hover:text-[#f5f6f9] transition-colors focus-visible:outline-none focus-visible:text-[#d4af37]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Commission Callout */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-4 font-semibold">
              Initiate Project
            </div>
            <p className="text-xs text-[#9ea4b4] leading-relaxed mb-4">
              Ready to elevate your brand presence with strategic design?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161b26] border border-white/10 hover:border-[#d4af37] text-xs font-medium text-[#f5f6f9] hover:text-[#d4af37] transition-all"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Obsidian Design Agency. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f6f9] transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f6f9] transition-colors">
              X / Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f6f9] transition-colors">
              Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f6f9] transition-colors">
              GitHub
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#9ea4b4] hover:text-[#d4af37] transition-colors cursor-pointer ml-2"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
