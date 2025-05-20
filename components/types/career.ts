export interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  linkedIn?: string;
  portfolio?: string;
  resumeLink: string;
}

export interface Position {
  id: string;
  _id?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  status: "active" | "inactive";
  isActive?: boolean;
  salary?: string | undefined;
}

export interface TPosition {
  _id?: string;
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

export interface Application {
  status: string;
  id: string;
  positionId: string;
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  resumeUrl: string;
  submittedAt: string;
}

export type ApplicationStatus = "pending" | "selected" | "rejected";
