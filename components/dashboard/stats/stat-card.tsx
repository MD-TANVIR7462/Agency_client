"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  color: string;
  index: number;
}

export function StatCard({ title, value, icon: Icon, change, color, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-100 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 ${color}  `} />
        </div>
      </div>
      <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>
        {change}
        <span className="text-gray-400 ml-1">vs last month</span>
      </div>
    </motion.div>
  );
}