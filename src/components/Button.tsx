import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10] select-none rounded-full';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold'
  };

  const variantClasses = {
    primary: 'bg-[#d4af37] text-[#0a0c10] hover:bg-[#e6c148] shadow-md shadow-[#d4af37]/20 hover:shadow-lg hover:shadow-[#d4af37]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none',
    secondary: 'bg-[#161b26] text-[#f5f6f9] border border-white/10 hover:border-white/20 hover:bg-[#1e2433] hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-[#f5f6f9] border border-[#d4af37]/40 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/5',
    ghost: 'bg-transparent text-[#9ea4b4] hover:text-[#f5f6f9] hover:bg-white/5'
  };

  const fullClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={fullClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={fullClasses} disabled={disabled} {...rest}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
