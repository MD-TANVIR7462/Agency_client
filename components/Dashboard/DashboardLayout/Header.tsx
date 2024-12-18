"use client";

import { Bell, User, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-950 text-white p-4 flex justify-between items-center border-b border-gray-800"
    >
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-800 rounded-full transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div className="hidden md:block">
            <p className="font-medium">Admin User</p>
            <p className="text-sm text-gray-400">admin@example.com</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}