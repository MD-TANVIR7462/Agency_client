"use client";

import { motion } from "framer-motion";
import { TechCard } from "./tech-card";
import { 
  Code2, Database, Cloud,  Lock, Cpu,
  BarChart, Globe, Palette, Layers, Server, Zap
} from "lucide-react";
import Tittle from "../Shared/Tittle";

const technologies = [
  {
    icon: Code2,
    name: "Frontend Development",
    tech: ["React", "Next.js", "Vue", "Angular"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: ["Node.js", "Python", "Java", "Go"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    name: "Mobile Development",
    tech: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    name: "Databases",
    tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    name: "Cloud Services",
    tech: ["AWS", "Azure", "GCP", "Digital Ocean"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lock,
    name: "Security",
    tech: ["OAuth", "JWT", "SSL", "Encryption"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Cpu,
    name: "AI & ML",
    tech: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Globe,
    name: "DevOps",
    tech: ["Docker", "Kubernetes", "CI/CD", "Jenkins"],
    gradient: "from-indigo-500 to-blue-500",
  },
];

export const TechnologyStack = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute left-1/3 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
         <Tittle tittle="Technology Stack"/>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Cutting-edge technologies powering your digital success
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};