
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import SkillCategory from '@/components/cards/SkillCategory'; // Corrected import name

export default function SkillsSection() {
  return (
    // Removed hardcoded bg-[#0F121E] text-slate-200 to allow theme default
    <Section id="skills"> 
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Frontend" skillsList={skills.frontend} animationDelay="0s" />
        <SkillCategory title="Backend" skillsList={skills.backend} animationDelay="0.2s" />
        <SkillCategory title="Databases" skillsList={skills.databases} animationDelay="0.4s" />
        <SkillCategory title="DevOps" skillsList={skills.devops} animationDelay="0.6s" />
        <SkillCategory title="Tools" skillsList={skills.tools} animationDelay="0.8s" />
        <SkillCategory title="Libraries" skillsList={skills.Libraries} animationDelay="0.8s" /> 
        <SkillCategory title="Languages" skillsList={skills.Languages} animationDelay="0.8s" /> 
      </div>
    </Section>
  );
}