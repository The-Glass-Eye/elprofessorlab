import { useState, useEffect } from "react";

interface TerminalTextProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
}

const TerminalText = ({ lines, className = "", typingSpeed = 50 }: TerminalTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = line.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-primary">{">"}</span>
          <span className="text-foreground">{line}</span>
          {index === currentLine && currentLine < lines.length && (
            <span className={`w-2 h-4 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </div>
      ))}
      {currentLine >= lines.length && (
        <div className="flex items-center gap-2">
          <span className="text-primary">{">"}</span>
          <span className={`w-2 h-4 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
        </div>
      )}
    </div>
  );
};

export default TerminalText;
