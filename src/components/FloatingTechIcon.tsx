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
      <div className="p-3 glass-card rounded-full glow-effect hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-primary" />
      </div>
    </div>
  );
};

export default FloatingTechIcon;