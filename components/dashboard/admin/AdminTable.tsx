"use client";
import { FC } from "react";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { Admin } from "@/components/types/Admin";
import { getRole } from "@/lib/logIn_admin_superAdmin_utils/auth";

interface AdminTableProps {
  admins: Admin[];
  onEdit: (admin: Admin) => void;
  onDelete: (admin: Admin) => void;
  onStatusChange: (admin: Admin) => void;
}

const role = getRole();

const AdminTable: FC<AdminTableProps> = ({
  admins,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm ring-1 ring-purple-500/20">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Admin</th>
            <th className="p-4 text-left text-purple-400">Role</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {admins.map((admin) => (
            <tr
              key={admin.id}
              className="hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={admin.avatarUrl || ""}
                      alt={admin.name}
                      fill
                      className="rounded-full object-cover ring-2 ring-purple-400/20"
                    />
                  </div>
                  <div>
                    <span className="font-medium text-white">{admin.name}</span>
                    <p className="text-sm text-gray-400">{admin.email}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-gray-300">{admin.role}</td>
              <td className="p-4">
                <select
                  className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1"
                  onChange={(e) =>
                    onStatusChange({
                      ...admin,
                      status: e.target.value as "active" | "inactive",
                    })
                  }
                  value={admin.status}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(admin)}
                    className={`p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors ${
                     role != "super_admin" ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={role != "super_admin"}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    disabled={role != "super_admin"}
                    onClick={() => onDelete(admin)}
                    className={`p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors ${
                     role != "super_admin" ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
