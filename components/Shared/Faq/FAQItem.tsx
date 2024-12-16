"use client"
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-400/20 last:border-none">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-purple-400 mr-4 text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-white">{question}</h3>
        </div>
        <span className={`text-purple-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-gray-400 pl-12">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;