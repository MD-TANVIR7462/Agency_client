"use client";
import ContactInfo from "@/components/Contact/ContactInfo";
import { EditContactButton } from "@/components/dashboard/EditContact/EditContactButton";
import { EditContactForm } from "@/components/dashboard/EditContact/EditContactFrom";
import { Modal } from "@/components/Shared/Modal";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { updateData } from "@/server/ServerActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditContactIndex = ({
  contactData,
}: {
  contactData: { email: string; phone: string; address: string; _id: string };
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: { _id: string; email: string; phone: string; address: string }) => {
    if (data) {
      const contactData = {
        email: data.email,
        phone: data.phone,
        address: data.address,
      };
      const result = await updateData("contact/update-contact", data._id as string, contactData);
      if (result?.success) {
        SuccessToast(result?.message);
        router.refresh();
      } else {
        ErrorToast(result?.message);
      }
    } else {
      ErrorToast("Filup the required data!");
    }
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <ContactInfo contactData={contactData} />
        <EditContactButton onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Contact Information">
          <EditContactForm onClose={() => setIsModalOpen(false)} initialData={contactData} onSubmit={handleSubmit} />
        </Modal>
      </div>
    </div>
  );
};
export default EditContactIndex;
