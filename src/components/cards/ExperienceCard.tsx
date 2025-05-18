import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Experience } from '@/lib/data';
import { Briefcase, CalendarDays } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  animationDelay?: string;
}

export default function ExperienceCard({ experience, animationDelay = '0s' }: ExperienceCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideUp" style={{ animationDelay }}>
      <CardHeader>
        <div className="flex items-start space-x-4">
          {experience.logoUrl && (
            <Image 
              src={experience.logoUrl} 
              alt={`${experience.company} logo`} 
              width={50} 
              height={50} 
              className="rounded-md border"
              data-ai-hint={experience.logoAiHint}
            />
          )}
          <div>
            <CardTitle className="text-xl text-primary flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-accent" />
              {experience.role}
            </CardTitle>
            <CardDescription className="text-md text-muted-foreground">{experience.company}</CardDescription>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <CalendarDays className="h-3 w-3 mr-1" />
              {experience.duration}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-foreground text-sm leading-relaxed">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
