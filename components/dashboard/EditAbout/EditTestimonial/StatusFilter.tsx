import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface StatusFilterProps {
  currentFilter: "all" | "active" | "inactive";
  onFilterChange: (status: "all" | "active" | "inactive") => void;
}

export function StatusFilter({ currentFilter, onFilterChange }: StatusFilterProps) {
  const getFilterLabel = () => {
    switch (currentFilter) {
      case "active":
        return "Active";
      case "inactive":
        return "Inactive";
      default:
        return "All Testimonials";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="primaryButton">
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
          All Testimonials
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 text-sm md:text-base cursor-pointer ${
            currentFilter === "active" ? "bg-purple-400/20" : ""
          }`}
          onClick={() => onFilterChange("active")}
        >
          Active Testimonials
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 text-sm md:text-base cursor-pointer ${
            currentFilter === "inactive" ? "bg-purple-400/20" : ""
          }`}
          onClick={() => onFilterChange("inactive")}
        >
          Inactive Testimonials
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
