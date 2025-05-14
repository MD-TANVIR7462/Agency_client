export interface TechCardProps {
   icon?: string;
   name: string;
   tech: string[];
   gradient: string;
   isActive?: boolean,
   isDeleted?:boolean,
   index?:number
 }