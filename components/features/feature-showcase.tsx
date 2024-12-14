"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Advanced Analytics Dashboard",
  "Real-time Collaboration Tools",
  "AI-powered Insights",
  "Custom Integration Options",
  "Scalable Infrastructure",
  "Premium Support Package",
];

export const FeatureShowcase = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Feature Showcase"
            width={800}
            height={600}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <h3 className="text-3xl font-bold text-white">Enterprise Solutions</h3>
        <p className="mt-4 text-lg text-gray-400">
          Unlock the full potential of your business with our comprehensive enterprise solutions, designed to scale with your needs.
        </p>

        <ul className="mt-8 space-y-4">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">{benefit}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8">
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white transition-opacity hover:opacity-90">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};