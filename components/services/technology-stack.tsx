"use client";

import { motion } from "framer-motion";
import { TechCard } from "./tech-card";
import Tittle from "../Shared/Tittle";
import { initialTechnologies } from "../data/TechnologyData";



export const TechnologyStack = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle="Technology Stack" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Cutting-edge technologies powering your digital success
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {initialTechnologies?.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
