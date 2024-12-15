import { Achievements } from "@/components/About/achievements";
import { MissionVision } from "@/components/About/mission-vision";
import { OurStory } from "@/components/About/our-story";
import { Stats } from "@/components/About/stats";
import { TeamSection } from "@/components/About/team-section";
import { Values } from "@/components/About/values";
import { ServicesHero } from "@/components/services/services-hero";
import { Testimonials } from "@/components/testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ServicesHero />
      <Stats />
      <OurStory />
      <MissionVision />
      <Values />
      <Achievements />
      <TeamSection />
      <Testimonials />
    </div>

  );
}