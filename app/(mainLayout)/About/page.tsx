import { Achievements } from "@/components/About/achievements";
import { FeedBack } from "@/components/About/FeedBack";
import { MissionVision } from "@/components/About/mission-vision";
import { OurStory } from "@/components/About/our-story";
import { Stats } from "@/components/About/stats";
import { TeamSection } from "@/components/About/team-section";
import { Values } from "@/components/About/values";
import { Testimonials } from "@/components/testimonials";
import SubHero from "@/components/Shared/SubHero";
import { getData } from "@/server/ServerActions";

const AboutPage = async () => {
  const teamdata = await getData("team?isActive=true");
  const companyStory= (await getData("story"))?.data[0]
 
  
  return (
    <div className="min-h-screen">
      <SubHero
        heroTittle="About Us"
        subHeroTittle="Discover our journey, mission, and the passion driving us forward."
      />
      <Stats {...companyStory}/>
      <OurStory {...companyStory} />
      <MissionVision {...companyStory}/>
      <Values />
      <Achievements />
      <TeamSection teamMembers={teamdata?.data} />
      <Testimonials />
      <FeedBack />
    </div>
  );
};

export default AboutPage;
