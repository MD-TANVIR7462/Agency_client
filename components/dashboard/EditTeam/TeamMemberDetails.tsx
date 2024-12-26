"use client";

import { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";
import { Modal } from "@/components/Career/Modal";

interface TeamMemberDetailsProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TeamMemberDetails: FC<TeamMemberDetailsProps> = ({
  member,
  isOpen,
  onClose,
}) => {
  if (!member) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Team Member Details">
      <div className="mt-4 bg-gray-900 p-6 rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="flex items-start gap-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-purple-400"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
            <div className="mt-3 flex gap-2">
              {member.team.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-purple-400 mb-2">Bio</h4>
          <p className="text-gray-300 leading-relaxed">
            {member.bio || "No bio available for this member."}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-purple-400 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-3">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 hover:bg-purple-400 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-purple-400 mb-2">
            Social Links
          </h4>
          <div className="flex gap-4">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-transform"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {member.social.facebook && (
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-transform"
              >
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
