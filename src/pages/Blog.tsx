import { useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, Clock } from 'lucide-react';
import AboutBackground from '@/components/AboutBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [displayCount, setDisplayCount] = useState(6);
  const loadMoreRef = useRef<HTMLDivElement>(null);

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

  // Infinite scroll handler
  const handleLoadMore = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && blogPosts && displayCount < blogPosts.length) {
      setDisplayCount(prev => Math.min(prev + 3, blogPosts.length));
    }
  }, [blogPosts, displayCount]);

  // Card visibility observer
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
  }, [blogPosts, displayCount]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleLoadMore, {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleLoadMore]);

  const displayedPosts = blogPosts?.slice(0, displayCount) || [];

  return (
    <div className="min-h-screen relative" style={{
      background: 'linear-gradient(to bottom, #705e63 0%, #000000 100%)'
    }}>
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4 neon-text-pink animate-flicker">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl font-josefin italic neon-text-cyan">
              Reflections on AI, Product, and Practical Know-How
            </p>
          </div>

          {/* Blog Posts - Single Column */}
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-xl neon-text-cyan">Loading posts...</p>
            </div>
          ) : displayedPosts && displayedPosts.length > 0 ? (
            <div className="space-y-12 mb-16">
              {displayedPosts.map((post, index) => {
                const wordCount = post.body?.split(' ').length || 0;
                const readTime = Math.ceil(wordCount / 200);
                
                return (
              <article
                key={post.id}
                data-index={index}
                className={`blog-card hover-lift rounded-3xl backdrop-blur-md overflow-hidden transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: 'rgba(15, 11, 29, 0.7)',
                  border: '2px solid rgba(0, 255, 255, 0.4)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3), 0 0 25px rgba(244, 70, 160, 0.2)',
                }}
              >
                {/* Full-Width Banner */}
                <div className="w-full h-64 md:h-80 overflow-hidden relative">
                  <img
                    src={post.banner_image || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Stack */}
                <div className="p-8 md:p-10">
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-4 neon-text-yellow">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-ibm text-base md:text-lg mb-6 leading-relaxed" style={{ color: '#e6e6e6' }}>
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-6 text-sm neon-text-cyan">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(post.date_published).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {readTime} min read
                    </span>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-montserrat font-bold text-base transition-all duration-300 neon-text-pink hover:neon-text-cyan"
                  >
                    Read Full Article →
                  </a>
                </div>
              </article>
            );
          })}
          
          {/* Infinite Scroll Trigger */}
          {displayCount < (blogPosts?.length || 0) && (
            <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
              <p className="text-sm neon-text-cyan animate-pulse">Loading more...</p>
            </div>
          )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl neon-text-cyan mb-4">No blog posts yet.</p>
            <p className="neon-text-pink">Check back soon for new content!</p>
          </div>
        )}
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
