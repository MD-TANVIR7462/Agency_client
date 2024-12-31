"use client";
import { isSuperAdmin } from "@/lib/logIn_admin_superAdmin_utils/auth";
import { UserPlus } from "lucide-react";


interface CreateAdminButtonProps {
  onClick: () => void;
}

export default function CreateAdminButton({ onClick }: CreateAdminButtonProps) {
  if (!isSuperAdmin()) return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <UserPlus className="w-5 h-5" />
      <span>Create New Admin</span>
    </button>
  );
}