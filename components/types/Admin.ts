export interface Admin {
  id: string;
  name: string;
  email: string;
  role: "admin" | "super_admin";
  status: "active" | "inactive";
  location: string;
  phone: string;
  avatarUrl?: string;
}
