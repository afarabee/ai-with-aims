const AboutSection = () => {
  const skills = ["Python", "TensorFlow", "Scikit-learn", "AWS", "Docker"];
  const learningFocus = [
    "Machine Learning Fundamentals",
    "Natural Language Processing",
    "Computer Vision",
    "AI Ethics & Responsible AI",
  ];

  return (
    <section id="about" className="py-20 bg-white border-t-4 border-sage-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-rainbow text-4xl md:text-5xl text-center text-rose-quartz mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-dark-graphite mb-6">My Journey into AI</h3>
            <p className="text-sage-gray mb-6 leading-relaxed">
              With over 8 years as a product manager, I've always been fascinated by technology's potential to solve real problems.
              Recently, I've embarked on an exciting journey into artificial intelligence and machine learning.
            </p>
            <p className="text-sage-gray mb-6 leading-relaxed">
              This portfolio showcases my learning process, projects, and insights as I transition from product management to the cutting-edge world of AI.
              Every project here represents a step forward in my understanding and application of AI technologies.
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
