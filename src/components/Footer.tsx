import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-light/20 bg-gray-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-prompt">
              Samer Magtouf
            </h3>
            <p className="text-gray-light font-karla">
              Crafting digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-prompt text-white">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-light hover:text-white transition-colors duration-300 font-karla"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 font-prompt text-white">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/samerzaa" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Github size={18} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Mail size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-light/20 pt-8 text-center">
          <p className="text-gray-light flex items-center justify-center gap-2 font-karla">
            Made with <Heart size={16} className="text-white animate-pulse" /> using React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-light mt-2 font-karla">
            © 2025 Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;