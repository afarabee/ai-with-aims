const AboutSection = () => {
  const skills = ["Python", "TensorFlow", "Scikit-learn", "AWS", "Docker"];
  const learningFocus = [
    "AI Ethics & Responsible AI",
    "Generative AI in Agile SDLC",
    "Evaluation Frameworks",
    "Agentic AI",
  ];

  return (
    <section id="about" className="py-20 bg-white border-t-4 border-sage-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-rainbow text-4xl md:text-5xl text-center text-rose-quartz mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-dark-graphite mb-6">My Journey into AI</h3>
            <p className="text-sage-gray mb-6 leading-relaxed">
              With more than 15 years in product management at companies like Cigna, Express Scripts, and American Express, I have built my career at the intersection of technology, business, and human needs. My work is guided by a belief that great products do more than deliver features; they solve meaningful problems in smart, scalable ways.
            </p>
            <p className="text-sage-gray mb-6 leading-relaxed">
              Over the past year, I have led the rollout of generative AI initiatives at Charles River Laboratories and earned a Generative AI Specialization, strengthening my expertise in AI governance, enablement, and prompt systems. This portfolio highlights my evolution from a traditional product director to an AI-focused leader who bridges strategy with emerging technology.
            </p>
            <p className="text-sage-gray mb-6 leading-relaxed">
              Each project featured here represents both curiosity and intent: a commitment to making AI usable, ethical, and impactful within the enterprise.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="bg-lavender-fog text-dark-graphite px-4 py-2 rounded-full text-sm font-code">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-quartz to-lavender-fog p-8 rounded-2xl shadow-lg border-2 border-sage-gray/20">
            <h4 className="text-xl font-semibold text-dark-graphite mb-4">Current Learning Focus</h4>
            <ul className="space-y-3 text-dark-graphite">
              {learningFocus.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-dark-graphite rounded-full mr-3"></span>
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
