
"use client";
import { useState } from 'react';
import Section from '@/components/shared/Section';
import ProjectCard from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects as allProjects } from '@/lib/data';
// FolderKanban icon removed as it's no longer used for the title

const categories = ["All Projects", ...new Set(allProjects.map(p => p.category))]; // Changed "All" to "All Projects"

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <Section id="projects">
      <div className="text-center mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-shakeY">
          My Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my recent work that showcases my skills and experience.
        </p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-3 mb-10 animate-slideUp" style={{ animationDelay: '0.4s' }}>
        {categories.map(category => (
          <Button
            key={category}
            variant="outline" // Base variant, custom classes will handle styling
            onClick={() => setSelectedCategory(category)}
            className={`transition-all duration-300 rounded-md px-4 py-2 text-sm font-medium
              ${selectedCategory === category 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
              }`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} animationDelay={`${0.6 + index * 0.1}s`} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No projects found for this category.</p>
      )}
    </Section>
  );
}

