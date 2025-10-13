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
      <div className="relative py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/projects">
              <button className="hero-button px-8 py-6 text-base font-montserrat flex items-center gap-2 w-full md:w-auto">
                View All Projects →
              </button>
            </a>
            <a href="/blog">
              <button className="hero-button px-8 py-6 text-base font-montserrat flex items-center gap-2 w-full md:w-auto">
                View All Blog Posts →
              </button>
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
