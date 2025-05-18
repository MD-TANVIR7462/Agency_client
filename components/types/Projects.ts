export interface Project {
  title: string;
  _id?: string;
  isActive?: boolean;
  description: string,
  isDeleted?: boolean;
  isFeatured?: boolean
  category: string;
  image: string;
  link: string;
}
