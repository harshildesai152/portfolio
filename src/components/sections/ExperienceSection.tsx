import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { experiences } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-secondary">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} animationDelay={`${index * 0.2}s`} />
        ))}
      </div>
    </Section>
  );
}
