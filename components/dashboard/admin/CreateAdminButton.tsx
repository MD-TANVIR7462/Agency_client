import { UserPlus } from "lucide-react";

interface CreateAdminButtonProps {
  onClick: () => void;
}

export default function CreateAdminButton({ onClick }: CreateAdminButtonProps) {
  return (
    <button onClick={onClick} className="primaryButton flex items-center">
      <UserPlus className="w-5 h-5" />
      <span>Create New Admin</span>
    </button>
  );
}
