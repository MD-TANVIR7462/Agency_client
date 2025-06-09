"use client";
import {  useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import { TechnologyTable } from "@/components/dashboard/EditService/EditTechnology/TechnologyTable";
import { TechnologyForm } from "@/components/dashboard/EditService/EditTechnology/TechnologyFrom";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { TechCardProps } from "@/components/types/TechnoloGyCardProps";
import { createData, deleteData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

const EditTechnologyIndex = ({ technologyData }: { technologyData: TechCardProps[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState<TechCardProps | null>(null);
  const router = useRouter();
  const token = useAppSelector(useCurrentToken);
  const handleStatusChange = async (id: string, status: "active" | "inactive") => {
    const isActive = status === "active";
    const data = { isActive };
    const result = await updateData("technologies/update-technology", id, data ,token as string);
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };
  const handleEdit = (technology: TechCardProps) => {
    setSelectedTechnology(technology);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTechnology(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: Partial<TechCardProps>, id?: string | any) => {
    if (selectedTechnology) {
      const result = await updateData("technologies/update-technology", id, data,token as string);

      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const newTechnology = data as TechCardProps;
      const result = await createData("technologies/create-technology", newTechnology ,token as string);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    const handleDeleteTechnology = async () => {
      const result = await deleteData("technologies/delete-technology", id,token as string);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteTechnology, "Delete this Technology ?");
  };

  return (
    <div className="bg-gray-950  p-0 md:p-4 lg:p-8 max-w-[1900px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <DashSubTitle text="Technology" />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAdd}
          className="primaryButton flex items-center gap-2"
        >
          <Plus size={20} />
          Add Technology
        </motion.button>
      </div>

      <TechnologyTable
        technologies={technologyData}
        onStatusChange={handleStatusChange}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <TechnologyForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technology={selectedTechnology}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditTechnologyIndex;
