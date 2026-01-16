import { ReactNode } from "react";

interface HeistCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

const HeistCard = ({ children, className = "", glow = false }: HeistCardProps) => {
  return (
    <div
      className={`
        relative p-6 bg-card border-heist rounded-lg
        backdrop-blur-sm
        ${glow ? "animate-pulse-glow" : ""}
        ${className}
      `}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />
      
      {children}
    </div>
  );
};

export default HeistCard;
