"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "@/components/types/menu";


interface SubmenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function SubmenuItem({ item: { title, icon: Icon, path, submenu }, isOpen, onToggle }: SubmenuItemProps) {
  const pathname = usePathname();

  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
          pathname.startsWith(path)
            ? "bg-purple-400 text-white"
            : "hover:bg-gray-800"
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && submenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {submenu.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={`block pl-10 py-2 text-sm rounded-md transition-colors ${
                  pathname === subItem.path
                    ? "bg-purple-400 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                {subItem.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}