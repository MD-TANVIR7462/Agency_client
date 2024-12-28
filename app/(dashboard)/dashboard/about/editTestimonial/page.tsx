"use client";

import { StatusFilter } from '@/components/dashboard/EditAbout/EditTestimonial/StatusFilter';
import { TestimonialModal } from '@/components/dashboard/EditAbout/EditTestimonial/TestimonialModal';
import { TestimonialsTable } from '@/components/dashboard/EditAbout/EditTestimonial/TestimonialsTable';
import { testimonialsData } from '@/components/data/testimonials2';
import DashSubTitle from '@/components/Shared/DashSubTitle';
import { Testimonial } from '@/components/types/Testimonial';
import { useState } from 'react';


export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [testimonialToDelete, setTestimonialToDelete] = useState<Testimonial | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  const handleStatusChange = (testimonial: Testimonial, newStatus: 'active' | 'inactive') => {
    setTestimonials(testimonials.map(t => 
      t.id === testimonial.id ? { ...t, status: newStatus } : t
    ));
  };

  const handleDelete = (testimonial: Testimonial) => {
    setTestimonials(testimonials.filter(t => t.id !== testimonial.id));
    setTestimonialToDelete(null);
  };

  const filteredTestimonials = testimonials.filter(t => 
    filterStatus === 'all' ? true : t.status === filterStatus
  );

  return (
    <div className="bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <DashSubTitle text="Testimonials"/>
          <StatusFilter 
            currentFilter={filterStatus} 
            onFilterChange={setFilterStatus} 
          />
        </div>
        
        <TestimonialsTable 
          testimonials={filteredTestimonials}
          onViewDetails={setSelectedTestimonial}
          onStatusChange={handleStatusChange}
          onDelete={setTestimonialToDelete}
        />

        <TestimonialModal 
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}