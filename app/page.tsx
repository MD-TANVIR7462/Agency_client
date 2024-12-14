
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";



export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Services />
        <Features />
        <Gallery />
        <Team />
        <Testimonials />
      </main>
    </>
  );
}