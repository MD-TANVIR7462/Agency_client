"use server"
import { Banner } from "@/components/Banner/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import { Banner2 } from "@/components/Banner/Banner2";
import { getData } from "@/lib/ServerActions";
import { TBanner } from "@/components/types/Banner";

const Home = async () => {
  const bannerData = await getData("banner");

  const banner: TBanner = bannerData?.data[0];
  console.log(banner);
  const serviceData = await getData("service");

  //data

  return (
    <>
      <main>
        {banner?.activeBanner === 1 && <Banner bannerData={banner} />}
        {banner?.activeBanner === 2 && <Banner2 bannerData={banner} />}
        <Services serviceData={serviceData.data}/>
        <Features />
        <Gallery />
        <TeamSection />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
