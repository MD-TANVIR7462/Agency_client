"use client"
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, }}
      className="group relative overflow-hidden rounded-2xl"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm font-medium text-purple-400">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}