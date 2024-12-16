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
  coverLetter: string;
  resume: File | null;
}