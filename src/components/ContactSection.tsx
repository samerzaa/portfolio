import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
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
                  <p className="text-gray-light font-karla">hello@developer.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium font-prompt text-white">Phone</h4>
                  <p className="text-gray-light font-karla">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium font-prompt text-white">Location</h4>
                  <p className="text-gray-light font-karla">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8 rounded-2xl bg-gray-medium/30 border border-gray-light/20">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-prompt text-white">
                    Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="input-field font-karla"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-prompt text-white">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-field font-karla"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 font-prompt text-white">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="Project discussion"
                  className="input-field font-karla"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-prompt text-white">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-field resize-none font-karla"
                />
              </div>

              <Button variant="active" size="lg" className="w-full group font-prompt font-medium">
                <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;