"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import TabList from "./TabList";
import { projectsData } from "../data/projectData";



export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return projectsData; // Return all projectsData if the "all" tab is active
    }
    return projectsData.filter((project) => project.category === activeTab); // Filter projects based on the active tab
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
