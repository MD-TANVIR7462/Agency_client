"use client";
import { motion } from "framer-motion";
import { ArrowUpFromDot } from "lucide-react";
import { animateScroll } from 'react-scroll';
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    duration: 500,
    smooth: true,
  };

  let ticking = false; // Flag to prevent multiple triggers in a short time

  const handleScroll = () => {
    if (ticking) return; // Prevent further scroll checks until next animation frame
    ticking = true;

    // Use requestAnimationFrame to throttle the scroll event
    requestAnimationFrame(() => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      ticking = false;
    });
  };

  const handleScrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

  useEffect(() => {
    // Adding event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <motion.button
        onClick={handleScrollToTop}
        className="z-20 fixed  animate-bounce bottom-[4%] right-[3%] bg-purple-600/60 text-white p-2 rounded-xl shadow-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        title="Scroll to Top"
      >
        <ArrowUpFromDot size={24} />
      </motion.button>
    )
  );
};

export default ScrollButton;
