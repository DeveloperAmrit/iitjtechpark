import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Bot, Brain, Cpu, Wifi } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-14 overflow-hidden">
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
        .loader-ring {
          position: absolute;
          border-radius: 50%;
          border-style: solid;
          border-color: transparent;
        }
        .loader-ring-1 {
          border-left-width: 4px;
          border-top-width: 4px;
          border-left-color: #f59e0b;
          border-top-color: #f59e0b;
          animation: orbit 4s linear infinite;
        }
        .loader-ring-2 {
          border-right-width: 4px;
          border-bottom-width: 4px;
          border-right-color: #3b82f6;
          border-bottom-color: #3b82f6;
          animation: counter-orbit 4s linear infinite;
        }
        .loader-ball-arm {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 2px;
          transform-origin: left;
          transform: rotate(-45deg);
        }
        .loader-ball {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          top: -7px;
          right: -8px;
          background-color: white;
        }
        .loader-ring-1 .loader-ball {
          background-color: #f59e0b;
          box-shadow: 0 0 20px #f59e0b, 0 0 40px #f59e0b;
        }
        .loader-ring-2 .loader-ball {
          background-color: #3b82f6;
          box-shadow: 0 0 20px #3b82f6, 0 0 40px #3b82f6;
        }
        .loader-ring-3 {
          border-top-width: 4px;
          border-right-width: 4px;
          border-top-color: #ef4444;
          border-right-color: #ef4444;
          animation: orbit 5s linear infinite;
        }
        .loader-ring-4 {
          border-bottom-width: 4px;
          border-left-width: 4px;
          border-bottom-color: #a855f7;
          border-left-color: #a855f7;
          animation: counter-orbit 6s linear infinite;
        }
        .loader-ring-3 .loader-ball {
          background-color: #ef4444;
          box-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444;
        }
        .loader-ring-4 .loader-ball {
          background-color: #a855f7;
          box-shadow: 0 0 20px #a855f7, 0 0 40px #a855f7;
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
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative flex items-center justify-center min-h-[600px] -mt-10">
            
            <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              {/* Ring 1 (Yellow) */}
              <div className="absolute inset-0 loader-ring loader-ring-1">
                <div className="loader-ball-arm">
                  <div className="loader-ball"></div>
                </div>
              </div>

              {/* Ring 3 (Red) */}
              <div className="absolute inset-[25px] sm:inset-[30px] loader-ring loader-ring-3">
                <div className="loader-ball-arm">
                  <div className="loader-ball"></div>
                </div>
              </div>

              {/* Ring 2 (Blue) */}
              <div className="absolute inset-[50px] sm:inset-[60px] loader-ring loader-ring-2">
                <div className="loader-ball-arm">
                  <div className="loader-ball"></div>
                </div>
              </div>

              {/* Central Image Container */}
              <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


export default HeroSection;