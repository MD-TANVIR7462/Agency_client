"use client";

import Link from "next/link";
import { Calendar, ExternalLink, Linkedin, Trash2, UserCheck, UserRoundX } from "lucide-react";
import { ApplicationStatus, TApplication } from "@/components/types/career";
import { StatusBadge } from "@/components/Career/EditPositons/StatusBadge";
import { useRouter } from "next/navigation";

interface ApplicationRowProps {
  app: TApplication;
  index: number;
  onSelect: (id: string) => Promise<void>;
  onReject: (id: string) => Promise<void>;
  onDelete: (id: string) => void;
}

const ApplicationRow = ({ app, index, onSelect, onReject, onDelete }: ApplicationRowProps) => {
  const router = useRouter();

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

  const status = app.isRejected ? "rejected" : app.isSelected ? "selected" : app.isPending ? "pending" : "hold";

  return (
    <tr key={app._id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
      <td className="py-4 px-4 font-medium truncate">{index + 1}</td>
      <td className="py-4 px-4 font-medium truncate text-sm">{app.fullName}</td>
      <td className="py-4 px-4 truncate text-sm">{app.email}</td>
      <td className="py-4 px-4 truncate text-sm">{app.phone}</td>
      <td className="py-4 px-4 text-sm">
        <StatusBadge status={status as ApplicationStatus} />
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2 text-gray-400 truncate">
          <Calendar className="w-4 h-4 " />
          <span className="text-sm">{formatDate(app.createdAt as string)}</span>
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
          href={app.portfolio ? app.portfolio : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-purple-400 hover:text-purple-300 flex items-center gap-2 group text-sm ${
            !app.portfolio && "line-through"
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
            onClick={() => onSelect(app._id as string)}
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
            onClick={() => onReject(app._id as string)}
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
            onClick={() => onDelete(app._id as string)}
            className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
            title="Delete Application"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default ApplicationRow;
