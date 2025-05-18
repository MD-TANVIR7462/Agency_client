"use server";
import { Banner } from "@/components/Banner/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import { Banner2 } from "@/components/Banner/Banner2";
import { TBanner } from "@/components/types/Banner";
import { getData } from "@/server/ServerActions";

const Home = async () => {
  const banner = (await getData("banner"))?.data?.[0] as TBanner;
  const teamData = (await getData("team?isActive=true"))?.data;
  const serviceData = (await getData("service?isActive=true"))?.data;

  return (
    <main>
      {banner && banner?.activeBanner === 1 && <Banner bannerData={banner} />}
      {banner && banner?.activeBanner === 2 && <Banner2 bannerData={banner} />}
      {serviceData && <Services serviceData={serviceData} />}
      <Features />
      <Gallery />
      {teamData && <TeamSection teamMembers={teamData} />}
      <Testimonials />
    </main>
  );
};

export default Home;
