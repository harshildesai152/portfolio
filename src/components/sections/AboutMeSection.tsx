
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/shared/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { developerName, developerTitle, bio, contactDetails, socialLinks, aboutStats, companyLogos } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function AboutMeSection() {
  return (
    <Section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-1 animate-slideInLeft">
            <Card className="bg-card text-card-foreground shadow-2xl rounded-xl overflow-hidden">
              <div className="flex justify-center pt-8 pb-4"> {/* Container for centering and padding the dial */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-xl shadow-accent/50">
                  <Image
                    src={bio.profilePictureUrl}
                    alt={developerName}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={bio.profilePictureAiHint}
                    priority
                  />
                </div>
              </div>
              <CardContent className="p-6 pt-2 text-center"> {/* Adjusted top padding */}
                <h3 className="text-2xl font-semibold text-primary mb-1">{developerName}</h3>
                <p className="text-muted-foreground text-sm mb-1">{developerTitle}</p>
                <p className="text-muted-foreground text-xs mb-4">{contactDetails.location}</p>
                <div className="flex justify-center space-x-3 mb-6">
                  {socialLinks.slice(0, 4).map((link) => ( 
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">Let's Talk</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforming Your Ideas into <span className="text-accent">Reality</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {bio.introduction}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12 text-center">
              {aboutStats.map((stat, index) => (
                <div key={index} className="animate-slideUp" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <Link href="#contact">Let's Talk</Link>
              </Button>
              <Button variant="link" size="lg" asChild className="text-foreground hover:text-accent w-full sm:w-auto p-0">
                <Link href="#projects">
                  My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-muted-foreground mb-6 text-center lg:text-left">
                Relied on by companies near, far, and worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 items-center">
                {companyLogos.map((logo) => (
                  <div key={logo.name} className="relative h-8 w-28 opacity-70 hover:opacity-100 transition-opacity">
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      layout="fill"
                      objectFit="contain"
                      data-ai-hint={logo.aiHint}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
    
