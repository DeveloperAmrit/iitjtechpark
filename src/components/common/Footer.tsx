'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import GeometricBackground from './GeometricBackground';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'News & Events', href: '/news' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Address',
      content: 'IIT Jodhpur, NH 62, Surpura Bypass Rd, Karwar, Rajasthan 342037'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      content: '+91-291-280-1100'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'techpark@iitj.ac.in'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  const services = [
    'Startup Incubation',
    'Research & Development',
    'Technology Transfer',
    'Industry Collaboration',
    'Innovation Support',
    'Mentorship Programs'
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 mt-20 text-white relative overflow-hidden"
    >
      <GeometricBackground theme="dark" className="opacity-10" />
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IIT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  IIT Jodhpur <span className="text-orange-500">Tech Park</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fostering innovation and entrepreneurship through cutting-edge research, 
              industry collaboration, and comprehensive startup support.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm font-bold">f</span>
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm font-bold">t</span>
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-sm font-bold">in</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-500">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-500">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-500">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-orange-500 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-white">{info.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} IIT Jodhpur Tech Park. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;