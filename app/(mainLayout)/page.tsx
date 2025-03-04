import { Banner } from "@/components/Banner/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import { Banner2 } from "@/components/Banner/Banner2";


export default function Home() {
  return (
    <>
      <main>
        {/* <Banner2 /> */}
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
