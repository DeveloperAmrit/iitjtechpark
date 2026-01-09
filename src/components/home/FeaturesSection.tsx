'use client';

import React from 'react';
import { Lightbulb, Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import GeometricBackground from '../common/GeometricBackground';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Hub",
      description: "State-of-the-art facilities fostering groundbreaking research and development across multiple domains.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Startup Incubation",
      description: "Comprehensive support system for emerging entrepreneurs with mentorship, funding, and resources.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Industry Collaboration",
      description: "Strong partnerships with leading industries to bridge the gap between academia and real-world applications.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technology Transfer",
      description: "Streamlined processes for converting research innovations into market-ready solutions.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">IIT Jodhpur Tech Park</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We provide a comprehensive ecosystem that nurtures innovation, supports entrepreneurship, 
            and accelerates technological advancement in the region.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-colors duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
             <motion.div 
               className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 3, repeat: Infinity }}
             />
             <motion.div 
               className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"
               animate={{ scale: [1, 1.3, 1] }}
               transition={{ duration: 4, repeat: Infinity, delay: 1 }}
             />
             
            <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to Innovate?</h3>
            <p className="text-xl mb-6 opacity-90 relative z-10">
              Join our thriving ecosystem of innovators, researchers, and entrepreneurs.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg relative z-10"
            >
              Join Our Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;