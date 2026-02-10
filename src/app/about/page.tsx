'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import GeometricBackground from '@/components/common/GeometricBackground';
import { CircuitBoardHero, TimelineNode, FloatingHexagon, TechGrid, DataFlow } from '@/components/about/AboutDecorations';

const timelineEvents = [
  {
    year: 'Vision',
    title: 'Integrated Ecosystem',
    description: "To establish a world-class ecosystem that seamlessly integrates academia and industry, driving innovation to address real-world challenges.",
  },
  {
    year: 'Goal',
    title: 'Research Hub',
    description: "The IIT Jodhpur Research Park will be a hub for cutting-edge and interdisciplinary research, fostering strong academia-industry partnerships to co-develop solutions aligned with national priorities.",
  },
  {
    year: 'Industry',
    title: 'Benefits to Industry',
    description: "Create industry-focused research centers, develop joint research and co-innovation programs, and establish Research Park Consortiums in targeted areas.",
  },
  {
    year: 'Institute',
    title: 'Benefits to IITJ Ecosystem',
    description: "Revenue sharing, IP and technology transfer policies, research grants, fellowships, consulting opportunities, and industry sabbaticals.",
  },
  {
    year: 'Local',
    title: 'Regional Impact',
    description: "Develop projects aligned with local needs (e.g., AI, Agri-tech, rural healthcare) and build partnerships with corporations to create R&D hubs remotely.",
  },
  {
    year: 'Research',
    title: 'Research Ecosystem',
    description: "Comprising diverse Schools, Departments for cutting-edge research, and Interdisciplinary Centers fostering innovation.",
  },
  {
    year: 'Outreach',
    title: 'Global Outreach',
    description: "Actively promote the park at conferences and industry expos, and facilitate institutional visits to drive collaboration.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden pt-40 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          <CircuitBoardHero />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-semibold text-sm tracking-wide"
              >
                ABOUT US
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-gray-900"
              >
                Enabling Research Ecosystem: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Technology Park</span>
              </motion.h1>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-red-50 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white/50 backdrop-blur-sm border border-orange-100 rounded-xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-light">
                        The IIT Jodhpur Research Park will be a hub for cutting-edge and interdisciplinary research, fostering strong academia-industry partnerships to co-develop solutions aligned with national priorities.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-balance">
                        Managed by IIT Jodhpur, the Technology Park serves as an interface for industries to collaborate with faculty and students, providing access to state-of-the-art research facilities and infrastructure.
                    </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Strategic Vision</h2>
              </motion.div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"
              ></motion.div>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-200 via-red-200 to-yellow-200 hidden md:block"
              ></motion.div>

              <div className="space-y-12 md:space-y-24">
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0">
                      <motion.div 
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 border-orange-500 transition-all duration-300 ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}
                      >
                        <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-3">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <div className="relative flex items-center justify-center w-16 z-20">
                      <TimelineNode index={index} />
                      {/* Connection Line for mobile */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 md:hidden block"></div>
                    </div>
                    
                    {/* Empty Space for alternate side with decorations */}
                    <div className="w-full md:w-1/2 hidden md:flex justify-center items-center relative h-full min-h-[100px]">
                        {index % 3 === 0 && <FloatingHexagon className={index % 2 === 0 ? "left-10" : "right-10"} />}
                        {index % 3 === 1 && <TechGrid className={index % 2 === 0 ? "left-20" : "right-20"} />}
                        {index % 3 === 2 && <DataFlow className={index % 2 === 0 ? "left-12 top-0" : "right-12 top-0"} />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
