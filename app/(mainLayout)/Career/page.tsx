

import { CareerHero } from "@/components/Career/CareerHero";
import { GallerySection } from "@/components/Career/Gallery/GallerySection";
import { OpenPositions } from "@/components/Career/OpenPositions";
import { WhyJoinUs } from "@/components/Career/WhyJoinUs";
import FAQSection from "@/components/Shared/Faq/FAQSection";
import { getData } from "@/server/ServerActions";



const CareerPage = async() => {
  const hide = false 

  const galleryData = (await getData("gallery"))?.data
  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      <CareerHero />
      <OpenPositions />
      <WhyJoinUs />
      {
        galleryData&& <GallerySection  galleryData={galleryData}/>
      }
      <FAQSection hide={hide} />
    </div>
  );
};

export default CareerPage;
