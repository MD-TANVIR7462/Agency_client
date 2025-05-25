"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";


export const Navbar = ({name}:{name:string}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 md:backdrop-blur-lg" : "bg-transparent "
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-[85rem] px-[1%] sm:px-[2%] lg:px-[2.5%] ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center ">
            <Link href="/" className="text-2xl font-bold text-white ms-2">
              {/* SiSCO<span className="text-purple-400">TEK</span>  */}
              {name}
            </Link>
          </div>

          <NavLinks
            onClose={() => setIsMobileMenuOpen(false)}
            className="hidden md:flex"
          />
          <div className="flex items-center gap-4">
            <Link
              href="/Contact"
              className="hidden rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-lg transition-all hover:bg-white/20 md:block"
            >
              Contact Us
            </Link>
            <button
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
