"use client";

import { Rocket, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 bg-gray-900 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Rocket className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses through innovative digital solutions that
              drive growth, efficiency, and competitive advantage. We strive to
              deliver exceptional value through cutting-edge technology and
              unparalleled expertise.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To be the leading force in digital transformation, recognized
              globally for our innovative solutions, technical excellence, and
              commitment to client success. We aim to shape the future of
              technology while maintaining the highest standards of quality and
              integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
