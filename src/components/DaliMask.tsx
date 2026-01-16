const DaliMask = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face outline */}
      <ellipse
        cx="50"
        cy="55"
        rx="35"
        ry="45"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      
      {/* Left eye */}
      <ellipse
        cx="35"
        cy="45"
        rx="8"
        ry="5"
        className="fill-background"
      />
      
      {/* Right eye */}
      <ellipse
        cx="65"
        cy="45"
        rx="8"
        ry="5"
        className="fill-background"
      />
      
      {/* Nose */}
      <path
        d="M50 50 L45 65 L55 65 Z"
        className="fill-heist-blood"
      />
      
      {/* Mustache */}
      <path
        d="M30 75 Q35 70 50 72 Q65 70 70 75"
        className="stroke-background"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M25 73 Q20 68 15 72"
        className="stroke-background"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M75 73 Q80 68 85 72"
        className="stroke-background"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Goatee */}
      <path
        d="M45 80 Q50 95 55 80"
        className="stroke-background"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default DaliMask;
