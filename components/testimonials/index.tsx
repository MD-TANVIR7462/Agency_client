"use client";

import { motion } from "framer-motion";
import { TestimonialSlider } from "./testimonial-slider";
import Tittle from "../Shared/Tittle";

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle={"Client Success Stories"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Hear from our clients about their transformative experiences working
            with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};
