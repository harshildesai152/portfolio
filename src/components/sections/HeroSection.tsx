import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { developerName, developerTitle, developerTagline, contactDetails } from '@/lib/data';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background text-center p-4">
      <div className="space-y-8 max-w-3xl animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="block text-primary leading-tight animate-shakeY" style={{ animationDelay: '0.5s' }}>{developerName}</span>
          <span className="block text-accent text-3xl md:text-5xl mt-2 animate-shakeY" style={{ animationDelay: '0.7s' }}>{developerTitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          {developerTagline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" asChild className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300">
            <a href={contactDetails.resumeUrl} target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
