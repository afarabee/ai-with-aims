import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AboutBackground from '@/components/AboutBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  // Fetch blogs from Supabase
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('date_published', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

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
  }, [blogPosts]);

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
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-xl neon-text-cyan">Loading posts...</p>
            </div>
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post, index) => {
                // Calculate read time based on body length (approx 200 words per minute)
                const wordCount = post.body?.split(' ').length || 0;
                const readTime = Math.ceil(wordCount / 200);
                
                return (
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
                    src={post.banner_image || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop'}
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
                      {new Date(post.date_published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {readTime} min read
                    </span>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-montserrat font-bold text-sm transition-all duration-300 neon-text-pink hover:neon-text-cyan"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            );
          })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl neon-text-cyan mb-4">No blog posts yet.</p>
            <p className="neon-text-pink">Check back soon for new content!</p>
          </div>
        )}

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
