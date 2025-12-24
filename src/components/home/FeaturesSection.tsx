import React from 'react';
import { Lightbulb, Users, Target, Zap } from 'lucide-react';

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">IIT Jodhpur Tech Park</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive ecosystem that nurtures innovation, supports entrepreneurship, 
            and accelerates technological advancement in the region.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
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
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join our thriving ecosystem of innovators, researchers, and entrepreneurs.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;