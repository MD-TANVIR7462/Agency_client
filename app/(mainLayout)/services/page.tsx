import { TechnologyStack } from "@/components/services/technology-stack";
import { ServicesCTA } from "@/components/services/services-cta";
import SubHero from "@/components/Shared/SubHero";
import { ServiceGridWraper } from "@/components/services/ServicesWraper";
import { getData } from "@/server/ServerActions";

const ServicePage = async () => {
  const serviceData = await getData("service?isActive=true");
  return (
    <>
      <SubHero
        heroTittle={"Our Services"}
        subHeroTittle={
          "Comprehensive digital solutions tailored to transform your business and drive growth in the modern digital landscape."
        }
      ></SubHero>
     <div className="px-5"> {serviceData&& <ServiceGridWraper serviceData={serviceData?.data} />}</div>
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
};

export default ServicePage;
