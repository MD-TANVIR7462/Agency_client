"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Comprehensive digital solutions tailored to transform your business
            and drive growth in the modern digital landscape.
          </p>
          <div className="mt-8">
            <button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3 text-white backdrop-blur-lg transition-all hover:bg-white/20">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
    </section>
  );
};
