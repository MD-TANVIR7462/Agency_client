import { Banner } from "@/components/Banner/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import { Banner2 } from "@/components/Banner/Banner2";

export default function Home() {
  type bannerActive = {
    banner1: boolean;
    banner2: boolean;
  };
  const bannerActive: bannerActive = {
    banner1: true,
    banner2: false,
  };
  return (
    <>
      <main>
        {bannerActive?.banner1 === true && <Banner />}
        {bannerActive?.banner2 === true && <Banner2 />}
        <Services />
        <Features />
        <Gallery />
        <TeamSection />
        <Testimonials />
      </main>
    </>
  );
}
