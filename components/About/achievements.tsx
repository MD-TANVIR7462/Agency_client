"use client";

import { Award, Users2, Gem, Globe2 } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "Industry Recognition",
    description: "Named Top Software Agency 2023",
  },
  {
    icon: <Users2 className="w-12 h-12 text-blue-500" />,
    title: "Global Reach",
    description: "Serving clients in 30+ countries",
  },
  {
    icon: <Gem className="w-12 h-12 text-blue-500" />,
    title: "Project Success",
    description: "500+ successful project deliveries",
  },
  {
    icon: <Globe2 className="w-12 h-12 text-blue-500" />,
    title: "Industry Coverage",
    description: "Expertise across 12+ industries",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}