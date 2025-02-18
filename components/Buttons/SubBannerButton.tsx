"use client";
import { ArrowRight } from "lucide-react";
import ScrollOnPosition from "../ScrollButton/ScrollOnPosition";

const SubBannerButton = () => {
  const handleScrollToPosition = (position: number) => {
    ScrollOnPosition(position);
  };
  return (
    <button
      onClick={() => handleScrollToPosition(450)}
      className="group inline-flex text-sm sm:text-base items-center gap-2 rounded-full bg-white/10 px-4 py-2 sm:px-8 sm:py-3 text-white backdrop-blur-lg transition-all hover:bg-white/20"
    >
      Get Started
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

export default SubBannerButton;
