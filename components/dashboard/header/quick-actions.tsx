"use client";

import { Plus, FileText, Upload, Settings } from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  { icon: Plus, label: "New Post" },
  { icon: FileText, label: "Draft" },
  { icon: Upload, label: "Upload" },
  { icon: Settings, label: "Settings" },
];

export function QuickActions() {
  return (
    <div className="flex gap-2">
      {actions.map(({ icon: Icon, label }, index) => (
        <motion.button
          key={label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-2 hover:bg-purple-400/20 rounded-lg transition-colors group flex items-center gap-2 text-sm"
        >
          <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
          <span className="hidden md:inline text-gray-300 group-hover:text-white">
            {label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}