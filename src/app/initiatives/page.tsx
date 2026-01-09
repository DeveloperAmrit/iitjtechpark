'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import GeometricBackground from '@/components/common/GeometricBackground';
import { Rocket, Users, Globe, Lightbulb, Target, Award } from 'lucide-react';

const initiatives = [
  {
    icon: <Rocket className="h-8 w-8 text-orange-500" />,
    title: "Deep Tech Acceleration Program",
    description: "A 12-month intensive program designed to support startups building cutting-edge solutions in AI, IoT, and Robotics. Provides mentorship, seed funding up to ₹50 Lakhs, and access to state-of-the-art labs.",
    status: "Applications Open"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Women Entrepreneurship Drive",
    description: "Empowering women founders through dedicated incubation support, networking opportunities, and specialized workshops. Aiming to create 100+ women-led successful enterprises by 2030.",
    status: "Ongoing"
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Student Innovation Fellowship",
    description: "Encouraging student innovators from IIT Jodhpur and regional colleges to transform their academic projects into viable commercial products. Offers a monthly stipend and prototyping grant.",
    status: "Applications Closing Soon"
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: "Sustainability & Green Tech Challenge",
    description: "A grand challenge focused on solving critical environmental issues. Startups working on renewable energy, waste management, and sustainable agriculture are invited to pitch for pilots.",
    status: "Coming Soon"
  },
  {
    icon: <Target className="h-8 w-8 text-red-500" />,
    title: "Defense Tech Cohort",
    description: "Collaborating with defense agencies to develop indigenous technologies for national security. Focus areas include drones, cybersecurity, and advanced materials.",
    status: "Invite Only"
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: "Corporate Innovation Bridge",
    description: "Connecting startups with large corporations for paid pilots, co-development, and strategic investment opportunities. Bridging the gap between agile innovation and market scale.",
    status: "Active"
  }
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Our <span className="text-orange-600">Initiatives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
          >
            Fostering a culture of innovation through targeted programs designed for startups, students, and researchers.
          </motion.p>
        </div>

        {/* Initiatives Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
              >
                <div className="p-8 flex-grow">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                  >
                    {initiative.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full 
                    ${initiative.status === 'Applications Open' ? 'bg-green-100 text-green-800' : 
                      initiative.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      initiative.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-200 text-gray-600'}`}>
                    {initiative.status}
                  </span>
                  <button className="text-orange-600 font-semibold text-sm hover:text-orange-800 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                    Learn More &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-xl p-8 sm:p-12 text-white relative overflow-hidden"
          >
           {/* Decorative bg circle */}
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
           <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
           
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Have an Idea?</h2>
              <p className="text-lg text-orange-100 mb-8">
                We are always looking for the next big breakthrough. If you have a startup idea or research proposal, reach out to us.
              </p>
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
