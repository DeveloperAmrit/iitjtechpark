'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import InnovationAnimation from './InnovationAnimation';
import { motion } from 'framer-motion';
import Counter from '../common/Counter';
import GeometricBackground from '../common/GeometricBackground';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-14 overflow-hidden relative">
      <GeometricBackground className="z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium border border-orange-200">
                Innovation Hub
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              IIT Jodhpur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 block">
                Tech Park
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Fostering innovation, entrepreneurship, and technological advancement in the heart of Rajasthan. 
              Where cutting-edge research meets real-world solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
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
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start border-t border-gray-200 pt-8"
            >
              {[
                { label: 'Startups', value: 50, suffix: '+' },
                { label: 'Research Labs', value: 25, suffix: '+' },
                { label: 'Innovations', value: 100, suffix: '+' }
              ].map((stat, index, array) => (
                <div key={stat.label} className="flex items-center">
                    <div>
                        <div className="text-3xl font-bold text-gray-900">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                    {index < array.length - 1 && <div className="w-px h-12 bg-gray-200 mx-5 hidden sm:block"></div>}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Content - The Animated Ecosystem */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex-1 w-full max-w-lg lg:max-w-xl relative flex items-center justify-center min-h-[600px] -mt-10"
          >
             <InnovationAnimation />
          </motion.div>

        </div>
      </div>
    </section>
  );
};


export default HeroSection;