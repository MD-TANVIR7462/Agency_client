"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface MotionWraperProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const MotionWraper = ({
  children,
  delay = 0,
  className,
  ...motionProps
}: MotionWraperProps) => {
  return (
    <motion.div
      transition={{ delay }}
      className={clsx( className)}
      {...motionProps}>
      {children}
    </motion.div>
  );
};

export default MotionWraper;
