import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Bot, Brain, Cpu, Wifi } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 overflow-hidden">
      {/* Injecting custom styles for the orbital animation */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit-slow {
          animation: orbit 20s linear infinite;
        }
        .animate-orbit-medium {
          animation: orbit 15s linear infinite;
        }
        .animate-counter-slow {
          animation: counter-orbit 20s linear infinite;
        }
        .animate-counter-medium {
          animation: counter-orbit 15s linear infinite;
        }
        .pause-on-hover:hover, .pause-on-hover:hover * {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content (Kept mostly the same, just refined) */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium border border-orange-200">
                Innovation Hub
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              IIT Jodhpur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 block">
                Tech Park
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Fostering innovation, entrepreneurship, and technological advancement in the heart of Rajasthan. 
              Where cutting-edge research meets real-world solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/ecosystem"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 group"
              >
                Explore Ecosystem
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 shadow-sm hover:shadow-md group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform fill-current" />
                Watch Video
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Startups</div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Research Labs</div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Innovations</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - The Animated Ecosystem */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            {/* The Main Card Container */}
            <div className="aspect-square relative bg-gradient-to-br from-orange-50 to-red-50 rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden pause-on-hover group">
              
              {/* Animated Background Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-300/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              {/* Central Hub (Sun) */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  {/* Pulsing rings behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -inset-4 bg-white/40 rounded-full blur-md"></div>
                  
                  {/* Main Logo Circle */}
                  <div className="w-32 h-32 bg-white rounded-full shadow-[0_0_40px_-10px_rgba(251,146,60,0.6)] flex flex-col items-center justify-center relative z-10 border-4 border-orange-50">
                    <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-1 shadow-inner">
                      <span className="text-white font-bold text-xl tracking-tighter">IITJ</span>
                    </div>
                    <span className="text-gray-800 font-bold text-xs tracking-tight">Innovation Hub</span>
                  </div>
                </div>
              </div>

              {/* Orbit System Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Outer Orbit Ring (Dashed Line) */}
                <div className="absolute w-[85%] h-[85%] border border-dashed border-orange-300/50 rounded-full"></div>
                
                {/* Inner Orbit Ring (Dashed Line) */}
                <div className="absolute w-[55%] h-[55%] border border-dashed border-red-300/50 rounded-full"></div>

                {/* TRACK 1: Inner Orbit (Clockwise) - Fast */}
                <div className="absolute w-[55%] h-[55%] animate-orbit-medium">
                  {/* Planet: IoT */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="animate-counter-medium">
                       <FloatingCard icon={<Wifi className="w-5 h-5" />} label="IoT" color="bg-red-500" />
                    </div>
                  </div>
                  {/* Planet: Robotics (Opposite side) */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <div className="animate-counter-medium">
                      <FloatingCard icon={<Bot className="w-5 h-5" />} label="Robotics" color="bg-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* TRACK 2: Outer Orbit (Counter-Clockwise via CSS or just visually distinct) - Slow */}
                {/* Note: I'm using orbit-slow here, but visually placed wider */}
                <div className="absolute w-[85%] h-[85%] animate-orbit-slow" style={{ animationDirection: 'reverse' }}>
                  {/* Planet: AI */}
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2">
                    <div className="animate-counter-slow" style={{ animationDirection: 'normal' }}>
                      <FloatingCard icon={<Brain className="w-5 h-5" />} label="AI & ML" color="bg-orange-500" />
                    </div>
                  </div>
                  {/* Planet: Tech */}
                  <div className="absolute top-1/2 -left-8 -translate-y-1/2">
                    <div className="animate-counter-slow" style={{ animationDirection: 'normal' }}>
                      <FloatingCard icon={<Cpu className="w-5 h-5" />} label="Deep Tech" color="bg-blue-600" />
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Interaction Hint */}
              <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-orange-600 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  The Ecosystem revolves around you
                </span>
              </div>

            </div>

            {/* Decorative blobs behind the card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper Component for the orbiting nodes
const FloatingCard = ({ icon, label, color }) => (
  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
    <div className={`${color} w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white ring-4 ring-white/60 backdrop-blur-sm`}>
      {icon}
    </div>
    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-white/50">
      <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{label}</span>
    </div>
  </div>
);

export default HeroSection;