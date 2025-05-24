"use client";

import { useState, useEffect, useRef } from "react";
import { Building2, Facebook, Instagram, Linkedin, Twitter, Upload, Check, X } from "lucide-react";
import Image from "next/image";
import handleUploads from "@/lib/handleImgUplods";
import Loader from "@/components/Shared/Loader";
import { updateData } from "@/server/ServerActions";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { FormData } from "@/components/types/FormDta";

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

  // Set preview URL when formData.logo changes
  useEffect(() => {
    if (formData?.logo) {
      setPreviewUrl(formData.logo);
    }
  }, [formData?.logo]);

  // Handle image selection and validation
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(logoLoading);
    setLogoLoading(true);
    console.log(logoLoading);

    const file = e.target.files?.[0];
    setImageError("");

    if (!file) {
      setPreviewUrl(formData.logo); // Revert to existing logo if no file selected
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 4 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB");
      resetFileInput();
      setLogoLoading(false);
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      setLogoLoading(false);
      console.log(logoLoading);
    };
    reader.readAsDataURL(file);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPreviewUrl(formData.logo);
  };

  // Fetch initial data
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
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);

    try {
      // Handle image upload if a new file was selected

      let logoUrl = formData?.logo;
      const fileInput = fileInputRef.current?.files?.[0];

      if (fileInput) {
        const uploadResult = await handleUploads(fileInput);
        logoUrl = uploadResult.secure_url;
      }

      // Prepare the data to send
      const dataToSend = {
        companyName: formData.companyName,
        tagline: formData.tagline,
        facebook: formData.facebook,
        twitter: formData.twitter,
        linkedin: formData.linkedin,
        instagram: formData.instagram,
        logo: logoUrl,
      };
      // console.log(dataToSend)
      const res = await updateData("settings/update-settings", settings._id as string, dataToSend);

      if (!res.success) ErrorToast("Failed to update settings");
      // Update form data with the new logo URL if it was changed
      const { companyName, tagline, facebook, twitter, linkedin, instagram, logo } = res?.data;
      const data = { companyName, tagline, facebook, twitter, linkedin, instagram, logo };
      setFormData(data);
      SuccessToast("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      ErrorToast("Error updating settings");
    } finally {
      setSaveLoading(false);
    }
  };

  // Loading state
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
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Company Logo</label>
                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                    {logoLoading && (
                      <div className="flex items-center justify-center h-full text-gray-500">Loading..</div>
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
                      accept="image/jpeg,image/jpg,image/png , jpg,png"
                      id="logoInput"
                    />
                    <label
                      htmlFor="logoInput"
                      className="px-4 py-2 cursor-pointer bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20 flex items-center gap-2 w-fit"
                    >
                      <Upload className="w-4 h-4 animate-pulse" />
                      {previewUrl && previewUrl !== formData?.logo ? "Change Logo" : "Upload Logo"}
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewUrl(formData?.logo);
                        resetFileInput();
                      }}
                      className="text-xs text-gray-400 hover:text-gray-300 hover:scale-110  cursor-pointer transition-all duration-100 ease-linear"
                      disabled={!fileInputRef.current?.value}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {imageError && <p className="mt-1 text-sm text-red-400">{imageError}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  value={formData?.companyName}
                  onChange={handleChange}
                  className="customInput"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">Tagline</label>
                <textarea
                  name="tagline"
                  value={formData?.tagline}
                  onChange={handleChange}
                  className="customInput"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Social Media Links</h3>

                {[
                  { name: "linkedin", icon: Linkedin, color: "text-blue-400" },
                  { name: "twitter", icon: Twitter, color: "text-blue-400" },
                  { name: "facebook", icon: Facebook, color: "text-blue-600" },
                  {
                    name: "instagram",
                    icon: Instagram,
                    color: "text-pink-500",
                  },
                ]?.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <input
                      type="url"
                      name={name}
                      value={formData?.[name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`${name.charAt(0).toUpperCase() + name.slice(1)} URL`}
                      className="customInput flex-1"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="primaryButton w-full flex justify-center items-center gap-2"
                  disabled={loadingSave}
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
                <div className="flex items-center gap-4 mb-4 ">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-gray-700 border border-gray-600">
                    {previewUrl ? (
                      <Image src={previewUrl} alt="Company Logo" fill className="object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">No logo</div>
                    )}
                  </div>
                  <div className="overflow-x-hidden w-full">
                    <h3 className="text-xl font-bold">{formData?.companyName || "Your Company Name"}</h3>
                    <p className="text-gray-400 truncate ">{formData?.tagline || "Your company tagline"}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {["linkedin", "twitter", "facebook", "instagram"]?.map((name) => {
                    const url = formData?.[name as keyof typeof formData];
                    return url ? (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                        title={name.charAt(0).toUpperCase() + name.slice(1)}
                      >
                        {name === "linkedin" ? <Linkedin className="w-5 h-5 text-blue-400" /> : null}
                        {name === "twitter" ? <Twitter className="w-5 h-5 text-blue-400" /> : null}
                        {name === "facebook" ? <Facebook className="w-5 h-5 text-blue-600" /> : null}
                        {name === "instagram" ? <Instagram className="w-5 h-5 text-pink-500" /> : null}
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
