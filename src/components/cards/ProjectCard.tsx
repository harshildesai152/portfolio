
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  animationDelay?: string;
}

export default function ProjectCard({ project, animationDelay = '0s' }: ProjectCardProps) {
  return (
    <Card 
      className={cn(
        "glass-experience-card", // Applied glassmorphism style
        "overflow-hidden flex flex-col h-full bg-card text-card-foreground"
      )}
      style={{ animationDelay }}
    >
      <div className="relative w-full h-56 group">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.thumbnailAiHint}
        />
        <div className="absolute bottom-3 left-3 flex space-x-2">
          {project.githubUrl && project.githubUrl !== "#" && (
            <Button variant="secondary" size="sm" asChild className="bg-black/60 text-white hover:bg-black/80 px-2 py-1 rounded-md text-xs h-auto">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-1.5" /> Code
              </Link>
            </Button>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <Button variant="secondary" size="sm" asChild className="bg-black/60 text-white hover:bg-black/80 px-2 py-1 rounded-md text-xs h-auto">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col pt-0 pb-4 px-6">
        <CardDescription className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.description}
        </CardDescription>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold mb-1.5 text-foreground/80 uppercase tracking-wider">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-xs bg-slate-700 text-slate-200 border-slate-600 px-2 py-0.5"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        <Link href={`/projects/${project.id}`} className="mt-auto text-sm text-primary hover:text-primary/80 inline-flex items-center self-start group">
          View Details
          <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
