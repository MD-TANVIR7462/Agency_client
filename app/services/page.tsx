"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { TechnologyStack } from "@/components/services/technology-stack";
import { ServicesCTA } from "@/components/services/services-cta";


const ServicePage = () => {
  return (
    <main className="bg-gray-900">
      <ServicesHero />
      <ServicesGrid />
      {/* <ProcessTimeline /> */}
      <TechnologyStack />
      <ServicesCTA />
    </main>
  );
};

export default ServicePage;