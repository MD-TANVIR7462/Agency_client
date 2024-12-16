"use client";

import { motion } from "framer-motion";
import { ServicesGrid } from "./services-grid";
import Tittle from "../Shared/Tittle";

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      {/* Background Elements */}
      <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tittle tittle={"Transformation Digital Services"} />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Elevate your business with our comprehensive suite of digital
              solutions, designed to drive innovation and accelerate growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <span className="text-start">
            <ServicesGrid />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>
    </section>
  );
};
