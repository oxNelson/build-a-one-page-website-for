import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0c10]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg"
              aria-label="Obsidian Design Agency Home"
            >
              <div className="w-9 h-9 rounded-lg bg-[#161b26] border border-white/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#d4af37]/50">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,6 92,26 92,74 50,94 8,74 8,26" fill="#1e2433" stroke="#d4af37" strokeWidth="6" />
                  <circle cx="50" cy="50" r="14" fill="#d4af37" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-[#f5f6f9] group-hover:text-white transition-colors">
                  OBSIDIAN
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] -mt-1 font-semibold uppercase">
                  Design Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#12151c]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Desktop Navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] ${
                      isActive
                        ? 'bg-[#d4af37] text-[#0a0c10] font-semibold shadow-sm'
                        : 'text-[#9ea4b4] hover:text-[#f5f6f9] hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Nav Action */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4af37] text-[#0a0c10] text-sm font-semibold hover:bg-[#e6c148] transition-all duration-200 shadow-md shadow-[#d4af37]/20 hover:shadow-lg hover:shadow-[#d4af37]/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-[#161b26] border border-white/10 flex items-center justify-center text-[#f5f6f9] hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0c10]/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
          <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 px-2">Navigation Menu</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-2xl font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0a0c10]'
                    : 'text-[#f5f6f9] hover:bg-white/5 hover:text-[#d4af37]'
                }`
              }
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-5 h-5 opacity-60" />
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">Location & Studio</div>
          <div className="text-sm text-[#f5f6f9] mb-4">Victoria Island, Lagos, Nigeria</div>
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#d4af37] text-[#0a0c10] font-semibold text-base shadow-lg shadow-[#d4af37]/20"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};
