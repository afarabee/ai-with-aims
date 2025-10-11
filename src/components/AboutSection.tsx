const AboutSection = () => {
  const skills = ["Python", "TensorFlow", "Scikit-learn", "AWS", "Docker"];
  const learningFocus = [
    "AI Ethics & Responsible AI",
    "Generative AI in Agile SDLC",
    "Evaluation Frameworks",
    "Agentic AI",
  ];

  return (
    <section id="about" className="py-20 bg-background neon-border-cyan border-t-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-retro text-4xl md:text-5xl text-center neon-text-pink mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-retro font-semibold neon-text-cyan mb-6">My Journey into AI</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              With more than 15 years in product management at companies like Cigna, Express Scripts, and American Express, I have built my career at the intersection of technology, business, and human needs. My work is guided by a belief that great products do more than deliver features; they solve meaningful problems in smart, scalable ways.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Over the past year, I have led the rollout of generative AI initiatives at Charles River Laboratories and earned a Generative AI Specialization, strengthening my expertise in AI governance, enablement, and prompt systems. This portfolio highlights my evolution from a traditional product director to an AI-focused leader who bridges strategy with emerging technology.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Each project featured here represents both curiosity and intent: a commitment to making AI usable, ethical, and impactful within the enterprise.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="neon-border-pink bg-muted px-4 py-2 rounded neon-text-pink text-sm font-retro">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="neon-border-cyan bg-muted/50 p-8 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-retro font-semibold neon-text-yellow mb-4">Current Learning Focus</h4>
            <ul className="space-y-3 text-foreground/80">
              {learningFocus.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3 shadow-[0_0_10px_hsl(var(--neon-cyan))]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
