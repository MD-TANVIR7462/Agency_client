import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  email: string;
  phone: string;
  address: string;
  _id: string;
  isActive?: boolean;
}

interface EditContactFormProps {
  initialData: ContactFormData;
  onSubmit: (data: ContactFormData) => void;
  onClose: () => void;
}

export const EditContactForm: React.FC<EditContactFormProps> = ({ initialData, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-purple-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block customInput"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-purple-300">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block customInput"
          required
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-purple-300">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="mt-1 block customInput"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <motion.button
          type="button"
          onClick={onClose}
          className="secondaryButton"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Cancel
        </motion.button>
        <motion.button type="submit" className="primaryButton" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          Save Changes
        </motion.button>
      </div>
    </motion.form>
  );
};
