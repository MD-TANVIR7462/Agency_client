"use client";

import { useState } from "react";

import { FAQTable } from "../../../../../components/dashboard/EditProtfolio/EditFAQ/FAQTable";
import { FAQModal } from "../../../../../components/dashboard/EditProtfolio/EditFAQ/FAQModal";
import { Plus, PlusCircle } from "lucide-react";
import { FAQ } from "@/components/types/Faq";
import DashSubTitle from "@/components/Shared/DashSubTitle";

const initialFaqs: FAQ[] = [
  {
    id: "1",
    question: "What is your development process?",
    answer: "Our development process follows an agile methodology with iterative development cycles. We begin with thorough requirement analysis, followed by design, development, testing, and deployment phases. Regular client communication and feedback are integral parts of our process.",
    status: "active",
  },
  {
    id: "2",
    question: "How do you ensure project quality?",
    answer: "We maintain high quality standards through comprehensive code reviews, automated testing, continuous integration/deployment (CI/CD), and regular quality audits. Our team follows industry best practices and uses modern development tools to ensure robust and scalable solutions.",
    status: "active",
  },
  {
    id: "3",
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of modern technologies including React, Node.js, Python, AWS, and more. Our tech stack is constantly evolving to incorporate the latest innovations while maintaining stability and performance.",
    status: "active",
  },
  {
    id: "4",
    question: "How do you handle project maintenance?",
    answer: "We provide comprehensive maintenance services including regular updates, security patches, performance optimization, and 24/7 monitoring. Our support team is always available to address any issues and ensure smooth operation of your systems.",
    status: "active",
  },
  {
    id: "5",
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. The specific model is chosen based on project requirements, scope, and client preferences to ensure the best value for your investment.",
    status: "active",
  },
  {
    id: "6",
    question: "How do you ensure data security?",
    answer: "Security is our top priority. We implement industry-standard security measures, follow OWASP guidelines, use encryption for sensitive data, and regularly conduct security audits. Our team is trained in the latest security practices to protect your valuable data.",
    status: "active",
  },
];

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingFaq(null);
    setIsModalOpen(true);
  };

  const handleSave = (faq: FAQ) => {
    if (editingFaq) {
      setFaqs(faqs.map((f) => (f.id === faq.id ? faq : f)));
    } else {
      const newFaq = {
        ...faq,
        id: (faqs.length + 1).toString(),
      };
      setFaqs([...faqs, newFaq]);
    }
    setIsModalOpen(false);
  };

  const handleStatusChange = (id: string, status: 'active' | 'inactive') => {
    setFaqs(faqs.map((faq) => 
      faq.id === id ? { ...faq, status } : faq
    ));
  };

  return (
    <div className=" p-0  md:p-4 lg:p-8">
      <div className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <DashSubTitle text="FAQ"/>
          <button
            onClick={handleAdd}
            className="primaryButton flex justify-center items-center"
          >
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        </div>

        <FAQTable
          faqs={faqs}
          onEdit={handleEdit}
          onStatusChange={handleStatusChange}
        />

        <FAQModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          faq={editingFaq}
        />
      </div>
    </div>
  );
}