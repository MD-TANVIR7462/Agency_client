"use client";

import { FAQ } from "@/components/types/Faq";
import { Edit } from "lucide-react";


interface FAQTableProps {
  faqs: FAQ[];
  onEdit: (faq: FAQ) => void;
  onStatusChange: (id: string, status: 'active' | 'inactive') => void;
}

export function FAQTable({ faqs, onEdit, onStatusChange }: FAQTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Question</th>
            <th className="p-4 text-left text-purple-400">Answer</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10">
          {faqs.map((faq) => (
            <tr
              key={faq.id}
              className="hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4 text-white truncate">{faq.question}</td>
              <td className="p-4 text-gray-300">
                <div className="max-w-md truncate">{faq.answer}</div>
              </td>
              <td className="p-4">
                <select
                  className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1"
                  value={faq.status}
                  onChange={(e) => onStatusChange(faq.id, e.target.value as 'active' | 'inactive')}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onEdit(faq)}
                  className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                  title="Edit FAQ"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}