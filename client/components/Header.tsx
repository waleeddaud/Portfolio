import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-dark/95 backdrop-blur-sm border-b border-portfolio-dark-secondary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-portfolio-blue rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">♦</span>
            </div>
            <span className="text-portfolio-text font-semibold text-lg">
              Portfolio Website
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-portfolio-text-muted hover:text-portfolio-text transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-portfolio-text-muted hover:text-portfolio-text transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-portfolio-text-muted hover:text-portfolio-text transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-portfolio-text-muted hover:text-portfolio-text transition-colors"
            >
              Contact
            </a>
            <a href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-portfolio-blue hover:bg-portfolio-blue-hover text-white px-6 py-2 rounded-md">
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-portfolio-text">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
