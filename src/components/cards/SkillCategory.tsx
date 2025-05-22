
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  title: string;
  skillsList: Skill[];
  animationDelay?: string;
}

function SkillCategory({ title, skillsList, animationDelay = '0s' }: SkillCategoryProps) {
  return (
    <Card
      className={cn(
        "glass-experience-card", // Applied glassmorphism style
        "bg-card text-card-foreground w-full" // Retain base card styling for content
      )}
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

export default SkillCategory;
