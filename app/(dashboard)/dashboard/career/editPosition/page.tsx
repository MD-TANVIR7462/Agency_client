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

import { positions as initialPositions } from "@/components/data/positions";
import { applications as initialApplications } from "@/components/data/applications";

import Link from "next/link";
import DashSubTitle from "@/components/Shared/DashSubTitle";

import { Application, ApplicationStatus, Position, TPosition } from "@/components/types/career";
import EmptyState from "@/components/Career/EditPositons/EmptyState";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";
import { AddPositionModal } from "@/components/Career/EditPositons/AddPositionModal";
import { EditPositionModal } from "@/components/Career/EditPositons/EditPositionModal";
import { createData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [positions, setPositions] = useState<Position[]>(initialPositions);
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPosition, setEditingPosition] = useState<Position | null>(null);
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

  const handleEditPosition = (updatedPosition: Partial<Position>) => {
    console.log(updatedPosition);
  };

  const handleDeletePosition = (id: string) => {
    setPositions(positions.filter((pos) => pos.id !== id));
  };

  const handleToggleStatus = (id: string) => {};

  const handleSelectCandidate = (applicationId: string) => {};

  const handleRejectCandidate = (applicationId: string) => {};

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

  const getApplicationsForPosition = (positionId: string) => {
    const allApplications = applications.filter((app) => app.positionId === positionId);
    const sliceApplication = allApplications.slice(0, 2);
    const applicationData = {
      allApplications,
      sliceApplication,
    };
    return applicationData;
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
            {positions?.map((position) => (
              <div
                key={position.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold">{position.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          position.status === "active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {position.status}
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
                      onClick={() => handleToggleStatus(position.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        position.status === "active"
                          ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                          : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                      }`}
                    >
                      {position.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDeletePosition(position.id)}
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
                      {getApplicationsForPosition(position.id).allApplications.length}
                    </span>
                  </h4>
                  <div className="overflow-x-auto">
                    {getApplicationsForPosition(position.id).sliceApplication.length > 0 &&
                    getApplicationsForPosition(position.id).sliceApplication.length < 3 ? (
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
                          {getApplicationsForPosition(position.id).sliceApplication?.map((app) => (
                            <tr
                              key={app.id}
                              className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                            >
                              <td className="py-4 px-4 font-medium truncate">{app.fullName}</td>
                              <td className="py-4 px-4 truncate">{app.email}</td>
                              <td className="py-4 px-4 truncate">{app.phone}</td>
                              <td className="py-4 px-4">
                                <StatusBadge status={app.status as ApplicationStatus} />
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2 text-gray-400 truncate">
                                  <Calendar className="w-4 h-4" />
                                  <span>{formatDate(app.submittedAt)}</span>
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
                                  href={app.portfolio}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-400 hover:text-purple-300 flex items-center gap-2 group"
                                >
                                  Portfolio
                                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <Link href={app.linkedIn} target="_blank">
                                    <button
                                      className={
                                        "p-2 rounded-lg transition-all duration-300 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                                      }
                                    >
                                      <Linkedin className="w-5 h-5" />
                                    </button>
                                  </Link>
                                  <button
                                    onClick={() => handleSelectCandidate(app.id)}
                                    className={`p-2 rounded-lg transition-all duration-300 ${
                                      app.status === "selected"
                                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                    }`}
                                    title={app.status === "selected" ? "Unselect Candidate" : "Select Candidate"}
                                  >
                                    <UserCheck className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={() => handleRejectCandidate(app.id)}
                                    className={`p-2 rounded-lg transition-all duration-300 ${
                                      app.status === "rejected"
                                        ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                    }`}
                                    title={app.status === "rejected" ? "UnReject Candidate" : "Reject Candidate"}
                                  >
                                    <UserRoundX className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      // Handle delete application
                                    }}
                                    className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                                    title="Delete Application"
                                  >
                                    <Trash2 className="w-5 h-5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
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
                  {getApplicationsForPosition(position.id).allApplications.length > 2 && (
                    <Link href={`/dashboard/career/editPosition/${position.id}`}>
                      <button className="primaryButton">See All</button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
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
