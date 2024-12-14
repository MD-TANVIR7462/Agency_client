"use client";

import { motion } from "framer-motion";
import { TeamGrid } from "./team-grid";

export const Team = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute right-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Talented professionals dedicated to turning your digital dreams into reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <TeamGrid />
        </motion.div>
      </div>
    </section>
  );
};