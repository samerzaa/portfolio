import { useState, useEffect } from "react";
import { Code, Database, Smartphone, Globe, Terminal, Layers, Server, Cpu } from "lucide-react";

const LoadingPage = () => {
  const [loadingText, setLoadingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const fullText = "Loading Portfolio...";
  const techIcons = [Code, Database, Smartphone, Globe, Terminal, Layers, Server, Cpu];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setLoadingText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Show content after typing is complete
        setTimeout(() => setShowContent(true), 500);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText.length]);

  return (
    <div className="fixed inset-0 bg-gray-dark flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-medium/20 via-transparent to-gray-light/10"></div>
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-gray-light/10 animate-pulse"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold font-prompt text-white mb-2">
            Samer Magtouf
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="mb-12">
          <h2 className="text-xl lg:text-2xl text-gray-light font-karla">
            {loadingText}
            <span className="animate-pulse ml-1">|</span>
          </h2>
        </div>

        {/* Floating tech icons */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {techIcons.map((Icon, index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const radius = 60;
            const x = 64 + radius * Math.cos(angle) - 16;
            const y = 64 + radius * Math.sin(angle) - 16;

            return (
              <div
                key={index}
                className="absolute animate-spin"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  animationDuration: `${8 + index * 0.5}s`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="p-2 rounded-full bg-gray-medium/50 backdrop-blur-sm border border-gray-light/20">
                  <Icon size={16} className="text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-medium/30 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
            style={{
              width: `${(currentIndex / fullText.length) * 100}%`,
              transition: 'width 0.3s ease-out'
            }}
          />
        </div>

        {/* Loading percentage */}
        <div className="mt-4">
          <span className="text-sm text-gray-light font-karla">
            {Math.round((currentIndex / fullText.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Fade out overlay when content is ready */}
      {showContent && (
        <div className="absolute inset-0 bg-gray-dark animate-fade-out"></div>
      )}
    </div>
  );
};

export default LoadingPage;
