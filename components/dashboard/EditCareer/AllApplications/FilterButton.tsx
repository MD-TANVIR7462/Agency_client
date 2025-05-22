"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface StatusFilterProps {
  currentFilter: "all" | "selected" | "rejected";
  onFilterChange: (status: "all" | "selected" | "rejected") => void;
}

const FilterButton = ({ currentFilter, onFilterChange }: StatusFilterProps) => {
  const getFilterLabel = () => {
    switch (currentFilter) {
      case "selected":
        return "Selected";
      case "rejected":
        return "Rejected";
      default:
        return "All";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="primaryButton ">
          <Filter className="md:mr-2 h-4 w-4 " />
          {getFilterLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-purple-400/20 text-sm md:text-base ">
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 cursor-pointer ${
            currentFilter === "all" ? "bg-purple-400/20" : ""
          }`}
          onClick={() => onFilterChange("all")}
        >
          All
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 text-sm md:text-base cursor-pointer
             ${currentFilter === "selected" ? "bg-purple-400/20" : ""}`}
          onClick={() => onFilterChange("selected")}
        >
          Selected
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 text-sm md:text-base cursor-pointer ${
            currentFilter === "rejected" ? "bg-purple-400/20" : ""
          }`}
          onClick={() => onFilterChange("rejected")}
        >
          Rejected
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default FilterButton;
