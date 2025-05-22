
'use client';

import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function FAQSection() {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <Section 
      id="faq" 
      className={cn(
        "glass-experience-card" // Applied glassmorphism style to the section container
        // Removed "bg-background" to let the glass-experience-card background take effect
      )}
    >
      <SectionTitle>
        Frequently Asked <span className="text-accent">Questions</span>
      </SectionTitle>
      <div className="max-w-3xl mx-auto">
        {/* Ensure content inside the glass card is relatively positioned if needed, or has higher z-index if overlapping issues occur */}
        <Accordion type="single" collapsible className="w-full space-y-4 relative z-10">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-card text-card-foreground border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="p-6 text-left font-medium text-base hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
