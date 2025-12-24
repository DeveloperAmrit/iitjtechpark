'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Building2, Users, Lightbulb, Target, Zap, Globe } from 'lucide-react';

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
    backgroundPattern: "bg-gradient-to-br from-emerald-50 to-white"
  },
  {
    id: 2,
    icon: <Users className="h-12 w-12" />,
    title: "Startup Ecosystem",
    subtitle: "Nurturing entrepreneurs and innovative minds",
    description: "Comprehensive incubation programs, mentorship networks, and funding opportunities that transform innovative ideas into successful startup ventures with global potential. We create an environment where entrepreneurship thrives.",
    accent: "from-blue-500 to-indigo-600",
    backgroundPattern: "bg-gradient-to-br from-blue-50 to-white"
  },
  {
    id: 3,
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Research Excellence",
    subtitle: "Pioneering discoveries that shape the future",
    description: "Groundbreaking research initiatives across AI, IoT, renewable energy, and sustainable technologies that create meaningful impact and drive technological advancement. Our research today becomes tomorrow's reality.",
    accent: "from-purple-500 to-violet-600",
    backgroundPattern: "bg-gradient-to-br from-purple-50 to-white"
  },
  {
    id: 4,
    icon: <Target className="h-12 w-12" />,
    title: "Industry Partnerships",
    subtitle: "Bridging academia and industry innovation",
    description: "Strategic collaborations with leading corporations and government agencies to translate research innovations into real-world solutions and market applications. We connect academic excellence with industry needs.",
    accent: "from-orange-500 to-red-500",
    backgroundPattern: "bg-gradient-to-br from-orange-50 to-white"
  },
  {
    id: 5,
    icon: <Zap className="h-12 w-12" />,
    title: "Technology Transfer",
    subtitle: "Accelerating innovation from lab to market",
    description: "Streamlined processes for intellectual property management, technology commercialization, and startup formation that accelerate the journey from lab to market. We make innovation accessible and impactful.",
    accent: "from-teal-500 to-cyan-600",
    backgroundPattern: "bg-gradient-to-br from-teal-50 to-white"
  },
  {
    id: 6,
    icon: <Globe className="h-12 w-12" />,
    title: "Global Impact",
    subtitle: "Creating worldwide technological advancement",
    description: "International collaborations and partnerships that extend our research impact globally, contributing to technological advancement and sustainable development worldwide. Our local innovations create global solutions.",
    accent: "from-rose-500 to-pink-600",
    backgroundPattern: "bg-gradient-to-br from-rose-50 to-white"
  }
];

interface SlideContentProps {
  slide: StorySlide;
  index: number;
  currentGlobalProgress: number; // This is a float (e.g., 1.5)
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, index, currentGlobalProgress }) => {
  // Calculate the distance of this slide from the current scroll position
  // 0 means it's the active slide. 1 means it's one full slide away.
  const offset = currentGlobalProgress - index;
  
  // Create a bell curve for visibility. 
  // We only want to render if we are within range -1 to 1.
  const isVisible = Math.abs(offset) < 1;
  
  // Calculate opacity: 1 when offset is 0, fading to 0 as offset approaches 1 or -1
  const opacity = Math.max(0, 1 - Math.abs(offset));

  // Visual effects
  const translateY = offset * 50; // Moves slightly up/down as you scroll
  const scale = 1 - (Math.abs(offset) * 0.1); // Shrinks slightly when not active

  // If not visible, we can return null or keep it hidden for performance
  if (!isVisible) return null;

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-100 ease-out flex items-center justify-center ${slide.backgroundPattern} ${Math.abs(offset) > 0.1 ? 'pointer-events-none' : ''}`}
      style={{
        opacity,
        // Using translate3d forces hardware acceleration for smoother animation
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        zIndex: Math.round((1 - Math.abs(offset)) * 10) // Higher z-index for the active slide
      }}
    >
      <div className="h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon with gradient background */}
          <div className="mb-8 flex justify-center">
            <div 
              className={`p-6 rounded-2xl bg-gradient-to-r ${slide.accent} text-white shadow-2xl transform transition-transform duration-500`}
              style={{ transform: `scale(${scale})` }}
            >
              {slide.icon}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {slide.description}
            </p>

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="flex gap-2">
                {storySlides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === index
                        ? `w-12 bg-gradient-to-r ${slide.accent}` 
                        : 'w-3 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {slide.id} / {storySlides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollStory: React.FC = () => {
  const [currentSlideFloat, setCurrentSlideFloat] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate the start and end of the scrollable area
      const start = containerTop;
      const end = containerTop + containerHeight - windowHeight;

      // Calculate raw progress (0 to 1)
      let progress = (scrollY - start) / (end - start);
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Convert progress to a specific slide index (float)
      // e.g., if we have 6 slides, range is 0 to 5
      const slideIndex = progress * (storySlides.length - 1);

      setCurrentSlideFloat(slideIndex);
    };

    // Use standard requestAnimationFrame loop for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call to set state correctly on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${storySlides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Render Slides */}
        {storySlides.map((slide, index) => (
          <SlideContent
            key={slide.id}
            slide={slide}
            index={index}
            currentGlobalProgress={currentSlideFloat}
          />
        ))}

        {/* FIXED: Added z-50 to ensure icon sits on top of the slide backgrounds */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-50"
          style={{ opacity: currentSlideFloat > 0.5 ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;