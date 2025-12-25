import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const timelineEvents = [
  {
    year: 'Vision',
    title: 'Nucleating New Age Ventures',
    description: "IIT Jodhpur is setting up an Incubation Centre and Technology Park to nucleate a cluster of new age ventures. The focal theme is AIOT – Artificial Intelligence of Things, where the convergence of AI, IOT, and 5G is ushering in a new era of technology expected to impact all sectors of the economy.",
  },
  {
    year: 'Talent',
    title: 'Integrated Entrepreneurial Immersion',
    description: "IITJ runs relevant B.Tech (EE, CSE) and M.Tech. programmes (Sensors and IOT, Cyber Physical System, Artificial Intelligence) with integrated entrepreneurial immersion opportunities, providing a talented pool of trained manpower for enterprises in the tech park.",
  },
  {
    year: 'R&D Hub',
    title: 'Common Research & Technology Hub',
    description: "A core facility providing access to hardware and software facilities for end-to-end research, prototype development, and pilot production of products for the AIOT space. This includes Electronic Fab, Fabless design facilities, and testing/production facilities for IOT devices.",
  },
  {
    year: 'Collab',
    title: 'Industry-Academia Interface',
    description: "Providing a robust interface for industries to collaborate with faculty and students of IITJ and other research and academic organisations in the country and Jodhpur in particular.",
  },
  {
    year: 'Support',
    title: 'Mentorship & Investment',
    description: "Enabling a vital interface for mentors and investors, including government agencies, angel investors, and venture capitalists, to work closely with MSMEs and start-ups.",
  },
  {
    year: 'Infra',
    title: '100 Acres of Innovation',
    description: "The TECH-PARK on AIOT is coming up over a space of 100 acres, well connected with the airport and all basic amenities. It is designed to host at least 30 companies at a time, with the research facility of IIT Jodhpur as an integral resource.",
  },
  {
    year: 'Growth',
    title: 'Why Jodhpur?',
    description: "Jodhpur is poised to become a specialized growth centre for AIOT due to opportunities in water quality assessment, smart power management for renewables, smart infrastructure, emerging oil & gas industry, and the academic ecosystem of IITJ and AIIMS Jodhpur for healthcare innovation.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden pt-36 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Enabling Innovation Ecosystem: AIOT FAB
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                IIT Jodhpur is setting up an Incubation Centre and Technology Park in its campus
                to nucleate a cluster of new age ventures. The focal theme for the Technology
                Park is AIOT – Artificial Intelligence of Things.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Technology Park under the aegis of an independent section-8 company managed by
                IIT Jodhpur with the financial and technical support of relevant stake-holders
                (Government Agencies, Angel and Venture Investors, Technology Providers).
              </p>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Strategic Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 via-red-200 to-yellow-200 hidden md:block"></div>

              <div className="space-y-12 md:space-y-24">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0">
                      <div className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                        <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-3">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot on the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-red-500 z-10 hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="w-full md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
