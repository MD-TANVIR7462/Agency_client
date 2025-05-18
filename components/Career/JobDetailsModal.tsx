import { Modal } from "@/components/Shared/Modal";
import { Position } from "@/components/types/career";
import React from "react";


interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position;
  onApply: () => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  isOpen,
  onClose,
  position,
  onApply,
}) => {
  return (
    <Modal width="max-w-3xl" isOpen={isOpen} onClose={onClose} title={position.title}>
      <div className="space-y-8 text-gray-300">
        {/* About the Role */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">
            About the Role
          </h3>
          <p className="leading-relaxed">{position.description}</p>
        </div>

        {/* Salary Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">💰 Salary</h3>
          <p className="text-xl font-bold text-green-400">
            {position.salary || "Negotiable"}
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">
            Requirements
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {position.requirements.map((req, index) => (
              <li key={index} className="leading-relaxed">
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {position.responsibilities.map((resp, index) => (
              <li key={index} className="leading-relaxed">
                {resp}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
          <ul className="list-disc list-inside space-y-2">
            {position.benefits.map((benefit, index) => (
              <li key={index} className="leading-relaxed">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Job Overview - Moved to Bottom */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">📌 Job Overview</h3>
          <p>
            <strong>Department:</strong> {position.department}
          </p>
          <p>
            <strong>Employment Type:</strong> {position.type}
          </p>
          <p>
            <strong>Location:</strong> {position.location}
          </p>
       
          <p className="mt-3">
            <strong>Tags:</strong>{" "}
            {position.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-violet-500 text-white px-2 py-1 rounded-full text-xs mr-2"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>

        {/* Apply Button */}
        <div className="pt-4">
          <button
            onClick={onApply}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Apply for this Position
          </button>
        </div>
      </div>
    </Modal>
  );
};
