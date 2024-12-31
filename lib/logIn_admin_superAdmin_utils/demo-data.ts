import { Admin } from "@/components/types/Admin";



export const demoAdmins: Admin[] = [
  {
    id: "1",
    name: "James Johnson",
    email: "admin@example.com", // Super Admin login
    role: "super_admin",
    status: "active",
   
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "user@example.com", // Regular Admin login
    role: "admin",
    status: "active",
  
    location: "London, UK",
    phone: "+44 20 7123 4567",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@example.com",
    role: "admin",
    status: "active",

    location: "Singapore",
    phone: "+65 6789 0123",
    avatarUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

// Demo login credentials
export const demoCredentials = {
  superAdmin: {
    email: "admin@example.com",
    password: "admin123"
  },
  admin: {
    email: "user@example.com",
    password: "user123"
  }
};