import { Home, Settings, Briefcase, Phone, Wrench, Info, UserPlus } from "lucide-react";

export const menuItems = [
  {
    title: "Home",
    icon: Home,
    path: "/dashboard",
    submenu: [
      { title: "Submenu 1", path: "/dashboard/submenu-1" },
      { title: "Submenu 2", path: "/dashboard/submenu-2" },
      { title: "Submenu 3", path: "/dashboard/submenu-3" },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    path: "/dashboard/services",
    submenu: Array.from({ length: 7 }, (_, i) => ({
      title: `Service ${i + 1}`,
      path: `/dashboard/services/service-${i + 1}`,
    })),
  },
  {
    title: "About Us",
    icon: Info,
    path: "/dashboard/about",
    submenu: Array.from({ length: 4 }, (_, i) => ({
      title: `About ${i + 1}`,
      path: `/dashboard/about/about-${i + 1}`,
    })),
  },
  {
    title: "Portfolio",
    icon: Briefcase,
    path: "/dashboard/portfolio",
    submenu: Array.from({ length: 4 }, (_, i) => ({
      title: `Portfolio ${i + 1}`,
      path: `/dashboard/portfolio/portfolio-${i + 1}`,
    })),
  },
  {
    title: "Career",
    icon: UserPlus,
    path: "/dashboard/career",
    submenu: Array.from({ length: 5 }, (_, i) => ({
      title: `Career ${i + 1}`,
      path: `/dashboard/career/career-${i + 1}`,
    })),
  },
  {
    title: "Contact",
    icon: Phone,
    path: "/dashboard/contact",
    submenu: Array.from({ length: 5 }, (_, i) => ({
      title: `Contact ${i + 1}`,
      path: `/dashboard/contact/contact-${i + 1}`,
    })),
  },
  {
    title: "Website Settings",
    icon: Settings,
    path: "/dashboard/settings",
    submenu: [
      { title: "Navbar", path: "/dashboard/settings/navbar" },
      { title: "Footer", path: "/dashboard/settings/footer" },
    ],
  },

];