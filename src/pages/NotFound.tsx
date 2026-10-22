import React from 'react';
import { Home } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be located on Obsidian Design Agency's website."
      />

      <section className="py-24 md:py-36 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-7xl sm:text-9xl font-bold font-display text-[#d4af37]/20 mb-6">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f6f9] mb-4 font-display">
            Page Not Found
          </h1>

          <p className="text-base text-[#9ea4b4] leading-relaxed mb-8">
            The page you are looking for may have been moved, renamed, or does not exist. Please return to the homepage or explore our work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" size="md" icon={<Home className="w-4 h-4" />} iconPosition="left">
              Return Home
            </Button>
            <Button to="/portfolio" variant="secondary" size="md">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
