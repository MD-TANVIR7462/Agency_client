"use client";

import { Edit, Eye,  } from "lucide-react";
import { Project } from "@/components/types/Projects";
import Link from "next/link";

interface ProjectsTableProps {
  projects: Project[];
  onView: (project: Project) => void;
  onEdit: (project: Project) => void;
}

export function ProjectsTable({
  projects,
  onView,
  onEdit,
}: ProjectsTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Project</th>
            <th className="p-4 text-left text-purple-400">Category</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400/20 hidden sm:block"
                  />
                  <span className="font-medium text-white text-sm truncate" >
                    {project.title}
                  </span>
                </div>
              </td>
              <td className="p-4 text-gray-300 truncate ">{project.category}</td>
              <td className="p-4">
                <select className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Link href={project.link} target="_blank">
                    <button
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </Link>
                  <button
                    onClick={() => onEdit(project)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
