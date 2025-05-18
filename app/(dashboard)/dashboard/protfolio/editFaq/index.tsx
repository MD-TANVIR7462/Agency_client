"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/components/types/Faq";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { FAQTable } from "@/components/dashboard/EditProtfolio/EditFAQ/FAQTable";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createData, deleteData, updateData } from "@/server/ServerActions";
import { deleteToast } from "@/lib/deleteToast";
import { FAQForm } from "@/components/dashboard/EditProtfolio/EditFAQ/FAQFrom";

export default function EditFAQindex({ faqs }: { faqs: FAQ[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const router = useRouter();
  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingFaq(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: Partial<FAQ>, id?: string) => {
   console.log(data,id)
    if (editingFaq) {
      const result = await updateData(
        "faq/update-faq",
        id as string,
        data
      );
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      const newFAQ: FAQ = data as FAQ;
      const result = await createData("faq/create-faq", newFAQ);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    }
    setIsModalOpen(false);
  };

  const handleStatusChange = async (
    id: string,
    status: "active" | "inactive"
  ) => {
    const isActive = status === "active";
    const data = { isActive };
    const result = await updateData("faq/update-faq", id, data);
    if (result?.success) {
      SuccessToast("Status updated successfully!");
      router.refresh();
    } else {
      ErrorToast(result?.message);
    }
  };

  const handleDelete = async (id: string) => {
    const handleDeleteFAQ = async () => {
      const result = await deleteData("faq/delete-faq", id);
      if (result?.success) {
        router.refresh();
        SuccessToast(result.message);
      } else {
        ErrorToast(result.message);
      }
    };

    deleteToast(handleDeleteFAQ, "Delete the FAQ ?");
  };

  return (
    <div className=" p-0  md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <DashSubTitle text="FAQ" />
          <button
            onClick={handleAdd}
            className="primaryButton flex justify-center items-center">
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        </div>

        <FAQTable
          faqs={faqs}
          onEdit={handleEdit}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />

        <FAQForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          faq={editingFaq}
        />
      </div>
    </div>
  );
}
