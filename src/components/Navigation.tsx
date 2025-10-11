import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 neon-border-cyan border-b-2">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-rainbow text-2xl neon-text-pink">Aimee Farabee</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="nav-link font-retro neon-text-cyan hover:neon-text-pink transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link font-retro neon-text-cyan hover:neon-text-pink transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="nav-link font-retro neon-text-cyan hover:neon-text-pink transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("blog")} className="nav-link font-retro neon-text-cyan hover:neon-text-pink transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link font-retro neon-text-cyan hover:neon-text-pink transition-colors">
              Contact
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden neon-text-cyan"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button onClick={() => scrollToSection("home")} className="block py-2 font-retro neon-text-cyan hover:neon-text-pink w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block py-2 font-retro neon-text-cyan hover:neon-text-pink w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="block py-2 font-retro neon-text-cyan hover:neon-text-pink w-full text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection("blog")} className="block py-2 font-retro neon-text-cyan hover:neon-text-pink w-full text-left">
              Blog
            </button>
            <button onClick={() => scrollToSection("contact")} className="block py-2 font-retro neon-text-cyan hover:neon-text-pink w-full text-left">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
