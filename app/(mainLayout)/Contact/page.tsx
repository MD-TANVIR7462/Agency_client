import { Stats } from "@/components/About/stats";
import ContactInfo from "@/components/Contact/ContactInfo";
import { ServicesCTA } from "@/components/services/services-cta";
import FAQSection from "@/components/Shared/Faq/FAQSection";
import SubHero from "@/components/Shared/SubHero";
import { getData } from "@/server/ServerActions";

import React from "react";

const ContactPage = async () => {
  const hide = true;
  const companyStory = (await getData("story"))?.data[0];

  return (
    <div>
      <SubHero
        heroTittle="Contact Us"
        subHeroTittle="Your questions and ideas matter — let's start a conversation"
      />
      <Stats {...companyStory} />
      <ContactInfo />
      <FAQSection hide={hide} />
      <ServicesCTA />
    </div>
  );
};

export default ContactPage;
