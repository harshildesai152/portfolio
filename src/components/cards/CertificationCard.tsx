
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Certification } from '@/lib/data';
import { CalendarDays, ExternalLink, Award as DefaultCertificationIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
  certification: Certification;
  animationDelay?: string;
}

export default function CertificationCard({ certification, animationDelay = '0s' }: CertificationCardProps) {
  const Icon = certification.icon || DefaultCertificationIcon;
  return (
    <Card
      className={cn(
        "glass-experience-card", // Applied glassmorphism style
        "shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground w-full h-full flex flex-col"
      )}
      style={{ animationDelay }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Icon className="h-10 w-10 text-accent mt-1 shrink-0" />
          <div>
            <CardTitle className="text-lg font-semibold text-primary mb-1 leading-tight">
              {certification.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{certification.issuingOrganization}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        {certification.date && (
          <p className="text-xs text-muted-foreground mb-3 flex items-center">
            <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
            {certification.date}
          </p>
        )}
        {certification.description && (
            <p className="text-sm text-card-foreground/90 mb-4 leading-relaxed">
                {certification.description}
            </p>
        )}
      </CardContent>
      {/* {certification.credentialUrl && certification.credentialUrl !== "#" && (
        <CardFooter className="pt-0 mt-auto pb-4 px-6">
          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10 w-full">
            <Link href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Credential
            </Link>
          </Button>
        </CardFooter>
      )} */}
    </Card>
  );
}
