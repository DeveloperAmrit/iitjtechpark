import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StackedCardsSection from '@/components/home/StackedCardsSection';
import StartupMarqueeSection from '@/components/home/LogosMarquee';
import GlobalImpactSection from '@/components/home/DetailedCards';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'IIT Jodhpur Tech Park',
    url: 'https://iitjtechpark.com',
    logo: 'https://iitjtechpark.com/logo.png',
    description: 'Fostering innovation, entrepreneurship, and technological advancement.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NH 62, Surpura Bypass Rd',
      addressLocality: 'Jodhpur',
      addressRegion: 'Rajasthan',
      postalCode: '342030',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/school/iit-jodhpur/',
      'https://twitter.com/iitjodhpur',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StackedCardsSection />
        <StartupMarqueeSection />
        <GlobalImpactSection />
      </main>
      <Footer />
    </div>
  );
}
