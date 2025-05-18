
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import CertificationCard from '@/components/cards/CertificationCard';
import { certifications } from '@/lib/data';

export default function CertificationsSection() {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        My professional certifications demonstrating expertise and commitment to continuous learning.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            animationDelay={`${index * 0.15}s`}
          />
        ))}
      </div>
    </Section>
  );
}
