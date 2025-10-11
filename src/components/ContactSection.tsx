import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 gradient-bg neon-border-pink border-t-4">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-retro text-4xl md:text-5xl neon-text-pink mb-8">Let's Connect</h2>
        <p className="text-xl neon-text-cyan/90 mb-12">
          I'd love to connect with fellow AI enthusiasts, mentors, and anyone interested in the intersection of IT and AI.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:genai-aims@gmail.com"
            className="neon-border-cyan bg-muted/30 backdrop-blur-sm rounded-lg p-6 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] transition-all duration-300"
          >
            <Mail className="w-8 h-8 neon-text-cyan mx-auto mb-4" />
            <h3 className="neon-text-cyan font-retro font-semibold mb-2">Email</h3>
            <p className="neon-text-cyan/70 text-sm">genai-aims@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/aimeefarabee"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border-pink bg-muted/30 backdrop-blur-sm rounded-lg p-6 hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.6)] transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 neon-text-pink mx-auto mb-4" />
            <h3 className="neon-text-pink font-retro font-semibold mb-2">LinkedIn</h3>
            <p className="neon-text-pink/70 text-sm text-center">linkedin.com/in/aimeefarabee</p>
          </a>
          <a
            href="https://github.com/afarabee"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border-cyan bg-muted/30 backdrop-blur-sm rounded-lg p-6 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] transition-all duration-300"
          >
            <Github className="w-8 h-8 neon-text-cyan mx-auto mb-4" />
            <h3 className="neon-text-cyan font-retro font-semibold mb-2">GitHub</h3>
            <p className="neon-text-cyan/70 text-sm">github.com/afarabee</p>
          </a>
        </div>
        <div className="neon-border-pink bg-muted/20 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-retro font-semibold neon-text-yellow mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded bg-muted/50 neon-text-cyan placeholder-cyan-500/50 neon-border-cyan focus:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.6)] focus:outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded bg-muted/50 neon-text-cyan placeholder-cyan-500/50 neon-border-cyan focus:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.6)] focus:outline-none transition-all"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded bg-muted/50 neon-text-cyan placeholder-cyan-500/50 neon-border-cyan focus:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.6)] focus:outline-none resize-none transition-all"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="neon-border-pink bg-muted px-8 py-3 rounded font-retro font-semibold neon-text-pink hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.8)] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
