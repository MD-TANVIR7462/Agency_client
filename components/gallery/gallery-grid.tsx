"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "../data/projectData";



export const GalleryGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData?.map((project, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-2xl"
          whileHover={{ y: -5 }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="transform object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-medium text-purple-400">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};