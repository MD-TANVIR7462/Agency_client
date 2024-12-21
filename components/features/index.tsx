"use client";

import { motion } from "framer-motion";
import { FeaturesGrid } from "./features-grid";
import { FeatureShowcase } from "./feature-showcase";
import Tittle from "../Shared/Tittle";

export const Features = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute right-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle={"Why Choose SiSCOTEK?"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Experience the perfect blend of innovation, expertise, and
            dedication to your success.
          </p>
        </motion.div>

        <div className="mt-16 space-y-24">
          <FeaturesGrid />
          <FeatureShowcase />
        </div>
      </div>
    </section>
  );
};
