import { X, Check } from "lucide-react";
import toast from "react-hot-toast";
export const deleteToast = (handleDelete: () => void, message?: string) => {
  toast((t) => (
    <div className="flex items-center gap-2 w-[400px]">
      <span>{message || "Are you sure ?"}</span>
      <button
        onClick={() => handleDelete()}
        className="ml-2 text-sm text-gray-500 hover:text-green-500">
        <Check />
      </button>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-2 text-sm text-gray-500 hover:text-red-500">
        <X />
      </button>
    </div>
  ));
};
