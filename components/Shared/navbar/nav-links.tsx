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
