"use client";

import { useState } from "react";
import { Service } from "@/components/types/services";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "@/components/data/serciceData";
import { ServiceTable } from "@/components/dashboard/EditService/EditServices/ServiceTable";
import { ServiceForm } from "@/components/dashboard/EditService/EditServices/ServiceFrom";
import { ServiceModal } from "@/components/services/ServiceModal";


export default function EditServicesPage() {
  const [servicesT, setServices] = useState<Service[]>(services);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newServiceData, setNewService] = useState<Service | null>(null);

  const handleStatusChange = (id: string, status: string) => {
    setServices(
      servicesT.map((service) =>
        service.id === id ? { ...service, status } : service
      )
    );
  };

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsDetailsOpen(true);
  };

  const handleAddNew = () => {
    setSelectedService(null);
    setIsFormOpen(true);
  };

  const handleSubmit = (data: Partial<Service>) => {

    if (selectedService) {
      setServices(
        services.map((service) =>
          service.id === selectedService.id ? { ...service, ...data } : service
        )
      );
    } else {
      const newService: Service = {
        // id: `service-1212`,
        icon: Plus, // Default icon, should be updated with proper icon selection
        ...(data as Service),
      };
      setNewService(newService);
    }
    setIsFormOpen(false);
    console.log(newServiceData);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-300">
            Services Management
          </h1>
          <motion.button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-4 py-2 bg-purple-400 text-gray-900 rounded-md hover:bg-purple-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            Add Service
          </motion.button>
        </div>

        <ServiceTable
          services={services}
          onEdit={handleEdit}
          onViewDetails={handleViewDetails}
          onStatusChange={handleStatusChange}
        />

        <ServiceModal
          service={selectedService}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />

        <ServiceForm
          service={selectedService}
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
