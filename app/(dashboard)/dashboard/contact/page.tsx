"use client";
import ContactInfo from "@/components/Contact/ContactInfo";
import { EditContactButton } from "@/components/dashboard/EditContact/EditContactButton";
import { EditContactForm } from "@/components/dashboard/EditContact/EditContactFrom";
import DashSubTitle from "@/components/Shared/DashSubTitle";
import { Modal } from "@/components/Shared/Modal";
import React, { useState } from "react";

const contactInfo = [
  {
    title: "Email",
    description: "contact@SiSCOTEK.com",
  },
  {
    title: "Phone",
    description: "+1 (555) 123-4567",
  },
  {
    title: "Address",
    description: "123 Innovation Street, Tech City, TC 12345",
  },
];

const EditContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: {
    email: string;
    phone: string;
    address: string;
  }) => {
    console.log("Updated contact info:", data);
    setIsModalOpen(false);
  };

  const initialFormData = {
    email: contactInfo[0].description,
    phone: contactInfo[1].description,
    address: contactInfo[2].description,
  };

  return (
    <div className=" bg-gray-950 p-0 md:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <ContactInfo />
        <EditContactButton onClick={() => setIsModalOpen(true)} />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Edit Contact Information"
        >
          <EditContactForm
            onClose={() => setIsModalOpen(false)}
            initialData={initialFormData}
            onSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};
export default EditContactPage;
