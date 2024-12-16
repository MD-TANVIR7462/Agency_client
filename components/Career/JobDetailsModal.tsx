import React from 'react';
import { Modal } from './Modal';
import { Position } from '../types/career';

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
    <Modal isOpen={isOpen} onClose={onClose} title={position.title}>
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">About the Role</h3>
          <p>{position.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
          <ul className="list-disc list-inside space-y-2">
            {position.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2">
            {position.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Benefits</h3>
          <ul className="list-disc list-inside space-y-2">
            {position.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

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