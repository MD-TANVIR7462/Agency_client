"use client";

import { Modal } from "@/components/Career/Modal";
import { Project } from "@/components/types/Projects";

import { FC } from "react";


interface ProjectFormProps {
  project?: Project|null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Project>) => void;
}

export const ProjectForm: FC<ProjectFormProps> = ({
  project,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<Project> = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      status: formData.get("status") as "active" | "inactive",
      image: formData.get("image") as string,
      link: formData.get("link") as string,
    };
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project ? "Edit Project" : "Add New Project"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={project?.title}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Category
            </label>
            <select
              name="category"
              defaultValue={project?.category || ""}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white hover:cursor-pointer"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Apps">Web Apps</option>
              <option value="Graphics">Graphics</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Status
          </label>
          <select
            name="status"
            defaultValue={project?.status || "active"}
            className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            defaultValue={project?.image}
            className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Project Link
          </label>
          <input
            type="url"
            name="link"
            defaultValue={project?.link}
            className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            required
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-purple-400/30 text-purple-400 rounded-md hover:bg-purple-400/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-400 text-gray-900 rounded-md hover:bg-purple-500"
          >
            {project ? "Update Project" : "Add Project"}
          </button>
        </div>
      </form>
    </Modal>
  );
};