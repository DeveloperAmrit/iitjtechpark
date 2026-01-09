import React from 'react';

interface GeometricBackgroundProps {
  className?: string;
  theme?: 'light' | 'dark';
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
  className = "",
  theme = 'light'
}) => {
  const strokeColor = theme === 'light' ? "stroke-gray-300" : "stroke-white";
  const opacity = "opacity-40";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className={`${strokeColor} ${opacity} stroke-[1] fill-none`}>
          {/* Large Circle Top Right */}
          <circle cx="850" cy="150" r="300" className="stroke-gray-200/50" />
          <circle cx="850" cy="150" r="250" strokeDasharray="10 10" />
          
          {/* Triangle Top Left */}
          <path d="M 100 200 L 200 400 L 0 400 Z" className="stroke-gray-200/50" />
          
          {/* Connecting Lines and Nodes (Constellation style) */}
          <g transform="translate(100, 100)">
             <circle cx="50" cy="50" r="4" className="fill-gray-300/50 stroke-none" />
             <circle cx="200" cy="150" r="4" className="fill-gray-300/50 stroke-none" />
             <circle cx="100" cy="300" r="4" className="fill-gray-300/50 stroke-none" />
             <line x1="50" y1="50" x2="200" y2="150" />
             <line x1="200" y1="150" x2="100" y2="300" />
             <line x1="100" y1="300" x2="50" y2="50" />
          </g>

          {/* Protractor / Arc Bottom Right */}
          <path d="M 700 900 A 200 200 0 0 0 1100 900" />
          <line x1="700" y1="900" x2="1100" y2="900" />
          
          {/* Random Geometric Lines */}
          <line x1="0" y1="600" x2="1000" y2="200" className="opacity-20" />
          <line x1="400" y1="0" x2="600" y2="1000" className="opacity-20" />
          
          {/* Hexagon */}
          <path d="M 100 700 L 150 613 L 250 613 L 300 700 L 250 787 L 150 787 Z" />
          
          {/* Grid Patch */}
          <path d="M 800 600 H 900 M 800 620 H 900 M 800 640 H 900 M 800 660 H 900" className="opacity-30" />
          <path d="M 820 580 V 680 M 840 580 V 680 M 860 580 V 680 M 880 580 V 680" className="opacity-30" />

          {/* Dotted curve */}
          <path d="M 0 500 Q 500 500 1000 500" strokeDasharray="5 15" className="opacity-30" />
          
          {/* Concentric Circles Decor */}
          <g transform="translate(500, 500)">
            <circle cx="0" cy="0" r="100" className="stroke-gray-200/30" />
            <circle cx="0" cy="0" r="150" strokeDasharray="4 4" className="opacity-20" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GeometricBackground;
