import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  animationDelay?: string;
}

export default function ProjectCard({ project, animationDelay = '0s' }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full animate-slideUp" style={{ animationDelay }}>
      <div className="relative w-full h-48 md:h-56 group"> {/* Added group here for the image hover effect if needed, or can rely on card hover */}
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105" // This will respond to the Card hover due to group context
          data-ai-hint={project.thumbnailAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold mb-2 text-foreground">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech.name} variant="outline" className="text-xs bg-secondary text-secondary-foreground border-border">
              <tech.icon className="h-3 w-3 mr-1" />
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start space-x-3 pt-4 border-t">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </Link>
          </Button>
        )}
        {project.demoUrl && project.demoUrl !== "#" && (
          <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
