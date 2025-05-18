
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { experiences } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        My professional journey as a software engineer, highlighting key roles and accomplishments.
      </p>
      <div className="relative">
        {/* Central Timeline Bar - visible on md and up */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        {/* Timeline bar for mobile - shifted left */}
        <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-border md:hidden" aria-hidden="true"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.role} // Using a more stable key
              className="relative flex flex-col md:flex-row md:justify-between items-start"
            >
              {/* Dot for mobile */}
              <div className="md:hidden absolute left-3 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-background transform -translate-x-1/2 z-10">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>

              {/* Dot for md+ screens (centered) */}
              <div className="hidden md:flex absolute top-1 left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
              </div>
              
              {/* Left Column (Content or Spacer) - Desktop */}
              <div className="hidden md:block md:w-1/2 md:pr-8">
                {index % 2 === 0 ? (
                  <ExperienceCard experience={exp} animationDelay={`${index * 0.1}s`} />
                ) : (
                  <div className="h-1">{/* Spacer to maintain timeline flow */}</div>
                )}
              </div>

              {/* Right Column (Content or Spacer) - Desktop */}
              <div className="hidden md:block md:w-1/2 md:pl-8">
                {index % 2 !== 0 ? (
                  <ExperienceCard experience={exp} animationDelay={`${index * 0.1}s`} />
                ) : (
                  <div className="h-1">{/* Spacer to maintain timeline flow */}</div>
                )}
              </div>
              
              {/* Mobile Card (always takes full width after the mobile timeline bar) */}
              <div className="w-full pl-10 md:hidden">
                <ExperienceCard experience={exp} animationDelay={`${index * 0.1}s`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
