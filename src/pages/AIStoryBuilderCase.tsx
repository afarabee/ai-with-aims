import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AIStoryBuilderCase = () => {
  return (
    <div className="min-h-screen bg-ivory-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-sage-gray-case/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-dark-graphite-case hover:text-rose-quartz-case transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-narrow">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-lavender-fog-case/30 via-rose-quartz-case/20 to-sage-gray-case/20 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-shadows text-5xl md:text-6xl text-dark-graphite-case mb-4">
            Intelligent AI Story Builder
          </h1>
          <p className="font-narrow text-xl text-sage-gray-case">
            Enterprise Generative AI Workflow Platform | Charles River Laboratories
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-shadows text-4xl text-dark-graphite-case mb-6">Overview</h2>
          <p className="font-narrow text-lg text-dark-graphite-case/80 leading-relaxed">
            The Intelligent AI Story Builder is an enterprise-scale Generative AI platform that transforms product ideas into fully structured Agile user stories. It integrates contextual intelligence, chat-based refinement, and seamless developer tool integrations — designed to enhance speed, consistency, and collaboration in large-scale product environments.
          </p>
        </div>
      </section>

      <div className="border-t border-lavender-fog-case/30"></div>

      {/* System Architecture Section */}
      <section className="py-16 bg-lavender-fog-case/10 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-shadows text-4xl text-dark-graphite-case mb-10">System Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-sage-gray-case/20 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-quartz-case/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="font-narrow font-bold text-xl text-dark-graphite-case mb-2">
                    Configurable Project Settings
                  </h3>
                  <p className="font-narrow text-dark-graphite-case/70">
                    Define personas, workflows, and domain-specific context that apply globally to all prompts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-sage-gray-case/20 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-fog-case/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📚</span>
                </div>
                <div>
                  <h3 className="font-narrow font-bold text-xl text-dark-graphite-case mb-2">
                    Knowledge Base Uploads
                  </h3>
                  <p className="font-narrow text-dark-graphite-case/70">
                    Upload reference files to enhance contextual accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-sage-gray-case/20 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-gray-case/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-narrow font-bold text-xl text-dark-graphite-case mb-2">
                    AI Story Generator
                  </h3>
                  <p className="font-narrow text-dark-graphite-case/70">
                    Combine context, inputs, and attachments to generate consistent user stories and acceptance criteria.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-sage-gray-case/20 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-quartz-case/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-narrow font-bold text-xl text-dark-graphite-case mb-2">
                    Integrated Chatbot
                  </h3>
                  <p className="font-narrow text-dark-graphite-case/70">
                    Chat with the OpenAI Responses API to refine stories, add edge cases, and improve acceptance criteria.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-sage-gray-case/20 hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-fog-case/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="font-narrow font-bold text-xl text-dark-graphite-case mb-2">
                    DevOps Integrations
                  </h3>
                  <p className="font-narrow text-dark-graphite-case/70">
                    GitHub for code suggestions and Azure DevOps for publishing finalized stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-rose-quartz-case/30"></div>

      {/* My Contributions Section */}
      <section className="py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-shadows text-4xl text-dark-graphite-case mb-8">My Contributions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-rose-quartz-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Defined the end-to-end product strategy and UX flow for AI-assisted story creation.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-lavender-fog-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Scripted Python backend functions orchestrating LLM calls, data validation, and multi-prompt workflows.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sage-gray-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Authored custom prompt templates for context-driven, role-specific outputs.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-rose-quartz-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Built an evaluation and scoring framework to measure the quality, accuracy, and alignment of generated content — enabling objective comparison across LLM versions and prompt configurations.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-lavender-fog-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Led internal alignment, prototype rollout, and user onboarding across product and engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-sage-gray-case/30"></div>

      {/* Impact Section */}
      <section className="py-16 bg-rose-quartz-case/10 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-shadows text-4xl text-dark-graphite-case mb-8">Impact</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-rose-quartz-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Reduced story-creation time by ~70% in pilot teams.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-lavender-fog-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Improved acceptance-criteria clarity and consistency.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-sage-gray-case text-2xl">•</span>
              <p className="font-narrow text-lg text-dark-graphite-case/80">
                Established a reusable AI-governance framework for regulated enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 bg-sage-gray-case/10 border-t border-sage-gray-case/20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-narrow text-sm text-dark-graphite-case/60 text-center">
            This project was completed as part of my professional responsibilities at Charles River Laboratories. All intellectual property is owned by CRL. This case study reflects my leadership and technical contributions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIStoryBuilderCase;
