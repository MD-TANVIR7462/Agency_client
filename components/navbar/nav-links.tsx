"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  className?: string;
  vertical?: boolean;
}

export const NavLinks = ({
  className = "",
  vertical = false,
}: NavLinksProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/About", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`gap-8 ${vertical ? "flex flex-col" : "flex"} ${className}`}>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                e.preventDefault();
                handleScroll(link.href);
              }
            }}
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
