"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "AI-Powered Analytics",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Smart Home System",
    category: "IoT Solutions",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Healthcare Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export const GalleryGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
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