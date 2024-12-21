import { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: LucideIcon;
  path: string;
  submenu?: SubMenuItem[];
}