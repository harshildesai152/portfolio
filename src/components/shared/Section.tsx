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
      className={cn('py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 animate-slideUp', className)}
      {...props}
    >
      {children}
    </section>
  );
}
