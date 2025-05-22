"use client";

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
        <Link
          href={`?positionId=${positionId}&status=${filterStatus}&page=${currentPage - 1}&limit=${limit}`}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border ${
            hasPrevPage
              ? "border-gray-700 hover:bg-gray-800/50 text-gray-300"
              : "border-gray-800 text-gray-600 cursor-not-allowed"
          }`}
          aria-disabled={!hasPrevPage}
          tabIndex={!hasPrevPage ? -1 : undefined}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Link>
        <Link
          href={`?positionId=${positionId}&status=${filterStatus}&page=${currentPage + 1}&limit=${limit}`}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border ${
            hasNextPage
              ? "border-gray-700 hover:bg-gray-800/50 text-gray-300"
              : "border-gray-800 text-gray-600 cursor-not-allowed"
          }`}
          aria-disabled={!hasNextPage}
          tabIndex={!hasNextPage ? -1 : undefined}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};