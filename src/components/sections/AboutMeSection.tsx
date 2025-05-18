import Image from 'next/image';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { bio, softSkills, personalValues, developerName } from '@/lib/data';

export default function AboutMeSection() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-1 animate-slideUp shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="w-40 h-40 mb-6 border-4 border-primary shadow-md">
              <AvatarImage src={bio.profilePictureUrl} alt={developerName} data-ai-hint={bio.profilePictureAiHint} />
              <AvatarFallback>{developerName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold text-primary">{developerName}</h3>
            <p className="text-muted-foreground mt-1">Passionate Software Engineer</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 animate-slideUp shadow-lg" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed">
              {bio.introduction}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="animate-slideUp shadow-lg" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li key={skill.name} className="flex items-center text-foreground">
                  <skill.icon className="h-5 w-5 mr-3 text-accent" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="animate-slideUp shadow-lg" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Personal Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {personalValues.map((value) => (
                <li key={value.name} className="flex items-center text-foreground">
                  <value.icon className="h-5 w-5 mr-3 text-accent" />
                  {value.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
