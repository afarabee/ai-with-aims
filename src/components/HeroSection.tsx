import { useEffect, useState } from "react";
import logoImage from "@/assets/ai-with-aimee-logo-transparent.png";
import NeuralNetworkBackground from "./NeuralNetworkBackground";
import ScrollIndicator from "./ScrollIndicator";
import SectionDivider from "./SectionDivider";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["AI Strategist", "ML Enthusiast", "Tech Innovator", "AI Explorer"];

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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Bottom fade-out gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d061a)',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={logoImage} 
              alt="AI with Aimee Logo" 
              className="w-full max-w-3xl drop-shadow-[0_0_60px_rgba(0,255,255,0.4)] scale-[1.375] animate-fade-in"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl mb-4 font-rajdhani font-semibold uppercase tracking-wide neon-text-cyan">
              Product Manager turned <span className="typing-animation neon-text-yellow">{displayText}</span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-josefin italic mb-6 neon-text-pink">
              AI with Aimee — where machines meet minds.
            </p>
            
            <p className="text-lg mb-8 font-ibm" style={{ color: '#e6e6e6', lineHeight: '1.5em' }}>
              My mission is to explore how Artificial Intelligence can amplify Human Intelligence — not replace it — by sharing real lessons, practical tools, and honest stories from inside the enterprise trenches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="hero-button px-8 py-3 rounded"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="hero-button px-8 py-3 rounded"
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
      
      {/* Scroll Down Indicator */}
      <div onClick={() => scrollToSection("about")} className="cursor-pointer">
        <ScrollIndicator />
      </div>

      {/* Section Divider */}
      <SectionDivider variant="wave" color="#0f0b1d" />
    </section>
  );
};

export default HeroSection;
