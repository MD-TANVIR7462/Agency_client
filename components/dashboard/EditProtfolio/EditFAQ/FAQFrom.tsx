"use client";

import { FAQ } from "@/components/types/Faq";

interface FAQFormProps {
  formData: Partial<FAQ>;
  onChange: (data: Partial<FAQ>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing: boolean;
}

export function FAQForm({ formData, onChange, onSubmit, onCancel, isEditing }: FAQFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Question</label>
        <input
          type="text"
          value={formData.question || ""}
          onChange={(e) => onChange({ ...formData, question: e.target.value })}
          className="customInput"
          placeholder="Enter the question"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">Answer</label>
        <textarea
          value={formData.answer || ""}
          onChange={(e) => onChange({ ...formData, answer: e.target.value })}
          className="customInput min-h-[100px]"
          placeholder="Enter the answer"
          required
          rows={6}
        />
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-200">Status</label>
        <select
          value={formData.isActive === true ? "active" : "inactive"}
          onChange={(e) => onChange({ ...formData, isActive: e.target.value === "active" ? true : false })}
          className="bg-gray-800 border border-gray-700 rounded-md text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="secondaryButton">
          Cancel
        </button>
        <button type="submit" className="primaryButton">
          {isEditing ? "Save Changes" : "Add FAQ"}
        </button>
      </div>
    </form>
  );
}
