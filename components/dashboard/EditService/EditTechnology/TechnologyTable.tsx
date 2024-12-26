import { FC } from "react";

import { motion } from "framer-motion";
import { MoreHorizontal, Edit } from "lucide-react";
import { Technology } from "@/components/types/TechnologyDashboard";

interface TechnologyTableProps {
  technologies: Technology[];
  onEdit: (technology: Technology) => void;
  onViewDetails: (technology: Technology) => void;
  onStatusChange: (id: string, status: "active" | "inactive") => void;
}

export const TechnologyTable: FC<TechnologyTableProps> = ({
  technologies,
  onEdit,
  onViewDetails,
  onStatusChange,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Technology</th>
            <th className="p-4 text-left text-purple-400">Stack</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((technology) => (
            <motion.tr
              key={technology.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-b border-purple-400/20 hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4 text-white">
                <div className="flex items-center gap-2">{technology.name}</div>
              </td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  {technology.tech.map((item: any, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <select
                  className="bg-gray-900 cursor-pointer text-white border border-purple-400/40 rounded px-2 py-1"
                  onChange={(e) =>
                    onStatusChange(
                      technology.id,
                      e.target.value as "active" | "inactive"
                    )
                  }
                  value={technology.status}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <motion.button
                    disabled={true}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onViewDetails(technology)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onEdit(technology)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
