import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ProjectsSection />
      
      {/* Dual CTA Buttons */}
      <div className="relative py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
            <a 
              href="/blog"
              className="hero-button px-8 py-6 text-base font-montserrat flex items-center gap-2 w-full md:w-auto justify-center cursor-pointer focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
              style={{
                background: 'linear-gradient(135deg, rgba(244, 70, 160, 0.2), rgba(155, 81, 224, 0.2))',
                border: '2px solid #f446a0',
                boxShadow: '0 0 15px rgba(244, 70, 160, 0.4)',
              }}
            >
              View All Blog Posts →
            </a>
            <a 
              href="/projects"
              className="hero-button px-8 py-6 text-base font-montserrat flex items-center gap-2 w-full md:w-auto justify-center cursor-pointer focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(112, 94, 99, 0.2))',
                border: '2px solid #00ffff',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
              }}
            >
              View All Projects →
            </a>
          </div>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
