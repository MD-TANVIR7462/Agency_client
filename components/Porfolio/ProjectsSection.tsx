"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import TabList from "./TabList";
import Tittle from "../Shared/Tittle";

const projects = {
  web: [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
      title: "Healthcare Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
    },
  ],
  seo: [
    {
      title: "AI-Powered Analytics",
      category: "SEO Optimization",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
      title: "Content Strategy",
      category: "SEO Optimization",
      image:
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800&h=600",
    },
  ],
  graphics: [
    {
      title: "Fintech Dashboard",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
      title: "Smart Home System",
      category: "IoT Solutions",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=600",
    },
  ],
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return Object.values(projects).flat();
    }
    return projects[activeTab as keyof typeof projects] || [];
  };

  return (
    <section className="py-16 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <TabList activeTab={activeTab} onTabChange={setActiveTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {getFilteredProjects().map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
