
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience } from '@/lib/data';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  animationDelay?: string;
}

export default function ExperienceCard({ experience, animationDelay = '0s' }: ExperienceCardProps) {
  return (
    <Card 
      className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInLeft bg-card text-card-foreground w-full"
      style={{ animationDelay }}
    >
      <CardHeader className="pb-3"> {/* Reduced padding bottom for header */}
        {/* Logo removed as per new design */}
        <div>
          <CardTitle className="text-xl font-semibold text-primary mb-1"> {/* Role is primary focus */}
            {experience.role}
          </CardTitle>
          <p className="text-md text-accent font-medium mb-2">{experience.company}</p> {/* Company with accent color */}
          <div className="text-xs text-muted-foreground flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1 items-start">
            <p className="flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" /> 
              {experience.duration}
            </p>
            {experience.location && (
              <p className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" /> 
                {experience.location}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1.5 text-sm leading-relaxed text-card-foreground/90"> {/* Slightly muted responsibilities text */}
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
