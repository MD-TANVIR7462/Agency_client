export interface Project {
  title: string;
  _id: number;
  isActive?: boolean;
  description: string,
  isDeleted?: boolean;
  isFeatured?: boolean
  category: string;
  image: string;
  link: string;
}
