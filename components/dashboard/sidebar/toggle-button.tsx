import { X, Menu as MenuIcon } from "lucide-react";

interface ToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ToggleButton({ isOpen, onToggle }: ToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 left-4 z-50 p-2 bg-purple-400 rounded-md lg:hidden"
    >
      {isOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <MenuIcon className="w-6 h-6 text-white" />
      )}
    </button>
  );
}