import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  positionId: string;
  filterStatus: string;
  limit: number;
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  positionId,
  filterStatus,
  limit,
}: PaginationControlsProps) => {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="text-sm text-gray-400">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex gap-2">
        {totalPages > 1 && (
          <>
            {hasPrevPage ? (
              <Link
                href={`?positionId=${positionId}&status=${filterStatus}&page=${
                  currentPage - 1
                }&limit=${limit}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-800/50 text-gray-300"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-600 cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </span>
            )}
            {hasNextPage ? (
              <Link
                href={`?positionId=${positionId}&status=${filterStatus}&page=${
                  currentPage + 1
                }&limit=${limit}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-800/50 text-gray-300"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-600 cursor-not-allowed">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};
