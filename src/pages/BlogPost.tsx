import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
      <div className="min-h-screen relative" style={{
        background: 'linear-gradient(to bottom, #705e63 0%, #000000 100%)'
      }}>
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
      <div className="min-h-screen relative" style={{
        background: 'linear-gradient(to bottom, #705e63 0%, #000000 100%)'
      }}>
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
    <div className="min-h-screen relative" style={{
      background: 'linear-gradient(to bottom, #705e63 0%, #000000 100%)'
    }}>
      <Navigation />
      
      <main className="relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-10 pt-32 pb-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-base font-montserrat font-semibold neon-text-cyan hover:neon-text-pink transition-all duration-300"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
            }}
          >
            <ArrowLeft size={20} />
            ← Back to Blogs
          </Link>
        </div>

        {/* Hero Banner */}
        {post.banner_image && (
          <section className="relative max-w-4xl mx-auto px-10 mb-10">
            <div 
              className="w-full aspect-video rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(0, 255, 255, 0.4)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.15)',
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
        <article className="relative py-10">
          <div className="max-w-4xl mx-auto px-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-6 neon-text-pink">
              {post.title}
            </h1>

            {/* Glowing Divider */}
            <div className="flex justify-center mb-8">
              <div 
                className="w-32 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 255, 255, 0) 0%, rgba(0, 255, 255, 0.8) 50%, rgba(0, 255, 255, 0) 100%)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
                }}
              />
            </div>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-2 mb-8 text-sm neon-text-cyan">
              <Calendar size={16} />
              <span>
                {new Date(post.date_published).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>

            {/* Excerpt */}
            <div className="mb-10">
              <p className="text-lg md:text-xl font-josefin italic text-center neon-text-cyan leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Body Content */}
            <div 
              className="font-ibm text-base md:text-lg"
              style={{ 
                color: 'hsl(180, 100%, 70%)',
                lineHeight: '1.6'
              }}
            >
              {post.body.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() ? (
                  <p key={index} className="mb-6" style={{ lineHeight: '1.6' }}>
                    {paragraph}
                  </p>
                ) : null
              ))}
            </div>
          </div>
        </article>

        {/* Footer CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-10">
            <div 
              className="text-center p-10 rounded-2xl backdrop-blur-md"
              style={{
                background: 'rgba(15, 11, 29, 0.6)',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
              }}
            >
              <p className="text-xl md:text-2xl font-rajdhani font-semibold neon-text-cyan mb-6">
                AI with Aimee — Intelligence with a Twist
              </p>
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-base font-montserrat font-bold neon-text-pink hover:neon-text-cyan transition-all duration-300"
              >
                <ArrowLeft size={18} />
                Back to All Posts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
