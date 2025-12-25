import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check - if this field is filled, it's likely a bot
    if (formData.website) {
      // Silently fail - don't show error to bot
      console.log("Bot detected via honeypot");
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          website: formData.website || "", // Honeypot field (empty for legitimate users)
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      // Success
      setIsSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-dark/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-prompt">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-karla">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-prompt text-white">Let's Connect</h3>
              <p className="text-gray-light mb-8 leading-relaxed font-karla">
                I'm always interested in hearing about new opportunities, 
                whether it's a full-time position, freelance project, or just a chat about technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium font-prompt text-white">Email</h4>
                  <a href="mailto:samereya428@gmail.com" className="text-gray-light font-karla hover:font-medium hover:text-white transition-colors duration-300">
                    samereya428@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium font-prompt text-white">Phone</h4>
                  <p className="text-gray-light font-karla">+216 21 397 585</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium font-prompt text-white">Location</h4>
                  <a href="https://maps.app.goo.gl/YXbU3LhYfEmwvwWJ9" target="_blank" rel="noopener noreferrer" className="text-gray-light font-karla hover:font-medium hover:text-white transition-colors duration-300">
                    PP9C+H4P, Sfax, Tunisia
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8 rounded-2xl bg-gray-medium/30 border border-gray-light/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                <label htmlFor="website">Website</label>
                <Input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-prompt text-white">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="input-field font-karla"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-prompt text-white">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-field font-karla"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 font-prompt text-white">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="Project discussion"
                  className="input-field font-karla"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-prompt text-white">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-field resize-none font-karla"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit"
                variant="active" 
                size="lg" 
                className="w-full group font-prompt font-medium"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={18} className="mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;