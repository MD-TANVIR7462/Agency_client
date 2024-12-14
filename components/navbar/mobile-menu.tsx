"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinks } from "./nav-links";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-full flex-col items-center justify-center p-8">
        <NavLinks vertical />
        <Link
          href="/contact"
          className="mt-8 w-full rounded-full bg-white/10 px-6 py-2 text-center text-sm font-medium text-white backdrop-blur-lg transition-all hover:bg-white/20"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};