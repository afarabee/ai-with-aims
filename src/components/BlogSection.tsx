import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "My AI Journey",
      description: "Reflecting on the challenges, breakthroughs, and resources that helped me get started with ML. From linear regression to neural networks - here's what I learned.",
      readTime: "5 min read",
      borderColor: "neon-border-cyan",
    },
    {
      id: 2,
      date: "March 8, 2024",
      title: "Prompting for PMs",
      description: "How my background in product strategy actually gave me advantages in understanding AI systems, and what skills transferred over.",
      readTime: "7 min read",
      borderColor: "neon-border-pink",
    },
    {
      id: 3,
      date: "February 28, 2024",
      title: "Case Study: Rolling out AI @ CRL",
      description: "Step-by-step walkthrough of creating a simple neural network from scratch. The mistakes I made and how I debugged them.",
      readTime: "10 min read",
      borderColor: "neon-border-cyan",
    },
    {
      id: 4,
      date: "February 20, 2024",
      title: "Bridging the Gap",
      description: "Exploring the importance of responsible AI development from day one. Key principles every AI practitioner should understand.",
      readTime: "6 min read",
      borderColor: "neon-border-pink",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background neon-border-pink border-t-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-retro text-4xl md:text-5xl text-center neon-text-pink mb-16">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => {
            const isMyAIJourney = post.id === 1;
            const content = (
              <>
                <div className="neon-text-yellow text-sm mb-2 font-retro">{post.date}</div>
                <h3 className="text-2xl font-retro font-semibold neon-text-cyan mb-4">{post.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="neon-text-yellow text-sm font-retro">{post.readTime}</span>
                  <span className="neon-text-pink hover:neon-text-cyan font-retro font-medium flex items-center gap-1 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </>
            );

            return isMyAIJourney ? (
              <Link
                key={post.id}
                to="/my-ai-journey"
                className={`${post.borderColor} bg-muted/30 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] block`}
              >
                {content}
              </Link>
            ) : (
              <article
                key={post.id}
                className={`${post.borderColor} bg-muted/30 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.6)]`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
