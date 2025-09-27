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
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition-colors duration-300"
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