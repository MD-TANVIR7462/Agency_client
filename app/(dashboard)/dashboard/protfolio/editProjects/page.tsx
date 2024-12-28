"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { projectsData } from "@/components/data/projectData";
import { Project } from "@/components/types/Projects";
import { CustomDropdown } from "@/components/dashboard/EditProtfolio/EditProjects/CustomDropdown";
import { ProjectsTable } from "@/components/dashboard/EditProtfolio/EditProjects/ProjectTable";
import { ProjectForm } from "@/components/dashboard/EditProtfolio/EditProjects/ProjectsForm";
import DashSubTitle from "@/components/Shared/DashSubTitle";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const handleAddProject = (data: Partial<Project>) => {
    const newProject = {
      ...data,
      id: Math.max(...projects.map((p) => p.id)) + 1,
    } as Project;

    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };

  const handleEditProject = (data: Partial<Project>) => {
    if (!selectedProject) return;

    const updatedProjects = projects.map((project) =>
      project.id === selectedProject.id ? { ...project, ...data } : project
    );

    setProjects(updatedProjects);
    setIsModalOpen(false);
  };

  const handleView = (project: Project) => {
    window.open(project.link, "_blank");
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  return (
    <div className=" p-0 md:p-4 lg:p-6 max-w-[1900px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <DashSubTitle text="Projects"/>
        <div className="flex gap-3">
          <CustomDropdown currentFilter={filter} onFilterChange={setFilter} />
          <Button onClick={handleAddNew} className="primaryButton">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>
      </div>

      <ProjectsTable
        projects={filteredProjects}
        onView={handleView}
        onEdit={handleEdit}
      />

      <ProjectForm
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={selectedProject ? handleEditProject : handleAddProject}
      />
    </div>
  );
};
export default ProjectsPage;
