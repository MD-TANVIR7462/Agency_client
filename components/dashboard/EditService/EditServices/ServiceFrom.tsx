"use client";

import { FC } from "react";
import { Service } from "@/components/types/services";
import { motion } from "framer-motion";
import { Modal } from "@/components/Shared/Modal";

interface ServiceFormProps {
  service?: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Service>) => void;
}

export const ServiceForm: FC<ServiceFormProps> = ({
  service,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<Service> = {
      title: formData.get("title") as string,
      icon: formData.get("icon") as string,
      shortDes: formData.get("shortDes") as string,
      fullDescription: formData.get("fullDescription") as string,
      features: (formData.get("features") as string).split("\n"),
      technologies: (formData.get("technologies") as string).split("\n"),
    };

    if (service) {
      const _id = service._id;
      data._id = _id;
    }
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service ? "Edit Service" : "Add Service"}>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
        onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={service?.title}
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
            defaultValue={service?.icon}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Short Description
          </label>
          <input
            type="text"
            name="shortDes"
            defaultValue={service?.shortDes}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Full Description
          </label>
          <textarea
            name="fullDescription"
            defaultValue={service?.fullDescription}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Features (one per line)
          </label>
          <textarea
            name="features"
            defaultValue={service?.features?.join("\n")}
            className="customInput"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Technologies (one per line)
          </label>
          <textarea
            name="technologies"
            defaultValue={service?.technologies?.join("\n")}
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
            whileTap={{ scale: 0.98 }}>
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="primaryButton"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            {service ? "Update Service" : "Add Service"}
          </motion.button>
        </div>
      </motion.form>
    </Modal>
  );
};
