import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-outfit font-semibold rounded-full transition-all duration-300 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rkd-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--rkd-bg)] disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-[var(--rkd-primary)] text-[var(--rkd-fg)] hover:bg-[var(--rkd-primary-hover)] hover:shadow-[0_0_20px_rgba(232,40,43,0.3)] active:scale-[0.98]',
      secondary: 'bg-transparent text-[var(--rkd-fg)] border border-[var(--rkd-border)] hover:border-[var(--rkd-primary)] hover:bg-[var(--rkd-primary)]/10 active:scale-[0.98]',
      ghost: 'bg-transparent text-[var(--rkd-fg)] hover:bg-[var(--rkd-primary)]/10 active:scale-[0.98]',
      link: 'bg-transparent text-[var(--rkd-primary)] hover:text-[var(--rkd-primary-hover)] underline-offset-4 hover:underline',
    };

    const sizes = {
      sm: 'px-4 py-2 text-body-sm gap-2',
      md: 'px-6 py-3 text-body gap-2.5',
      lg: 'px-8 py-4 text-body-lg gap-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };