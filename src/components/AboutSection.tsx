import { Linkedin, Github, Mail } from 'lucide-react';
import AboutBackground from './AboutBackground';
import { Button } from './ui/button';
import ScrollIndicator from './ScrollIndicator';
import SectionDivider from './SectionDivider';

const AboutSection = () => {

  return (
    <section id="about" className="relative min-h-screen py-20 pb-28">
      <AboutBackground />
      
      {/* Alternating dark overlay for visual contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'rgba(0, 0, 0, 0.1)' }}
      />
      
      {/* Bottom fade-out gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d061a)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero-Intro Section */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div 
                  className="w-full h-full rounded-full overflow-hidden border-4 relative"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 6px #33ffff, 0 0 14px #99ffff, inset 0 0 30px rgba(244, 70, 160, 0.15)',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <span className="text-6xl font-rajdhani font-semibold" style={{ color: '#e5fb52', textShadow: '0 0 8px #e5fb85, 0 0 18px #edfca0' }}>
                      AF
                    </span>
                  </div>
                </div>
                {/* Reflection effect */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl opacity-30"
                  style={{ background: '#00ffff' }}
                />
              </div>
            </div>

            {/* Right: Text Block */}
            <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-rajdhani font-semibold neon-text-yellow">
            Meet Aimee — Product Director, AI Strategist, and Dog Mom.
          </h1>
              
              <h2 className="text-xl md:text-2xl font-josefin italic neon-text-pink">
                Exploring how Artificial Intelligence can amplify Human Intelligence.
              </h2>

              <div className="space-y-4 font-ibm" style={{ color: '#e6e6e6', lineHeight: '1.5em' }}>
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
          </div>

          {/* Divider */}
          <div 
            className="h-px w-full"
            style={{ background: 'rgba(0, 255, 255, 0.2)' }}
          />
        </div>

        {/* Social Icons & CTA */}
        <div className="mb-20">
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 6px #33ffff, 0 0 14px #99ffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f446a0';
                    e.currentTarget.style.boxShadow = '0 0 3px #cf33c3, 0 0 8px #9a00ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#00ffff';
                    e.currentTarget.style.boxShadow = '0 0 6px #33ffff, 0 0 14px #99ffff';
                  }}
                >
                  <social.icon size={24} className="neon-text-cyan" />
                </a>
              ))}
            </div>

            <Button
              className="hero-button px-8 py-6 text-base"
            >
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Section Divider */}
      <SectionDivider variant="curve" color="#0f0b1d" />
    </section>
  );
};

export default AboutSection;
