"use client";

import { StatusFilter } from "@/components/dashboard/EditAbout/EditTestimonial/StatusFilter";
import { TestimonialModal } from "@/components/dashboard/EditAbout/EditTestimonial/TestimonialModal";
import { TestimonialsTable } from "@/components/dashboard/EditAbout/EditTestimonial/TestimonialsTable";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { Testimonial } from "@/components/types/Testimonial";
import { deleteToast } from "@/lib/deleteToast";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { deleteData, getData, updateData } from "@/server/ServerActions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditTestimonialIndex({ data }: { data: Testimonial[] }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(data);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const fetchFilteredTestimonials = async () => {
      try {
        setLoading(true);
        if (filterStatus === "all") {
          setTestimonials(data);
        } else {
          const { data: filteredData } = await getData(`testimonial?status=${filterStatus === "active"}`);
          setTestimonials(filteredData || []);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredTestimonials();
  }, [filterStatus, data]);

  const handleDelete = async (id: string) => {
    console.log(id);
    const handleDeleteTestimonial = async () => {
      const result = await deleteData("testimonial/delete-testimonial", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteTestimonial, "Delete this Testimonial ?");
  };

  const handleStatusChange = async (id: string, status: "active" | "inactive") => {
    const isActive = status === "active";
    console.log(isActive, id, status);
    const data = { isActive };
    const result = await updateData("testimonial/update-testimonial", id, data);
    console.log(result);
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  return (
    <div className="bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <DashSubTitle text="Testimonials" />
          <StatusFilter currentFilter={filterStatus} onFilterChange={setFilterStatus} />
        </div>

        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <TestimonialsTable
            testimonials={testimonials}
            onViewDetails={setSelectedTestimonial}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        )}

        <TestimonialModal testimonial={selectedTestimonial} onClose={() => setSelectedTestimonial(null)} />
      </div>
    </div>
  );
}
