"use client";

import { Modal } from "@/components/Shared/Modal";

import { useState, useEffect } from "react";
import { FAQForm } from "./FAQFrom";

interface FAQPROP {
  answer: string;
  question: string;
  status?: string;
  isDeleted?: boolean;
  id?: string;
}

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (faq: FAQPROP) => void;
  faq: FAQPROP | null;
}

export function FAQModal({ isOpen, onClose, onSave, faq }: FAQModalProps) {
  const [formData, setFormData] = useState<Partial<FAQPROP>>({
    question: "",
    answer: "",
    status: "active",
  });

  useEffect(() => {
    if (faq) {
      setFormData(faq);
    } else {
      setFormData({
        question: "",
        answer: "",
        status: "active",
      });
    }
  }, [faq]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.question && formData.answer && formData.status) {
      onSave({
        id: faq?.id || "",
        question: formData.question,
        answer: formData.answer,
        status: formData.status,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={faq ? "Edit FAQ" : "Add New FAQ"}>
      <FAQForm
        formData={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
        onCancel={onClose}
        isEditing={!!faq}
      />
    </Modal>
  );
}
