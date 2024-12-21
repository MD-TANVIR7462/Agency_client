"use client";

import { Bell, User, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2 hover:bg-purple-400/20 rounded-full transition-colors"
      >
        <Bell className="w-6 h-6" />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-purple-400 rounded-full ring-4 ring-gray-950"></span>
      </motion.button>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-gray-900/50 p-1.5 pl-2 pr-3 rounded-xl border border-gray-800/50 cursor-pointer hover:bg-gray-900 transition-colors"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="hidden md:block">
          <p className="font-medium">Admin User</p>
          <p className="text-sm text-gray-400">admin@example.com</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </motion.div>
    </div>
  );
}