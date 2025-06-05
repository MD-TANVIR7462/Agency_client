"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Edit2 } from "lucide-react";
import { Modal } from "@/components/Shared/Modal";
import handleUploads from "@/lib/handleImgUplods";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { getData, updateData } from "@/server/ServerActions";
import LoadingState from "@/components/Shared/LoadingState";
import { TAdmin } from "@/components/types/Admin";

type ProfileProps = {
  email: string;
  role: string;
  iat: string;
  exp: string;
};

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState<TAdmin>();
  const [isLoading, setIsloading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(true); // For initial loading only
  const token = useAppSelector(useCurrentToken);

  const currentUserData = async (suppressLoading = false) => {
    try {
      if (!suppressLoading) setLoading(true);
      const data = await getData("/auth/register/me", token as string);
      setProfileData(data?.data[0]);
      setPreviewUrl(data?.data[0]?.img);
    } catch (error) {
      ErrorToast("Failed to load admin data");
    } finally {
      if (!suppressLoading) setLoading(false);
    }
  };

  useEffect(() => {
    currentUserData();
  }, []);

  // useEffect(() => {
  //   // if (profileData?.avatarUrl) {
  //   //   setPreviewUrl(profileData?.avatarUrl);
  //   // }
  // }, [profileData]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    const fileformData = new FormData(e.target as HTMLFormElement);
    const file = fileformData.get("image");

    // Handle image upload and form data
    const imgLink = await handleUploads(file);
    const img = imgLink.secure_url ? imgLink.secure_url : previewUrl;

    const updatedData = {
      name: fileformData.get("name"),
      email: fileformData.get("email"),
      location: fileformData.get("location"),
      phone: fileformData.get("tel"),
      img: img,
    };
    const result = await updateData(
      "auth/register/update-user",
      profileData?._id as string,
      updatedData,
      token as string
    );
    if (result?.success) {
      SuccessToast(result?.message);
      setIsloading(false);
      setIsModalOpen(false);
      await currentUserData(true);
    } else {
      ErrorToast(result?.message);
    }

    //close loading and close modal...
  };
  // Conditional UI
  if (loading) {
    return <LoadingState />;
  }
  return (
    <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 shadow-lg ring-1 ring-purple-500/20">
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
              className="absolute bottom-0 right-0 bg-purple-400 p-2 rounded-full hover:bg-purple-500 transition-colors">
              <Edit2 className="w-4 h-4 text-white" />
            </button>
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {profileData?.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              {profileData?.role}
            </p>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              {profileData?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Location</h3>
          <p className="mt-1 text-sm sm:text-lg font-semibold text-white">
            {profileData?.location}
          </p>
        </div>
        <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Phone</h3>
          <p className="mt-1 text-xs sm:text-lg font-semibold text-white">
            {profileData?.phone}
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Profile">
        <form className="space-y-4" onSubmit={handleSubmit}>
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
                name="image"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleImageChange}
                className="w-full text-sm cursor-pointer text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-400/40 file:text-white hover:file:bg-purple-400/50 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={profileData?.name}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={profileData?.email}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <input
              type="tel"
              name="tel"
              defaultValue={profileData?.phone}
              className="customInput"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={profileData?.location}
              className="customInput"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="primaryButton w-full flex justify-center items-center gap-2"
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  Updating...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}





