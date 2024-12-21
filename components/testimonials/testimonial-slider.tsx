"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content: "Working with SiSCOTEK transformed our business. Their innovative solutions helped us achieve a 200% increase in online engagement.",
    author: "Jessica Lee",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content: "The team's expertise in AI and machine learning helped us automate our processes and reduce operational costs by 40%.",
    author: "Robert Chen",
    role: "CTO, DataFlow Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content: "Their attention to detail and commitment to excellence made our project a huge success. Highly recommended!",
    author: "Maria Garcia",
    role: "Marketing Director, GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg md:p-12"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          <Quote className="absolute right-8 top-8 h-12 w-12 text-purple-500/20" />
          
          <div className="flex flex-col items-center text-center">
            <p className="text-lg text-gray-300 md:text-xl">{testimonials[currentIndex].content}</p>
            
            <div className="mt-8">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                width={60}
                height={60}
                className="mx-auto rounded-full"
              />
              <div className="mt-4">
                <h4 className="font-semibold text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          onClick={prev}
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-lg transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-lg transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};