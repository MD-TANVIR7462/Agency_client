"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";
import { TeamMembersTable } from "@/components/dashboard/EditTeam/TeamMembersTable";
import { TeamMemberDetails } from "@/components/dashboard/EditTeam/TeamMemberDetails";
import { TeamMemberForm } from "@/components/dashboard/EditTeam/TeamMemberForm";
import { teamMembers } from "@/components/data/team-data";

export default function EditTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(teamMembers);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleStatusChange = (member: TeamMember) => {
    setMembers(
      members.map((m) =>
        m.name === member.name
          ? { ...m, status: m.status === "active" ? "inactive" : "active" }
          : m
      )
    );
  };

  const handleEdit = (member: TeamMember) => {
    setSelectedMember(member);
    setIsFormOpen(true);
  };

  const handleViewDetails = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDetailsOpen(true);
  };

  const handleAddNew = () => {
    setSelectedMember(null);
    setIsFormOpen(true);
  };

  const handleSubmit = (data: Partial<TeamMember>) => {
    if (selectedMember) {
      setMembers(
        members.map((member) =>
          member.name === selectedMember.name ? { ...member, ...data } : member
        )
      );
    } else {
      const newMember = {
        ...data,
        status: "active",
      } as TeamMember;
      setMembers([...members, newMember]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-300">
            Team Members Management
          </h1>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-4 py-2 bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Member
          </button>
        </div>
        <TeamMemberDetails
          member={selectedMember}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />
        <TeamMembersTable
          members={members}
          onEdit={handleEdit}
          onViewDetails={handleViewDetails}
          onStatusChange={handleStatusChange}
        />

        <TeamMemberForm
          member={selectedMember}
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
