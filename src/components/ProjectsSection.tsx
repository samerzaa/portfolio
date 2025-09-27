import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Coffee Menu Website(CRAFT)",
      description: "Craft Coffee is a static coming-soon landing page deployed on Vercel, built with a minimal React + Vite setup and simple placeholder text while the full site is in development.",
      image: "/assets/craft.webp",
      tech: ["React", "Node.js", "Tailwind CSS"],
      liveUrl: "https://craft-coffe-five.vercel.app/",
      githubUrl: "https://github.com/samerzaa/Craft-coffe"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-prompt">
            Featured <span className="text-white">Projects</span>
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-karla">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-elevated rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group bg-gray-medium/30 border border-gray-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300 font-prompt text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-light mb-4 text-sm leading-relaxed font-karla">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-light/20 text-white text-xs rounded-full border border-gray-light/30 font-karla"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex-1 font-prompt">
                      <ExternalLink size={16} className="mr-2"/>
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="flex-1 font-prompt">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="active" size="lg" className="font-prompt font-medium">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;