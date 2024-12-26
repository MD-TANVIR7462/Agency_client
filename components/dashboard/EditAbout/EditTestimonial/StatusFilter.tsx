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
  currentFilter: 'all' | 'active' | 'inactive';
  onFilterChange: (status: 'all' | 'active' | 'inactive') => void;
}

export function StatusFilter({ currentFilter, onFilterChange }: StatusFilterProps) {
  const getFilterLabel = () => {
    switch (currentFilter) {
      case 'active':
        return 'Active Testimonials';
      case 'inactive':
        return 'Inactive Testimonials';
      default:
        return 'All Testimonials';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-purple-400/20 text-purple-400 hover:bg-purple-400/10"
        >
          <Filter className="mr-2 h-4 w-4" />
          {getFilterLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-purple-400/20">
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 ${
            currentFilter === 'all' ? 'bg-purple-400/20' : ''
          }`}
          onClick={() => onFilterChange('all')}
        >
          All Testimonials
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 ${
            currentFilter === 'active' ? 'bg-purple-400/20' : ''
          }`}
          onClick={() => onFilterChange('active')}
        >
          Active Testimonials
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-400/10 ${
            currentFilter === 'inactive' ? 'bg-purple-400/20' : ''
          }`}
          onClick={() => onFilterChange('inactive')}
        >
          Inactive Testimonials
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}