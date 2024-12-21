"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import Tittle from "../Shared/Tittle";
import { Service } from "../types/services";
import { services } from "../data/serciceData";



interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}
export const ServicesGrid = ({ onServiceClick }: ServiceGridProps) => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 ">
      <div className="absolute right-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle={"Our Services"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Comprehensive solutions to drive your digital transformation
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service}   onClick={() => onServiceClick(service)} />
          ))}
        </div>
      </div>
    </section>
  );
};
