"use client";

import { Users, Code2, Trophy, Target } from "lucide-react";
import Tittle from "../Shared/Tittle";

const values = [
  {
    icon: <Code2 className="w-12 h-12 text-purple-400 mb-4" />,
    title: "Technical Excellence",
    description:
      "We maintain the highest standards of code quality and technical innovation.",
  },
  {
    icon: <Users className="w-12 h-12 text-purple-400 mb-4" />,
    title: "Client Partnership",
    description:
      "We build lasting relationships based on trust and mutual success.",
  },
  {
    icon: <Target className="w-12 h-12 text-purple-400 mb-4" />,
    title: "Result Driven",
    description:
      "We focus on delivering measurable business outcomes for our clients.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-purple-400 mb-4" />,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
];

export function Values() {
  return (
    <section className="py-20 bg-gray-900 max-w-[85rem]  mx-auto">
      <div className="container mx-auto px-4">
        <span className="text-center">
          <Tittle tittle="Our Values" />
        </span>
        <div className="grid  mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg ">
              {value.icon}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
