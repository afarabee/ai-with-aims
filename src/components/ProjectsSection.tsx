import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import GlowCard from './ui/glow-card';
import SectionDivider from './SectionDivider';

const ProjectsSection = () => {
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
    <section id="projects" className="relative min-h-screen py-24 pb-32">
      {/* Background - same as About page */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0f0b1d 0%, #1f0d36 100%)'
          }}
        />
        
        {/* Cyan-to-Violet gradient overlay at top */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(112, 94, 99, 0.2), transparent)',
          }}
        />
        
        {/* Lighter, slower floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? '#00ffff' : '#f446a0',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 25}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade-out gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d061a)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-rajdhani font-semibold mb-4 neon-text-yellow">
            Projects & Applied AI Work
          </h1>
          <p className="text-xl md:text-2xl font-josefin italic neon-text-pink">
            Each shines a light on how machines and minds can co-create.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card transition-all ease-in-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDuration: '0.5s' }}
            >
              <GlowCard>
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
                    <p key={idx} className="font-ibm text-sm" style={{ color: '#e6e6e6', lineHeight: '1.5em' }}>
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
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>

      {/* Section Divider */}
      <SectionDivider variant="angle" color="#0d061a" />
    </section>
  );
};

export default ProjectsSection;
