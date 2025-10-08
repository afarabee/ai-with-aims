import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      icon: "🤖",
      title: "Sentiment Analysis Tool",
      description: "A Python-based tool that analyzes customer feedback sentiment using natural language processing techniques.",
      tags: ["Python", "NLTK", "Pandas"],
      bgColor: "bg-rose-quartz",
    },
    {
      id: 2,
      icon: "📊",
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard predicting IT infrastructure maintenance needs using machine learning algorithms.",
      tags: ["Scikit-learn", "Streamlit", "Plotly"],
      bgColor: "bg-sage-gray",
    },
    {
      id: 3,
      icon: "🖼️",
      title: "Image Classification App",
      description: "Web application that classifies uploaded images using a pre-trained convolutional neural network.",
      tags: ["TensorFlow", "Flask", "OpenCV"],
      bgColor: "bg-lavender-fog",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg border-t-4 border-sage-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-rainbow text-4xl md:text-5xl text-center text-white mb-16">My AI Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border border-sage-gray/10"
            >
              <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">{project.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-graphite mb-3">{project.title}</h3>
              <p className="text-sage-gray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-lavender-fog text-dark-graphite px-3 py-1 rounded-full text-xs font-code">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-rose-quartz hover:text-dark-graphite font-medium flex items-center gap-1">
                View Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
