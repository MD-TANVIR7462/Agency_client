"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export const TeamGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {team.map((member, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
          whileHover={{ y: -5 }}
        >
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="transform object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{member.role}</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href={member.social.twitter} className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={member.social.linkedin} className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={member.social.github} className="text-gray-400 transition-colors hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};