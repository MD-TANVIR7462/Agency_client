"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";

import { teamMembers } from "@/components/data/team-data";
import { TeamMemberDetails } from "@/components/dashboard/EditAbout/EditTeam/TeamMemberDetails";
import { TeamMembersTable } from "@/components/dashboard/EditAbout/EditTeam/TeamMembersTable";
import { TeamMemberForm } from "@/components/dashboard/EditAbout/EditTeam/TeamMemberForm";
import DashSubTitle from "@/components/Shared/DashSubTitle";

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
    <div className="bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <DashSubTitle text="Team" />
          <button
            onClick={handleAddNew}
            className="flex primaryButton items-center"
          >
            <Plus className="md:w-5 md:h-5  w-4 h-4" />
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
