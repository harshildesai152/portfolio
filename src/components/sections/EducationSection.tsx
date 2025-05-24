
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { education } from '@/lib/data';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EducationSection() {
  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <Card
            key={index}
            className={cn(
              "glass-experience-card", // Applied glassmorphism style
              "shadow-lg hover:shadow-xl transition-shadow duration-300" // Kept base shadow/transition
            )}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-accent" />
                {edu.degree}
              </CardTitle>
              <CardDescription className="text-md font-semibold  text-foreground">{edu.university}</CardDescription>
              <CardDescription className="text-md text-muted-foreground">{edu.des}</CardDescription>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <CalendarDays className="h-3 w-3 mr-1" />
                {edu.years}
              </p>
            </CardHeader>
            {edu.achievements && edu.achievements.length > 0 && (
              <CardContent>
                <h4 className="text-sm font-semibold mb-1 text-foreground">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  {edu.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="h-4 w-4 mr-2 mt-0.5 text-accent shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
