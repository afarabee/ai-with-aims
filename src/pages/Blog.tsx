import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AboutBackground from '@/components/AboutBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

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

    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Trust with AI: Why Prompt Engineering Matters',
      excerpt: 'In enterprise settings, AI outputs can make or break stakeholder confidence. Learn how structured prompts create consistency, reduce hallucinations, and build trust across teams.',
      date: '2024-01-15',
      readTime: '6 min read',
      tags: ['Prompt Engineering', 'Enterprise AI', 'Best Practices'],
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    },
    {
      id: 2,
      title: 'From Manual to Automated: My Journey with AI Workflows',
      excerpt: 'How I transformed repetitive planning tasks into intelligent automation pipelines using LangChain, n8n, and Azure DevOps — saving hours every week.',
      date: '2024-01-08',
      readTime: '8 min read',
      tags: ['Automation', 'LangChain', 'Case Study'],
      thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
    },
    {
      id: 3,
      title: 'The Art of Writing Effective AI Prompts',
      excerpt: 'A practical guide to crafting prompts that get results. From structure and specificity to context and constraints — master the fundamentals.',
      date: '2023-12-20',
      readTime: '5 min read',
      tags: ['Prompt Design', 'Tutorial', 'AI Basics'],
      thumbnail: 'https://images.unsplash.com/photo-1676277791608-ac3b8a952c02?w=800&h=450&fit=crop',
    },
    {
      id: 4,
      title: 'Measuring AI Quality: Beyond Accuracy Metrics',
      excerpt: 'Accuracy alone doesn\'t tell the full story. Explore how to evaluate AI outputs for bias, consistency, tone, and real-world usefulness.',
      date: '2023-12-12',
      readTime: '7 min read',
      tags: ['Evaluation', 'Quality Assurance', 'Metrics'],
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    },
    {
      id: 5,
      title: 'Building a Daily AI News Aggregator in Python',
      excerpt: 'A step-by-step walkthrough of creating an automated news pipeline that collects, categorizes, and summarizes AI content from multiple sources.',
      date: '2023-11-28',
      readTime: '10 min read',
      tags: ['Python', 'Automation', 'Tutorial'],
      thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop',
    },
    {
      id: 6,
      title: 'Why Every Team Needs a Prompt Library',
      excerpt: 'Reusable, tested prompts aren\'t just convenient — they\'re a competitive advantage. Learn how to build and maintain a shared prompt repository.',
      date: '2023-11-15',
      readTime: '6 min read',
      tags: ['Knowledge Management', 'Team Collaboration', 'Best Practices'],
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <AboutBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-rajdhani font-semibold mb-4 neon-text-yellow">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl font-josefin italic neon-text-pink">
              Reflections on AI, Product, and Practical Know-How
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                data-index={index}
                className={`blog-card group rounded-2xl backdrop-blur-md p-0 overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: 'rgba(15, 11, 29, 0.5)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(244, 70, 160, 0.5)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(244, 70, 160, 0.3), 0 0 40px rgba(0, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.2)';
                }}
              >
                {/* Thumbnail */}
                <div 
                  className="aspect-video w-full overflow-hidden relative"
                  style={{
                    borderBottom: '1px solid rgba(244, 70, 160, 0.3)',
                  }}
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-rajdhani font-semibold mb-3 neon-text-yellow line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-ibm text-sm mb-4 line-clamp-3" style={{ color: '#e6e6e6', lineHeight: '1.4em' }}>
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#b8b8b8' }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs font-titillium font-semibold neon-text-cyan transition-all duration-300 hover:scale-110 cursor-pointer"
                        style={{ 
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(0, 255, 255, 0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 font-montserrat font-bold text-sm transition-all duration-300 neon-text-pink hover:neon-text-cyan"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="flex justify-center mb-12">
            <Button 
              className="hero-button px-8 py-6 text-base"
            >
              Load More Posts
            </Button>
          </div>

          {/* Footer CTA */}
          <div className="text-center">
            <p className="font-josefin italic text-lg mb-4 neon-text-pink">
              Curious about more?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="hero-button px-6 py-4 text-sm"
                onClick={() => window.location.href = '/projects'}
              >
                Explore My Projects
              </Button>
              <Button 
                className="hero-button px-6 py-4 text-sm"
              >
                Browse Prompt Library →
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
