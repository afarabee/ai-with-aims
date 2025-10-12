import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutBackground from '@/components/AboutBackground';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch blog post by slug
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      if (!slug) return null;
      
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Redirect to AgentsArentTheAnswer if it's that specific post
  if (slug === 'agents-arent-the-answer') {
    return <Navigate to="/blog/agents-arent-the-answer" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen relative">
        <AboutBackground />
        <Navigation />
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl neon-text-cyan">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen relative">
        <AboutBackground />
        <Navigation />
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-rajdhani font-bold mb-4 neon-text-pink">Post Not Found</h1>
            <p className="text-xl neon-text-cyan mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 neon-text-cyan hover:neon-text-pink transition-all duration-300 font-montserrat font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AboutBackground />
      <Navigation />
      
      <main className="relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 neon-text-cyan hover:neon-text-pink transition-all duration-300 font-montserrat font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Hero Banner */}
        {post.banner_image && (
          <section className="relative max-w-6xl mx-auto px-6 mb-8">
            <div 
              className="w-full aspect-video rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
              }}
            >
              <img
                src={post.banner_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="relative py-8">
          <div className="max-w-4xl mx-auto px-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 neon-text-pink">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-8 text-sm" style={{ color: '#b8b8b8' }}>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date_published).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>

            {/* Excerpt */}
            <div 
              className="p-6 rounded-xl mb-8"
              style={{
                background: 'rgba(112, 94, 99, 0.2)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
              }}
            >
              <p className="text-lg font-shadows italic neon-text-cyan">
                {post.excerpt}
              </p>
            </div>

            {/* Body Content */}
            <div 
              className="prose prose-lg max-w-none font-ibm"
              style={{ color: '#e6e6e6' }}
            >
              {post.body.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() ? (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ) : null
              ))}
            </div>
          </div>
        </article>

        {/* Footer CTA */}
        <section className="py-16">
          <div 
            className="max-w-4xl mx-auto px-6 text-center p-8 rounded-2xl backdrop-blur-md"
            style={{
              background: 'rgba(13, 6, 26, 0.5)',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
            }}
          >
            <p className="text-2xl font-rajdhani font-semibold neon-text-cyan mb-4">
              AI with Aimee — Intelligence with a Twist
            </p>
            <Link 
              to="/blog"
              className="inline-block neon-text-pink hover:neon-text-cyan transition-all duration-300 font-montserrat font-semibold"
            >
              ← Back to All Posts
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
