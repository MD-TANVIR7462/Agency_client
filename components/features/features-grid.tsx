"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Clock, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance and rapid development cycles for quick time-to-market.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your valuable digital assets.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert professionals committed to your project's success.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure smooth operations.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Strategic approach focused on achieving your business objectives.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Cutting-edge technologies and creative solutions for modern challenges.",
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <Icon className="mb-4 h-8 w-8 text-purple-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};