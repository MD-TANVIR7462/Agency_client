"use client";

import { FC } from "react";
import { TeamMember } from "@/components/types/TeamMember";
import { Modal } from "@/components/Career/Modal";

interface TeamMemberFormProps {
  member?: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<TeamMember>) => void;
}

export const TeamMemberForm: FC<TeamMemberFormProps> = ({
  member,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<TeamMember> = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      team: [formData.get("team") as string],
      image: formData.get("image") as string,
      bio: formData.get("bio") as string,
      skills: (formData.get("skills") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      status: formData.get("status") as "active" | "inactive",
      social: {
        linkedin: formData.get("linkedin") as string,
        twitter: formData.get("twitter") as string,
        facebook: formData.get("facebook") as string,
        github: formData.get("github") as string,
      },
    };
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={member ? "Edit Member" : "Add New Member"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={member?.name}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              defaultValue={member?.role}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Team
            </label>
            <select
              name="team"
              defaultValue={member?.team[0] || ""}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white hover:cursor-pointer"
              required
            >
              <option value="" disabled>
                Select a team
              </option>
              <option value="Web Team">Web Team</option>
              <option value="SEO Team">SEO Team</option>
              <option value="Graphics Team">Graphics Team</option>
              <option value="Networking">Networking</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Status
            </label>
            <select
              name="status"
              defaultValue={member?.status || "active"}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Image URL
          </label>
          <input
            type="file"
            name="image"
            className="hover:cursor-pointer w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={member?.bio}
            className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Skills (one per line)
          </label>
          <textarea
            name="skills"
            defaultValue={member?.skills.join("\n")}
            className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            rows={4}
            required
            placeholder="React&#10;Node.js&#10;TypeScript"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-purple-400">
            Social Links
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              defaultValue={member?.social.linkedin}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            />
            <input
              type="url"
              name="twitter"
              placeholder="Twitter URL"
              defaultValue={member?.social.twitter}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook URL"
              defaultValue={member?.social.facebook}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              defaultValue={member?.social.github}
              className="w-full bg-gray-800 border border-purple-400/30 rounded-md p-2 text-white"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-purple-400/30 text-purple-400 rounded-md hover:bg-purple-400/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20"
          >
            {member ? "Update Member" : "Add Member"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
