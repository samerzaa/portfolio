import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 card-elevated border-b border-gray-light/20 bg-gray-dark/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold font-prompt text-white">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-light hover:text-white transition-colors duration-300 relative group font-karla"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="hidden md:block">
            <Button variant="active" size="sm" className="font-prompt font-medium">
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-gray-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-light/20 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-light hover:text-white transition-colors duration-300 font-karla"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="active" size="sm" className="w-full mt-4 font-prompt font-medium">
              Download Resume
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;