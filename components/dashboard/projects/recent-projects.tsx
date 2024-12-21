"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";

const recentProjects = [
  {
    name: "E-Commerce Platform",
    client: "TechStore Inc.",
    status: "In Progress",
    statusColor: "text-yellow-500",
    completion: 75,
  },
  {
    name: "Mobile Banking App",
    client: "FinTech Solutions",
    status: "Review",
    statusColor: "text-purple-400",
    completion: 90,
  },
  {
    name: "Healthcare Dashboard",
    client: "MedCare Systems",
    status: "Completed",
    statusColor: "text-green-500",
    completion: 100,
  },
  {
    name: "Social Media Platform",
    client: "ConnectHub",
    status: "In Progress",
    statusColor: "text-yellow-500",
    completion: 40,
  },
];

export function RecentProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-purple-400">Recent Projects</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-400/20 text-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors">
          <span className="text-sm font-medium">View All</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors text-white"
          >
            <div>
              <h4 className="text-sm  sm:font-medium mb-1">{project.name}</h4>
              <p className="text-sm text-gray-400">{project.client}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Circle className={`w-3 h-3 fill-current ${project.statusColor}`} />
                <span className="text-sm">{project.status}</span>
              </div>
              <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden hidden sm:block">
                <div
                  className="h-full bg-purple-400 rounded-full"
                  style={{ width: `${project.completion}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">{project.completion}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}