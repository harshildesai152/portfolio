
import Link from 'next/link';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { gitHubActivityData } from '@/lib/data';
import { Github, Star, GitFork, Users, Activity, ExternalLink } from 'lucide-react';

export default function GitHubActivitySection() {
  const { username, totalRepositories, starsReceived, forks, contributionsLastYear, profileUrl, recentCommits } = gitHubActivityData;

  const stats = [
    { label: "Repositories", value: totalRepositories, icon: Github },
    { label: "Stars Received", value: starsReceived, icon: Star },
    { label: "Forks", value: forks, icon: GitFork },
    { label: "Contributions (Last Year)", value: contributionsLastYear, icon: Activity },
  ];

  return (
    <Section id="github-activity" className="bg-secondary">
      <SectionTitle>GitHub Activity</SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center animate-slideUp shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="pb-2">
              <stat.icon className="h-10 w-10 mx-auto text-accent mb-2" />
              <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {recentCommits && recentCommits.length > 0 && (
        <Card className="mb-12 animate-slideUp shadow-lg" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Recent Commits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentCommits.slice(0, 3).map((commit, index) => (
                <li key={index} className="text-sm text-foreground border-b border-border pb-2 last:border-b-0 last:pb-0">
                  <p className="font-semibold">{commit.message}</p>
                  <Link href={commit.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                    {commit.repo} <ExternalLink className="inline h-3 w-3 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="text-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            View My GitHub Profile (@{username})
          </Link>
        </Button>
      </div>
    </Section>
  );
}
