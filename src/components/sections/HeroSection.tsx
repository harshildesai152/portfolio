'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, ArrowDown } from 'lucide-react';
import { developerName, developerTitle, developerTagline, contactDetails } from '@/lib/data';

export default function HeroSection() {

  const resumeUrl = '/resume.pdf';
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background text-center p-4 relative" // Changed bg-black to bg-background
    >
      <div className="space-y-8 max-w-3xl">
        <div className="glass-experience-card p-4 md:p-6 rounded-lg" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-5xl font-extrabold animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <span className="block text-primary leading-tight animate-typewriter-alex font-mono" style={{ animationDelay: '0.9s' }}>{developerName}</span>
            {/* Changed text-slate-300 to text-foreground/80 for better theme adaptability */}
            <span className="block text-foreground/80 text-3xl md:text-5xl mt-2 animate-shakeY" style={{ animationDelay: '0.7s' }}>{developerTitle}</span>
          </h1>
        </div>
        {/* Changed text-slate-400 to text-muted-foreground and bg-neutral-800/60 to bg-muted/30 */}
        {/* <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto p-2 rounded-md bg-muted/30 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          {developerTagline}
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slideUp" style={{ animationDelay: '0.7s' }}>
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 hover-glow-button pulsating-field-button"
          >
         <a
          href={resumeUrl}
          download="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
         >
        <Download className="mr-2 h-5 w-5" /> Download Resume
        </a> 

          </Button>
          {/* Removed dark-theme specific text/border colors, relying on variant="outline" for theme adaptability */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 hover-glow-button pulsating-field-button"
          >
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          {/* Removed dark-theme specific text/hover colors, relying on variant="ghost" for theme adaptability */}
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-accent-foreground hover:bg-accent/10 animate-bounce-subtle">
            <ArrowDown className="h-7 w-7" />
          </Button>
        </Link>
      </div>
    </section>
  );
}