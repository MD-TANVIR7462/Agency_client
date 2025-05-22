"use client";

import React, { useState } from "react";
import {
  Plus,
  Briefcase,
  MapPin,
  Clock,
  Trash2,
  ExternalLink,
  UserCheck,
  UserRoundX,
  Linkedin,
  PencilLine,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import DashSubTitle from "@/components/Shared/DashSubTitle";

import { TApplication, ApplicationStatus, TPosition } from "@/components/types/career";
import EmptyState from "@/components/Career/EditPositons/EmptyState";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";
import { AddPositionModal } from "@/components/Career/EditPositons/AddPositionModal";
import { EditPositionModal } from "@/components/Career/EditPositons/EditPositionModal";
import { createData, deleteData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";

export default function EditPositonIndex({ positions }: { positions: TPosition[] }) {
  console.log(positions);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPosition, setEditingPosition] = useState<TPosition | null>(null);
  const router = useRouter();

  const handleAddPosition = async (newPosition: TPosition) => {
    const data = newPosition as TPosition;
    const result = await createData("position/create-position", data);
    console.log(result);
    if (result?.success) {
      SuccessToast(result?.message);
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleEditPosition = async (data: Partial<TPosition>) => {
    const {
      title,
      department,
      location,
      type,
      tags,
      description,
      requirements,
      responsibilities,
      benefits,
      isActive,
      salary,
      _id,
    } = data;

    const newUpdatedData = {
      title,
      department,
      location,
      type,
      tags,
      description,
      requirements,
      responsibilities,
      benefits,
      isActive,
      salary,
    };

    const result = await updateData("position/update-position", _id as string, newUpdatedData);
    if (result.success) {
      SuccessToast(result?.message);
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleDeletePosition = async (id: string) => {
    const handleDeleteTestimonial = async () => {
      const result = await deleteData("position/delete-position", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteTestimonial, "Delete this open position ?");
  };

  const handleToggleStatus = async (id: string, isActive: boolean) => {
    if (isActive === true) {
      const status = {
        isActive: false,
      };
      const result = await updateData("position/update-position", id as string, status);
      if (result.success) {
        SuccessToast("Deactivated successfully");
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const status = {
        isActive: true,
      };
      const result = await updateData("position/update-position", id as string, status);
      if (result.success) {
        SuccessToast("Activated successfully.");
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
  };

  const handleSelectCandidate = async (id: string) => {
    try {
      const result = await updateData("application/select", id, {});
      if (result.success) {
        SuccessToast("Operation Successful");
        router.refresh();
        console.log(result);
      } else {
        ErrorToast(result.message);
      }
    } catch (err) {
      ErrorToast("Something went wrong!");
    }
  };

  const handleRejectCandidate = async (id: string) => {
    try {
      const result = await updateData("application/reject", id, {});
      if (result.success) {
        SuccessToast("Operation Successful");
        router.refresh();
        console.log(result);
      } else {
        ErrorToast(result.message);
      }
    } catch (err) {
      ErrorToast("Something went wrong!");
    }
  };
  const handleDeleteCandidate = (id: string) => {
    const deleteCandidate = async () => {
      const result = await deleteData("application/delete-application", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(deleteCandidate, "Delete this Application ?");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="min-h-screen text-white px-0 py-2  md:p-4 lg:p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <DashSubTitle text="Position" />
            <p className="text-gray-400 mt-2 hidden md:block">Manage job positions and track applications</p>
          </div>
          <button onClick={() => setIsAddModalOpen(true)} className="primaryButton flex items-center">
            <Plus className="md:w-5 md:h-5  w-4 h-4" />
            Add Position
          </button>
        </div>

        {positions.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-8">
            {positions &&
              positions?.map((position) => {
                const status = position?.isActive === true ? "active" : "inactive";
                return (
                  <div
                    key={position._id}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-semibold">{position.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              position.isActive === true
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-3">
                          <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setEditingPosition(position)}
                          className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                        >
                          <PencilLine className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleToggleStatus(position._id as string, position.isActive as boolean)}
                          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            status === "active"
                              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                              : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          }`}
                        >
                          {status === "active" ? "Deactivate" : "Activate"}
                        </button>
                        <button
                          onClick={() => handleDeletePosition(position._id as string)}
                          className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Applications Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Applications
                        </span>
                        <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">
                          {position?.applications?.length}
                        </span>
                      </h4>
                      <div className="overflow-x-auto">
                        {position.applications?.length && position?.applications?.length > 0 ? (
                          <table className="w-full ">
                            <thead>
                              <tr className="text-left border-b border-gray-800">
                                <th className="pb-4 px-4">Name</th>
                                <th className="pb-4 px-4">Email</th>
                                <th className="pb-4 px-4">Phone</th>
                                <th className="pb-4 px-4">Status</th>
                                <th className="pb-4 px-4">Submitted</th>
                                <th className="pb-4 px-4">Resume</th>
                                <th className="pb-4 px-4">Portfolio</th>
                                <th className="pb-4 px-4">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {position?.applications.slice(0, 2).map((app) => {
                                let status;

                                if (app.isRejected) {
                                  status = "rejected";
                                } else if (app.isSelected) {
                                  status = "selected";
                                } else if (app.isPending) {
                                  status = "pending";
                                }
                                else{
                                  status="hold"
                                }

                                return (
                                  <tr
                                    key={app._id}
                                    className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                                  >
                                    <td className="py-4 px-4 font-medium truncate">{app.fullName}</td>
                                    <td className="py-4 px-4 truncate">{app.email}</td>
                                    <td className="py-4 px-4 truncate">{app.phone}</td>
                                    <td className="py-4 px-4">
                                      <StatusBadge status={status as ApplicationStatus} />
                                    </td>
                                    <td className="py-4 px-4">
                                      <div className="flex items-center gap-2 text-gray-400 truncate">
                                        <Calendar className="w-4 h-4" />
                                        <span>{formatDate(app.createdAt as string)}</span>
                                      </div>
                                    </td>
                                    <td className="py-4 px-4">
                                      <Link
                                        href={app.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 flex items-center gap-2 group"
                                      >
                                        Resume
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                      </Link>
                                    </td>
                                    <td className="py-4 px-4">
                                      <Link
                                        href={app.portfolio ? app.portfolio : "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-purple-400 hover:text-purple-300 flex items-center gap-2 group ${
                                          !app.portfolio && "line-through "
                                        }`}
                                      >
                                        Portfolio
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                      </Link>
                                    </td>
                                    <td className="py-4 px-4">
                                      <div className="flex items-center gap-2">
                                        <Link href={app?.linkedIn ? app.linkedIn : ("#" as any)} target="_blank">
                                          <button
                                            disabled={!app?.linkedIn}
                                            className={`p-2 rounded-lg transition-all duration-300  text-blue-400  cursor-pointer ${
                                              !app.linkedIn ? "bg-red-500/20" : "bg-blue-500/20 hover:bg-blue-500/30"
                                            }`}
                                          >
                                            <Linkedin className="w-5 h-5" />
                                          </button>
                                        </Link>
                                        <button
                                          onClick={() => handleSelectCandidate(app?._id as string)}
                                          className={`p-2 rounded-lg transition-all duration-300 ${
                                            app.isSelected === true
                                              ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                          }`}
                                          title={app.isSelected === true ? "Unselect Candidate" : "Select Candidate"}
                                        >
                                          <UserCheck className="w-5 h-5" />
                                        </button>
                                        <button
                                          onClick={() => handleRejectCandidate(app?._id as string)}
                                          className={`p-2 rounded-lg transition-all duration-300 ${
                                            app.isRejected === true
                                              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                          }`}
                                          title={app.isDeleted === true ? "UnReject Candidate" : "Reject Candidate"}
                                        >
                                          <UserRoundX className="w-5 h-5" />
                                        </button>
                                        <button
                                          onClick={() => {
                                            handleDeleteCandidate(app._id as string);
                                          }}
                                          className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                                          title="Delete Application"
                                        >
                                          <Trash2 className="w-5 h-5" />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        ) : (
                          <div className="text-center py-8 bg-gray-900/30 rounded-lg border border-gray-800/50">
                            <p className="text-gray-400">No applications received yet.</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="utilityEnd">
                      {position.applications?.length && position?.applications?.length > 2 ? (
                        <Link href={`/dashboard/career/editPosition/${position._id as string}`}>
                          <button className="primaryButton">See All</button>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <AddPositionModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddPosition} />

      {editingPosition && (
        <EditPositionModal
          isOpen={true}
          onClose={() => setEditingPosition(null)}
          onEdit={handleEditPosition}
          position={editingPosition}
        />
      )}
    </div>
  );
}
