"use client";

import { motion } from "framer-motion";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { QuickActions } from "./quick-actions";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-950/50 backdrop-blur-xl text-white p-4 flex flex-col md:flex-row gap-4 items-center border-b border-gray-800/50 sticky top-0 z-30"
    >
      <SearchBar />
      <QuickActions />
      <UserMenu />
    </motion.header>
  );
}