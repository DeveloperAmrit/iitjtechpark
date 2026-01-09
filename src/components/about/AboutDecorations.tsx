import React from 'react';
import { motion } from 'framer-motion';

export const CircuitBoardHero = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10 10 L30 10 L30 30" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="30" r="3" fill="currentColor" />
        <path d="M70 70 L50 70 L50 50" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
        <path d="M90 10 L90 30" fill="none" stroke="currentColor" strokeWidth="2" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </div>
);

export const TimelineNode = ({ index }: { index: number }) => (
  <motion.div 
    initial={{ scale: 0, rotate: -45 }}
    whileInView={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
    className="relative w-12 h-12 flex items-center justify-center z-10 bg-white"
  >
    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 rotate-45 shadow-lg`}></div>
    <div className="absolute inset-[3px] bg-white rounded-[10px] rotate-45 flex items-center justify-center">
       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    </div>
    <span className="relative z-10 text-xs font-bold text-gray-700 bg-white px-1 rounded">{index + 1}</span>
  </motion.div>
);

export const FloatingHexagon = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={`w-40 h-40 absolute opacity-20 text-orange-500 ${className}`}
    animate={{ 
        y: [0, -20, 0], 
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50 15 L83.3 35 V75 L50 95 L16.7 75 V35 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
    <circle cx="50" cy="55" r="5" fill="currentColor" />
    <line x1="50" y1="55" x2="93.3" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="55" x2="6.7" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="55" x2="50" y2="105" stroke="currentColor" strokeWidth="1" />
  </motion.svg>
);

export const TechGrid = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 200 200" 
    className={`w-48 h-48 absolute opacity-10 text-gray-800 ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
     <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
     </defs>
     <rect width="100%" height="100%" fill="url(#smallGrid)" />
     <rect x="40" y="40" width="40" height="40" fill="currentColor" opacity="0.2" />
     <rect x="120" y="100" width="60" height="20" fill="currentColor" opacity="0.2" />
     <rect x="20" y="140" width="20" height="20" stroke="currentColor" strokeWidth="2" />
  </motion.svg>
);

export const DataFlow = ({ className }: { className?: string }) => (
  <motion.div className={`absolute ${className}`}>
     <motion.div 
        className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        animate={{ 
            x: [0, 100, 100, 0, 0],
            y: [0, 0, 100, 100, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
     />
     <svg width="120" height="120" className="opacity-20 stroke-gray-900 pointer-events-none">
        <rect x="1" y="1" width="100" height="100" fill="none" strokeWidth="2" />
     </svg>
  </motion.div>
);
