import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Services />
        <Features />
        <Gallery />
        <TeamSection />
        <Testimonials />
   
      </main>
    </>
  );
}
