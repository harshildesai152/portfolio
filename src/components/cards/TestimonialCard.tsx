
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/data';
// Quote icon is removed as per the new design

interface TestimonialCardProps {
  testimonial: Testimonial;
  animationDelay?: string;
}

export default function TestimonialCard({ testimonial, animationDelay = '0s' }: TestimonialCardProps) {
  const fallbackName = testimonial.author.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card 
      className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-slideUp bg-card text-card-foreground" 
      style={{ animationDelay }}
    >
      <CardHeader className="pb-4">
        {/* The Quote icon is removed from here */}
        <CardTitle className="text-xl font-semibold text-primary mb-2">
          {testimonial.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground leading-relaxed"> {/* Removed italic class */}
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </CardContent>
      <CardFooter className="mt-4 pt-4 border-t border-border flex items-center space-x-4">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarAiHint} />
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-primary">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
