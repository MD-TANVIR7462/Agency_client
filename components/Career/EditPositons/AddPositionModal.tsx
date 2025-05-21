"use client";

import { FC } from "react";


import { Modal } from "@/components/Shared/Modal";
import { TPosition } from "@/components/types/career";


interface AddPositionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (position: TPosition) => void;
}

export const AddPositionModal: FC<AddPositionModalProps> = ({ isOpen, onClose, onAdd }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: TPosition= {
      title: formData.get("title") as string,
      department: formData.get("department") as string,
      location: formData.get("location") as string,
      salary: formData.get("salary") as string | undefined,
      type: formData.get("type") as string,
      description: formData.get("description") as string,
      tags: (formData.get("tags") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      requirements: (formData.get("requirements") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      responsibilities: (formData.get("responsibilities") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      benefits: (formData.get("benefits") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
   
    };
    onAdd(data);
    onClose();
  };

  return (
    <Modal width="max-w-4xl" isOpen={isOpen} onClose={onClose} title="Add New Position" >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Title</label>
            <input type="text" name="title" className="customInput" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Department</label>
            <input type="text" name="department" className="customInput" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Location</label>
            <input type="text" name="location" className="customInput" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">Type</label>
            <select name="type" className="customInput hover:cursor-pointer" required>
              <option value="" disabled selected>
                Select job type
              </option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Description</label>
          <textarea name="description" className="customInput" rows={3} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Tags (one per line)</label>
          <textarea
            name="tags"
            className="customInput"
            rows={3}
            required
            placeholder="React&#10;Node.js&#10;TypeScript"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Requirements (one per line)</label>
          <textarea name="requirements" className="customInput" rows={4} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Responsibilities (one per line)</label>
          <textarea name="responsibilities" className="customInput" rows={4} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Benefits (one per line)</label>
          <textarea name="benefits" className="customInput" rows={4} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">Salary</label>
          <input type="text" name="salary" className="customInput" />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-purple-400/30 text-purple-400 rounded-md hover:bg-purple-400/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20"
          >
            Add Position
          </button>
        </div>
      </form>
    </Modal>
  );
};
