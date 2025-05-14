"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import TabList from "./TabList";
import MotionWraper from "../Shared/MotionWraper";
import { Project } from "../types/Projects";
import { getData } from "@/lib/ServerActions";
import Loader from "../Shared/Loader";

export default function ProjectsSection({ data }: { data: Project[] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState<Project[]>(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchFilteredProjects = async () => {
      setIsLoading(true);
      if (activeTab === "all") {
        if (isMounted) {
          setProjects(data);
          setIsLoading(false);
        }
        return;
      }

      try {
        const response = await getData(`project?category=${activeTab}`);
        if (isMounted) {
          setProjects(response?.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchFilteredProjects();

    return () => {
      isMounted = false;
    };
  }, [activeTab, data]);

  return (
    <section className="py-16 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <TabList activeTab={activeTab} onTabChange={setActiveTab} />
        {isLoading ? (
          <div className="flex items-center justify-center text-white mt-[15%]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <MotionWraper
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project._id || index} project={project} index={index} />
              ))}
            </MotionWraper>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
