"use client";

import { Bell, User, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

export default function Header() {
  type User = {
    email: string;
    role: string;
    iat?: string;
    exp?: string;
  };
  const user = useAppSelector(useCurrentUser) as User;
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-950  text-white p-4 flex justify-between items-center border-b border-gray-800 sticky  top-0 z-20">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="ms-[30%] sm:ms-[10%] lg:ms-0   w-[60%] sm:w-[80%] lg:w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Search className="absolute left-[32%] sm:left-[12%]  lg:left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-800 rounded-full transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <Link href={"/dashboard/admin"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              title="Edit Banner"
              className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center hover:bg-purple-500">
              <User className="w-6 h-6" />
            </motion.button>
          </Link>
          <div className="hidden md:block">
            <p className="font-medium">{user && user?.role}</p>
            <p className="text-sm text-gray-400">{user && user?.email}</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
