"use client";

import { useState } from "react";
import { Service } from "@/components/types/services";
import { motion } from "framer-motion";
import { icons, Plus } from "lucide-react";
import { ServiceTable } from "@/components/dashboard/EditService/EditServices/ServiceTable";
import { ServiceForm } from "@/components/dashboard/EditService/EditServices/ServiceFrom";
import { ServiceModal } from "@/components/services/ServiceModal";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { updateData } from "@/server/ServerActions";

export default function EditServiceIndex({
  serviceData,
}: {
  serviceData: Service[];
}) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newServiceData, setNewService] = useState<Service | null>(null);

  const handleStatusChange = (id: string, status: string) => {
    // setServices(servicesData.map((service) => (service._id === id ? { ...service, status } : service)));
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

  const handleSubmit = async (data: Partial<Service>) => {
    if (selectedService) {
      const { title, icon, shortDes, fullDescription, features, technologies } =
        data;
      const newData = {
        title,
        icon,
        shortDes,
        fullDescription,
        features,
        technologies,
      };
      const result = await updateData(
        "service/update-service",
        data?._id,
        newData
      );
      console.log(result);
    } else {
      const newService: Service = data as Service;
      setNewService(newService);
    }
    setIsFormOpen(false);
    console.log(selectedService);
  };

  return (
    <div className=" bg-gray-950 p-0 md:p-4 lg:p-8 max-w-[1900px] mx-auto">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <DashSubTitle text="Services" />
          <motion.button
            onClick={handleAddNew}
            className="flex gap-1 items-center  primaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <Plus className="md:w-5 md:h-5  w-4 h-4" />
            Add Service
          </motion.button>
        </div>

        <ServiceTable
          services={serviceData}
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
