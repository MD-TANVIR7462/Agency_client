"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "../types/Testimonial";

export const TestimonialSlider = ({
  testimonialsData,
}: {
  testimonialsData: Testimonial[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to go to the next testimonial
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Function to go to the previous testimonial
  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        next();
      }, 5000); // Change testimonial every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isHovered, currentIndex]);

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} // Smooth animation duration
          className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg md:p-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          <Quote className="absolute right-8 top-8 h-12 w-12 text-purple-500/20" />

          <div className="flex flex-col items-center text-center">
            <p className="text-lg text-gray-300 md:text-xl">
              {testimonialsData[currentIndex].content}
            </p>

            <div className="mt-8">
              <Image
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].author}
                width={60}
                height={60}
                className="mx-auto rounded-full"
              />
              <div className="mt-4">
                <h4 className="font-semibold text-white">
                  {testimonialsData[currentIndex].author}
                </h4>
                <p className="text-sm text-gray-400">
                  {testimonialsData[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          onClick={prev}
          className="rounded-full p-2 text-white backdrop-blur-lg transition-colors hover:bg-white/10">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="rounded-full p-2 text-white backdrop-blur-lg transition-colors hover:bg-white/10">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
