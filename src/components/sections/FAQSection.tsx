
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

export default function FAQSection() {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <Section id="faq" className="bg-background">
      <SectionTitle>
        Frequently Asked <span className="text-accent">Questions</span>
      </SectionTitle>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
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
