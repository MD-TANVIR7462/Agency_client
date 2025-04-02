"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/Shared/Modal";
import { Technology } from "@/components/types/TechnologyDashboard";

interface TechnologyFormProps {
  technology?: Technology | null;
  isOpen: boolean;
  icon?:string;
  onClose: () => void;
  onSubmit: (data: Partial<Technology>) => void;
}

export const TechnologyForm: FC<TechnologyFormProps> = ({
  technology,
  isOpen,
  icon,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<Technology> = {
      name: formData.get("name") as string,
      gradient: formData.get("gradient") as string,
      tech: (formData.get("technologies") as string)
        .split("\n")
        .filter(Boolean),
    };
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={technology ? "Edit Technology" : "Add Technology"}
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={technology?.name}
            className="customInput"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Icon
          </label>
          <input
            type="text"
            name="icon"
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Gradient
          </label>
          <input
            type="text"
            name="gradient"
            defaultValue={technology?.gradient}
            className="customInput"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Technologies (one per line)
          </label>
          <textarea
            name="technologies"
            defaultValue={technology?.tech?.join("\n")}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <motion.button
            type="button"
            onClick={onClose}
            className="secondaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="primaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {technology ? "Update Technology" : "Add Technology"}
          </motion.button>
        </div>
      </motion.form>
    </Modal>
  );
};
