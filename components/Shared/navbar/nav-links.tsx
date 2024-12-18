"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavLinksProps {
  className?: string;
  vertical?: boolean;
  onClose?: () => void;
}

export const NavLinks = ({
  className = "",
  vertical = false,
  onClose,
}: NavLinksProps) => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    {
      href: "/services",
      label: "Services",
      isDropdown: true,
      dropdownLinks: [
        { href: "/services", label: "All" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/mobile-apps", label: "Mobile Apps" },
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
        { href: "/services/cloud-solutions", label: "Cloud Solutions" },
        { href: "/services/ai-ml", label: "AI & ML" },
        { href: "/services/cybersecurity", label: "Cybersecurity" },
      ],
    },
    { href: "/About", label: "About Us" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/Career", label: "Career" },
  ];

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`gap-8 ${vertical ? "flex flex-col" : "flex"} ${className}`}
    >
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        // Handle navigation link click
        const handleLinkClick = (e: React.MouseEvent) => {
          if (onClose) onClose(); // Close mobile menu
          if (link.href.startsWith("#")) {
            e.preventDefault();
            handleScroll(link.href);
          }
        };
        // Render dropdown for "Services"
        if (link.isDropdown) {
          return (
            <div key={link.label} className="relative">
              {/* Trigger for Dropdown */}
              <div
                className="inline-block"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-48 rounded-md bg-gray-900 p-2 shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setIsDropdownOpen(true)} // Keep dropdown open when hovering over the menu
                    onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when leaving the menu
                  >
                    {link.dropdownLinks?.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.label}
                        href={dropdownLink.href}
                        className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                        onClick={handleLinkClick}
                      >
                        {dropdownLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
            className={`text-sm font-medium transition-colors hover:text-white ${
              isActive ? "text-white" : "text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
