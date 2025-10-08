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
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-rainbow text-4xl md:text-5xl text-white mb-8">Let's Connect</h2>
        <p className="text-xl text-white/90 mb-12">
          I'd love to connect with fellow AI enthusiasts, mentors, and anyone interested in the intersection of IT and AI.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:aimee.farabee@email.com"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-white/80 font-code text-sm">aimee.farabee@email.com</p>
          </a>
          <a
            href="https://linkedin.com/in/aimeefarabee"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-white/80 font-code text-sm">linkedin.com/in/aimeefarabee</p>
          </a>
          <a
            href="https://github.com/aimeefarabee"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
          >
            <Github className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-white/80 font-code text-sm">github.com/aimeefarabee</p>
          </a>
        </div>
        <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-8 border border-sage-gray/30 shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-dark-graphite px-8 py-3 rounded-lg font-medium hover:bg-rose-quartz hover:text-white transition-all duration-300 disabled:opacity-50"
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
