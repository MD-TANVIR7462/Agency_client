"use client"
import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Info } from 'lucide-react';

import { JobDetailsModal } from './JobDetailsModal';
import { ApplicationModal } from './ApplicationModal';
import { Position } from '../types/career';
import { positions } from '../data/positions';

export const OpenPositions = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleMoreInfo = (position: Position) => {
    setSelectedPosition(position);
    setIsDetailsOpen(true);
  };

  const handleApply = (position: Position) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Open Positions</h2>
        <p className="text-gray-400 text-center mb-12">Join our team of innovators and problem solvers</p>
        
        <div className="grid gap-6">
          {positions.map((position) => (
            <div key={position.id} className="bg-[#1E1E30] rounded-xl p-6 hover:bg-[#252540] transition-all duration-300 border border-purple-900/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleMoreInfo(position)}
                    className="flex items-center gap-2 bg-purple-900/30 text-purple-300 px-6 py-2 rounded-lg hover:bg-purple-900/50 transition-all duration-300"
                  >
                    <Info className="w-4 h-4" />
                    More Info
                  </button>
                  <button
                    onClick={() => handleApply(position)}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPosition && (
        <>
          <JobDetailsModal
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            position={selectedPosition}
            onApply={() => {
              setIsDetailsOpen(false);
              setIsApplicationOpen(true);
            }}
          />
          <ApplicationModal
            isOpen={isApplicationOpen}
            onClose={() => setIsApplicationOpen(false)}
            position={selectedPosition}
          />
        </>
      )}
    </section>
  );
};