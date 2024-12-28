"use client";
import { FC, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import { initialTechnologies } from "@/components/data/TechnologyData";
import { Technology } from "@/components/types/TechnologyDashboard";
import { TechnologyTable } from "@/components/dashboard/EditService/EditTechnology/TechnologyTable";
import { TechnologyForm } from "@/components/dashboard/EditService/EditTechnology/TechnologyFrom";
import DashSubTitle from "@/components/Shared/DashSubTitle";

const TechnologyPage: FC = () => {
  const [technologies, setTechnologies] = useState(initialTechnologies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  const handleStatusChange = (id: string, status: "active" | "inactive") => {
    setTechnologies(
      technologies.map((tech) => (tech.id === id ? { ...tech, status } : tech))
    );
  };

  const handleEdit = (technology: Technology) => {
    setSelectedTechnology(technology);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTechnology(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: Partial<Technology>) => {
    if (selectedTechnology) {
      setTechnologies(
        technologies?.map((tech) =>
          tech?.id === selectedTechnology?.id ? { ...tech, ...data } : tech
        )
      );
    } else {
      const newTechnology = {
        ...data,
        id: String(technologies.length + 1),
        status: "active",
      } as Technology;
      setTechnologies([...technologies, newTechnology]);
    }
    setIsModalOpen(false);

    console.log(technologies);
  };

  const handleViewDetails = (technology: Technology) => {
    // Implement view details functionality
    console.log("View details:", technology);
  };

  return (
    <div className="bg-gray-950  p-0 md:p-4 lg:p-8 max-w-[1900px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <DashSubTitle text="Technology"/>
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
        technologies={technologies}
        onStatusChange={handleStatusChange}
        onEdit={handleEdit}
        onViewDetails={handleViewDetails}
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
export default TechnologyPage;
