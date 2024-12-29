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
} from "lucide-react";


import { positions as initialPositions } from "@/components/data/positions"; 
import { applications as initialApplications } from "@/components/data/applications"; 



import Link from "next/link";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import EmptyState from "@/components/Career/EditPositons/EmptyState";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";
import { AddPositionModal } from "@/components/Career/EditPositons/AddPositionModal";
import { Application, ApplicationStatus, Position } from "@/components/types/career";

export default function AdminDashboard() {
  const [positions, setPositions] = useState<Position[]>(initialPositions);
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddPosition = (newPosition: Omit<Position, "id">) => {
    const position: Position = {
      ...newPosition,
      id: `position-${Date.now()}`,
    };
    setPositions([...positions, position]);
  };

  const handleDeletePosition = (id: string) => {
    setPositions(positions.filter((pos) => pos.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setPositions(
      positions.map((pos) =>
        pos.id === id
          ? { ...pos, status: pos.status === "active" ? "inactive" : "active" }
          : pos
      )
    );
  };

  const handleSelectCandidate = (applicationId: string) => {
    setApplications(
      applications.map((app) =>
        app.id === applicationId
          ? {
              ...app,
              status:
                app.status === "pending" || app.status === "rejected"
                  ? "selected"
                  : "pending",
            }
          : app
      )
    );
  };
  const handleRejectCandidate = (applicationId: string) => {
    setApplications(
      applications.map((app) =>
        app.id === applicationId
          ? {
              ...app,
              status:
                app.status === "pending" || app.status === "selected"
                  ? "rejected"
                  : "pending",
            }
          : app
      )
    );
  };

  const getApplicationsForPosition = (positionId: string) => {
    return applications.filter((app) => app.positionId === positionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <DashSubTitle text="Position" />
            <p className="text-gray-400 mt-2">
              Manage job positions and track applications
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="primaryButton flex items-center"
          >
            <Plus className="w-5 h-5" />
            Add Position
          </button>
        </div>

        {positions.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold">
                        {position.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          position.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
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
                      {getApplicationsForPosition(position.id).length}
                    </span>
                  </h4>
                  <div className="overflow-x-auto">
                    {getApplicationsForPosition(position.id).length > 0 ? (
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-gray-800">
                            <th className="pb-4 px-4">Name</th>
                            <th className="pb-4 px-4">Email</th>
                            <th className="pb-4 px-4">Phone</th>
                            <th className="pb-4 px-4">Status</th>
                            <th className="pb-4 px-4">Resume</th>
                            <th className="pb-4 px-4">Portfolio</th>
                            <th className="pb-4 px-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getApplicationsForPosition(position.id).map(
                            (app) => (
                              <tr
                                key={app.id}
                                className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                              >
                                <td className="py-4 px-4 font-medium">
                                  {app.fullName}
                                </td>
                                <td className="py-4 px-4">{app.email}</td>
                                <td className="py-4 px-4">{app.phone}</td>
                                <td className="py-4 px-4">
                                  <StatusBadge status={app.status as ApplicationStatus} />
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
                                    {/* Linkedin */}
                                    <Link href={app.linkedIn} target="_blank">
                                      <button
                                        className={
                                          "p-2 rounded-lg transition-all duration-300 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                                        }
                                      >
                                        <Linkedin className="w-5 h-5" />
                                      </button>
                                    </Link>
                                    {/* Selected */}
                                    <button
                                      onClick={() =>
                                        handleSelectCandidate(app.id)
                                      }
                                      className={`p-2 rounded-lg transition-all duration-300 ${
                                        app.status === "selected"
                                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                      }`}
                                      title={
                                        app.status === "selected"
                                          ? "Unselect Candidate"
                                          : "Select Candidate"
                                      }
                                    >
                                      <UserCheck className="w-5 h-5" />
                                    </button>
                                    {/* Rejected */}
                                    <button
                                      onClick={() =>
                                        handleRejectCandidate(app.id)
                                      }
                                      className={`p-2 rounded-lg transition-all duration-300 ${
                                        app.status === "rejected"
                                          ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                      }`}
                                      title={
                                        app.status === "rejected"
                                          ? "UnReject Candidate"
                                          : "Reject Candidate"
                                      }
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
                            )
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <div className="text-center py-8 bg-gray-900/30 rounded-lg border border-gray-800/50">
                        <p className="text-gray-400">
                          No applications received yet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AddPositionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPosition}
      />
    </div>
  );
}
