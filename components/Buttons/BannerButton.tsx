"use client"
import { ArrowRight } from "lucide-react";
import ScrollOnPosition from "../ScrollButton/ScrollOnPosition";

const BannerButton = () => {
  const handleScrollToPosition = (position: number) => {
    ScrollOnPosition(position);
  };
  return (
    <button
      onClick={() => handleScrollToPosition(1000)}
      className="group flex items-center justify-center gap-2 rounded-full  md:rounded-lg  bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-white transition-all hover:opacity-90"
    >
      Start Your Journey
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

export default BannerButton;
