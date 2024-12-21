import { LucideIcon } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon?: LucideIcon;
    features?: string[];
    technologies?: string[];
  }