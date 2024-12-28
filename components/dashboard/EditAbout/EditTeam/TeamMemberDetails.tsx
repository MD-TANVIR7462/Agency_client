"use client";

import { FC } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { TeamMember } from "@/components/types/TeamMember";
import { Modal } from "@/components/Shared/Modal";

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
    <Modal isOpen={isOpen} onClose={onClose} title="Team Member Details" >
        <div className="mt-4 bg-gray-900 p-5 rounded-lg">
          <div className="flex items-start gap-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <div className="mt-2 flex gap-2">
                {member.team.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/10 text-purple-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-purple-400 mb-2">Bio</h4>
            <p className="text-gray-300">{member.bio}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-purple-400 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-purple-400 mb-2">Social Links</h4>
            <div className="flex gap-4">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

    </Modal>
  );
};