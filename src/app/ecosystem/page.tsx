'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Counter from '@/components/common/Counter';
import GeometricBackground from '@/components/common/GeometricBackground';
import { Building2, Users, Rocket, Network, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Industry Partners', value: 3, suffix: '+' },
  { label: 'Departments', value: 10, suffix: '+' },
  { label: 'Research Centers', value: 8, suffix: '+' },
  { label: 'Schools', value: 4, suffix: '' },
];

const categories = [
  {
    title: 'Industry Partners',
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    description: 'Companies onboarded for collaborative research and development.',
    items: ['RSA (Renewable Energy)', 'Saanjh.Al / NVlife (AI, Healthcare)', 'Luit Renewable (Energy)']
  },
  {
    title: 'Facilities',
    icon: <Building2 className="w-8 h-8 text-orange-500" />,
    description: 'State-of-the-art infrastructure facilitating cutting-edge research.',
    items: ['Techpark Hall - 1', 'Techpark Hall - 2', 'Techpark Hall - 3', 'Open Space for Prototyping']
  },
  {
    title: 'Research Ecosystem',
    icon: <Network className="w-8 h-8 text-orange-500" />,
    description: 'Interdisciplinary hubs and departments fostering innovation.',
    items: ['Bioscience & Bioengineering', 'Computer Science & Engineering', 'Electrical Engineering', 'Center for Emerging Technologies']
  },
  {
    title: 'Faculty Leadership',
    icon: <Users className="w-8 h-8 text-orange-500" />,
    description: 'Distinguished faculty leading research and industry co-development.',
    items: ['Head, Rishabh COE', 'Prof. Mitali Mukerji', 'Faculty Coordinators', 'Department Heads']
  }
];

export default function Ecosystem() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-orange-500">Ecosystem</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              Collaborating with industry to drive research, innovation, and technological advancement.
            </motion.p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="text-4xl font-bold text-orange-500 mb-2 tabular-nums"
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                    {category.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Ecosystem</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you are a startup looking for incubation, a corporation seeking innovation, or a researcher aimed at impact, there is a place for you here.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-200 shadow-md"
              >
                Apply for Incubation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
