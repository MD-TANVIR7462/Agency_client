"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";

import { TeamMemberDetails } from "@/components/dashboard/EditAbout/EditTeam/TeamMemberDetails";
import { TeamMembersTable } from "@/components/dashboard/EditAbout/EditTeam/TeamMembersTable";
import { TeamMemberForm } from "@/components/dashboard/EditAbout/EditTeam/TeamMemberForm";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { createData, deleteData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";

export default function EditTeamIndex({
  teamData: members,
}: {
  teamData: TeamMember[];
}) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  const handleStatusChange = async (
    id: string,
    status: "active" | "inactive"
  ) => {
    const isActive = status === "active";
    const data = { isActive };
    const result = await updateData("team/update-member", id, data);
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
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

  const handleSubmit = async (data: Partial<TeamMember>, id?: string) => {
    if (selectedMember) {
      
      const result = await updateData("team/update-member", id as string, data);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const newMember: TeamMember = data as TeamMember;
      const result = await createData("team/create-member", newMember);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
    setIsFormOpen(false);
  };

  const handleDelete = async (id: string) => {
    const handleDeleteMember = async () => {
      const result = await deleteData("team/delete-member", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteMember, "Delete the Member ?");
  };

  return (
    <div className="bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <DashSubTitle text="Team" />
          <button
            onClick={handleAddNew}
            className="flex primaryButton items-center">
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
          handleDelete={handleDelete}
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
