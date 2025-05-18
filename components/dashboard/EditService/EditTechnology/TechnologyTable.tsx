import { FC } from "react";

import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import { TechCardProps } from "@/components/types/TechnoloGyCardProps";

interface TechnologyTableProps {
  technologies: TechCardProps[];
  onEdit: (technology: TechCardProps) => void;
  onDelete: (technologyId: string) => void;
  onStatusChange: (id: string, status: "active" | "inactive") => void;
}

export const TechnologyTable: FC<TechnologyTableProps> = ({ technologies, onEdit, onDelete, onStatusChange }) => {

  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm ring-1 ring-purple-500/20">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Technology</th>
            <th className="p-4 text-left text-purple-400">Stack</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {technologies?.map((technology) => {
            const status = technology?.isActive === true ? "active" : "inactive";
            return (
              <motion.tr
                key={technology._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=" hover:bg-purple-400/5 transition-colors duration-150"
              >
                <td className="p-4 text-white">
                  <div className="flex items-center gap-2 truncate">{technology.name}</div>
                </td>
                <td className="p-4 truncate">
                  <div className="flex gap-2 truncate">
                    {technology?.tech.map((item: any, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <select
                    className="bg-gray-900 cursor-pointer text-white border border-purple-400/40 rounded px-2 py-1"
                    onChange={(e) => onStatusChange(technology?._id as string, e.target.value as "active" | "inactive")}
                    value={status}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onEdit(technology)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full cursor-pointer"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onDelete(technology?._id as string)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
