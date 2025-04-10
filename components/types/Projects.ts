export interface Project {
  title: string;
  id: number;
  status?: "active" | "inactive";
  description:string,
  featured?:string,
  category: string;
  image: string;
  link: string;
}
