import { Stats } from "@/components/About/stats";
import ContactInfo from "@/components/Contact/ContactInfo";
import { ServicesCTA } from "@/components/services/services-cta";
import FAQ from "@/components/Shared/Faq/FAQ";
import SubHero from "@/components/Shared/SubHero";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <SubHero heroTittle="Contact Us" />
      <Stats />
      <ContactInfo/>
       <ServicesCTA />
       <FAQ/>
    </div>
  );
};

export default ContactPage;
