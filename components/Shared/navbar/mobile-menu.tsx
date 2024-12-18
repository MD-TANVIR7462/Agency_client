// MobileMenu.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  useEffect(() => {
    // Disable scroll when the menu is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scroll when the menu is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-lg md:hidden"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-full flex-col items-center justify-between p-6">
        {/* Close Button */}
        <div className="w-full flex justify-end">
          <button
            className="text-white p-2 transition hover:text-gray-300"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <NavLinks onClose={onClose} vertical />
        </div>

        {/* Contact Us */}
        <Link
          href="/Contact"
          className="w-full rounded-full bg-white/10 px-6 py-2 text-center text-sm font-medium text-white backdrop-blur-lg transition-all hover:bg-white/20"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};
