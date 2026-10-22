import React from 'react';

export interface SectionHeadingProps {
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#d4af37] ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f6f9] leading-[1.15] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[#9ea4b4] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
