
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                <video
                  src="/assets/seo.webm"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white font-prompt">
              About
            </h2>
            <p className="text-lg text-gray-light leading-relaxed font-karla max-w-lg">
              Motivated computer science student with strong full-stack web development skills.
              Experienced in building practical projects, including a modern café menu website and this portfolio.
              Possesses strong problem-solving abilities, with curiosity and passion for creating efficient and user-friendly digital solutions.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          {/* Animated Skills Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_14s_linear_infinite] md:animate-scroll">
              {/* First set of skills */}
              <div className="flex items-center space-x-16 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/js.webp" 
                      alt="JavaScript" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">JavaScript</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/ts.webp" 
                      alt="TypeScript" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">TypeScript</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/react.webp" 
                      alt="React" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">React</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/node.webp" 
                      alt="Node.js" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">Node.js</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/html.webp" 
                      alt="HTML" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">HTML</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/css.webp" 
                      alt="CSS" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">CSS</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/tailwind.webp" 
                      alt="Tailwind CSS" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 flex-shrink-0 ml-16">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/js.webp" 
                      alt="JavaScript" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">JavaScript</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/ts.webp" 
                      alt="TypeScript" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">TypeScript</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/react.webp" 
                      alt="React" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">React</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/node.webp" 
                      alt="Node.js" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">Node.js</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/html.webp" 
                      alt="HTML" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">HTML</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/css.webp" 
                      alt="CSS" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">CSS</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/skills/tailwind.webp" 
                      alt="Tailwind CSS" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
