
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { socialLinks, footerText } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">{footerText}</p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild className="text-secondary-foreground hover:text-accent transition-colors">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Quick Links:
          <Link href="#about" className="hover:text-accent px-2">About</Link>|
          <Link href="#skills" className="hover:text-accent px-2">Skills</Link>|
          <Link href="#projects" className="hover:text-accent px-2">Projects</Link>|
          <Link href="#experience" className="hover:text-accent px-2">Experience</Link>|
          <Link href="#education" className="hover:text-accent px-2">Education</Link>|
          <Link href="#certifications" className="hover:text-accent px-2">Certifications</Link>| {/* New link */}
          <Link href="#github-activity" className="hover:text-accent px-2">GitHub</Link>|
          <Link href="#testimonials" className="hover:text-accent px-2">Testimonials</Link>|
          <Link href="#contact" className="hover:text-accent px-2">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
