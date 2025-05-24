'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, ArrowDown } from 'lucide-react';
import { developerName, developerTitle } from '@/lib/data';

export default function HeroSection() {
  const resumeUrl = '/resume.pdf';
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background text-center p-4 relative"
    >
      <div className="space-y-8 max-w-3xl">
        
        {/* Updated wrapper - removed border/glass class and added custom bg color or image */}
        <div 
          className="p-4 md:p-6 rounded-lg bg-[url('/your-image.jpg')] bg-cover bg-center bg-no-repeat text-white"
          style={{ animationDelay: '0.1s' }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <span className="block text-primary leading-tight animate-typewriter-alex font-mono" style={{ animationDelay: '0.9s' }}>
              Harshil Desai
            </span>
            <span className="block text-foreground/80 text-3xl md:text-5xl mt-2 animate-shakeY" style={{ animationDelay: '0.7s' }}>
              Software Engineer
            </span>
          </h1>
        </div>

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
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-accent-foreground hover:bg-accent/10 animate-bounce-subtle">
            <ArrowDown className="h-7 w-7" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
