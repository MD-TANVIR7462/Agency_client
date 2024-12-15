import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { TechnologyStack } from "@/components/services/technology-stack";
import { ServicesCTA } from "@/components/services/services-cta";


const ServicePage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
};

export default ServicePage;