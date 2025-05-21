export type TApplication = {
  _id?: string;
  positionId?: string;
  fullName: string;
  email: string;
  phone: string;
  linkedIn?: string;
  portfolio?: string;
  resumeUrl: string;
  isPending?: boolean;
  isDeleted?: boolean;
  isSelected?: boolean;
  isRejected?: boolean;
  updatedAt?:string
  createdAt?:string
};

export interface TPosition {
  _id?: string;
  applications?: TApplication[];
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  isActive?: boolean;
  salary?: string | undefined;
}

export type ApplicationStatus = "pending" | "selected" | "rejected";
