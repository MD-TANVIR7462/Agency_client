"use client";

import { useState } from "react";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Upload,
} from "lucide-react";
import Image from "next/image";

export default function WebsiteSettings() {
  const [formData, setFormData] = useState({
    companyName: "SiSCOTEK",
    tagline: "Transforming businesses through innovative digital solutions.",
    facebook: "https://facebook.com/siscotek",
    twitter: "https://twitter.com/siscotek",
    linkedin: "https://linkedin.com/company/siscotek",
    instagram: "https://instagram.com/siscotek",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen text-white p-0  md:p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Website Settings
          </h1>
          <p className="text-gray-400 mt-2">
            Manage your company information and social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4  md:p-8 border border-gray-800/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">
                  Company Logo
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
                      alt="Company Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/jpeg,image/jpg,image/png"
                      id="logoInput"
                    />
                    <label
                      htmlFor="logoInput"
                      className="px-4 py-2 cursor-pointer bg-purple-400/10 text-purple-400 rounded-md hover:bg-purple-400/20 flex items-center gap-2"
                    >
                      {" "}
                      <Upload className="w-4 h-4" />
                      Upload New Logo
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="customInput"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-400 mb-1">
                  Tagline
                </label>
                <textarea
                  value={formData.tagline}
                  onChange={(e) =>
                    setFormData({ ...formData, tagline: e.target.value })
                  }
                  className="customInput"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Social Media Links
                </h3>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedin: e.target.value })
                      }
                      placeholder="LinkedIn URL"
                      className="customInput flex-1"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <input
                      type="url"
                      value={formData.twitter}
                      onChange={(e) =>
                        setFormData({ ...formData, twitter: e.target.value })
                      }
                      placeholder="Twitter URL"
                      className="customInput flex-1"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <input
                      type="url"
                      value={formData.facebook}
                      onChange={(e) =>
                        setFormData({ ...formData, facebook: e.target.value })
                      }
                      placeholder="Facebook URL"
                      className="customInput flex-1"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <input
                      type="url"
                      value={formData.instagram}
                      onChange={(e) =>
                        setFormData({ ...formData, instagram: e.target.value })
                      }
                      placeholder="Instagram URL"
                      className="customInput flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="primaryButton w-full"
                >
                  Update Settings
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
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-700">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
                      alt="Company Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {formData.companyName}
                    </h3>
                    <p className="text-gray-400">{formData.tagline}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={formData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href={formData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href={formData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href={formData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
