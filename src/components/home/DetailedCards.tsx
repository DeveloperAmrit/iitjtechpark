'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GeometricBackground from '../common/GeometricBackground';

const GlobalImpactSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <GeometricBackground className="opacity-40" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            From India, For the world
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Strategic innovation engineered for global leadership
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-teal-500 mx-auto mt-6"
          ></motion.div>
        </div>

        {/* First Content Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" as const, bounce: 0.4 }}
            className="lg:w-1/2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://espeo.eu/wp-content/uploads/2022/04/Green-tech-what-it-is-about-and-why-you-should-keep-an-eye-on-its-development-in-2022.jpg"
              alt="Aerial view of solar panels on a large building"
              className="rounded-3xl w-full h-auto shadow-md"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-left lg:pl-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Building a Greener, Smarter Tomorrow
            </h3>
            <p className="text-gray-600 mb-6">
              From deploying renewables to energy efficiency, we work towards enabling India&apos;s transition to a net-zero future.
            </p>
            <a
              href="#"
              className="text-teal-600 font-medium underline hover:text-teal-800 transition-colors"
            >
              Explore More »
            </a>
          </motion.div>
        </div>

        {/* Second Content Block (Reversed Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2 text-left lg:pr-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Innovation That Includes Everyone
            </h3>
            <p className="text-gray-600 mb-6">
              Scaling affordable, inclusive tech solutions that empower persons with disabilities and the elderly – all designed and built in India.
            </p>
            <a
              href="#"
              className="text-teal-600 font-medium underline hover:text-teal-800 transition-colors"
            >
              Explore More »
            </a>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, type: "spring" as const, bounce: 0.4 }}
             className="lg:w-1/2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-philipp-birmes-830891-scaled.jpg"
              alt="Person using a wheelchair attachment scooter on a paved road"
              className="rounded-3xl w-full h-auto shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;