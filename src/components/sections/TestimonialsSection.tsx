
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionTitle>What People Say</SectionTitle>
      {testimonials && testimonials.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              animationDelay={`${index * 0.2}s`} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No testimonials yet.</p>
      )}
    </Section>
  );
}
