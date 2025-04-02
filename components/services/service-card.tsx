"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LucideIcon,
  ShieldCheck,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  icon?: LucideIcon | undefined; 

  onClick: () => void;
}

export const ServiceCard = ({ title, shortDescription, icon: Icon, onClick }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg cursor-pointer"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 blur-sm`}
      />
      <div
        className={`absolute -bottom-px inset-x-0 mx-auto h-px w-3/4 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 blur-sm`}
      />

      <div className="relative">
        <div
          className={`mb-6 inline-flex rounded-xl p-3 bg-purple-500/20 text-purple-400`}
        >
          {Icon ? (
            <Icon className="h-6 w-6 " />
          ) : (
            <ShieldCheck className="h-8 w-8" />
          )}
        </div>

        <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{shortDescription}</p>

        <div className="mt-6 flex items-center text-sm font-medium text-white">
          <span className="relative">
            Learn more
            <div
              className={`absolute -bottom-1 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 group-hover:scale-x-100`}
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
