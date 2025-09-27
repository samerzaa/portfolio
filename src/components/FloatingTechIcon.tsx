import { LucideIcon } from "lucide-react";

interface FloatingTechIconProps {
  Icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FloatingTechIcon = ({ Icon, className = "", delay = 0 }: FloatingTechIconProps) => {
  return (
    <div 
      className={`absolute floating-icon ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${6 + Math.random() * 2}s`
      }}
    >
      <div className="p-3 card-elevated rounded-full subtle-glow hover:scale-110 transition-transform duration-300 bg-gray-medium/50 backdrop-blur-sm border border-gray-light/20">
        <Icon size={20} className="text-white" />
      </div>
    </div>
  );
};

export default FloatingTechIcon;