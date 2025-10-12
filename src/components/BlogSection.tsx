import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlowCard from "./ui/glow-card";
import ScrollIndicator from "./ScrollIndicator";
import SectionDivider from "./SectionDivider";

const BlogSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      const cards = document.querySelectorAll('.blog-post-card');
      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const blogPosts = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "My AI Journey",
      description: "Reflecting on the challenges, breakthroughs, and resources that helped me get started with ML. From linear regression to neural networks - here's what I learned.",
      readTime: "5 min read",
    },
    {
      id: 2,
      date: "March 8, 2024",
      title: "Prompting for PMs",
      description: "How my background in product strategy actually gave me advantages in understanding AI systems, and what skills transferred over.",
      readTime: "7 min read",
    },
    {
      id: 3,
      date: "February 28, 2024",
      title: "Case Study: Rolling out AI @ CRL",
      description: "Step-by-step walkthrough of creating a simple neural network from scratch. The mistakes I made and how I debugged them.",
      readTime: "10 min read",
    },
    {
      id: 4,
      date: "February 20, 2024",
      title: "Bridging the Gap",
      description: "Exploring the importance of responsible AI development from day one. Key principles every AI practitioner should understand.",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="relative py-20 pb-28 bg-background">
      {/* Alternating dark overlay for visual contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'rgba(0, 0, 0, 0.1)' }}
      />
      
      {/* Bottom fade-out gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d061a)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="font-rajdhani text-4xl md:text-5xl font-semibold text-center neon-text-pink mb-16">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => {
            const isMyAIJourney = post.id === 1;
            const content = (
              <>
                <div className="neon-text-yellow text-sm mb-2 font-titillium font-semibold">{post.date}</div>
                <h3 className="text-2xl font-rajdhani font-semibold neon-text-cyan mb-4">{post.title}</h3>
                <p className="font-ibm text-sm mb-4 leading-relaxed" style={{ color: '#e6e6e6' }}>{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="neon-text-yellow text-sm font-titillium">{post.readTime}</span>
                  <span className="neon-text-pink hover:neon-text-cyan font-montserrat font-medium flex items-center gap-1 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </>
            );

            return (
              <div
                key={post.id}
                data-index={index}
                className={`blog-post-card transition-all ease-out ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDuration: '700ms',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {isMyAIJourney ? (
                  <GlowCard
                    as={Link}
                    to="/my-ai-journey"
                    className="block"
                  >
                    {content}
                  </GlowCard>
                ) : (
                  <GlowCard className="block">
                    {content}
                  </GlowCard>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider variant="wave" color="#0d061a" />
    </section>
  );
};

export default BlogSection;
