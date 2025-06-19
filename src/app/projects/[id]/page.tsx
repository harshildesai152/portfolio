import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }
  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <Button variant="outline" asChild className="mb-8 border-primary text-primary hover:bg-primary/10">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
          </Link>
        </Button>

        <Card className="overflow-hidden shadow-2xl">
          <div className="relative w-full h-72 md:h-[500px]">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={project.thumbnailAiHint}
              priority
            />
          </div>
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-3">{project.title}</CardTitle>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-foreground">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech.name} variant="secondary" className="text-sm bg-accent/10 text-accent border-accent/30">
                    <tech.icon className="h-4 w-4 mr-1.5" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title} - Overview</h3>
            <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              <li>{project.description}</li>
            </CardDescription>

            {project.galleryImageUrls && project.galleryImageUrls.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{project.title} - Image Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.galleryImageUrls.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                      <Image
                        src={image.url}
                        alt={`${project.title} - Gallery Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={image.aiHint}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(project.githubUrl || (project.demoUrl && project.demoUrl !== "#")) && (
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{project.title} - Links</h3>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" /> GitHub Repository
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <Button variant="default" size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}