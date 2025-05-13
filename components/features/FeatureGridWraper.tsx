"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureGridWrapperProps {
  children: ReactNode;
  delay?: number;
}

const FeatureGridWrapper = ({ children, delay = 0 }: FeatureGridWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg"
    >
     
      {children}
    </motion.div>
  );
};

export default FeatureGridWrapper;
