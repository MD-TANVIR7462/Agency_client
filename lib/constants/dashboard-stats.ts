import { Code, Users, Briefcase, Award } from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Projects",
    value: "24",
    icon: Code,
    change: "+3",
    color: "text-gray-300",
    description: "Current ongoing projects"
  },
  {
    title: "Team Members",
    value: "48",
    icon: Users,
    change: "+5",
    color: "text-purple-400",
    description: "Total team size"
  },
  {
    title: "Completed Projects",
    value: "156",
    icon: Briefcase,
    change: "+12",
    color: "text-green-500",
    description: "Successfully delivered"
  },
  {
    title: "Client Satisfaction",
    value: "98%",
    icon: Award,
    change: "+2.4%",
    color:"text-yellow-500",

    description: "Average rating"
  }
];