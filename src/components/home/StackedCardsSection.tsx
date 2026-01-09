'use client';

import React, { useRef } from 'react';
import { Building2, Users, Lightbulb, Target, Zap, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import GeometricBackground from '../common/GeometricBackground';
import CardGeometricOverlay from '../common/CardGeometricOverlay';

interface StorySlide {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  backgroundPattern?: string;
}

const storySlides: StorySlide[] = [
  {
    id: 1,
    icon: <Building2 className="h-12 w-12" />,
    title: "Innovation Infrastructure",
    subtitle: "State-of-the-art facilities driving breakthrough research",
    description: "World-class laboratories, research facilities, and collaborative spaces designed to foster breakthrough innovations and cutting-edge research initiatives across multiple disciplines. Our infrastructure serves as the foundation for tomorrow's technological advances.",
    accent: "from-emerald-500 to-teal-600",
    backgroundPattern: "bg-emerald-50"
  },
  {
    id: 2,
    icon: <Users className="h-12 w-12" />,
    title: "Startup Ecosystem",
    subtitle: "Nurturing entrepreneurs and innovative minds",
    description: "Comprehensive incubation programs, mentorship networks, and funding opportunities that transform innovative ideas into successful startup ventures with global potential. We create an environment where entrepreneurship thrives.",
    accent: "from-blue-500 to-indigo-600",
    backgroundPattern: "bg-blue-50"
  },
  {
    id: 3,
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Research Excellence",
    subtitle: "Pioneering discoveries that shape the future",
    description: "Groundbreaking research initiatives across AI, IoT, renewable energy, and sustainable technologies that create meaningful impact and drive technological advancement. Our research today becomes tomorrow's reality.",
    accent: "from-purple-500 to-violet-600",
    backgroundPattern: "bg-purple-50"
  },
  {
    id: 4,
    icon: <Target className="h-12 w-12" />,
    title: "Industry Partnerships",
    subtitle: "Bridging academia and industry innovation",
    description: "Strategic collaborations with leading corporations and government agencies to translate research innovations into real-world solutions and market applications. We connect academic excellence with industry needs.",
    accent: "from-orange-500 to-red-500",
    backgroundPattern: "bg-orange-50"
  },
  {
    id: 5,
    icon: <Zap className="h-12 w-12" />,
    title: "Technology Transfer",
    subtitle: "Accelerating innovation from lab to market",
    description: "Streamlined processes for intellectual property management, technology commercialization, and startup formation that accelerate the journey from lab to market. We make innovation accessible and impactful.",
    accent: "from-teal-500 to-cyan-600",
    backgroundPattern: "bg-teal-50"
  },
  {
    id: 6,
    icon: <Globe className="h-12 w-12" />,
    title: "Global Impact",
    subtitle: "Creating worldwide technological advancement",
    description: "International collaborations and partnerships that extend our research impact globally, contributing to technological advancement and sustainable development worldwide. Our local innovations create global solutions.",
    accent: "from-rose-500 to-pink-600",
    backgroundPattern: "bg-rose-50"
  }
];

const Card = ({ slide, index, progress, range, targetScale }: { slide: StorySlide, index: number, progress: MotionValue<number>, range: number[], targetScale: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className={`relative flex flex-col items-center justify-center w-full max-w-5xl h-[70vh] rounded-3xl p-10 shadow-2xl origin-top border border-gray-200 ${slide.backgroundPattern} overflow-hidden`}
      >
        <GeometricBackground className="opacity-20" />
        <CardGeometricOverlay />
        {/* Background Gradients */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${slide.accent} opacity-10 rounded-full blur-3xl -mr-20 -mt-20`} />
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t ${slide.accent} opacity-10 rounded-full blur-3xl -ml-20 -mb-20`} />

        <div className="relative z-10 text-center max-w-3xl">
          <div className="mb-8 flex justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`p-6 rounded-2xl bg-gradient-to-r ${slide.accent} text-white shadow-xl`}
            >
              {slide.icon}
            </motion.div>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
          >
            {slide.title}
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="text-xl sm:text-2xl text-gray-600 font-medium mb-6"
          >
            {slide.subtitle}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {slide.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

const StackedCardsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-20">
      {storySlides.map((slide, i) => {
        const targetScale = 1 - ( (storySlides.length - i) * 0.05);
        return <Card key={i} index={i} slide={slide} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
      })}
    </div>
  );
};

export default StackedCardsSection;
