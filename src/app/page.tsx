import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StackedCardsSection from '@/components/home/StackedCardsSection';
import StartupMarqueeSection from '@/components/home/LogosMarquee';
import GlobalImpactSection from '@/components/home/DetailedCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
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
