'use client';

import React from 'react';

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
    logoUrl: "/api/placeholder/150/60",
    description: "AI-powered workflow automation"
  },
  {
    id: 2,
    name: "EcoTech Labs",
    logoUrl: "/api/placeholder/150/60",
    description: "Sustainable energy solutions"
  },
  {
    id: 3,
    name: "DataMind AI",
    logoUrl: "/api/placeholder/150/60",
    description: "Machine learning analytics"
  },
  {
    id: 4,
    name: "BioInnovate",
    logoUrl: "/api/placeholder/150/60",
    description: "Biotechnology research"
  },
  {
    id: 5,
    name: "QuantumDrive",
    logoUrl: "/api/placeholder/150/60",
    description: "Quantum computing solutions"
  },
  {
    id: 6,
    name: "SmartAgri Tech",
    logoUrl: "/api/placeholder/150/60",
    description: "Agricultural technology"
  },
  {
    id: 7,
    name: "NeuralNet Systems",
    logoUrl: "/api/placeholder/150/60",
    description: "Deep learning platforms"
  },
  {
    id: 8,
    name: "CleanWater Innovations",
    logoUrl: "/api/placeholder/150/60",
    description: "Water purification technology"
  }
];

const StartupMarqueeSection: React.FC = () => {
  return (
    // FIXED: Solid background color (Greenish-Blue / Teal) instead of gradient
    <section className="py-40 mt-20 bg-teal-600 overflow-hidden relative min-h-[400px]">
      
      {/* Background Elements: Stars and Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Large Circles (Soft Background Blobs) */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Stars (Twinkling dots) */}
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse duration-[3000ms] shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse duration-[4000ms]"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-100 rounded-full animate-ping duration-[5000ms]"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse duration-[2000ms]"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-cyan-100 rounded-full animate-pulse duration-[3500ms]"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl sm:text-2xl text-teal-100 max-w-4xl mx-auto font-light">
            Innovative startups that emerged from our tech park ecosystem
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden relative w-full">
          
          {/* FIXED: The "Strange Borders" problem. 
             The gradient colors here (from-teal-600) now perfectly match the section background (bg-teal-600).
          */}
          <div className="pointer-events-none absolute inset-0 z-20 
            before:absolute before:left-0 before:top-0 before:h-full before:w-1/6 sm:before:w-1/4 
            before:bg-gradient-to-r before:from-teal-600 before:to-transparent 
            after:absolute after:right-0 after:top-0 after:h-full after:w-1/6 sm:after:w-1/4 
            after:bg-gradient-to-l after:from-teal-600 after:to-transparent">
          </div>
          
          {/* Marquee Animation */}
          <div className="flex animate-marquee relative z-10 py-4">
            {/* First set of logos */}
            {startupLogos.map((startup) => (
              <div
                key={startup.id}
                className="flex-none mx-6 group cursor-pointer"
                title={startup.description}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 min-w-[220px] h-32 flex flex-col items-center justify-center border border-white/20 relative overflow-hidden">
                  
                  <img
                    src={startup.logoUrl}
                    alt={startup.name}
                    className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 mb-2 relative z-10"
                  />
                  <span className="text-xs text-gray-600 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    {startup.name}
                  </span>
                  
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {startupLogos.map((startup) => (
              <div
                key={`duplicate-${startup.id}`}
                className="flex-none mx-6 group cursor-pointer"
                title={startup.description}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 min-w-[220px] h-32 flex flex-col items-center justify-center border border-white/20 relative overflow-hidden">
                  
                  <img
                    src={startup.logoUrl}
                    alt={startup.name}
                    className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 mb-2 relative z-10"
                  />
                  <span className="text-xs text-gray-600 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    {startup.name}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-white/90 mb-8 font-light">
            Join the next generation of innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:bg-teal-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupMarqueeSection;