import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      icon: "🤖",
      title: "Intelligent AI Story Builder",
      description: "Enterprise Generative AI platform that converts product ideas into structured Agile user stories.",
      tags: ["Python", "APIs", "GenAI"],
      borderColor: "neon-border-cyan",
    },
    {
      id: 2,
      icon: "📊",
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard predicting IT infrastructure maintenance needs using machine learning algorithms.",
      tags: ["Scikit-learn", "Streamlit", "Plotly"],
      borderColor: "neon-border-pink",
    },
    {
      id: 3,
      icon: "🖼️",
      title: "Image Classification App",
      description: "Web application that classifies uploaded images using a pre-trained convolutional neural network.",
      tags: ["TensorFlow", "Flask", "OpenCV"],
      borderColor: "neon-border-cyan",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg neon-border-cyan border-t-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-retro text-4xl md:text-5xl text-center neon-text-cyan mb-16">My AI Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isFirstProject = project.id === 1;
            const content = (
              <>
                <div className={`w-12 h-12 ${project.borderColor} bg-muted rounded flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <h3 className="text-xl font-retro font-semibold neon-text-pink mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-muted neon-text-yellow px-3 py-1 rounded text-xs font-retro">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="neon-text-cyan hover:neon-text-pink font-retro font-medium flex items-center gap-1 transition-colors">
                  View Project <ArrowRight className="w-4 h-4" />
                </div>
              </>
            );

            if (isFirstProject) {
              return (
                <Link
                  key={project.id}
                  to="/ai-story-builder"
                  className={`${project.borderColor} bg-background/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] block`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={project.id}
                className={`${project.borderColor} bg-background/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.6)]`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
