import React from 'react';

const CardGeometricOverlay = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-60" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {/* Top Left - Hexagon Grid */}
        <g transform="translate(50, 50)" className="stroke-gray-400/40 fill-none stroke-[2]">
             <path d="M30,0 L60,17.32 L60,51.96 L30,69.28 L0,51.96 L0,17.32 Z" />
             <path d="M30,0 L60,17.32 L60,51.96 L30,69.28 L0,51.96 L0,17.32 Z" transform="translate(60, 0)" />
             <path d="M30,0 L60,17.32 L60,51.96 L30,69.28 L0,51.96 L0,17.32 Z" transform="translate(30, 52)" />
        </g>

        {/* Top Right - Crosshatch Circle */}
        <g transform="translate(700, 80)">
             <circle cx="0" cy="0" r="60" className="stroke-gray-400/40 stroke-[2] fill-none" />
             <path d="M-40,-40 L40,40 M-40,40 L40,-40" className="stroke-gray-400/40 stroke-[1]" />
             <circle cx="0" cy="0" r="10" className="fill-gray-400/30" />
        </g>

        {/* Middle Left - Solid Triangle and Line */}
        <g transform="translate(80, 300)">
            <path d="M0,0 L40,20 L0,40 Z" className="fill-gray-400/30" />
            <line x1="40" y1="20" x2="150" y2="20" className="stroke-gray-400/50 stroke-[2] stroke-dasharray-4-4" />
            <circle cx="150" cy="20" r="5" className="fill-gray-400/50" />
        </g>

        {/* Bottom Right - Concentric Arcs */}
        <g transform="translate(700, 500)">
            <path d="M-50,0 A50,50 0 0,1 50,0" className="stroke-gray-400/50 stroke-[3] fill-none" />
            <path d="M-30,0 A30,30 0 0,1 30,0" className="stroke-gray-400/40 stroke-[2] fill-none" />
            <path d="M-10,0 A10,10 0 0,1 10,0" className="fill-gray-400/40" />
        </g>

        {/* Bottom Left - Plus Grid */}
        <g transform="translate(100, 500)">
            <g className="fill-gray-400/40">
                {[0, 1, 2].map(x => [0, 1, 2].map(y => (
                    <path key={`${x}-${y}`} d="M-4,0 H4 M0,-4 V4" stroke="currentColor" strokeWidth="2" transform={`translate(${x*20}, ${y*20})`} />
                )))}
            </g>
        </g>

        {/* Random Floating Elements */}
        <rect x="200" y="100" width="15" height="15" transform="rotate(45 207.5 107.5)" className="stroke-gray-400/50 stroke-[2] fill-none" />
        <circle cx="500" cy="150" r="4" className="fill-gray-400/60" />
        <path d="M600,400 L620,420 L640,400" className="stroke-gray-400/50 stroke-[2] fill-none" />
        
        {/* Dashed Connecting Line */}
        <path d="M150,150 Q400,50 650,150" className="stroke-gray-300/40 stroke-[1] fill-none stroke-dasharray-10-5" />

      </svg>
    </div>
  );
};

export default CardGeometricOverlay;
