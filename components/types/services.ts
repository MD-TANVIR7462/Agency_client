export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon?: string|any; 
  features?: string[];
  technologies?: string[];
}
