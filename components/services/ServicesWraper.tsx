"use client";
import React, { useState } from "react";
import { Service } from "../types/services";
import { ServicesGrid } from "./services-grid";
import { ServiceModal } from "./ServiceModal";

export const ServiceGridWraper = ({ serviceData }: { serviceData: Service[] }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <>
      <ServicesGrid onServiceClick={setSelectedService} serviceData={serviceData} />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};
