"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { Modal } from "@/components/Shared/Modal";

interface BannerData {
  title1: string;
  title2: string;
  subtext: string;
  imageUrl: string;
}

interface EditBannerFormProps {
  initialData?: BannerData;
  onSubmit: (data: BannerData) => void;
}

export const EditBannerForm = ({
  initialData,
  onSubmit,
}: EditBannerFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<BannerData>(
    initialData || {
      title1: "",
      title2: "",
      subtext: "",
      imageUrl: "",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="z-20 fixed bottom-[4%] right-[3%] bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        title="Edit Banner"
      >
        <Pencil size={24} />
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Banner"
      >
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Title 1
            </label>
            <input
              type="text"
              name="title1"
              maxLength={17}
              value={formData.title1}
              onChange={handleChange}
              className="customInput"
              placeholder="Enter banner title 1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Title 2
            </label>
            <input
              type="text"
              name="title2"
              maxLength={17}
              value={formData.title2}
              onChange={handleChange}
              className="customInput"
              placeholder="Enter banner title 2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Subtext
            </label>
            <textarea
              name="subtext"
              maxLength={190}
              value={formData.subtext}
              onChange={handleChange}
              rows={3}
              className="customInput"
              placeholder="Enter banner subtext"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="customInput"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(false)}
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
              Save Changes
            </motion.button>
          </div>
        </motion.form>
      </Modal>
    </>
  );
};
