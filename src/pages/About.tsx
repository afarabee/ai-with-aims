import { Linkedin, Github, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main About Section */}
      <section className="relative min-h-screen py-32 px-6">
        {/* Dark violet gradient background */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, #0d061a 0%, #1a0b2e 50%, #2d1b3d 100%)',
          }}
        />
        
        {/* Ambient glow effects */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 -z-10"
          style={{ background: '#f446a0' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 -z-10"
          style={{ background: '#00ffff' }}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-6xl font-rajdhani font-bold mb-8"
              style={{
                color: '#f446a0',
                textShadow: '0 0 20px rgba(244, 70, 160, 0.8), 0 0 40px rgba(244, 70, 160, 0.4)',
              }}
            >
              Meet Aimee
            </h1>
            <p 
              className="text-2xl md:text-3xl font-josefin italic"
              style={{
                color: '#b8f2e3',
                textShadow: '0 0 10px rgba(184, 242, 227, 0.6)',
              }}
            >
              Human first, AI always.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            {/* Left: Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-80 h-80">
                <div 
                  className="w-full h-full rounded-full overflow-hidden border-4 relative"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 8px #33ffff, 0 0 20px #99ffff, inset 0 0 40px rgba(244, 70, 160, 0.15)',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <span 
                      className="text-8xl font-rajdhani font-semibold" 
                      style={{ 
                        color: '#e5fb52', 
                        textShadow: '0 0 10px #e5fb85, 0 0 20px #edfca0' 
                      }}
                    >
                      AF
                    </span>
                  </div>
                </div>
                {/* Reflection effect */}
                <div 
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-30"
                  style={{ background: '#00ffff' }}
                />
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="space-y-6 font-ibm" style={{ color: '#e6e6e6', lineHeight: '1.6' }}>
              <p>
                With more than 15 years in product management at Express Scripts, Cigna, and American Express, I have built my career at the intersection of technology, business, and human needs. My work is guided by a belief that great products do more than deliver features — they solve meaningful problems in smart, scalable ways.
              </p>
              
              <p>
                At Charles River Laboratories, I led the Apollo platform and early AI enablement initiatives, bridging data, people, and process. This work strengthened my expertise in AI governance, enablement, and prompt engineering while helping teams navigate the complexities of emerging technology.
              </p>
              
              <p>
                AI with Aimee was born from blending creativity, governance, and hands-on experimentation. This portfolio represents my evolution from traditional product director to AI-focused leader — committed to making AI usable, ethical, and impactful within the enterprise.
              </p>
            </div>
          </div>

          {/* Social Icons & Buttons */}
          <div className="flex flex-col items-center gap-8 mt-20">
            {/* Social Icons */}
            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aimeefarabee/', label: 'LinkedIn', external: true },
                { icon: Github, href: 'https://github.com/afarabee', label: 'GitHub', external: true },
                { icon: Mail, href: 'mailto:genai-aims@gmail.com', label: 'Email', external: false },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none cursor-pointer"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 8px #33ffff, 0 0 16px #99ffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f446a0';
                    e.currentTarget.style.boxShadow = '0 0 8px #f446a0, 0 0 16px #cf33c3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#00ffff';
                    e.currentTarget.style.boxShadow = '0 0 8px #33ffff, 0 0 16px #99ffff';
                  }}
                >
                  <social.icon size={28} className="neon-text-cyan" />
                </a>
              ))}
            </div>

            {/* Neon divider */}
            <div 
              className="w-full max-w-md h-px mt-4"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #00ffff 50%, #f446a0 100%)',
                opacity: 0.4,
                boxShadow: '0 0 6px rgba(0, 255, 255, 0.3)',
              }}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <Button
                className="hero-button text-sm transition-all duration-300"
                style={{ 
                  width: '220px',
                  fontSize: '0.9rem',
                  padding: '1rem 1.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = 'neonPulseHover 0.4s ease-in-out';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(244, 70, 160, 0.7), 0 0 30px rgba(244, 70, 160, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                Download Resume (PDF)
              </Button>
              
              <Link to="/projects">
                <Button
                  className="hero-button text-sm transition-all duration-300"
                  style={{ 
                    width: '220px',
                    fontSize: '0.9rem',
                    padding: '1rem 1.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'neonPulseHover 0.4s ease-in-out';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(244, 70, 160, 0.7), 0 0 30px rgba(244, 70, 160, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  View My Projects
                </Button>
              </Link>
              
              <Link to="/blog">
                <Button
                  className="hero-button text-sm transition-all duration-300"
                  style={{ 
                    width: '220px',
                    fontSize: '0.9rem',
                    padding: '1rem 1.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'neonPulseHover 0.4s ease-in-out';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(244, 70, 160, 0.7), 0 0 30px rgba(244, 70, 160, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  Read My Blog
                </Button>
              </Link>
            </div>

            {/* Back to Home Link */}
            <div className="mt-20">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-base font-josefin neon-text-cyan/80 hover:neon-text-cyan transition-all duration-300 group relative"
                style={{
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 8px rgba(57, 225, 227, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '';
                }}
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                Back to Home
                <span 
                  className="absolute bottom-0 left-0 w-full h-[1px] origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"
                  style={{
                    background: 'linear-gradient(90deg, #39e1e3 0%, #f446a0 100%)',
                    boxShadow: '0 0 4px rgba(57, 225, 227, 0.6)'
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
