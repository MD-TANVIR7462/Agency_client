"use client";

import { useState } from "react";
import { Service } from "@/components/types/services";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ServiceTable } from "@/components/dashboard/EditService/EditServices/ServiceTable";
import { ServiceForm } from "@/components/dashboard/EditService/EditServices/ServiceFrom";
import { ServiceModal } from "@/components/services/ServiceModal";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { createData, deleteData, updateData } from "@/server/ServerActions";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { deleteToast } from "@/lib/deleteToast";

export default function EditServiceIndex({
  serviceData,
}: {
  serviceData: Service[];
}) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const router = useRouter();

  const handleStatusChange = async (
    id: string,
    status: "active" | "inactive"
  ) => {
    const isActive = status === "active";
    const data = { isActive };
    const result = await updateData("service/update-service", id, data);
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const handleViewDetails = async (service: Service) => {
    setSelectedService(service);
    setIsDetailsOpen(true);
  };

  const handleAddNew = () => {
    setSelectedService(null);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    const handleDeleteService = async () => {
      const result = await deleteData("service/delete-service", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteService, "Delete this service ?");
  };

  const handleSubmit = async (data: Partial<Service>, id?: string | any) => {
    if (selectedService) {
      const result = await updateData("service/update-service", id, data);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const newService: Service = data as Service;
      const result = await createData("service/create-service", newService);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
    setIsFormOpen(false);
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
          onDelete={handleDelete}
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
