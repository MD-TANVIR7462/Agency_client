import React from "react";
import EditTestimonialIndex from "./editTestimonialIndex";
import { getData } from "@/server/ServerActions";

const TestimonialsPage = async () => {
  const { data: testimonials } = (await getData("testimonial")) || [];

  return <>{testimonials && <EditTestimonialIndex data={testimonials} />}</>;
};

export default TestimonialsPage;
