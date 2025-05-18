
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/data';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  animationDelay?: string;
}

export default function TestimonialCard({ testimonial, animationDelay = '0s' }: TestimonialCardProps) {
  const fallbackName = testimonial.author.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-slideUp" style={{ animationDelay }}>
      <CardHeader className="pb-4">
        <Quote className="h-8 w-8 text-accent mb-2 transform rotate-180" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
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
