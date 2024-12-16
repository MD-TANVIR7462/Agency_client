import { CareerHero } from '@/components/Career/CareerHero';
import { GallerySection } from '@/components/Career/Gallery/GallerySection';
import { OpenPositions } from '@/components/Career/OpenPositions';
import { WhyJoinUs } from '@/components/Career/WhyJoinUs';
import FAQSection from '@/components/Shared/Faq/FAQSection';
import React from 'react';

const CareerPage = () => {
   return (
      <div className="min-h-screen bg-[#1A1A2E]">
      <CareerHero />
      <OpenPositions />
      <WhyJoinUs />
      <GallerySection />
      <FAQSection/>
    </div>
   );
};

export default CareerPage;