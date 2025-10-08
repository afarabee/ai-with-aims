import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "My First Month Learning Machine Learning",
      description: "Reflecting on the challenges, breakthroughs, and resources that helped me get started with ML. From linear regression to neural networks - here's what I learned.",
      readTime: "5 min read",
      gradient: "from-rose-quartz/15 to-lavender-fog/15",
    },
    {
      id: 2,
      date: "March 8, 2024",
      title: "Transitioning from Product Management to AI: Lessons Learned",
      description: "How my background in product strategy actually gave me advantages in understanding AI systems, and what skills transferred over.",
      readTime: "7 min read",
      gradient: "from-sage-gray/15 to-rose-quartz/15",
    },
    {
      id: 3,
      date: "February 28, 2024",
      title: "Building My First Neural Network",
      description: "Step-by-step walkthrough of creating a simple neural network from scratch. The mistakes I made and how I debugged them.",
      readTime: "10 min read",
      gradient: "from-lavender-fog/15 to-sage-gray/15",
    },
    {
      id: 4,
      date: "February 20, 2024",
      title: "AI Ethics: Why It Matters for Beginners",
      description: "Exploring the importance of responsible AI development from day one. Key principles every AI practitioner should understand.",
      readTime: "6 min read",
      gradient: "from-rose-quartz/15 to-sage-gray/15",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white border-t-4 border-sage-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-rainbow text-4xl md:text-5xl text-center text-rose-quartz mb-16">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-gradient-to-br ${post.gradient} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border border-sage-gray/10`}
            >
              <div className="text-sage-gray text-sm mb-2 font-code">{post.date}</div>
              <h3 className="text-2xl font-semibold text-dark-graphite mb-4">{post.title}</h3>
              <p className="text-sage-gray mb-4 leading-relaxed">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-quartz text-sm">{post.readTime}</span>
                <button className="text-rose-quartz hover:text-dark-graphite font-medium flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
