export interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  linkedIn?: string;
  portfolio?: string;
  resume: File | null;
}



export interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  status: 'active' | 'inactive';
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


export type ApplicationStatus = 'pending' | 'selected' | 'rejected' ;