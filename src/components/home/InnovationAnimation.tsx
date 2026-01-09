'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Trees, Brain, Glasses, Lightbulb, Factory, Cog, Zap, Microscope, Rocket } from 'lucide-react';

const InnovationAnimation = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each item appearing
        delayChildren: 0.3,
      },
    },
  };

  const popUpVariants = {
    hidden: { scale: 0, opacity: 0, y: 50 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 260,
        damping: 20 
      }
    },
  };

  const gearSpinVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear" as const,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut" as const,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };
  
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center p-8 overflow-hidden">
      
      {/* Background Orbiting Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Ring 1 (Yellow) */}
          <motion.div 
            className="absolute rounded-full border-4 border-transparent border-t-amber-400 border-l-amber-400 opacity-20"
            style={{ width: '500px', height: '500px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }}
          />
           <motion.div 
            className="absolute rounded-full border-4 border-transparent border-b-amber-400 border-r-amber-400 opacity-20"
            style={{ width: '480px', height: '480px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
          />
          
          {/* Ring 2 (Blue) */}
          <motion.div 
             className="absolute rounded-full border-2 border-dashed border-blue-400 opacity-20"
             style={{ width: '380px', height: '380px' }}
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" as const }}
          />

           {/* Ring 3 (Red) */}
           <motion.div 
             className="absolute rounded-full border border-red-400 opacity-20"
             style={{ width: '600px', height: '600px' }}
             animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
          />
      </div>

      <motion.div
        className="relative w-full max-w-lg h-[500px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* CENTER HUB: Main Image with Glassmorphism */}
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, delay: 0.2 }}
        >
             <div className="relative w-64 h-64 rounded-full p-2 bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative z-10">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform hover:scale-110 duration-700"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Orbiting particles around the image */}
                <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
                >
                    <div className="absolute -top-1 left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                </motion.div>
                 <motion.div 
                    className="absolute inset-4 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" as const }}
                >
                    <div className="absolute top-1/2 -right-2 w-3 h-3 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
                </motion.div>
            </div>
        </motion.div>

        {/* --- SURROUNDING INNOVATION ELEMENTS --- */}

        {/* 1. Buildings Popping Up (Bottom Left) */}
        <motion.div 
            className="absolute bottom-0 left-0 z-20"
            variants={popUpVariants}
        >
            <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
                <Building2 className="w-16 h-16 text-blue-600 mb-1" strokeWidth={1.5} />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Infra</span>
                <div className="absolute -top-3 -right-3 bg-blue-100 p-1.5 rounded-full">
                    <Zap className="w-4 h-4 text-blue-600" />
                </div>
            </div>
        </motion.div>

        {/* 2. Trees (Near Building) */}
        <motion.div 
            className="absolute bottom-4 left-24 z-10"
            variants={popUpVariants}
        >
            <Trees className="w-12 h-12 text-green-500" strokeWidth={1.5} />
        </motion.div>

        {/* 6. Industry with Gears (Bottom Right) */}
        <motion.div 
            className="absolute bottom-0 right-0 z-20"
            variants={popUpVariants}
        >
             <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
                <div className="relative">
                    <Factory className="w-16 h-16 text-indigo-600 mb-1" strokeWidth={1.5} />
                    <motion.div 
                        className="absolute -top-2 -right-2 bg-indigo-50 p-1.5 rounded-full border border-indigo-100"
                        variants={gearSpinVariants}
                        animate="animate"
                    >
                        <Cog className="w-6 h-6 text-indigo-500" />
                    </motion.div>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industry</span>
            </div>
        </motion.div>

        
        {/* TOP CLUSTER - Floating Ideas */}

        {/* 3. Brain (Top Center) */}
        <motion.div 
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-20"
            variants={popUpVariants}
        >
            <motion.div 
                className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-orange-100 flex flex-col items-center"
                variants={floatVariants}
                animate="animate"
            >
                <Brain className="w-14 h-14 text-orange-500" strokeWidth={1.5} />
                <div className="mt-2 px-3 py-1 bg-orange-50 rounded-full text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                    Innovation
                </div>
            </motion.div>
        </motion.div>

        {/* 7. Microscope (Left Side) */}
        <motion.div 
            className="absolute top-1/2 -left-4 -translate-y-1/2 z-20"
            variants={popUpVariants}
        >
            <motion.div 
                className="bg-white/80 p-3 rounded-2xl shadow-lg border border-teal-100"
                variants={floatVariants}
                animate="animate"
            >
                <Microscope className="w-10 h-10 text-teal-600" strokeWidth={1.5} />
            </motion.div>
        </motion.div>

        {/* 8. Rocket (Top Right Corner) */}
        <motion.div 
            className="absolute top-8 right-8 z-20"
            variants={popUpVariants}
        >
             <motion.div 
                className="bg-white/80 p-3 rounded-full shadow-lg border border-red-100"
                variants={floatVariants}
                animate="animate"
            >
                <Rocket className="w-10 h-10 text-red-500" strokeWidth={1.5} />
            </motion.div>
        </motion.div>

        {/* 4. Spectacles (Top Left Corner) */}
        <motion.div 
            className="absolute top-8 left-8 z-20"
            variants={popUpVariants}
        >
             <motion.div 
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-purple-100"
                variants={floatVariants}
                animate="animate"
                custom={1} 
            >
                <Glasses className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
            </motion.div>
        </motion.div>

        {/* 5. Bulb (Right Side) */}
        <motion.div 
            className="absolute top-1/2 -right-4 -translate-y-1/2 z-20"
            variants={popUpVariants}
        >
            <motion.div 
                className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-yellow-100"
                variants={floatVariants}
                animate="animate"
            >
                <motion.div variants={pulseVariants} animate="animate">
                    <Lightbulb className="w-10 h-10 text-yellow-500 fill-yellow-100" strokeWidth={1.5} />
                </motion.div>
            </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default InnovationAnimation;
