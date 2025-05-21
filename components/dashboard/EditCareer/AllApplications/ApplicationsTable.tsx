"use client";

import Link from "next/link";
import {
  Calendar,
  ExternalLink,
  Linkedin,
  Trash2,
  UserCheck,
  UserRoundX,
} from "lucide-react";
import {
  ApplicationStatus,
  TApplication,
  TPosition,
} from "@/components/types/career";
import FilterButton from "./FilterButton";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";
import { deleteData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";

interface ApplicationsTableProps {
  position: TPosition;
}

const ApplicationsTable = ({ position }: ApplicationsTableProps) => {
  const router = useRouter();
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
  const applications = position?.applications ? position.applications : [];
  return (
    <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300 ">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 ">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Applications
          </span>
          <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">
            {(position.applications && position?.applications.length) || ""}
          </span>
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
              {applications.map((app, index) => {
                let status;

                if (app.isRejected) {
                  status = "rejected";
                } else if (app.isSelected) {
                  status = "selected";
                } else if (app.isPending) {
                  status = "pending";
                }
                console.log(status);
                return (
                  <tr
                    key={app._id}
                    className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-4 font-medium truncate">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 font-medium truncate text-sm">
                      {app.fullName}
                    </td>
                    <td className="py-4 px-4 truncate text-sm">{app.email}</td>
                    <td className="py-4 px-4 truncate text-sm">{app.phone}</td>
                    <td className="py-4 px-4 text-sm">
                      <StatusBadge status={status as ApplicationStatus} />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-gray-400 truncate">
                        <Calendar className="w-4 h-4 " />
                        <span className="text-sm">
                          {formatDate(app.createdAt as string)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 flex items-center gap-2 group text-sm">
                        Resume
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        href={app.portfolio ? app.portfolio : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-purple-400 hover:text-purple-300 flex items-center gap-2 group text-sm ${
                          !app.portfolio && "line-through"
                        }`}>
                        Portfolio
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={app?.linkedIn ? app.linkedIn : ("#" as any)}
                          target="_blank">
                          <button
                            disabled={!app?.linkedIn}
                            className={`p-2 rounded-lg transition-all duration-300  text-blue-400  cursor-pointer ${
                              !app.linkedIn
                                ? "bg-red-500/20"
                                : "bg-blue-500/20 hover:bg-blue-500/30"
                            }`}>
                            <Linkedin className="w-5 h-5" />
                          </button>
                        </Link>
                        <button
                          onClick={() =>
                            handleSelectCandidate(app._id as string)
                          }
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            app.isSelected === true
                              ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                          }`}
                          title={
                            app.isSelected === true
                              ? "Unselect Candidate"
                              : "Select Candidate"
                          }>
                          <UserCheck className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            handleRejectCandidate(app._id as string)
                          }
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            app.isRejected === true
                              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                          }`}
                          title={
                            app.isDeleted === true
                              ? "UnReject Candidate"
                              : "Reject Candidate"
                          }>
                          <UserRoundX className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            handleDeleteCandidate(app._id as string);
                          }}
                          className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                          title="Delete Application">
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
  );
};

export default ApplicationsTable;
