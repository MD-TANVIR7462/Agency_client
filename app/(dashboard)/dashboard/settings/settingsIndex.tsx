"use client";

import { useState, useEffect, useRef } from "react";
import { Building2, Facebook, Instagram, Linkedin, Twitter, Upload } from "lucide-react";
import Image from "next/image";
import handleUploads from "@/lib/handleImgUplods";
import Loader from "@/components/Shared/Loader";
import { updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { FormData } from "@/components/types/FormDta";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

export default function SettingsIndex({ settings }: { settings: FormData }) {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    tagline: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    logo: "",
  });

  const [loading, setIsLoading] = useState(false);
  const [loadingSave, setSaveLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [logoLoading, setLogoLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const token = useAppSelector(useCurrentToken);
  // Initialize form data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setPreviewUrl(settings.logo);
        setFormData(settings);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [settings]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");
    setLogoLoading(true);

    if (!file) {
      setPreviewUrl(formData?.logo);
      setLogoLoading(false);
      return;
    }
    // Validate file
    if (file.size > 4 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB");
      resetFileInput();
      setLogoLoading(false);
      return;
    }
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      setLogoLoading(false);
    };
    reader.onerror = () => {
      setImageError("Failed to read image file");
      setLogoLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPreviewUrl(formData.logo);
    setLogoLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setLogoLoading(true);

    try {
      let logoUrl = formData.logo;
      const fileInput = fileInputRef.current?.files?.[0];

      if (fileInput) {
        try {
          const uploadResult = await handleUploads(fileInput);
          logoUrl = uploadResult.secure_url;
        } catch (error) {
          ErrorToast("Failed to upload image");
          throw error;
        }
      }

      const dataToSend = {
        companyName: formData?.companyName,
        tagline: formData?.tagline,
        facebook: formData?.facebook,
        twitter: formData?.twitter,
        linkedin: formData?.linkedin,
        instagram: formData?.instagram,
        logo: logoUrl,
        
      };

      const res = await updateData("settings/update-settings", settings?._id as string, dataToSend ,token as string);

      if (!res.success) {
        ErrorToast("Failed to update settings");
      }

      const { companyName, tagline, facebook, twitter, linkedin, instagram, logo } = res.data;
      setFormData({ companyName, tagline, facebook, twitter, linkedin, instagram, logo });
      setPreviewUrl(logo);
      SuccessToast("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      ErrorToast("Error updating settings");
    } finally {
      setSaveLoading(false);
      setLogoLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen text-white p-0 md:p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Website Settings
          </h1>
          <p className="text-gray-400 mt-2">Manage your company information and social media presence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Company Logo</label>
                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                    {logoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-400"></div>
                      </div>
                    )}
                    {previewUrl ? (
                      <Image src={previewUrl} alt="Company Logo" fill className="object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">No logo</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      accept="image/jpeg,image/jpg,image/png"
                      id="logoInput"
                      disabled={logoLoading}
                    />
                    <label
                      htmlFor="logoInput"
                      className={`px-4 py-2 rounded-md flex items-center gap-2 w-fit ${
                        logoLoading
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-purple-400/10 text-purple-400 hover:bg-purple-400/20 cursor-pointer"
                      }`}
                    >
                      <Upload className={`w-4 h-4 ${logoLoading ? "animate-pulse" : ""}`} />
                      {logoLoading
                        ? "Uploading..."
                        : previewUrl && previewUrl !== formData?.logo
                        ? "Change Logo"
                        : "Upload Logo"}
                    </label>
                    <button
                      type="button"
                      onClick={resetFileInput}
                      className={`text-xs hover:scale-110 transition-all duration-100 ease-linear ${
                        !fileInputRef.current?.value || logoLoading
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-gray-400 hover:text-gray-300 cursor-pointer"
                      }`}
                      disabled={!fileInputRef.current?.value || logoLoading}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {imageError && <p className="mt-1 text-sm text-red-400">{imageError}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData?.companyName}
                  onChange={handleChange}
                  className="customInput"
                  required
                  disabled={logoLoading}
                />
              </div>

              {/* Tagline */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Tagline</label>
                <textarea
                  name="tagline"
                  value={formData?.tagline}
                  onChange={handleChange}
                  className="customInput"
                  rows={3}
                  required
                  disabled={logoLoading}
                />
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Social Media Links</h3>

                {[
                  { name: "linkedin", icon: Linkedin, color: "text-blue-400" },
                  { name: "twitter", icon: Twitter, color: "text-blue-400" },
                  { name: "facebook", icon: Facebook, color: "text-blue-600" },
                  { name: "instagram", icon: Instagram, color: "text-pink-500" },
                ].map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <input
                      type="url"
                      name={name}
                      value={formData?.[name as keyof typeof formData] || ""}
                      onChange={handleChange}
                      placeholder={`${name.charAt(0).toUpperCase() + name.slice(1)} URL`}
                      className="customInput flex-1"
                      disabled={logoLoading}
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`primaryButton w-full flex justify-center items-center gap-2 ${
                    logoLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loadingSave || logoLoading}
                >
                  {loadingSave ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Updating...
                    </>
                  ) : (
                    "Update Settings"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-gray-800/50 shadow-xl h-fit">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-400" />
              Preview
            </h2>

            <div className="space-y-6">
              <div className="p-4 md:p-6 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-gray-700 border border-gray-600">
                    {previewUrl ? (
                      <Image src={previewUrl} alt="Company Logo" fill className="object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">No logo</div>
                    )}
                  </div>
                  <div className="overflow-x-hidden w-full">
                    <h3 className="text-xl font-bold">{formData?.companyName || "Your Company Name"}</h3>
                    <p className="text-gray-400 truncate">{formData?.tagline || "Your company tagline"}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {["linkedin", "twitter", "facebook", "instagram"].map((name) => {
                    const url = formData[name as keyof typeof formData];
                    return url ? (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                        title={name.charAt(0).toUpperCase() + name.slice(1)}
                      >
                        {name === "linkedin" && <Linkedin className="w-5 h-5 text-blue-400" />}
                        {name === "twitter" && <Twitter className="w-5 h-5 text-blue-400" />}
                        {name === "facebook" && <Facebook className="w-5 h-5 text-blue-600" />}
                        {name === "instagram" && <Instagram className="w-5 h-5 text-pink-500" />}
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
