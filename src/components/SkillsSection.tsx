import { Code2, Database, Smartphone, Globe, Server, Palette } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: [
        { name: "Mysql", level: 80 },
        { name: "Postgres", level: 80 },
        { name: "Supabase", level: 80 },
        { name: "MongoDB", level: 60 },
        { name: "Docker", level: 60 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 50 },
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 40 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-gray-dark/50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-prompt">
            My <span className="text-white">Skills </span>
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-karla">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Path Background */}
          <div className="absolute -inset-8 sm:-inset-10 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Static Path Frame */}
              <path
                d="M4,4 L96,4 L96,96 L4,96 Z"
                className="stroke-gray-light/10"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated Flowing Line */}
              <motion.path
                d="M4,4 L96,4 L96,96 L4,96 Z"
                className="stroke-blue-400"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 1, 0],
                  pathOffset: [0, 1]
                }}
                transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  filter: "drop-shadow(0 0 6px rgb(96, 165, 250))"
                }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="idle"
                whileHover="hover"
                className="relative card-elevated p-4 sm:p-6 rounded-2xl hover:scale-105 transition-all duration-300 group bg-gray-medium/30 border border-gray-light/20 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Animated Border */}
                <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl">
                  <svg className="w-full h-full rounded-2xl overflow-visible">
                    <motion.rect
                      width="100%"
                      height="100%"
                      x="0"
                      y="0"
                      rx="16"
                      ry="16"
                      fill="none"
                      stroke="rgb(168, 85, 247)" // Purple-500
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ filter: "drop-shadow(0 0 4px rgb(168, 85, 247))" }}
                      variants={{
                        idle: { pathLength: 0, opacity: 0 },
                        hover: {
                          pathLength: [0, 1],
                          opacity: [0, 1, 0],
                          pathOffset: [0, 1],
                          transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity
                          }
                        }
                      }}
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gray-light/20 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <category.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold font-prompt text-white leading-tight">{category.title}</h3>
                </div>

                <div className="relative z-10 space-y-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    const isClicked = clickedSkill === skill.name;
                    const showLevel = isHovered || isClicked;

                    return (
                      <div
                        key={skill.name}
                        className="relative px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-dark/30 rounded-lg border border-gray-light/20 text-xs sm:text-sm hover:bg-gray-light/20 transition-all duration-300 font-karla text-gray-light cursor-pointer group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setClickedSkill(clickedSkill === skill.name ? null : skill.name);
                        }}
                      >
                        {/* Skill name */}
                        <div className="flex justify-between items-center">
                          <span>{skill.name}</span>
                          {showLevel && (
                            <span className="text-xs font-semibold text-white bg-gray-light/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                              {skill.level}%
                            </span>
                          )}
                        </div>

                        {/* Progress bar */}
                        {showLevel && (
                          <div className="mt-1.5 sm:mt-2 w-full bg-gray-dark/50 rounded-full h-1 sm:h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;