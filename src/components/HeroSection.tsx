import { useEffect, useState } from "react";
import logoImage from "@/assets/ai-with-aimee-logo-transparent.png";
import NeuralNetworkBackground from "./NeuralNetworkBackground";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["GenAI Strategist", "ML Enthusiast", "Tech Innovator", "AI Explorer"];

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
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <NeuralNetworkBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={logoImage} 
              alt="AI with Aimee Logo" 
              className="w-full max-w-xl drop-shadow-[0_0_60px_rgba(0,255,255,0.4)] scale-115"
            />
          </div>
          <div>
            <div className="text-xl md:text-2xl mb-4">
              <span className="font-sans neon-text-yellow">Product Manager turned </span>
              <span className="font-retro typing-animation neon-text-cyan">{displayText}</span>
            </div>
            
            <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#f27f9b' }}>
              AI with Aimee is where machines meet minds.
            </p>
            
            <p className="text-lg neon-text-cyan/90 mb-8 leading-relaxed">
              My mission is to explore how Artificial Intelligence can amplify Human Intelligence — not replace it — by sharing real lessons, practical tools, and honest stories from inside the enterprise trenches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="hero-button neon-border-pink bg-background px-8 py-3 rounded font-retro font-semibold neon-text-pink transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="hero-button neon-border-pink bg-background px-8 py-3 rounded font-retro font-semibold neon-text-pink transition-all duration-300"
              >
                Read Blog
              </button>
            </div>
            
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm neon-text-cyan/80 hover:neon-text-cyan transition-all duration-300 flex items-center gap-2 group"
            >
              Learn more about me 
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown 
          className="w-8 h-8 neon-text-cyan animate-bounce cursor-pointer" 
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
