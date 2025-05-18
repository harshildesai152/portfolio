"use client";
import { useState } from 'react';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import ProjectCard from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects as allProjects } from '@/lib/data';

const categories = ["All", ...new Set(allProjects.map(p => p.category))];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <Section id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
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
