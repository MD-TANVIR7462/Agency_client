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
  UserPlus
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    icon: <Home className="w-5 h-5" />,
    path: "/dashboard",
    submenu: [
      { title: "Banner", path: "/dashboard/EditBanner" },
      { title: "Technology", path: "/dashboard/EditEnterprice" },
    ],
  },
  {
    title: "Services",
    icon: <Wrench className="w-5 h-5" />,
    path: "/dashboard/services",
    submenu: [
      { title: "Services", path: "/dashboard/EditServices" },
      { title: "Technology", path: "/dashboard/EditTechnology" },
    ],
  },
  {
    title: "About Us",
    icon: <Info className="w-5 h-5" />,
    path: "/dashboard/about",
    submenu: [
      { title: "Story", path: "/dashboard/EditStory" },
      { title: "Team", path: "/dashboard/EditTeam" },
      { title: "Testimonials", path: "/dashboard/EditTestimonial" },
    ],
  },
  {
    title: "Portfolio",
    icon: <Briefcase className="w-5 h-5" />,
    path: "/dashboard/portfolio",
    submenu: [
      { title: "Projects", path: "/dashboard/EditProjects" },
      { title: "FAQ", path: "/dashboard/EditFAQ" },
    ],
  },
  {
    title: "Career",
    icon: <UserPlus className="w-5 h-5" />,
    path: "/dashboard/career",
    submenu: [
      { title: "Open Position", path: "/dashboard/EditPosition" },
      { title: "Add Position", path: "/dashboard/AddPosition" },
      { title: "Gallery", path: "/dashboard/EditGallery" },
    ],
  },
  {
    title: "Contact",
    icon: <Phone className="w-5 h-5" />,
    path: "/dashboard/contact",
    submenu: [
      { title: "Contact Info ", path: "/dashboard/EditContact" }
    ],
  },
  {
    title: "Website Settings",
    icon: <Settings className="w-5 h-5" />,
    path: "/dashboard/settings",
    submenu: [
      { title: "Navbar", path: "/dashboard/settings/navbar" },
      { title: "Footer", path: "/dashboard/settings/footer" },
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
            <span className=" text-base lg:text-xl font-bold ">Dashboard</span>
          </div>

          <nav>
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`w-full flex items-center justify-between p-2 rounded-md transition-colors ${
                    pathname.startsWith(item.path)
                      ? "bg-purple-400 text-white"
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
                              ? "bg-purple-400 text-white"
                              : "hover:bg-gray-800"
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
          </nav>
        </div>
      </motion.div>
    </>
  );
}