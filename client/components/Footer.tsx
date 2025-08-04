import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-portfolio-dark-secondary border-t border-portfolio-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://pk.linkedin.com/in/waleed-daud-6a377827b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/waleeddaud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-10 h-10" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-portfolio-text-muted text-sm text-center">
            © 2024  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
