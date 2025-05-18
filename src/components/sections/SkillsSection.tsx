import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface SkillCategoryProps {
  title: string;
  skillsList: Skill[];
  animationDelay?: string;
}

function SkillCategory({ title, skillsList, animationDelay = '0s' }: SkillCategoryProps) {
  return (
    <Card 
      className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInLeft" 
      style={{ animationDelay }}
    >
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {skillsList.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="p-2 px-3 text-sm bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors">
              <skill.icon className="h-4 w-4 mr-2" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-secondary">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Frontend" skillsList={skills.frontend} animationDelay="0s" />
        <SkillCategory title="Backend" skillsList={skills.backend} animationDelay="0.2s" />
        <SkillCategory title="Databases" skillsList={skills.databases} animationDelay="0.4s" />
        <SkillCategory title="DevOps" skillsList={skills.devops} animationDelay="0.6s" />
        <SkillCategory title="Tools" skillsList={skills.tools} animationDelay="0.8s" />
      </div>
    </Section>
  );
}
