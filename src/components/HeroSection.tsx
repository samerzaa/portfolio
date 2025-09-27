import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingTechIcon from "./FloatingTechIcon";
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
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const techIcons = [
    { Icon: Code, className: "top-20 left-20", delay: 0 },
    { Icon: Database, className: "top-32 right-24", delay: 1 },
    { Icon: Smartphone, className: "top-60 left-32", delay: 2 },
    { Icon: Globe, className: "top-72 right-16", delay: 3 },
    { Icon: Terminal, className: "top-96 left-16", delay: 4 },
    { Icon: Layers, className: "top-80 right-32", delay: 5 },
    { Icon: Server, className: "top-40 left-60", delay: 1.5 },
    { Icon: Cpu, className: "top-100 right-48", delay: 2.5 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-medium/10 via-transparent to-gray-light/5"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold font-prompt">
              Hi, I'm{" "}
              <span className="text-white">
                Developer
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
            <Button variant="secondary" size="icon" className="rounded-full">
              <Github size={20} />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Linkedin size={20} />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Mail size={20} />
            </Button>
          </div>
        </div>

        {/* Right side - Profile image with floating tech icons */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main profile image */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-light/30 subtle-glow">
              <img 
                src={heroImage} 
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
                  className={tech.className}
                  delay={tech.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;