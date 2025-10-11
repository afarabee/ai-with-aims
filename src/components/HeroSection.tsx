import { useEffect, useState } from "react";
import logoImage from "@/assets/ai-with-aimee-logo.png";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["AI Explorer", "ML Enthusiast", "Tech Innovator", "GenAI Strategist"];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      const timeoutDuration = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, timeoutDuration);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center pt-20 relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={logoImage} 
              alt="AI with Aimee Logo" 
              className="w-full max-w-lg drop-shadow-[0_0_50px_rgba(0,255,255,0.3)] animate-pulse-glow mix-blend-screen"
            />
          </div>
          <div>
            <div className="text-xl md:text-2xl mb-8">
              <span className="font-sans neon-text-yellow">Product Manager turned </span>
              <span className="font-retro typing-animation neon-text-cyan">{displayText}</span>
            </div>
            <p className="text-lg neon-text-cyan/90 mb-8 leading-relaxed">
              My mission is to explore how AI can amplify human intelligence, not replace it, by sharing real lessons, practical tools, and honest stories from inside the enterprise trenches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="neon-border-cyan bg-background px-8 py-3 rounded font-retro font-semibold neon-text-cyan hover:bg-primary/20 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="neon-border-pink bg-background px-8 py-3 rounded font-retro font-semibold neon-text-pink hover:bg-secondary/20 transition-all duration-300"
              >
                Read Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
