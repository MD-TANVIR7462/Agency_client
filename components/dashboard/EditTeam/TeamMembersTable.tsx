"use client";

import { FC } from "react";
import { MoreHorizontal, Edit } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";


interface TeamMembersTableProps {
  members: TeamMember[];
  onEdit: (member: TeamMember) => void;
  onViewDetails: (member: TeamMember) => void;
  onStatusChange: (member: TeamMember) => void;
}

export const TeamMembersTable: FC<TeamMembersTableProps> = ({
  members,
  onEdit,
  onViewDetails,
  onStatusChange,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Member</th>
            <th className="p-4 text-left text-purple-400">Role</th>
            <th className="p-4 text-left text-purple-400">Team</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {members.map((member) => (
            <tr 
              key={member.name} 
              className="hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400/20"
                  />
                  <span className="font-medium text-white">{member.name}</span>
                </div>
              </td>
              <td className="p-4 text-gray-300">{member.role}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-1">
                  {member.team.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-full bg-purple-400/10 text-purple-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <select
                  className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1"
                  onChange={(e) => onStatusChange({ ...member, status: e.target.value as "active" | "inactive" })}
                  defaultValue={member.status}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onViewDetails(member)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onEdit(member)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
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
};