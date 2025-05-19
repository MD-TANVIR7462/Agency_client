"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import TabList from "./TabList";
import MotionWraper from "../Shared/MotionWraper";
import { Project } from "../types/Projects";
import { getData } from "@/server/ServerActions";
import EmptyProject from "./EmptyProject";

const ProjectCardSkeleton = () => (
  <div className="bg-gray-900/80 dark:bg-gray-800/80 rounded-xl overflow-hidden h-[320px] border border-gray-800 dark:border-gray-700 shadow-lg animate-pulse">
    <div className="h-40 bg-gradient-to-r from-purple-900/30 via-gray-800/50 to-gray-900/30 dark:from-purple-900/20 dark:via-gray-800/40 dark:to-gray-900/20"></div>
    <div className="p-5 space-y-3">
      <div className="h-5 bg-gradient-to-r from-purple-800/40 to-purple-900/30 rounded-full w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full w-full"></div>
        <div className="h-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full w-5/6"></div>
        <div className="h-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full w-2/3"></div>
      </div>
      <div className="flex gap-2 pt-4">
        <div className="h-4 bg-gray-800 rounded-full w-16"></div>
        <div className="h-4 bg-gray-800 rounded-full w-12"></div>
      </div>
    </div>
  </div>
);
export default function ProjectsSection({ data }: { data: Project[] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(data);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const projectsToShow = useMemo(() => {
    if (activeTab === "all") return data;
    return filteredProjects;
  }, [activeTab, data, filteredProjects]);

  const fetchFilteredProjects = useCallback(async () => {
    if (activeTab === "all") {
      setFilteredProjects(data);
      return;
    }

    setIsLoading(true);
    try {
      const response = await getData(`project?isActive=true&category=${activeTab}`);
      setFilteredProjects(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFilteredProjects();
    }, 300);

    return () => clearTimeout(timer);
  }, [fetchFilteredProjects]);

  return (
    <section className="py-16 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <TabList activeTab={activeTab} onTabChange={handleTabChange} />

        <AnimatePresence mode="wait">
          <MotionWraper
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {isLoading ? (
              <>
                {Array.from({ length: 3 }).map((_, index) => (
                  <ProjectCardSkeleton key={`skeleton-${index}`} />
                ))}
              </>
            ) : projectsToShow?.length > 0 ? (
              projectsToShow.map((project, index) => (
                <ProjectCard key={project._id || index} project={project} index={index} />
              ))
            ) : (
              <EmptyProject tabName={activeTab} />
            )}
          </MotionWraper>
        </AnimatePresence>
      </div>
    </section>
  );
}
