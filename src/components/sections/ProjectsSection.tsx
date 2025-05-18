
"use client";
import { useState } from 'react';
import Section from '@/components/shared/Section';
// SectionTitle import removed as it's replaced by a custom title structure here
import ProjectCard from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects as allProjects } from '@/lib/data';
import { FolderKanban } from 'lucide-react'; // Added import for the icon

const categories = ["All", ...new Set(allProjects.map(p => p.category))];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <Section id="projects">
      {/* Original SectionTitle replaced with the structure below to include an icon */}
      <div className="flex flex-col items-center mb-12"> {/* Wrapper for centering and bottom margin */}
        <div 
          className="flex items-center justify-center animate-slideUp" 
          style={{ animationDelay: '0.2s' }} // Matches original SectionTitle animation
        >
          <FolderKanban className="h-8 w-8 md:h-10 md:w-10 mr-3 text-accent shrink-0" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Featured Projects
          </h2>
        </div>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 mb-10 animate-slideUp" style={{ animationDelay: '0.2s' }}>
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`transition-all duration-300 ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'text-primary border-primary hover:bg-primary/10'}`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} animationDelay={`${0.4 + index * 0.1}s`} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No projects found for this category.</p>
      )}
    </Section>
  );
}
