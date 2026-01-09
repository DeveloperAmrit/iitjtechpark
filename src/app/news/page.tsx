'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import GeometricBackground from '@/components/common/GeometricBackground';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "IIT Jodhpur Tech Park Startup 'AgriSense' Raises $2M Series A",
    category: "Investment",
    date: "January 5, 2026",
    summary: "AgriSense, an incubatee focusing on precision agriculture using IoT sensors, has successfully raised Series A funding led by Major Ventures. The funds will be used to scale operations across Rajasthan and Gujarat.",
    image: "https://media.istockphoto.com/id/2164543732/photo/innovation-technology-businessman-holding-global-network-connection-of-data-global-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=SR-fvAebz7-vgJ8YDgJXJJbjmzHS-TOc7Q_YZep4qQ4="
  },
  {
    id: 2,
    title: "MoU Signed with Tech Giant for AI Research Center",
    category: "Partnership",
    date: "December 28, 2025",
    summary: "A historic Memorandum of Understanding (MoU) was signed today between IIT Jodhpur Tech Park and Global Tech Corp to establish a Center of Excellence for Generative AI. This partnership aims to upskill 500+ students annually.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Innovation Summit 2026 Announced",
    category: "Event",
    date: "December 15, 2025",
    summary: "The annual 'Jodhpur Innovation Summit' dates have been released. Scheduled for March 2026, the event is expected to host over 200 startups, 50 investors, and industry leaders from across the globe.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Startup 'MediBot' Wins National Health Tech Award",
    category: "Awards",
    date: "November 30, 2025",
    summary: "MediBot, a robotics startup incubated at IITJ Tech Park, received the prestigious National Health Tech Award for their autonomous nursing assistant robot, designed to support hospital staff.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "New Maker Lab Facility Open for Students",
    category: "Infrastructure",
    date: "November 12, 2025",
    summary: "A new state-of-the-art Maker Lab equipped with 3D printers, laser cutters, and electronics workstations is now open 24/7 for students and registered startups to rapid-prototype their ideas.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
  }
];

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              News & <span className="text-orange-600">Updates</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              Latest happenings, success stories, and announcements from our ecosystem.
            </motion.p>
          </div>

          <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                   {/* Fallback color if image fails, or proper Next/Image if used in real project. Using img tag for simplicity with external urls */}
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                   <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover relative z-10"
                   />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded">
                      <Tag className="w-3 h-3 mr-1" />
                      {item.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer group-hover:text-orange-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {item.summary}
                  </p>
                  <button className="flex items-center text-orange-600 font-semibold hover:text-orange-700 mt-auto group/btn">
                    Read Full Story 
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden"
          >
             {/* Decorative blob */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-orange-600 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"></div>
             </div>

             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
               <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get the latest highlights from IIT Jodhpur Tech Park delivered directly to your inbox. No spam, we promise.
               </p>
               {isSubmitted ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/10 border border-green-500 rounded-lg p-6 max-w-md mx-auto"
                    >
                        <h3 className="text-xl font-bold text-green-400 mb-2">Thank You for Subscribing!</h3>
                        <p className="text-gray-300">
                            You have been successfully added to our newsletter list. Stay tuned for updates!
                        </p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 text-sm text-green-400 hover:text-green-300 underline"
                        >
                            Subscribe another email
                        </button>
                    </motion.div>
               ) : (
                   <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col gap-4 items-center">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                        className="w-full px-5 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        disabled={isSubmitting}
                      />
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isSubmitting} 
                        className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                            <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribing...
                            </>
                        ) : 'Subscribe'}
                      </motion.button>
                   </form>
               )}
             </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
