import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let interval: NodeJS.Timeout;
    
    const triggerGlitch = () => {
      const duration = Math.random() * 100 + 50;
      const originalText = text;
      
      // Create glitched version
      const glitched = originalText
        .split("")
        .map((char) =>
          Math.random() > 0.7
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char
        )
        .join("");
      
      setDisplayText(glitched);
      
      setTimeout(() => {
        setDisplayText(originalText);
      }, duration);
    };
    
    // Random glitch intervals
    const scheduleGlitch = () => {
      const delay = Math.random() * 4000 + 2000;
      interval = setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    };
    
    scheduleGlitch();
    
    return () => clearTimeout(interval);
  }, [text]);
  
  return (
    <span className={`relative ${className}`}>
      <span className="relative z-10">{displayText}</span>
      <span 
        className="absolute inset-0 text-primary opacity-50 blur-[1px]"
        style={{ transform: "translate(2px, -1px)" }}
        aria-hidden
      >
        {displayText}
      </span>
    </span>
  );
};

export default GlitchText;
