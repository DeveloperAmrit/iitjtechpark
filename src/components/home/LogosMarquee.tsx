'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import GeometricBackground from '../common/GeometricBackground';

interface StartupLogo {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
}

const startupLogos: StartupLogo[] = [
  {
    id: 1,
    name: "TechFlow Solutions",
    logoUrl: "https://ui-avatars.com/api/?name=TechFlow&background=0D8ABC&color=fff&size=128",
    description: "AI-powered workflow automation"
  },
  {
    id: 2,
    name: "EcoTech Labs",
    logoUrl: "https://ui-avatars.com/api/?name=EcoTech&background=27AE60&color=fff&size=128",
    description: "Sustainable energy solutions"
  },
  {
    id: 3,
    name: "DataMind AI",
    logoUrl: "https://ui-avatars.com/api/?name=DataMind&background=8E44AD&color=fff&size=128",
    description: "Machine learning analytics"
  },
  {
    id: 4,
    name: "BioInnovate",
    logoUrl: "https://ui-avatars.com/api/?name=Bio+Innovate&background=E67E22&color=fff&size=128",
    description: "Biotechnology research"
  },
  {
    id: 5,
    name: "QuantumDrive",
    logoUrl: "https://ui-avatars.com/api/?name=Quantum&background=2980B9&color=fff&size=128",
    description: "Quantum computing solutions"
  },
  {
    id: 6,
    name: "SmartAgri Tech",
    logoUrl: "https://ui-avatars.com/api/?name=SmartAgri&background=2ECC71&color=fff&size=128",
    description: "Agricultural technology"
  },
  {
    id: 7,
    name: "NeuralNet Systems",
    logoUrl: "https://ui-avatars.com/api/?name=NeuralNet&background=C0392B&color=fff&size=128",
    description: "Deep learning platforms"
  },
  {
    id: 8,
    name: "CleanWater Innovations",
    logoUrl: "https://ui-avatars.com/api/?name=CleanWater&background=16A085&color=fff&size=128",
    description: "Water purification technology"
  }
];

const StartupMarqueeSection: React.FC = () => {
  const [stars, setStars] = useState<{ top: string; left: string; size: string }[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(6)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.5 ? '4px' : '6px',
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="py-40 bg-teal-600 overflow-hidden relative min-h-[400px]">
      <GeometricBackground theme="dark" className="opacity-10" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Large Circles (Soft Background Blobs) */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
            animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />

        {/* Stars */}
        {stars.map((star, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0.3, scale: 0.5 }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2 + i, repeat: Infinity }}
                className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ 
                    top: star.top, 
                    left: star.left,
                    width: star.size,
                    height: star.size,
                }}
             />
        ))}
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-teal-100 max-w-4xl mx-auto font-light"
          >
            Innovative startups that emerged from our tech park ecosystem
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-white/30 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden relative w-full">
          
          <div className="pointer-events-none absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/6 sm:before:w-1/4 before:bg-gradient-to-r before:from-teal-600 before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-1/6 sm:after:w-1/4 after:bg-gradient-to-l after:from-teal-600 after:to-transparent">
          </div>
          
          {/* Marquee Animation */}
          <div className="flex relative z-10 py-4 w-full">
            <motion.div 
                 className="flex flex-nowrap"
                 animate={{ x: [0, "-50%"] }}
                 transition={{ 
                     x: { 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 20, 
                        ease: "linear" 
                     } 
                 }}
            >
                {/* Triple set to ensure no gaps ever */}
                {[...startupLogos, ...startupLogos, ...startupLogos].map((startup, index) => (
                <div
                    key={`${startup.id}-${index}`}
                    className="flex-none mx-6 group cursor-pointer"
                >
                    <motion.div 
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        className="bg-white rounded-xl p-6 shadow-md border border-teal-100 min-w-[280px] h-[160px] flex flex-col justify-between group transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-3">
                        <img
                            src={startup.logoUrl}
                            alt={startup.name}
                            className="w-12 h-12 rounded-lg shadow-sm"
                        />
                        <div className="bg-teal-50 text-teal-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                            Success Story
                        </div>
                        </div>
                        
                        <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {startup.name}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                            {startup.description}
                        </p>
                        </div>
                    </motion.div>
                </div>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1}}
             className="text-xl text-white/90 mb-8 font-light"
          >
            Join the next generation of innovators
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:bg-teal-50 hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupMarqueeSection;