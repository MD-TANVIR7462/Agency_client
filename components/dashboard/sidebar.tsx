"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Settings,
  Users,
  Briefcase,
  Phone,
  Menu as MenuIcon,
  X,
  Layout,
  Wrench,
  Info,
  FileText,
  UserPlus,
  ArrowUpRight,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    icon: <Home className="w-5 h-5" />,
    path: "/dashboard/home",
    submenu: [{ title: "Banner", path: "/dashboard/home/editBanner" }],
  },
  {
    title: "Services",
    icon: <Wrench className="w-5 h-5" />,
    path: "/dashboard/services",
    submenu: [
      { title: "Services", path: "/dashboard/services/editServices" },
      { title: "Technology", path: "/dashboard/services/editTechnology" },
    ],
  },
  {
    title: "About Us",
    icon: <Info className="w-5 h-5" />,
    path: "/dashboard/about",
    submenu: [
      { title: "Story", path: "/dashboard/about/editStory" },
      { title: "Team", path: "/dashboard/about/editTeam" },
      { title: "Testimonials", path: "/dashboard/about/editTestimonial" },
    ],
  },
  {
    title: "Portfolio",
    icon: <Briefcase className="w-5 h-5" />,
    path: "/dashboard/portfolio",
    submenu: [
      { title: "Projects", path: "/dashboard/protfolio/editProjects" },
      { title: "FAQ", path: "/dashboard/protfolio/editFaq" },
    ],
  },
  {
    title: "Career",
    icon: <UserPlus className="w-5 h-5" />,
    path: "/dashboard/career",
    submenu: [
      { title: "Open Position", path: "/dashboard/career/editPosition" },
      { title: "Gallery", path: "/dashboard/career/editGallery" },
    ],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      width: "280px",
      transition: { duration: 0.3 },
    },
    closed: {
      x: "-100%",
      width: "0px",
      transition: { duration: 0.3 },
    },
  };



  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-400/80 text-white rounded-md lg:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 " />
        ) : (
          <MenuIcon className="w-6 h-6 " />
        )}
      </button>

      <motion.div
        initial="open"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-screen bg-gray-950 text-white z-40 overflow-y-auto"
      >
        <div className="p-4">
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-8 pt-4 ">
            <Layout className=":w-8 :h-8 text-purple-400 hidden lg:block" />
            <span className=" text-base lg:text-xl font-bold ">SiSCOTEK</span>
          </div>

          <nav>
            <Link href={"/dashboard"}>
              <button
                className={`w-full flex items-center justify-between p-2 rounded-md transition-colors mb-2`}
              >
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </div>
              </button>
            </Link>
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                    pathname.startsWith(item.path)
                      ? "bg-purple-400/20 text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openSubmenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openSubmenu === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block pl-10 py-2 text-sm rounded-md transition-colors ${
                            pathname === subItem.path
                              ? " text-purple-400"
                              : "hover:text-purple-400"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href={"/dashboard/contact"}>
              <button
                className={`w-full flex items-center justify-between p-2 rounded-md transition-colors mb-2 ${
                  pathname.startsWith("/dashboard/contact")
                    ? "bg-purple-400/20 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </div>
              </button>
            </Link>
            <button
              className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                pathname.startsWith("siteSettings")
                  ? "bg-purple-400/20 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <span>Website Settings</span>
              </div>
            </button>
          </nav>
          <div className="relative top-8">
            <Link href={"/"}>
              <button className="w-full flex items-center gap-2 px-2 py-2 ring-1 ring-purple-400 bg-purple-400/20 text-white rounded-md hover:bg-purple-400/30 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-medium">Exit</span>
              </button>
            </Link>
            <Link href={"/"}>
              <button className="mt-[5%] w-full flex items-center gap-2 px-2 py-2 ring-2 text-white rounded-md hover:bg-red-500 transition-colors">
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Log Out</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
