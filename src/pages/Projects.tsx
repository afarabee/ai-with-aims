import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import GlowCard from '@/components/ui/glow-card';
import { Button } from '@/components/ui/button';
import AboutBackground from '@/components/AboutBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
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
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'StoryCrafter',
      subtitle: 'AI user-story generator for Azure DevOps',
      description: [
        'Challenge: Manual story writing consumed 60% of sprint planning time',
        'Solution: Automated user story generation with LangChain + Azure integration',
        'Impact: Reduced story writing time by 80%, increased planning efficiency'
      ],
      tags: ['LangChain', 'Python', 'Azure DevOps', 'n8n'],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Eval Framework',
      subtitle: 'Prompt quality & governance toolkit',
      description: [
        'Challenge: No standardized way to evaluate prompt quality across teams',
        'Solution: Built evaluation framework with metrics for accuracy, bias, and consistency',
        'Impact: Enabled enterprise-wide prompt governance and quality standards'
      ],
      tags: ['Python', 'FastAPI', 'LangSmith', 'Testing'],
      links: {
        github: '#'
      }
    },
    {
      title: 'AI Daily Brief',
      subtitle: 'Automated news aggregator with smart summaries',
      description: [
        'Challenge: Information overload from multiple AI news sources',
        'Solution: Automated aggregation, categorization, and summarization pipeline',
        'Impact: Saved 2+ hours daily in research and curation'
      ],
      tags: ['Python', 'OpenAI', 'RSS', 'Automation'],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'AI Portfolio',
      subtitle: 'This site itself — a neon-lit showcase',
      description: [
        'Challenge: Create a portfolio that reflects AI expertise and design sensibility',
        'Solution: Built with React, TypeScript, and custom neon aesthetic',
        'Impact: Professional platform showcasing AI work and thought leadership'
      ],
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      links: {
        github: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen relative bg-background">
      <AboutBackground />
      
      {/* Alternating dark overlay for visual contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'rgba(0, 0, 0, 0.1)' }}
      />
      
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-rajdhani font-semibold mb-6 neon-text-pink">
              Projects & Applied AI Work
            </h1>
            <p className="text-xl md:text-2xl font-josefin italic neon-text-cyan">
              Each project is a window into machines and minds collaborating.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Placeholder message */}
            <div className="col-span-full text-center py-20">
              <p 
                className="text-2xl md:text-3xl font-josefin italic mb-6"
                style={{
                  color: '#b8f2e3',
                  textShadow: '0 0 8px rgba(184, 242, 227, 0.6)',
                }}
              >
                Projects coming soon — check back soon to see what I'm building next!
              </p>
              <div 
                className="w-64 h-px mx-auto"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #f446a0 50%, transparent 100%)',
                  boxShadow: '0 0 6px rgba(244, 70, 160, 0.4)',
                }}
              />
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mt-20">
            <Button className="hero-button px-8 py-6 text-base flex items-center gap-2">
              Explore My Prompt Library →
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
