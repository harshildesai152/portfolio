
'use client'; 

import Link from 'next/link';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedStatCard from '@/components/cards/AnimatedStatCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { gitHubActivityData } from '@/lib/data';
import { Github, Star, GitFork, Activity, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GitHubActivitySection() {
  const { username, totalRepositories, starsReceived, forks, contributionsLastYear, profileUrl, recentCommits } = gitHubActivityData;

  const stats = [
    { label: "Repositories", value: totalRepositories, icon: Github },
    { label: "Stars Received", value: starsReceived, icon: Star },
    { label: "Forks", value: forks, icon: GitFork },
    { label: "Contributions (Last Year)", value: contributionsLastYear, icon: Activity },
  ];

  return (
    <Section id="github-activity">
      <SectionTitle>GitHub Activity</SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <AnimatedStatCard 
            key={stat.label} 
            label={stat.label} 
            value={stat.value} 
            icon={stat.icon} 
            animationDelay={`${index * 0.1}s`} 
          />
        ))}
      </div>

      {recentCommits && recentCommits.length > 0 && (
        <Card
          className={cn(
            "glass-experience-card", // Applied glassmorphism style
            "mb-12 shadow-lg bg-card text-card-foreground"
          )}
          style={{ animationDelay: `${(stats.length) * 0.1 + 0.1}s` }}
        >
          {/* <CardHeader>
            <CardTitle className="text-xl text-primary">Recent Commits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentCommits.slice(0, 3).map((commit, index) => (
                <li key={index} className="text-sm text-card-foreground border-b border-border pb-2 last:border-b-0 last:pb-0">
                  <p className="font-semibold">{commit.message}</p>
                  <Link href={commit.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                    {commit.repo} <ExternalLink className="inline h-3 w-3 ml-1" />
                  </Link>
                </li>
              ))}
            </ul> 
          </CardContent>  */}
        </Card>
      )}

      <div className="text-center" style={{ animationDelay: `${(stats.length) * 0.1 + 0.2}s` }}>
        <Button 
          asChild 
          size="lg" 
          className={cn(
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "hover-glow-button"
          )}
        >
          <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            View My GitHub Profile 
          </Link>
        </Button>
      </div>
    </Section>
  );
}
