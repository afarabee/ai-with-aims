import { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-montserrat transition-all duration-300"
              style={{
                color: '#f27f9b',
                textShadow: '0 0 8px rgba(242, 127, 155, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 12px rgba(242, 127, 155, 0.8), 0 0 20px rgba(242, 127, 155, 0.4)';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = '0 0 8px rgba(242, 127, 155, 0.5)';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              <span className="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-rajdhani font-semibold mb-4 neon-text-pink">
              Projects & Applied AI Work
            </h1>
            <p className="text-xl md:text-2xl font-josefin italic neon-text-cyan">
              Each project is a window into machines and minds collaborating.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.length > 0 ? projects.map((project, index) => (
              <div
                key={index}
                data-index={index}
                className={`project-card hover-lift transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <GlowCard 
                  style={{
                    borderRadius: '16px',
                    backgroundColor: 'rgba(25, 10, 40, 0.85)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(180, 242, 227, 0.4)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 0 35px rgba(244, 70, 160, 0.2)',
                    padding: '24px'
                  }}
                >
                  {/* Project Title */}
                  <h3 className="text-2xl font-rajdhani font-semibold mb-2 neon-text-yellow">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg font-josefin italic mb-4 neon-text-pink">
                    {project.subtitle}
                  </p>

                  {/* Description bullets */}
                  <div className="space-y-2 mb-6">
                    {project.description.map((line, idx) => (
                      <p key={idx} className="font-ibm text-sm" style={{ color: '#e6e6e6', lineHeight: '1.4em' }}>
                        • {line}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded text-xs font-titillium font-semibold neon-text-cyan transition-all duration-300 hover:scale-110"
                        style={{ 
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(0, 255, 255, 0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        aria-label="View on GitHub"
                        className="transition-all duration-300 hover:scale-110 neon-text-cyan"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        aria-label="View Demo"
                        className="transition-all duration-300 hover:scale-110 neon-text-cyan"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </GlowCard>
              </div>
            )) : (
              <div className="col-span-full text-center py-20">
                <p 
                  className="text-2xl font-josefin"
                  style={{
                    color: '#b8f2e3',
                    textShadow: '0 0 10px rgba(184, 242, 227, 0.6)',
                  }}
                >
                  Projects coming soon — check back soon to see what I'm building next!
                </p>
                <div 
                  className="w-32 h-1 mx-auto mt-4"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #f446a0, transparent)',
                    boxShadow: '0 0 8px rgba(244, 70, 160, 0.5)',
                  }}
                />
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
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
