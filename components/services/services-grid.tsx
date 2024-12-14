"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { Code2, Palette, Globe2, Cpu, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Build scalable solutions with cutting-edge technologies tailored to your unique business needs.",
    gradient: "bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
    gradient: "bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500",
  },
  {
    icon: Globe2,
    title: "Digital Strategy",
    description: "Develop comprehensive digital strategies that align with your business goals and market demands.",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate processes and gain valuable business insights.",
    gradient: "bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive informed business decisions.",
    gradient: "bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect your digital assets with enterprise-grade security solutions and best practices.",
    gradient: "bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute right-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Comprehensive solutions to drive your digital transformation
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};