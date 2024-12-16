import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={imageUrl}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};