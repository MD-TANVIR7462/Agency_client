"use client";
import { TApplication, TPosition } from "@/components/types/career";
import FilterButton from "./FilterButton";
import { deleteData, getData, updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteToast } from "@/lib/deleteToast";
import { useEffect, useState } from "react";
import { PaginationControls } from "./PaginationControls";
import { Skeleton } from "@/components/ui/skeleton";
import ApplicationRow from "./ApplicationRow";

interface ApplicationsTableProps {
  data: TPosition;
}

const ApplicationsTable = ({ data: positionData }: ApplicationsTableProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "25";
  const [position, setPosition] = useState(positionData);
  const [filterStatus, setFilterStatus] = useState<"all" | "selected" | "rejected">(
    (searchParams.get("status") as any) || "all"
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [applications, setApplications] = useState<TApplication[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 25,
    totalPages: 1,
  });

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await getData(
        `application?positionId=${position._id}&status=${filterStatus}&page=${page}&limit=${limit}`
      );

      setApplications(response?.data.data || []);
      setPagination(
        response?.data.pagination || {
          total: 0,
          page: 1,
          limit: 25,
          totalPages: 1,
        }
      );
    } catch (error) {
      console.error("Error fetching applications:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [filterStatus, page, limit, positionData]);

  const handleSelectCandidate = async (id: string) => {
    try {
      const result = await updateData("application/select", id, {});
      if (result.success) {
        SuccessToast("Operation Successful");
        fetchApplications();
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
        fetchApplications();
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
        fetchApplications();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(deleteCandidate, "Delete this Application ?");
  };

  const getEmptyStateMessage = () => {
    if (filterStatus === "all") {
      return "No applications received yet for this position.";
    } else if (filterStatus === "selected") {
      return "No selected applications found for this position.";
    } else if (filterStatus === "rejected") {
      return "No rejected applications found for this position.";
    }
    return "No applications found.";
  };

  return (
    <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all duration-300 ">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 ">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Applications
          </span>
          <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">{pagination.total || 0}</span>
        </h4>

        <FilterButton currentFilter={filterStatus} onFilterChange={setFilterStatus} />
      </div>

      <div className="overflow-x-auto overflow-y-auto">
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full bg-gray-800/50 rounded-lg" />
            ))}
          </div>
        ) : applications.length > 0 ? (
          <>
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
                  <ApplicationRow
                    key={app._id}
                    app={app}
                    index={index}
                    onSelect={handleSelectCandidate}
                    onReject={handleRejectCandidate}
                    onDelete={handleDeleteCandidate}
                  />
                ))}
              </tbody>
            </table>

      
          </>
        ) : (
          <div className="text-center py-8 bg-gray-900/30 rounded-lg border border-gray-800/50">
            <p className="text-gray-400">{getEmptyStateMessage()}</p>
          </div>
        )}
      </div>
      {
              <PaginationControls
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              positionId={position?._id as string}
              filterStatus={filterStatus}
              limit={pagination.limit}
            />
      }
    </div>
  );
};

export default ApplicationsTable;