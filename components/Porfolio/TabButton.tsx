"use client"
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TabButtonProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ label, icon: Icon, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center space-x-2 rounded-xl px-6 py-3 transition-all ${
        isActive ? "text-purple-400" : "text-gray-400 hover:text-purple-400"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-xl border-2 border-purple-400"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}