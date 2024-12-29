"use client";
import { useState } from "react";

import { TestimonialForm } from "./FeedBackFrom";
import { Testimonial } from "@/components/types/Testimonial";

export const FeedBack = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: Partial<Testimonial>) => {
    console.log("Testimonial submitted:", data);
    // Here you would typically send this data to your backend
  };

  return (
    <>
      <div className="text-center mb-12">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-lg transition-all hover:bg-white/20"
        >
          Share Your Experience
        </button>
      </div>

      <TestimonialForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};
