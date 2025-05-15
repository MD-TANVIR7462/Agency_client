export type Service = {
  _id?: string|any;
  title: string;
  icon?: string;
  shortDes: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  isActive?: boolean;
  isDeleted?: boolean;
};
