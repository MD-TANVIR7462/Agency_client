import React, { useState } from 'react';
import { Modal } from './Modal';
import { Position } from '../types/career';
import { ApplicationForm } from '../types/career';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  position,
}) => {
  const [form, setForm] = useState<ApplicationForm>({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', form);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm({ ...form, resume: e.target.files[0] });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Apply for ${position.title}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            required
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.linkedIn}
            onChange={(e) => setForm({ ...form, linkedIn: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Portfolio URL
          </label>
          <input
            type="url"
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.portfolio}
            onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cover Letter *
          </label>
          <textarea
            required
            rows={4}
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.coverLetter}
            onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Resume *
          </label>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full bg-[#252540] border border-purple-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Submit Application
        </button>
      </form>
    </Modal>
  );
};