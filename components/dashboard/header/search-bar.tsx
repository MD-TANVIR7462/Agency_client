"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 max-w-xl w-full"
    >
      <div className="relative group">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-gray-900/50 rounded-xl py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all border border-gray-800/50 placeholder:text-gray-500"
        />
        <Search className="absolute left-4 top-3 text-gray-500 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
      </div>
    </motion.div>
  );
}