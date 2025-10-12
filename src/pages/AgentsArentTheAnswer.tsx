import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutBackground from '@/components/AboutBackground';

const AgentsArentTheAnswer = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineSteps = [
    {
      icon: '💡',
      title: 'The Big Idea',
      caption: 'Deciding to build my first n8n agent after finishing a GenAI course.',
    },
    {
      icon: '🧩',
      title: 'The Setup Saga',
      caption: 'Docker confusion, missing persistence, workflows disappearing.',
    },
    {
      icon: '🤖',
      title: 'The Debugging Duo',
      caption: 'ChatGPT & Gemini tag-teaming JSON issues.',
    },
    {
      icon: '⚙️',
      title: 'The Pivot Point',
      caption: "Realizing I didn't need an agent after all.",
    },
    {
      icon: '🪄',
      title: 'The Lesson Learned',
      caption: 'Sometimes the smartest automation is knowing when to stop.',
    },
  ];

  const pullQuotes = [
    "Gone. Poof. Vanished. My first workflow disappeared like it never existed.",
    "Am I building an agent or a migraine?",
    "Sometimes the smartest automation is knowing when to stop automating.",
  ];

  return (
    <div className="min-h-screen relative">
      <AboutBackground />
      <Navigation />
      
      <main className="relative z-10">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 neon-text-cyan hover:neon-text-pink transition-all duration-300 font-montserrat font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Hero Banner */}
        <section className="relative py-16 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating JSON snippets */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`json-${i}`}
                className="absolute text-xs font-mono opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + i}s`,
                }}
              >
                {i % 3 === 0 ? '{ "agent": true }' : i % 3 === 1 ? '[Docker]' : '<AI/>'}
              </div>
            ))}
            
            {/* Neural network nodes */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <radialGradient id="node-glow">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f446a0" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={`${(i * 8.33) + 10}%`}
                  cy={`${30 + Math.sin(i) * 20}%`}
                  r="4"
                  fill="url(#node-glow)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>

          <div 
            className="max-w-5xl mx-auto px-6 relative z-10 text-center py-12 rounded-3xl backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(112, 94, 99, 0.3) 0%, rgba(13, 6, 26, 0.5) 100%)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.2), 0 0 80px rgba(244, 70, 160, 0.1)',
            }}
          >
            <h1 className="text-4xl md:text-6xl font-rajdhani font-bold mb-4 neon-text-pink animate-fade-in">
              Agents Aren't Always the Answer
            </h1>
            <p className="text-2xl md:text-3xl font-shadows italic neon-text-cyan mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A cautionary (but kinda funny) tale from my first n8n build
            </p>
            <div className="text-sm font-titillium neon-text-yellow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              by Aimee Farabee — AI with Aimee — Intelligence with a Twist
            </div>
          </div>
        </section>

        {/* Intro + Pull Quotes Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div 
              className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(112, 94, 99, 0.2) 0%, rgba(13, 6, 26, 0.4) 100%)',
                border: '2px solid rgba(0, 255, 255, 0.2)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.15)',
              }}
            >
              {/* Left: Intro Story */}
              <div className="space-y-4">
                <h2 className="text-2xl font-rajdhani font-semibold neon-text-yellow mb-4">The Journey Begins</h2>
                <p className="font-ibm leading-relaxed" style={{ color: '#e6e6e6' }}>
                  Fresh off completing my GenAI specialization, I was feeling unstoppable. I'd conquered the fundamentals, 
                  understood the theory, and now it was time to put it all into practice.
                </p>
                <p className="font-ibm leading-relaxed" style={{ color: '#e6e6e6' }}>
                  My first real project? Building an n8n agent. It seemed like the perfect blend of automation and AI — 
                  a chance to showcase everything I'd learned. What could possibly go wrong?
                </p>
                <p className="font-ibm leading-relaxed" style={{ color: '#e6e6e6' }}>
                  Spoiler alert: Everything. Well, almost everything. But hey, that's how we learn, right?
                </p>
              </div>

              {/* Right: Pull Quotes */}
              <div className="space-y-6 flex flex-col justify-center">
                {pullQuotes.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 pl-6 py-2 animate-fade-in"
                    style={{
                      borderColor: 'rgba(0, 255, 255, 0.6)',
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <p className="text-xl font-shadows italic neon-text-cyan" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.4)' }}>
                      "{quote}"
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center neon-text-pink mb-12">
              Timeline of Chaos
            </h2>

            {/* Desktop: Horizontal Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Gradient line */}
                <div 
                  className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
                  style={{
                    background: 'linear-gradient(90deg, rgba(244, 70, 160, 0.8) 0%, rgba(0, 255, 255, 0.8) 100%)',
                    boxShadow: '0 0 10px rgba(244, 70, 160, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                />

                {/* Timeline steps */}
                <div className="relative flex justify-between items-center">
                  {timelineSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                      style={{ flex: 1 }}
                    >
                      {/* Icon circle */}
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 transition-all duration-300 relative z-10"
                        style={{
                          background: hoveredStep === index 
                            ? 'linear-gradient(135deg, rgba(244, 70, 160, 0.3), rgba(0, 255, 255, 0.3))'
                            : 'rgba(13, 6, 26, 0.8)',
                          border: hoveredStep === index 
                            ? '3px solid rgba(244, 70, 160, 0.8)'
                            : '2px solid rgba(0, 255, 255, 0.5)',
                          boxShadow: hoveredStep === index 
                            ? '0 0 30px rgba(244, 70, 160, 0.6), 0 0 50px rgba(0, 255, 255, 0.4)'
                            : '0 0 15px rgba(0, 255, 255, 0.3)',
                          transform: hoveredStep === index ? 'scale(1.1)' : 'scale(1)',
                        }}
                      >
                        {step.icon}
                      </div>

                      {/* Title */}
                      <div className="text-center mb-2">
                        <h3 className="font-rajdhani font-semibold text-lg neon-text-yellow">
                          {step.title}
                        </h3>
                      </div>

                      {/* Caption (shows on hover) */}
                      <div
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 text-center transition-all duration-300"
                        style={{
                          opacity: hoveredStep === index ? 1 : 0,
                          transform: hoveredStep === index 
                            ? 'translateX(-50%) translateY(0)' 
                            : 'translateX(-50%) translateY(-10px)',
                        }}
                      >
                        <p className="text-sm font-shadows italic neon-text-cyan p-3 rounded-lg backdrop-blur-md"
                          style={{
                            background: 'rgba(13, 6, 26, 0.9)',
                            border: '1px solid rgba(0, 255, 255, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
                          }}
                        >
                          {step.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Stacked Timeline */}
            <div className="md:hidden space-y-6">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl backdrop-blur-md"
                  style={{
                    background: 'rgba(13, 6, 26, 0.6)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.15)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 70, 160, 0.2), rgba(0, 255, 255, 0.2))',
                      border: '2px solid rgba(0, 255, 255, 0.5)',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-semibold text-lg neon-text-yellow mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-shadows italic neon-text-cyan">
                      {step.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wrap-Up Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Main Quote with Animated Halo */}
            <div className="relative mb-12">
              <div
                className="absolute inset-0 rounded-full blur-3xl animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(244, 70, 160, 0.4) 0%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
                  animation: 'pulse-glow 4s ease-in-out infinite',
                }}
              />
              <blockquote 
                className="relative text-3xl md:text-4xl font-shadows italic neon-text-pink py-8"
                style={{ textShadow: '0 0 20px rgba(244, 70, 160, 0.6)' }}
              >
                "Agents aren't always the answer — sometimes, they're just the punchline."
              </blockquote>
            </div>

            {/* Reflection Paragraph */}
            <div 
              className="p-8 rounded-2xl backdrop-blur-md mb-8"
              style={{
                background: 'rgba(13, 6, 26, 0.5)',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
              }}
            >
              <p className="text-lg font-ibm leading-relaxed mb-4" style={{ color: '#e6e6e6' }}>
                I still love building agents, but I've learned the best automation is the one that actually makes 
                life simpler — not more complicated.
              </p>
              <p className="text-lg font-ibm leading-relaxed" style={{ color: '#e6e6e6' }}>
                Sometimes the most intelligent solution isn't the most sophisticated one. And that's okay.
              </p>
            </div>

            {/* Glowing Divider */}
            <div 
              className="h-px w-3/4 mx-auto mb-8"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), transparent)',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
              }}
            />

            {/* Tagline */}
            <div className="font-rajdhani text-2xl font-semibold neon-text-cyan">
              AI with Aimee — Intelligence with a Twist
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AgentsArentTheAnswer;