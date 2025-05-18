import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 animate-slideUp',
        'bg-indigo-900 text-slate-200', // Reverted background and base text color
        'border-2 border-accent', // Added accent border
        'shadow-xl shadow-accent/30', // Added accent-tinted shadow
        'rounded-lg my-8', // Added margin between sections and rounded corners
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
