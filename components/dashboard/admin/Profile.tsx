"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Edit2 } from "lucide-react";
import { demoAdmins } from "@/lib/logIn_admin_superAdmin_utils/demo-data";
import { getUserFromStorage } from "@/lib/logIn_admin_superAdmin_utils/auth";
import { Modal } from "@/components/Shared/Modal";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(demoAdmins[0]); // Default to first admin
  const [isClient, setIsClient] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(""); // Initialize previewUrl with an empty string

  useEffect(() => {
    setIsClient(true);
    const user = getUserFromStorage();
    if (user) {
      const adminData =
        demoAdmins.find((admin) => admin.email === user.email) || demoAdmins[0];
      setProfileData(adminData);
    }
  }, []);

  useEffect(() => {
    if (profileData.avatarUrl) {
      setPreviewUrl(profileData.avatarUrl);
    }
  }, [profileData.avatarUrl]); // Re-run when profileData.avatarUrl changes

  if (!isClient) return null; // Prevent hydration mismatch

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setPreviewUrl(url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-900/50 rounded-xl  p-4 md:p-6 shadow-lg ring-1 ring-purple-500/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Image
              src={previewUrl || ""}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-0 right-0 bg-purple-400 p-2 rounded-full hover:bg-purple-500 transition-colors"
            >
              <Edit2 className="w-4 h-4 text-white" />
            </button>
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {profileData.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">{profileData.role}</p>
            <p className="text-sm sm:text-base text-gray-400 mt-1">{profileData.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Location</h3>
          <p className="mt-1 text-sm sm:text-lg font-semibold text-white">
            {profileData.location}
          </p>
        </div>
        <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Phone</h3>
          <p className="mt-1 text-xs sm:text-lg font-semibold text-white">
            {profileData.phone}
          </p>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Profile"
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Image
            </label>
            <div className="flex flex-col items-center gap-4">
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400/40 file:text-white hover:file:bg-purple-400/50  transition-colors "
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={profileData.name}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              defaultValue={profileData.email}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <input
              type="tel"
              defaultValue={profileData.phone}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Location
            </label>
            <input
              type="text"
              defaultValue={profileData.location}
              className="customInput"
            />
          </div>
          <div className="pt-4">
            <button type="submit" className="w-full primaryButton">
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
