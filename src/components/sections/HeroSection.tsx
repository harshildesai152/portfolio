
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, ArrowDown } from 'lucide-react';
import { developerName, developerTitle, developerTagline, contactDetails } from '@/lib/data';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-center p-4 relative" // Added position: relative
    >
      <div className="space-y-8 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <span className="block text-primary leading-tight animate-shakeY" style={{ animationDelay: '0.5s' }}>{developerName}</span>
          <span className="block text-slate-300 text-3xl md:text-5xl mt-2 animate-shakeY" style={{ animationDelay: '0.7s' }}>{developerTitle}</span>
        </h1>
        <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto p-2 rounded-md bg-black/30">
            {developerTagline}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 hover-glow-button"
          >
            <a href={contactDetails.resumeUrl} target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 border-slate-300 text-slate-300 hover:bg-slate-700/50 hover:text-white hover-glow-button"
          >
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <Button variant="ghost" size="icon" className="rounded-full text-slate-300 hover:bg-slate-700/50 hover:text-white animate-bounce">
            <ArrowDown className="h-7 w-7" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

    