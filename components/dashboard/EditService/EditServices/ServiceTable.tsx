"use client";

import { FC } from "react";
import { Service } from "@/components/types/services";
import { motion } from "framer-motion";
import { Edit, Eye, Trash2 } from "lucide-react";

interface ServiceTableProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onViewDetails: (service: Service) => void;
  onStatusChange: (id: string, status: "active" | "inactive") => void;
  onDelete: (id: string) => void;
}

export const ServiceTable: FC<ServiceTableProps> = ({ services, onEdit, onViewDetails, onStatusChange, onDelete }) => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm ring-1 ring-purple-500/20">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Service</th>
            <th className="p-4 text-left text-purple-400">Description</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {services?.map((service) => {
            const servieceStatus = service?.isActive === true ? "active" : "inactive";
            return (
              <motion.tr
                key={service._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=" hover:bg-purple-400/5 transition-colors duration-150"
              >
                <td className="p-4 text-white">
                  <div className="flex items-center gap-2 truncate">{service?.title}</div>
                </td>
                <td className="p-4 text-gray-300 truncate">{service?.shortDes}</td>
                <td className="p-4">
                  <select
                    className="bg-gray-900 cursor-pointer text-white border border-purple-400/40 rounded px-2 py-1"
                    onChange={(e) => onStatusChange(service?._id as string, e.target.value as "active" | "inactive")}
                    defaultValue={servieceStatus}
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
                      onClick={() => onViewDetails(service)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onEdit(service)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onDelete(service?._id)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full"
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
