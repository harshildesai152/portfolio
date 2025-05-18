
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn('text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-slideUp', className)}
      style={{ animationDelay: '0.2s' }} /* Increased delay from 0.1s to 0.2s */
    >
      {children}
    </h2>
  );
}
