'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import GeometricBackground from '@/components/common/GeometricBackground';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <GeometricBackground className="opacity-30" />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Get in <span className="text-orange-600">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Whether you are a startup looking for incubation, an investor seeking opportunities, or simply curious, we&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Information Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 lg:w-2/5 text-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-500">Contact Information</h3>
                <p className="text-gray-300 mb-8">
                  Reach out to our administrative team directly via the following channels.
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-gray-400 mt-1">
                        IIT Jodhpur Tech Park<br />
                        NH 62, Surpura Bypass Rd<br />
                        Karwar, Rajasthan 342037
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Phone className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-gray-400 mt-1">+91 291 280 1000</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Mail className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-gray-400 mt-1">office_tisc@iitj.ac.in</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Clock className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Working Hours</h4>
                      <p className="text-gray-400 mt-1">Mon - Fri: 9:00 AM - 5:30 PM</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                 {/* Decorative element or social links could go here */}
                 
              </div>
            </motion.div>

            {/* Contact Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-10 lg:w-3/5 bg-white"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <Send className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 max-w-md mb-8">
                        Thank you for reaching out to IIT Jodhpur Tech Park. We have received your message and will get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-orange-600 font-semibold hover:text-orange-700 underline"
                    >
                        Send another message
                    </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50 text-gray-900"
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50 text-gray-900"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                   <select 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50 text-gray-900"
                        disabled={isSubmitting}
                   >
                      <option value="">Select a topic</option>
                      <option value="incubate">Incubation Inquiry</option>
                      <option value="invest">Investment Opportunities</option>
                      <option value="partnership">Corporate Partnership</option>
                      <option value="other">General Inquiry</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50 resize-none text-gray-900"
                    placeholder="How can we help you today?"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting} 
                    className={`bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </motion.button>
                </div>
              </form>
              )}
            </motion.div>

          </div>
          
          {/* Map placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
               <div className="text-center">
                 <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                 <p className="text-lg font-medium">Google Maps Embed Placeholder</p>
                 <p className="text-sm">IIT Jodhpur Campus Location</p>
               </div>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
