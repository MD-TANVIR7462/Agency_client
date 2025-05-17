import IndustryExpertise from "@/components/Porfolio/IndustryExpertise";
import ProcessSection2 from "@/components/Porfolio/ProcessSection";
import ProjectsSection from "@/components/Porfolio/ProjectsSection";
import FAQSection from "@/components/Shared/Faq/FAQSection";
import SubHero from "@/components/Shared/SubHero";
import { getData } from "@/server/ServerActions";

const Portfolio = async () => {
  const projectData = await getData("project?isActive=true");
  const hide = false;
  return (
    <div>
      <SubHero
        heroTittle={"Our Portfolio"}
        subHeroTittle={
          " Discover our successful projects and digital innovations that have transformed businesses across industries."
        }
      />
      <span>
        <ProjectsSection {...projectData} />
        <ProcessSection2 />
        <IndustryExpertise />
        <FAQSection hide={hide} />
      </span>
    </div>
  );
};

export default Portfolio;
