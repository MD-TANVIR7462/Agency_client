"use client";

import { FC, useEffect, useRef, useState } from "react";
import { TeamMember } from "@/components/types/TeamMember";
import { Modal } from "@/components/Shared/Modal";
import handleUploads from "@/lib/handleImgUplods";

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
  const [imageError, setImageError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  useEffect(() => {
    if (member?.image) {
      setPreviewUrl(member.image);
    }
  }, [member]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsloading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");

    if (!file) {
      setPreviewUrl("");
      return;
    }

    // Validate file type
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      setImageError("Please select a valid image file (JPG or PNG)");
      setPreviewUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB");
      setPreviewUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsloading(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const file = formData.get("image");
    if (!file || !(file instanceof File)) {
      setImageError("Please select an image");
      return;
    }
    //cludinery ........
    const imgLink = await handleUploads(file);

    const data: Partial<TeamMember> = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      team: [formData.get("team") as string],
      image: imgLink.secure_url as string,
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
    setIsloading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={member ? "Edit Member" : "Add New Member"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {previewUrl && (
            <div className="mb-2">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-28 h-28 object-cover rounded-lg"
              />
            </div>
          )}
          <label
            htmlFor="image"
            className="block text-sm font-medium text-purple-400 mb-1"
          >
            Your Photo (JPG or PNG, max 5MB)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            ref={fileInputRef}
            accept="image/jpeg,image/jpg,image/png,"
            onChange={handleImageChange}
            className="w-full bg-gray-900 border cursor-pointer border-purple-400/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400 file:text-gray-950 hover:file:bg-purple-500"
            required
          />
          {imageError && (
            <p className="mt-1 text-sm text-red-400">{imageError}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={member?.name}
              className="customInput"
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
              className="customInput"
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
              className="customInput hover:cursor-pointer"
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
              className="customInput"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-400 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={member?.bio}
            className="customInput"
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
            className="customInput"
            rows={4}
            required
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
              className="customInput"
            />
            <input
              type="url"
              name="twitter"
              placeholder="Twitter URL"
              defaultValue={member?.social.twitter}
              className="customInput"
            />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook URL"
              defaultValue={member?.social.facebook}
              className="customInput"
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              defaultValue={member?.social.github}
              className="customInput"
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
            {member
              ? !isLoading
                ? "Update Member"
                : "Updating..."
              : !isLoading
              ? "Add Member"
              : "Processing..."}
          </button>
        </div>
      </form>
    </Modal>
  );
};
