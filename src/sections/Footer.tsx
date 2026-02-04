import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-semibold">
              sohail<span className="text-primary">.</span>
            </span>
          </div>

          {/* Center tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using</span>
            <span className="text-primary">React</span>
            <span>&</span>
            <span className="text-secondary">Terraform</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Mohammed Sohail. All rights reserved.
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#philosophy"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#philosophy')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
