import { LucideIcon } from 'lucide-react';

export interface Technology {
  id: string;
  icon?: LucideIcon;
  name: string;
  tech: string[];
  gradient: string;
  status?: 'active' | 'inactive';
}