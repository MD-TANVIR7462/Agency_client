"use client";

import { useState } from "react";
import { Facebook, Linkedin, Twitter, Github } from "lucide-react";
import { TeamMember, teamMembers } from "./team-data";
import { cn } from "@/lib/utils";
import Tittle from "../Shared/Tittle";

const teamCategories = [
  "All Teams",
  "Web Team",
  "SEO Team",
  "Networking",
  "Graphics Design",
];

export function TeamSection() {
  const [activeTab, setActiveTab] = useState("All Teams");

  const filteredTeam = teamMembers.filter((member) =>
    activeTab === "All Teams" ? true : member.team.includes(activeTab)
  );

  return (
    <section className="py-20 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <span className="text-center">
          <Tittle tittle={"Our Expert Team"} />
        </span>

        {/* Team Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-4">
          {teamCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeTab === category
                  ? "bg-gray-700 text-white shadow-lg shadow-gray-600/30"
                  : "bg-gray-800/75 text-gray-400 hover:bg-gray-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-500",
                activeTab === "All Teams" || member.team.includes(activeTab)
                  ? "bg-gray-800/50 border-gray-700  hover:inset-x-0 hover:-top-px   hover:bg-gradient-to-r    "
                  : "bg-gray-800/20 border-gray-800 opacity-50"
              )}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-800  transition-all duration-300"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white  transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
