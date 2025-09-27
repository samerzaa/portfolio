import { LucideIcon } from "lucide-react";

interface FloatingTechIconProps {
  Icon: LucideIcon;
  angle: number;
  delay?: number;
}

const FloatingTechIcon = ({ Icon, angle, delay = 0 }: FloatingTechIconProps) => {
  // Calculate position around the circle - responsive for mobile and desktop
  // Mobile: w-64 (256px), Desktop: w-80 (320px)
  const radians = (angle * Math.PI) / 180;
  
  // Mobile positioning (w-64 = 256px) - around the border
  const mobileRadius = 140; // Around image border
  const mobileCenter = 128; // 256/2
  const mobileX = mobileCenter + mobileRadius * Math.cos(radians) - 16; // -16 to center the icon
  const mobileY = mobileCenter + mobileRadius * Math.sin(radians) - 16;
  
  // Desktop positioning (w-80 = 320px) - around the border
  const desktopRadius = 180; // Around image border
  const desktopCenter = 160; // 320/2
  const desktopX = desktopCenter + desktopRadius * Math.cos(radians) - 20; // -20 to center the icon
  const desktopY = desktopCenter + desktopRadius * Math.sin(radians) - 20;
  
  // Check if icon should be visible on mobile (only show icons in lower half)
  const isVisibleOnMobile = Math.sin(radians) >= 0; // Only show icons where sin(angle) >= 0 (lower half)

  return (
    <>
      {/* Mobile positioning - only show icons in lower half */}
      {isVisibleOnMobile && (
        <div 
          className="absolute floating-icon lg:hidden z-20"
          style={{ 
            left: `${mobileX}px`,
            top: `${mobileY}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${6 + Math.random() * 2}s`
          }}
        >
          <div className="p-2 card-elevated rounded-full subtle-glow hover:scale-110 transition-transform duration-300 bg-gray-medium/80 backdrop-blur-sm border border-gray-light/30 shadow-lg">
            <Icon size={16} className="text-white" />
          </div>
        </div>
      )}
      
      {/* Desktop positioning - show all icons around the border */}
      <div 
        className="absolute floating-icon hidden lg:block z-20"
        style={{ 
          left: `${desktopX}px`,
          top: `${desktopY}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${6 + Math.random() * 2}s`
        }}
      >
        <div className="p-3 card-elevated rounded-full subtle-glow hover:scale-110 transition-transform duration-300 bg-gray-medium/80 backdrop-blur-sm border border-gray-light/30 shadow-lg">
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </>
  );
};

export default FloatingTechIcon;