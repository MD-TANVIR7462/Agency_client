"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ExternalLink, Linkedin, Trash2, UserCheck, UserRoundX } from "lucide-react";
import { applications as initialApplications } from "@/components/data/applications";

import { Application, ApplicationStatus } from "@/components/types/career";
import FilterButton from "./FilterButton";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";

interface ApplicationsTableProps {
  positionId: string;
}

export default function ApplicationsTable({ positionId }: ApplicationsTableProps) {
  const [applications, setApplications] = useState<Application[]>(
    initialApplications.filter((app) => app.positionId === positionId)
  );

  const handleSelectCandidate = (applicationId: string) => {
    setApplications(
      applications?.map((app) =>
        app.id === applicationId
          ? {
              ...app,
              status: app.status === "pending" || app.status === "rejected" ? "selected" : "pending",
            }
          : app
      )
    );
  };

  const handleRejectCandidate = (applicationId: string) => {
    setApplications(
      applications?.map((app) =>
        app.id === applicationId
          ? {
              ...app,
              status: app.status === "pending" || app.status === "selected" ? "rejected" : "pending",
            }
          : app
      )
    );
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
    <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300 ">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 ">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Applications
          </span>
          <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">{applications?.length}</span>
        </h4>

        <FilterButton />
      </div>
      <div className="overflow-x-auto overflow-y-auto">
        {applications?.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
                <th className="pb-4 px-4">SL</th>
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
              {applications.map((app, index) => (
                <tr key={app.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="py-4 px-4 font-medium truncate">{index + 1}</td>
                  <td className="py-4 px-4 font-medium truncate text-sm">{app.fullName}</td>
                  <td className="py-4 px-4 truncate text-sm">{app.email}</td>
                  <td className="py-4 px-4 truncate text-sm">{app.phone}</td>
                  <td className="py-4 px-4 text-sm">
                    <StatusBadge status={app.status as ApplicationStatus} />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-gray-400 truncate">
                      <Calendar className="w-4 h-4 " />
                      <span className="text-sm">{formatDate(app.submittedAt)}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Link
                      href={app.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-2 group text-sm"
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
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-2 group text-sm"
                    >
                      Portfolio
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Link href={app.linkedIn} target="_blank">
                        <button className="p-2 rounded-lg transition-all duration-300 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
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
  );
}
