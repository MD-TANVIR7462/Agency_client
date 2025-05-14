"use client";

import { useState } from "react";
import { Service } from "../types/services";

export const useServiceStates = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return {
    selectedService,
    setSelectedService,
  };
};
