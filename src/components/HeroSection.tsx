import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingTechIcon from "./FloatingTechIcon";
import { useTypewriter } from "@/hooks/useTypewriter";
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Terminal, 
  Layers,
  Server,
  Cpu
} from "lucide-react";

const HeroSection = () => {
  const techIcons = [
    { Icon: Code, angle: 0, delay: 0 },
    { Icon: Database, angle: 45, delay: 0.5 },
    { Icon: Smartphone, angle: 90, delay: 1 },
    { Icon: Globe, angle: 135, delay: 1.5 },
    { Icon: Terminal, angle: 180, delay: 2 },
    { Icon: Layers, angle: 225, delay: 2.5 },
    { Icon: Server, angle: 270, delay: 3 },
    { Icon: Cpu, angle: 315, delay: 3.5 },
  ];

  // Typewriter animations for titles
  const { displayText: mobileTitle, isComplete: mobileComplete } = useTypewriter({ 
    text: "Hi, I'm Samer", 
    speed: 100, 
    delay: 800 
  });
  
  const { displayText: desktopTitle, isComplete: desktopComplete } = useTypewriter({ 
    text: "Hi, I'm Samer", 
    speed: 100, 
    delay: 1000 
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-medium/10 via-transparent to-gray-light/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile layout - Image at top */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Profile image with floating tech icons */}
          <div className="relative">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-light/30 subtle-glow">
              <img 
                src="/assets/hero-image.jpg" 
                alt="Developer profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech icons - visible on mobile */}
            <div className="block">
              {techIcons.map((tech, index) => (
                <FloatingTechIcon 
                  key={index}
                  Icon={tech.Icon} 
                  angle={tech.angle}
                  delay={tech.delay}
                />
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8 animate-slide-up text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold font-prompt">
                <span className="text-white">
                  {mobileTitle}
                  {!mobileComplete && <span className="inline-block w-0.5 h-8 bg-white animate-pulse ml-1">|</span>}
                </span>
              </h1>
              <h2 className="text-xl text-gray-light font-semibold font-prompt">
                Full Stack Developer
              </h2>
              <p className="text-base text-gray-light max-w-lg leading-relaxed font-karla">
                Crafting modern, responsive, and user-friendly websites with passion and precision. 
                Specializing in React, Node.js, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <Button variant="active" size="lg" className="group font-prompt font-medium">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="font-prompt">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/samerzaa" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Github size={20} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Linkedin size={20} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-prompt">
                <span className="text-white">
                  {desktopTitle}
                  {!desktopComplete && <span className="inline-block w-1 h-12 lg:h-16 bg-white animate-pulse ml-1">|</span>}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-light font-semibold font-prompt">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-light max-w-lg leading-relaxed font-karla">
                Crafting modern, responsive, and user-friendly websites with passion and precision. 
                Specializing in React, Node.js, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="active" size="lg" className="group font-prompt font-medium">
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="font-prompt">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/samerzaa" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Github size={20} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Linkedin size={20} />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Profile image with floating tech icons */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-light/30 subtle-glow">
                <img 
                  src="/assets/hero-image.jpg" 
                  alt="Developer profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech icons - only visible on larger screens */}
              <div className="hidden lg:block">
                {techIcons.map((tech, index) => (
                  <FloatingTechIcon 
                    key={index}
                    Icon={tech.Icon} 
                    angle={tech.angle}
                    delay={tech.delay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;