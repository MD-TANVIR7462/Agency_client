export interface Project {
  title: string;
  id: number;
  status?: "active" | "inactive";
  category: string;
  image: string;
  link: string;
}
