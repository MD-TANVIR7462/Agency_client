import React from "react";
import { motion } from "framer-motion";
import { PencilIcon } from "lucide-react";

interface EditContactButtonProps {
  onClick: () => void;
}

export const EditContactButton: React.FC<EditContactButtonProps> = ({
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-[4%] right-[3%] bg-purple-400 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      title="Edit Contact Information"
    >
      <PencilIcon className="w-6 h-6" />
    </motion.button>
  );
};
