import React from 'react';

const GlobalImpactSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From India, For the world
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Strategic innovation engineered for global leadership
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-6"></div>
        </div>

        {/* First Content Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img
              src="https://espeo.eu/wp-content/uploads/2022/04/Green-tech-what-it-is-about-and-why-you-should-keep-an-eye-on-its-development-in-2022.jpg" // Replace with actual aerial solar image
              alt="Aerial view of solar panels on a large building"
              className="rounded-3xl w-full h-auto shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-left lg:pl-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Building a Greener, Smarter Tomorrow
            </h3>
            <p className="text-gray-600 mb-6">
              From deploying renewables to energy efficiency, we work towards enabling India's transition to a net-zero future.
            </p>
            <a
              href="#"
              className="text-teal-600 font-medium underline hover:text-teal-800 transition-colors"
            >
              Explore More »
            </a>
          </div>
        </div>

        {/* Second Content Block (Reversed Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left lg:pr-8">
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
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://www.millenniumomaha.com/wp-content/uploads/2021/01/pexels-philipp-birmes-830891-scaled.jpg" // Replace with actual wheelchair scooter image
              alt="Person using a wheelchair attachment scooter on a paved road"
              className="rounded-3xl w-full h-auto shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;