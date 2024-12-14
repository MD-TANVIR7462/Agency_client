"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  className?: string;
  vertical?: boolean;
}

export const NavLinks = ({ className = "", vertical = false }: NavLinksProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <div className={`gap-8 ${vertical ? "flex flex-col" : "flex"} ${className}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
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