
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/data';
import { cn } from '@/lib/utils';
// Quote icon is removed as per the new design

interface TestimonialCardProps {
  testimonial: Testimonial;
  animationDelay?: string;
}

export default function TestimonialCard({ testimonial, animationDelay = '0s' }: TestimonialCardProps) {
  const fallbackName = testimonial.author.split(' ').map(n => n[0]).join('').toUpperCase();

  // Base card classes
  let cardClasses = "shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full";
  
  // Apply glassmorphism style if no specific cardStyle is provided or for a generic style
  // For this iteration, we'll always apply glass-experience-card and let the custom background colors override
  // the semi-transparent background of the glass effect.
  cardClasses = cn(cardClasses, "glass-experience-card");


  // Custom styles based on testimonial.cardStyle
  let titleColor = "text-primary"; // Default title color
  let quoteColor = "text-foreground"; // Default quote text color
  let authorColor = "text-primary"; // Default author text color
  let roleColor = "text-muted-foreground"; // Default role text color
  let avatarBorderColor = "border-primary"; // Default avatar border

  if (testimonial.cardStyle === 'green') {
    cardClasses = cn(cardClasses, "bg-emerald-600/80"); // Using a slightly transparent version for potential glass effect
    titleColor = "text-emerald-50";
    quoteColor = "text-emerald-100";
    authorColor = "text-emerald-50";
    roleColor = "text-emerald-200";
    avatarBorderColor = "border-emerald-300";
  } else if (testimonial.cardStyle === 'pink') {
    cardClasses = cn(cardClasses, "bg-pink-600/80");
    titleColor = "text-pink-50";
    quoteColor = "text-pink-100";
    authorColor = "text-pink-50";
    roleColor = "text-pink-200";
    avatarBorderColor = "border-pink-300";
  } else if (testimonial.cardStyle === 'blue') {
    cardClasses = cn(cardClasses, "bg-sky-600/80");
    titleColor = "text-sky-50";
    quoteColor = "text-sky-100";
    authorColor = "text-sky-50";
    roleColor = "text-sky-200";
    avatarBorderColor = "border-sky-300";
  } else {
    // Fallback to default card theme colors if no specific style
    cardClasses = cn(cardClasses, "bg-card text-card-foreground");
    // titleColor, quoteColor etc remain their defaults from above
  }


  return (
    <Card 
      className={cardClasses}
      style={{ animationDelay }}
    >
      <CardHeader className="pb-4">
        <CardTitle className={cn("text-xl font-semibold mb-2", titleColor)}>
          {testimonial.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={cn("leading-relaxed", quoteColor)}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </CardContent>
      <CardFooter className="mt-4 pt-4 border-t border-border/30 flex items-center space-x-4">
        <Avatar className={cn("h-12 w-12 border-2", avatarBorderColor)}>
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarAiHint} />
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
        <div>
          <p className={cn("font-semibold", authorColor)}>{testimonial.author}</p>
          <p className={cn("text-xs", roleColor)}>{testimonial.role}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
