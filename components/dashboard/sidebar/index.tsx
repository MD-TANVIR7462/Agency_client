"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "lucide-react";
import { menuItems } from "@/lib/constants/menu-items";
import { SubmenuItem } from "./submenu-item";
import { ToggleButton } from "./toggle-button";

const sidebarVariants = {
  open: {
    x: 0,
    width: "280px",
    transition: { duration: 0.3 },
  },
  closed: {
    x: "-100%",
    width: "0px",
    transition: { duration: 0.3 },
  },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      <motion.div
        initial="open"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-screen bg-gray-950 text-white z-40 overflow-y-auto"
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8 pt-4">
            <Layout className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold">Dashboard</span>
          </div>

          <nav>
            {menuItems.map((item) => (
              <SubmenuItem
                key={item.title}
                item={item}
                isOpen={openSubmenu === item.title}
                onToggle={() => toggleSubmenu(item.title)}
              />
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}