"use client";
import { useState } from "react";

import { TestimonialForm } from "./FeedBackFrom";
import { Testimonial } from "@/components/types/Testimonial";
import { createData } from "@/server/ServerActions";


export const FeedBack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit =async (data: Partial<Testimonial>) => {
    const createFeedback =await createData("testimonial/create-testimonial", data);
    console.log(createFeedback.data);
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

      <TestimonialForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </>
  );
};
