"use client";

import { Users, Code2, Trophy, Target } from "lucide-react";

const values = [
  {
    icon: <Code2 className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality and technical innovation.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Client Partnership",
    description: "We build lasting relationships based on trust and mutual success.",
  },
  {
    icon: <Target className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Result Driven",
    description: "We focus on delivering measurable business outcomes for our clients.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
];

export function Values() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
              {value.icon}
              <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}