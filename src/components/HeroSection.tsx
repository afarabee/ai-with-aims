import { useEffect, useState } from "react";
import AIBrainLogo from "./AIBrainLogo";

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
    <section id="home" className="min-h-screen gradient-bg flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              <span className="font-code">AI with</span>{" "}
              <span className="font-rainbow text-6xl md:text-8xl">Aims</span>
            </h1>
            <div className="text-xl md:text-2xl text-white mb-8">
              <span className="font-sans">Product Manager turned </span>
              <span className="font-code typing-animation">{displayText}</span>
            </div>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Bridging the gap between product management and the exciting world of artificial intelligence.
              Join me on my journey as I explore, learn, and build amazing AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-dark-graphite px-8 py-3 rounded-full font-medium hover:bg-rose-quartz hover:text-white transition-all duration-300"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-dark-graphite transition-all duration-300"
              >
                Read My Blog
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <AIBrainLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
