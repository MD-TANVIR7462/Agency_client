"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Project } from "@/components/types/Projects";
import { CustomDropdown } from "@/components/dashboard/EditProtfolio/EditProjects/CustomDropdown";
import { ProjectsTable } from "@/components/dashboard/EditProtfolio/EditProjects/ProjectTable";
import { ProjectForm } from "@/components/dashboard/EditProtfolio/EditProjects/ProjectsForm";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

const EditProjectIndex = ({ projectData }: { projectData: Project[] }) => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(projectData);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive"
  >("all");
  const token = useAppSelector(useCurrentToken);
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

  const handleSubmit = async (data: Partial<Project>, id?: string) => {
    if (selectedProject) {
      const result = await updateData(
        "project/update-project",
        id as string,
        data,
        token as string
      );
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const newProject: Project = data as Project;
      const result = await createData(
        "project/create-project",
        newProject,
        token as string
      );
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
    setIsModalOpen(false);
  };

  const handleStatusChange = async (
    status: "active" | "inactive",
    id: string
  ) => {
    const isActive = status === "active";
    const data = { isActive };
    const result = await updateData(
      "project/update-project",
      id,
      data,
      token as string
    );
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleDelete = async (id: string) => {
    const handleDeleteMember = async () => {
      const result = await deleteData(
        "project/delete-project",
        id,
        token as string
      );
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteMember, "Delete the Member ?");
  };
  useEffect(() => {
    const fetchFilteredProjects = async () => {
      try {
        setLoading(true);
        if (filterStatus === "all") {
          setProjects(projectData);
        } else {
          const { data: filteredData } = await getData(
            `project?isActive=${filterStatus === "active"}`
          );
          setProjects(filteredData || []);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProjects();
  }, [filterStatus, projectData]);

  return (
    <div className=" p-0 md:p-4 lg:p-6 max-w-[1900px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <DashSubTitle text="Projects" />
        <div className="flex gap-3">
          <CustomDropdown
            currentFilter={filterStatus}
            onFilterChange={setFilterStatus}
          />
          <Button onClick={handleAddNew} className="primaryButton">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>
      </div>

      <ProjectsTable
        onStatusChange={handleStatusChange}
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProjectForm
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditProjectIndex;
