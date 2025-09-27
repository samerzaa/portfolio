import { Code2, Database, Smartphone, Globe, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development", 
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Supabase"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "WebGL", "GraphQL"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Animations"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-gray-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-prompt">
            My <span className="text-white">Skills</span>
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-karla">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-elevated p-6 rounded-2xl hover:scale-105 transition-all duration-300 group bg-gray-medium/30 border border-gray-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gray-light/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold font-prompt text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-gray-dark/30 rounded-lg border border-gray-light/20 text-sm hover:bg-gray-light/20 transition-colors duration-300 font-karla text-gray-light"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;