import { CareerHero } from "@/components/Career/CareerHero";
import { GallerySection } from "@/components/Career/Gallery/GallerySection";
import { OpenPositions } from "@/components/Career/OpenPositions";
import { WhyJoinUs } from "@/components/Career/WhyJoinUs";
import FAQSection from "@/components/Shared/Faq/FAQSection";
import { getData } from "@/server/ServerActions";

const CareerPage = async () => {
  const hide = false;
  const galleryData = (await getData("gallery?isActive=true"))?.data;
  const positionData = (await getData("position?isActive=true"))?.data;
  return (
    <div className="min-h-screen ">
      <CareerHero />
      {positionData && <OpenPositions positonData={positionData} />}
      <WhyJoinUs />
      {galleryData && <GallerySection galleryData={galleryData} />}
      <FAQSection hide={hide} />
    </div>
  );
};

export default CareerPage;
