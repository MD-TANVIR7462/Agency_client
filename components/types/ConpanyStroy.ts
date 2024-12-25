import { LucideIcon } from 'lucide-react';

export interface CompanyStats {
  years: string;
  projects: string;
  teamSize: string;
  satisfaction: string;
}

export interface CompanyInfo {
  stats: CompanyStats;
  story: {
    title: string;
    content: string;
  };
  mission: {
    title: string;
    content: string;
    icon?: LucideIcon;
  };
  vision: {
    title: string;
    content: string;
    icon?: LucideIcon;
  };
}