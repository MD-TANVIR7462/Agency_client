

import { Award, Users2, Gem, Globe2 } from "lucide-react";
import Tittle from "../Shared/Tittle";

const achievements = [
  {
    icon: <Award className="w-12 h-12 text-purple-400" />,
    title: "Industry Recognition",
    description: "Named Top Software Agency 2023",
  },
  {
    icon: <Users2 className="w-12 h-12 text-purple-400" />,
    title: "Global Reach",
    description: "Serving clients in 30+ countries",
  },
  {
    icon: <Gem className="w-12 h-12 text-purple-400" />,
    title: "Project Success",
    description: "500+ successful project deliveries",
  },
  {
    icon: <Globe2 className="w-12 h-12 text-purple-400" />,
    title: "Industry Coverage",
    description: "Expertise across 12+ industries",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-gray-900 max-w-[85rem]  mx-auto">
      <div className="container mx-auto px-4">
        <span className="text-center ">
          <Tittle tittle={" Our Achievements"} />
        </span>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300  group"
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
