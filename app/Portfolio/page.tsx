import { Gallery } from "@/components/gallery";
import IndustryExpertise from "@/components/Porfolio/IndustryExpertise";
import ProcessSection from "@/components/Porfolio/ProcessSection";
import SubHero from "@/components/Shared/SubHero";

const Portfolio = () => {
  return (
    <div className="">
      <SubHero
        heroTittle={"Our Portfolio"}
        subHeroTittle={
          " Discover our successful projects and digital innovations that have transformed businesses across industries."
        }
      ></SubHero>
      <Gallery />
      <ProcessSection />
      <IndustryExpertise/>
    </div>
  );
};

export default Portfolio;
